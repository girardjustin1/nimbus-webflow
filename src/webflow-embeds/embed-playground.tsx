import { type ReactNode, useEffect, useRef, useState } from "react";
import { Copy01 } from "@untitledui/icons";
import cssRaw from "./blog-embeds.css?raw";
import { CHARTJS_CDN, CHARTS_RUNTIME, renderChart } from "./charts-runtime";

const useCopy = () => {
    const [copied, setCopied] = useState(false);
    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            /* clipboard unavailable in this context */
        }
    };
    return { copied, copy };
};

const Label = ({ children }: { children: React.ReactNode }) => (
    <p className="text-xs font-semibold tracking-wide text-tertiary uppercase">{children}</p>
);

const CopyButton = ({ onClick, copied, children }: { onClick: () => void; copied: boolean; children: React.ReactNode }) => (
    <button
        type="button"
        onClick={onClick}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-brand-solid px-3 py-1.5 text-xs font-semibold text-white transition duration-100 ease-linear hover:bg-brand-solid_hover"
    >
        <Copy01 aria-hidden="true" className="size-3.5" />
        {copied ? "Copied!" : children}
    </button>
);

/**
 * A live playground for a blog component embed: it renders the component from
 * an HTML string (so the preview is byte-for-byte the embed) and offers that
 * same string as copyable "Custom Code" for a Webflow Rich Text block.
 */
export const EmbedPlayground = ({ html, guide, renderPreview }: { html: string; guide?: ReactNode; renderPreview?: (html: string) => ReactNode }) => {
    const { copied, copy } = useCopy();

    return (
        <div className="flex flex-col gap-8">
            {guide && (
                <div className="flex flex-col gap-3 rounded-xl border border-secondary bg-secondary p-5">
                    <p className="text-xs font-semibold tracking-wide text-tertiary uppercase">How this works</p>
                    {guide}
                </div>
            )}
            <div className="flex flex-col gap-2">
                <Label>Preview</Label>
                <div className="rounded-xl border border-secondary bg-[#f9f7f3] px-6 py-2">
                    {renderPreview ? renderPreview(html) : <div dangerouslySetInnerHTML={{ __html: html }} />}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    <Label>Embed code — paste into a Webflow Rich Text “Custom Code” block</Label>
                    <CopyButton onClick={() => copy(html)} copied={copied}>
                        Copy embed
                    </CopyButton>
                </div>
                <pre className="max-h-100 overflow-auto rounded-xl bg-[#0e1417] p-4 text-xs leading-relaxed text-[#e6edf3]">
                    <code>{html}</code>
                </pre>
                <p className="text-xs text-tertiary">
                    Requires the blog-embeds stylesheet to be loaded on the Webflow site once. See{" "}
                    <span className="font-semibold text-secondary">Embed Kit → *Stylesheet*</span>.
                </p>
            </div>
        </div>
    );
};

/**
 * A one-page view of the entire blog-embeds.css for pasting into Webflow's
 * site-wide custom code. This is the single stylesheet every embed depends on.
 */
export const EmbedStylesheet = () => {
    const { copied, copy } = useCopy();

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h1 className="text-display-xs font-extrabold text-primary">Blog embeds stylesheet</h1>
                <p className="max-w-2xl text-md text-tertiary">
                    Upload this once to Webflow — <span className="font-semibold text-secondary">Site Settings → Custom Code → Head Code</span>, wrapped in{" "}
                    <code className="rounded bg-secondary px-1 py-0.5 text-sm">&lt;style&gt;…&lt;/style&gt;</code>. Every component embed you copy from the Blog Components stories
                    references the namespaced <code className="rounded bg-secondary px-1 py-0.5 text-sm">.blog-*</code> classes defined here, so the markup you paste stays tiny
                    and every blog article updates from this one file.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    <Label>blog-embeds.css</Label>
                    <CopyButton onClick={() => copy(cssRaw)} copied={copied}>
                        Copy stylesheet
                    </CopyButton>
                </div>
                <pre className="max-h-[600px] overflow-auto rounded-xl bg-[#0e1417] p-4 text-xs leading-relaxed text-[#e6edf3]">
                    <code>{cssRaw}</code>
                </pre>
            </div>
        </div>
    );
};

// --- Charts --------------------------------------------------------------

const ensureChartJs = (): Promise<void> =>
    new Promise((resolve) => {
        const w = window as unknown as { Chart?: unknown };
        if (w.Chart) return resolve();
        const existing = document.querySelector<HTMLScriptElement>("script[data-chartjs]");
        if (existing) {
            existing.addEventListener("load", () => resolve());
            if (w.Chart) resolve();
            return;
        }
        const script = document.createElement("script");
        script.src = CHARTJS_CDN;
        script.setAttribute("data-chartjs", "true");
        script.addEventListener("load", () => resolve());
        document.head.appendChild(script);
    });

/** Renders a chart embed HTML string exactly as Webflow will — via Chart.js + the runtime. */
export const ChartEmbedPreview = ({ html }: { html: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cancelled = false;
        ensureChartJs().then(() => {
            if (cancelled || !ref.current) return;
            const el = ref.current.querySelector(".blog-chart");
            if (el) renderChart(el);
        });
        return () => {
            cancelled = true;
        };
    }, [html]);

    return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};

/** The one-time Chart.js runtime to paste into Webflow site custom code, for chart embeds. */
export const EmbedChartsRuntime = () => {
    const { copied, copy } = useCopy();
    const snippet = `<script src="${CHARTJS_CDN}"></script>\n<script>\n${CHARTS_RUNTIME}\n</script>`;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h1 className="text-display-xs font-extrabold text-primary">Charts runtime</h1>
                <p className="max-w-2xl text-md text-tertiary">
                    Paste this once into Webflow — <span className="font-semibold text-secondary">Site Settings → Custom Code → Footer Code</span>. It loads Chart.js (~60KB) and a
                    small runtime that renders every chart embed. Each chart you copy is just a{" "}
                    <code className="rounded bg-secondary px-1 py-0.5 text-sm">&lt;div class="blog-chart" …&gt;</code> — no per-chart script. Only needed if you use the chart
                    components; also load <span className="font-semibold text-secondary">*Stylesheet*</span> for the card styling.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    <Label>Chart.js + charts runtime</Label>
                    <CopyButton onClick={() => copy(snippet)} copied={copied}>
                        Copy runtime
                    </CopyButton>
                </div>
                <pre className="max-h-[600px] overflow-auto rounded-xl bg-[#0e1417] p-4 text-xs leading-relaxed text-[#e6edf3]">
                    <code>{snippet}</code>
                </pre>
            </div>
        </div>
    );
};
