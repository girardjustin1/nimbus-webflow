#!/usr/bin/env node
/**
 * Unsplash image downloader for the Nimbus design system.
 *
 * Searches Unsplash, downloads the actual image files into a repo folder
 * (default: public/unsplash) so they can be committed and hosted on GitHub,
 * and writes a manifest.json + a typed index (src/content/blog/unsplash-images.ts)
 * with the attribution data Unsplash's API terms require.
 *
 * Usage:
 *   node scripts/fetch-unsplash.mjs --query "programmatic advertising" --count 5
 *   node scripts/fetch-unsplash.mjs -q "mobile app" -n 8 --orientation landscape --out public/unsplash
 *   npm run fetch-images -- --query "data dashboard" --count 6
 *
 * Options:
 *   --query, -q        Search term (required)
 *   --count, -n        How many images to download (default 5, max 30 per call)
 *   --orientation      landscape | portrait | squarish (default landscape)
 *   --size             raw | full | regular | small (default regular ~1080px)
 *   --out              Output folder for image files (default public/unsplash)
 *   --collection       Optional group/subfolder name (default = slug of the query)
 *
 * Requires UNSPLASH_ACCESS_KEY in .env (gitignored) — see .env.example.
 */

import { mkdir, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// --- Load .env (Node 21+) -------------------------------------------------
try {
    process.loadEnvFile(join(ROOT, ".env"));
} catch {
    /* no .env file — will fail the key check below with a helpful message */
}

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const API = "https://api.unsplash.com";

// --- Tiny arg parser ------------------------------------------------------
function parseArgs(argv) {
    const alias = { q: "query", n: "count", o: "out" };
    const out = {};
    for (let i = 0; i < argv.length; i++) {
        let key = argv[i];
        if (!key.startsWith("-")) continue;
        key = key.replace(/^--?/, "");
        key = alias[key] ?? key;
        const next = argv[i + 1];
        if (next === undefined || next.startsWith("-")) {
            out[key] = true;
        } else {
            out[key] = next;
            i++;
        }
    }
    return out;
}

const slugify = (s) =>
    String(s)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

function die(msg) {
    console.error(`\n✗ ${msg}\n`);
    process.exit(1);
}

// --- Main -----------------------------------------------------------------
async function main() {
    const args = parseArgs(process.argv.slice(2));

    if (!ACCESS_KEY) {
        die(
            "UNSPLASH_ACCESS_KEY is not set.\n" +
                "  1. Copy .env.example to .env\n" +
                "  2. Add your Unsplash Access Key (https://unsplash.com/oauth/applications)\n" +
                "  .env is gitignored, so your key never gets committed.",
        );
    }

    const query = typeof args.query === "string" ? args.query : null;
    if (!query) die('Missing --query. Example: node scripts/fetch-unsplash.mjs --query "programmatic advertising" --count 5');

    const count = Math.min(Math.max(parseInt(args.count, 10) || 5, 1), 30);
    const orientation = ["landscape", "portrait", "squarish"].includes(args.orientation) ? args.orientation : "landscape";
    const size = ["raw", "full", "regular", "small"].includes(args.size) ? args.size : "regular";
    const collection = slugify(args.collection || query);
    const outBase = resolve(ROOT, typeof args.out === "string" ? args.out : "public/unsplash");
    const outDir = join(outBase, collection);
    // Public URL path (Vite serves /public at the web root).
    const publicPrefix = outBase.replace(join(ROOT, "public"), "").replace(/^\/*/, "");

    console.log(`\n→ Searching Unsplash for "${query}" (${count} × ${orientation}, ${size})`);

    // 1. Search ------------------------------------------------------------
    const searchUrl = `${API}/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=${orientation}&content_filter=high`;
    const res = await fetch(searchUrl, { headers: { Authorization: `Client-ID ${ACCESS_KEY}`, "Accept-Version": "v1" } });

    if (res.status === 401) die("Unsplash returned 401 Unauthorized — your Access Key is invalid or revoked.");
    if (res.status === 403) {
        const remaining = res.headers.get("x-ratelimit-remaining");
        die(`Unsplash returned 403 — rate limited (remaining: ${remaining ?? "0"}). Demo apps allow 50 requests/hour.`);
    }
    if (!res.ok) die(`Unsplash search failed: ${res.status} ${res.statusText}`);

    const data = await res.json();
    const results = data.results ?? [];
    if (results.length === 0) die(`No results for "${query}". Try a broader term.`);

    console.log(`  found ${data.total} photos, downloading ${results.length}`);
    console.log(`  rate limit remaining this hour: ${res.headers.get("x-ratelimit-remaining") ?? "?"}\n`);

    await mkdir(outDir, { recursive: true });

    // 2. Download each image + trigger the required download event ---------
    const manifest = [];
    for (const [i, photo] of results.entries()) {
        const fileName = `${collection}-${photo.id}.jpg`;
        const filePath = join(outDir, fileName);
        const webPath = join(publicPrefix, collection, fileName).replace(/\/+/g, "/");

        // Unsplash API guideline: hit download_location to register a download.
        fetch(`${photo.links.download_location}&client_id=${ACCESS_KEY}`, {
            headers: { "Accept-Version": "v1" },
        }).catch(() => {});

        const imgUrl = photo.urls[size] ?? photo.urls.regular;
        const imgRes = await fetch(imgUrl);
        if (!imgRes.ok) {
            console.warn(`  ⚠ skip ${photo.id}: download failed (${imgRes.status})`);
            continue;
        }
        const buf = Buffer.from(await imgRes.arrayBuffer());
        await writeFile(filePath, buf);

        const entry = {
            id: photo.id,
            query,
            collection,
            file: webPath,
            width: photo.width,
            height: photo.height,
            color: photo.color,
            alt: photo.alt_description || photo.description || query,
            credit: {
                name: photo.user.name,
                username: photo.user.username,
                profile: `https://unsplash.com/@${photo.user.username}?utm_source=nimbus_design_system&utm_medium=referral`,
                photo: `${photo.links.html}?utm_source=nimbus_design_system&utm_medium=referral`,
            },
        };
        manifest.push(entry);
        console.log(`  ✓ ${fileName}  —  © ${photo.user.name}  (${(buf.length / 1024).toFixed(0)} KB)`);
    }

    if (manifest.length === 0) die("Nothing downloaded.");

    // 3. Merge into a global manifest.json --------------------------------
    const manifestPath = join(outBase, "manifest.json");
    let existing = [];
    if (existsSync(manifestPath)) {
        try {
            existing = JSON.parse(await readFile(manifestPath, "utf8"));
        } catch {
            /* start fresh if corrupt */
        }
    }
    const byId = new Map(existing.map((e) => [e.id, e]));
    for (const e of manifest) byId.set(e.id, e);
    const merged = [...byId.values()];
    await writeFile(manifestPath, JSON.stringify(merged, null, 2) + "\n");

    // 4. Generate a typed index for use in components ---------------------
    const tsPath = join(ROOT, "src/content/blog/unsplash-images.ts");
    const ts =
        `// AUTO-GENERATED by scripts/fetch-unsplash.mjs — do not edit by hand.\n` +
        `// Re-run \`npm run fetch-images -- --query "..."\` to refresh.\n\n` +
        `export type UnsplashImage = {\n` +
        `    id: string;\n` +
        `    query: string;\n` +
        `    collection: string;\n` +
        `    /** Path under /public — use directly as an <img src>. */\n` +
        `    file: string;\n` +
        `    width: number;\n` +
        `    height: number;\n` +
        `    color: string;\n` +
        `    alt: string;\n` +
        `    credit: { name: string; username: string; profile: string; photo: string };\n` +
        `};\n\n` +
        `export const unsplashImages: UnsplashImage[] = ${JSON.stringify(merged, null, 4)};\n\n` +
        `/** All images tagged with a given collection slug. */\n` +
        `export const imagesByCollection = (collection: string) => unsplashImages.filter((i) => i.collection === collection);\n`;
    await writeFile(tsPath, ts);

    console.log(`\n✓ Downloaded ${manifest.length} images → ${outDir.replace(ROOT + "/", "")}`);
    console.log(`✓ Manifest    → ${manifestPath.replace(ROOT + "/", "")} (${merged.length} total)`);
    console.log(`✓ Typed index → src/content/blog/unsplash-images.ts`);
    console.log(`\nⓘ  Unsplash requires visible attribution wherever these render.`);
    console.log(`   Each entry carries credit.name / credit.profile / credit.photo for that.\n`);
}

main().catch((err) => die(err?.stack || String(err)));
