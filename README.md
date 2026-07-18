# Nimbus Blog Design

### ▶ [Open the live Storybook →](https://girardjustin1.github.io/nimbus-webflow/)

A component library and blog-layout kit for **[adsbynimbus.com](https://www.adsbynimbus.com)**, themed to the
Nimbus brand — teal accent, Proxima Nova type, cream/navy surfaces.

It provides five layers to work from:

1. **Rich Text Editor** — the kit for building Webflow CMS article bodies: a Content Style Guide and a copy-paste **Embed Kit** (components + charts you paste into a Webflow Rich Text field).
2. **Webflow Guide** — Webflow-ready blog pages (directory, case studies, news) plus a browsable blog-components catalog.
3. **Styles** — the design foundations (color tokens, type scale, icons, shape, elevation, logos, imagery).
4. **Blog Article Templates** — production-ready pages: a blog directory and 11 article templates, driven by real Nimbus article content.
5. **Templates Components** — reusable building blocks (navigation, footer, and 20+ body components + article enrichments).

Everything is documented and previewable in **Storybook**.

---

## 📖 View the component library (Storybook)

**Run it locally:**

```bash
npm install
npm run storybook
```

Then open **[http://localhost:6006](http://localhost:6006)**. Start at the **Overview** page (top of the sidebar) for a full tour.

**Hosted Storybook:** **[girardjustin1.github.io/nimbus-webflow](https://girardjustin1.github.io/nimbus-webflow/)** — auto-deployed from GitHub Pages on every push.

---

## 🧱 What's inside

### Rich Text Editor
The kit for building **Webflow CMS article bodies** — everything namespaced under `.blog-*` so it never affects the marketing site.
- **Content Style Guide** — every native Rich Text element styled by the `blog-prose` class, so a Webflow Rich Text field renders on-brand (including a light code block with line numbers + Nimbus-branded syntax highlighting)
- **Embed Kit** — blog body components (callouts, quotes, metrics, tables, charts, checklists, steps, FAQ, tags) as **copy-paste HTML embeds**, each with a live playground → paste into a Webflow Rich Text "Custom Code" block. Charts (line, bar, pie, radar) support per-item color pickers, a description subheading, and Y-axis controls. Includes a one-time **Stylesheet** (`.blog-*`) and a **Charts runtime** (Chart.js) you paste into Webflow once.

### Webflow Guide
Webflow-ready blog pages, tuned for a live CMS blog.
- **Blog Directory · Case Studies · News** — Webflow-tuned blog templates (byline-free, month/year timestamps, a Case Study / News / Announcement / Product taxonomy)
- **Blog Components** — the blog body components as a browsable catalog

### Styles
Semantic **color tokens** (light + dark), the **Proxima Nova** type scale, a line-style icon set,
**shape** (radius) and **elevation** (shadow) scales, the **Nimbus logo** (blue + white), and a full
**imagery** gallery of locally-hosted photos.

### Templates Components
- **Chrome:** Navigation, Breadcrumbs, Footer
- **Body atoms:** Buttons (teal + Nimbus-pink primary), Badges, Badge Groups, Avatars, Author Byline, Blog Cards, Category Tabs, Tag List, Pagination
- **Body sections:** Content (rich text / split image), Metrics, Testimonials, Newsletter, FAQ
- **Article enrichments:** Stat Callout, Metrics Row, Metrics Table, Demand Mix (Pie), Stack Comparison (Radar), Checklist, Key Takeaway, Pull Quote, Imagery Idea

### Blog Directory & Article Templates
- **Blog Directory** — index/listing page with hero, featured post, and a card grid
- **Blog Article Templates 01–11** — eleven distinct article layouts, each rendered with the **same real content** so you can compare designs. Every template ships 5 stories: **Dynamic Unit**, **Ad Quality**, **Floors**, **Prebid**, and **Enriched (with sections)**.

---

## 🚀 Getting started

```bash
npm install          # install dependencies

npm run dev          # Vite dev app          → http://localhost:5173
npm run storybook    # component library     → http://localhost:6006
npm run build        # production build (tsc + vite)
npm run build-storybook  # static Storybook   → ./storybook-static
```

**Requirements:** Node 20+ (Node 25 recommended for the imagery script).

---

## 🗂 Project structure

```
src/
├── components/
│   ├── base/                  # core UI (buttons, inputs, badges, avatars…)
│   ├── application/           # complex components (tabs, table, charts…)
│   ├── foundations/           # tokens, logo, featured icons, imagery
│   └── marketing/             # blog sections, testimonials, metrics, enrichments
├── content/blog/              # Nimbus article data (BlogBlock[]) + Unsplash index
├── pages/
│   ├── blog/                  # ArticleBody renderer + template 11
│   ├── blog-posts/            # article templates 01–10
│   └── blog-pages/            # blog directory pages
├── styles/                    # theme.css (brand tokens), globals, typography
public/unsplash/               # committed, self-hosted imagery library
scripts/fetch-unsplash.mjs     # Unsplash downloader
```

---

## ✍️ The content engine

Articles are **data, not markup.** Each article is a list of typed `BlogBlock`s
(`heading`, `paragraph`, `quote`, `stat`, `statGrid`, `demandMixPie`, `stackRadar`, `metricsTable`,
`checklist`, `keyTakeaway`, `faq`, …) defined in [`src/content/blog/nimbus-articles.ts`](src/content/blog/nimbus-articles.ts).

A single **`ArticleBody`** renderer ([`src/pages/blog/article-body.tsx`](src/pages/blog/article-body.tsx))
maps each block to the right component. Benefits:

- **One source of truth** — edit an article once, every template updates.
- **Article-driven heroes** — each article carries a title-relevant `heroImage`, so a template's five stories each show a different, on-topic image.
- **Easy authoring** — compose a new article from blocks, no layout code required.

The four articles are the real Nimbus posts: **The Dynamic Unit**, **Ad Quality**, **Floors (Pricing Power)**, and **Prebid Is Now Live**.

---

## 🖼 Imagery (Unsplash connector)

Imagery is **self-hosted from the repo**, not fetched from an API at runtime.

```bash
# add your key once (kept out of git)
cp .env.example .env      # then set UNSPLASH_ACCESS_KEY=...

# download images into /public/unsplash and regenerate the typed index
npm run fetch-images -- --query "programmatic advertising" --count 6
```

The script downloads real photos into `public/unsplash/` (committed → served locally, in the build, and via
GitHub), records photographer attribution, and regenerates both `manifest.json` and the typed index that
powers the **Styles → Imagery** gallery. The library currently holds **100+ images across ~19 ad-tech
themed collections**. The Unsplash key is only used at download time.

> **Rate limit:** Unsplash demo apps allow 50 requests/hour (each query ≈ 7). The script prints the
> remaining count and stops before the cap.

---

## 🎨 Theming / rebrand

The entire brand color scale lives in [`src/styles/theme.css`](src/styles/theme.css) as `--color-brand-*`
(25 → 950). Change those values to rebrand — every component follows automatically through the semantic
token system. Core Nimbus colors: teal `#08c6c7`, pink `#DA6EA3`, navy `#003a5b`, cream `#F9F7F3`.

---

## 📐 Conventions

- **File names** are kebab-case (`stat-callout.tsx`).
- **React Aria** imports are prefixed `Aria*` to avoid clashing with custom components.
- **Colors** use semantic tokens (`text-primary`, `bg-brand-solid`), never raw palette classes.
- **TypeScript** throughout; run `npm run build` (which runs `tsc -b`) to typecheck.

---

## Built with

React 19 · TypeScript · Tailwind CSS v4 · React Aria Components · Recharts · Chart.js · Storybook 10 · Vite

---

## License

Nimbus brand assets, copy, and article content are property of Nimbus.
