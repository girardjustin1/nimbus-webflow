/**
 * HTML embed builders for the Nimbus Blog components.
 *
 * Each builder returns a plain HTML string that uses the namespaced `.blog-*`
 * classes defined in blog-embeds.css. The SAME string powers the Storybook
 * preview and the copyable embed, so what you see is exactly what you paste
 * into a Webflow Rich Text "Custom Code" block.
 */

/** Escape user copy so it is safe to drop into HTML markup. */
const esc = (value: string): string => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Escape a value used inside a double-quoted HTML attribute. */
const escAttr = (value: string): string => esc(value).replace(/"/g, "&quot;");

/** Split a multiline textarea value into trimmed, non-empty lines. */
export const lines = (value: string): string[] =>
    value
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

export type Accent = "teal" | "pink" | "navy";

// ---------------------------------------------------------------------------
// Metrics Row
// ---------------------------------------------------------------------------
export interface MetricItem {
    /** Label above the number, e.g. "Avg eCPM lift". */
    label: string;
    /** The number, e.g. "+31%", "98%", "60+". A leading "+" adds a teal up-arrow, "-" a pink down-arrow. */
    value: string;
}

export function buildMetricsEmbed(metrics: MetricItem[]): string {
    const cols = Math.min(Math.max(metrics.length, 1), 4);
    const cards = metrics
        .map((metric) => {
            const value = metric.value.trim();
            const direction = value.startsWith("+") ? "up" : value.startsWith("-") ? "down" : null;
            const arrow = direction
                ? `<span class="blog-metric__arrow blog-metric__arrow--${direction}" aria-hidden="true">${direction === "up" ? "↑" : "↓"}</span>`
                : "";
            return `      <div class="blog-metric">
        <p class="blog-metric__label">${esc(metric.label)}</p>
        <p class="blog-metric__value">${arrow}${esc(metric.value)}</p>
      </div>`;
        })
        .join("\n");
    return `<div class="blog-embed">
  <div class="blog-metrics" data-cols="${cols}">
${cards}
  </div>
</div>`;
}

// ---------------------------------------------------------------------------
// Pull Quote
// ---------------------------------------------------------------------------
export interface PullQuoteEmbedProps {
    quote: string;
    attribution?: string;
    role?: string;
    variant: Accent;
    /** Optional avatar image URL. When empty, an initials avatar is used. */
    avatarUrl?: string;
}

const initials = (name: string): string =>
    name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? "")
        .join("");

export function buildPullQuoteEmbed({ quote, attribution, role, variant, avatarUrl }: PullQuoteEmbedProps): string {
    let footer = "";
    if (attribution) {
        const avatar = avatarUrl
            ? `<span class="blog-quote__avatar blog-quote__avatar--${variant}" style="background-image:url('${escAttr(avatarUrl)}')" aria-hidden="true"></span>`
            : `<span class="blog-quote__avatar blog-quote__avatar--${variant}" aria-hidden="true">${esc(initials(attribution))}</span>`;
        const roleLine = role ? `\n      <span class="blog-quote__role">${esc(role)}</span>` : "";
        footer = `
    <footer class="blog-quote__by">
      ${avatar}
      <span>
        <span class="blog-quote__name">${esc(attribution)}</span>${roleLine}
      </span>
    </footer>`;
    }
    return `<div class="blog-embed">
  <blockquote class="blog-quote blog-quote--${variant}">
    <p class="blog-quote__text">“${esc(quote)}”</p>${footer}
  </blockquote>
</div>`;
}

// ---------------------------------------------------------------------------
// Insight Callout
// ---------------------------------------------------------------------------
const INSIGHT_ICON: Record<Accent, string> = { teal: "#23a6a9", pink: "#dc438c", navy: "#003a5b" };

export function buildInsightEmbed({ text, variant, iconUrl }: { text: string; variant: Accent; iconUrl?: string }): string {
    // A Webflow asset image (when provided) replaces the inline lightbulb. Note: an <img> icon
    // is a fixed color — it will NOT recolor per variant the way the inline SVG does.
    const icon = iconUrl
        ? `<img class="blog-insight__icon" src="${escAttr(iconUrl)}" alt="" />`
        : `<svg class="blog-insight__icon" viewBox="0 0 43 43" fill="none" aria-hidden="true"><path d="M17.5 32.8172V37.5C17.5 39.7092 19.2908 41.5 21.5 41.5C23.7092 41.5 25.5 39.7092 25.5 37.5V32.8172M21.5 1.5V3.5M3.5 21.5H1.5M8.5 8.5L7.2998 7.2998M34.5 8.5L35.7004 7.2998M41.5 21.5H39.5M33.5 21.5C33.5 28.1274 28.1274 33.5 21.5 33.5C14.8726 33.5 9.5 28.1274 9.5 21.5C9.5 14.8726 14.8726 9.5 21.5 9.5C28.1274 9.5 33.5 14.8726 33.5 21.5Z" stroke="${INSIGHT_ICON[variant]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    return `<div class="blog-embed">
  <figure class="blog-insight blog-insight--${variant}">
    ${icon}
    <p class="blog-insight__text">${esc(text)}</p>
  </figure>
</div>`;
}

// ---------------------------------------------------------------------------
// Key Takeaway
// ---------------------------------------------------------------------------
export function buildKeyTakeawayEmbed({ title, text, variant }: { title: string; text: string; variant: Accent }): string {
    return `<div class="blog-embed">
  <aside class="blog-takeaway blog-takeaway--${variant}">
    <p class="blog-takeaway__eyebrow">${esc(title)}</p>
    <p class="blog-takeaway__text">${esc(text)}</p>
  </aside>
</div>`;
}

// ---------------------------------------------------------------------------
// Stat Callout
// ---------------------------------------------------------------------------
export function buildStatCalloutEmbed({
    value,
    label,
    variant,
    layout,
}: {
    value: string;
    label: string;
    variant: Accent;
    layout: "centered" | "left";
}): string {
    const left = layout === "left" ? " blog-stat--left" : "";
    return `<div class="blog-embed">
  <div class="blog-stat blog-stat--${variant}${left}">
    <span class="blog-stat__value">${esc(value)}</span>
    <span class="blog-stat__label">${esc(label)}</span>
  </div>
</div>`;
}

// ---------------------------------------------------------------------------
// Checklist
// ---------------------------------------------------------------------------
const CHECK_ICON = `<svg class="blog-checklist__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m9 11 3 3L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function buildChecklistEmbed({ heading, items }: { heading?: string; items: string[] }): string {
    const head = heading ? `\n  <h3 class="blog-checklist__heading">${esc(heading)}</h3>` : "";
    const list = items.map((item) => `      <li class="blog-checklist__item">${CHECK_ICON}<span>${esc(item)}</span></li>`).join("\n");
    return `<div class="blog-embed">
  <div class="blog-checklist">${head}
    <ul class="blog-checklist__list">
${list}
    </ul>
  </div>
</div>`;
}

// ---------------------------------------------------------------------------
// Numbered Steps
// ---------------------------------------------------------------------------
export interface NumberedStepEmbed {
    title: string;
    /** Bullet items under the step. */
    items: string[];
}

// Brand teal ramp, light → dark, supporting up to 10 steps.
const STEP_RAMP = ["#83d7da", "#5fd3d5", "#38c3c5", "#1fb2b4", "#0a9a9b", "#0b8688", "#0b7274", "#0c6062", "#0e4f52", "#0e3e40"];

export function buildNumberedStepsEmbed({
    heading,
    description,
    steps,
}: {
    heading?: string;
    description?: string;
    steps: NumberedStepEmbed[];
}): string {
    const head = heading ? `\n  <h2 class="blog-steps__heading">${esc(heading)}</h2>` : "";
    const desc = description ? `\n  <p class="blog-steps__desc">${esc(description)}</p>` : "";
    const rows = steps
        .map((step, i) => {
            const num = String(i + 1).padStart(2, "0");
            const color = STEP_RAMP[i % STEP_RAMP.length];
            const items = step.items.map((item) => `        <li>${esc(item)}</li>`).join("\n");
            return `    <div class="blog-step">
      <span class="blog-step__num" style="color:${color}" aria-hidden="true">${num}</span>
      <div>
        <h3 class="blog-step__title">${esc(step.title)}</h3>
        <ul class="blog-step__items">
${items}
        </ul>
      </div>
    </div>`;
        })
        .join("\n");
    return `<div class="blog-embed">
  <section class="blog-steps">${head}${desc}
    <div class="blog-steps__list">
${rows}
    </div>
  </section>
</div>`;
}

// ---------------------------------------------------------------------------
// Logo Statement
// ---------------------------------------------------------------------------
export function buildLogoStatementEmbed({ logoUrl, logoAlt, text }: { logoUrl: string; logoAlt: string; text: string }): string {
    return `<div class="blog-embed">
  <div class="blog-logo-statement">
    <div class="blog-logo-statement__grid">
      <img class="blog-logo-statement__logo" src="${escAttr(logoUrl)}" alt="${escAttr(logoAlt)}" />
      <p class="blog-logo-statement__text">${esc(text)}</p>
    </div>
  </div>
</div>`;
}

// ---------------------------------------------------------------------------
// Imagery / Figure
// ---------------------------------------------------------------------------
export function buildImageryEmbed({
    imageUrl,
    alt,
    caption,
    ratio,
    showCaption = true,
}: {
    imageUrl: string;
    alt: string;
    caption?: string;
    ratio: string;
    /** Whether the caption/note renders below the image. */
    showCaption?: boolean;
}): string {
    const cap = showCaption && caption ? `\n    <figcaption class="blog-figure__caption">${esc(caption)}</figcaption>` : "";
    return `<div class="blog-embed">
  <figure class="blog-figure">
    <img class="blog-figure__img" src="${escAttr(imageUrl)}" alt="${escAttr(alt)}" loading="lazy" style="aspect-ratio:${escAttr(ratio)}" />${cap}
  </figure>
</div>`;
}

// ---------------------------------------------------------------------------
// Tag List
// ---------------------------------------------------------------------------
export type TagColor = "brand" | "pink" | "navy" | "gray" | "success" | "indigo" | "sky";
export interface TagEmbed {
    name: string;
    color: TagColor;
}

export function buildTagListEmbed(tags: TagEmbed[]): string {
    const pills = tags.map((tag) => `    <span class="blog-tag blog-tag--${tag.color}">${esc(tag.name)}</span>`).join("\n");
    return `<div class="blog-embed">
  <div class="blog-tags">
${pills}
  </div>
</div>`;
}

// ---------------------------------------------------------------------------
// Metrics Table
// ---------------------------------------------------------------------------
/** A column's cell type — how every cell in that column renders. */
export type ColumnType = "text" | "auto" | "bold" | "muted" | "check" | "pill-gray" | "pill-brand" | "pill-navy";
export interface TableColumn {
    name: string;
    /** Cell rendering for the column. Defaults to "auto" (+/- → green/red pill). Ignored for the first column (row label). */
    type?: ColumnType;
}

const PILL_MOD: Record<string, string> = { gray: " blog-table__lift--gray", brand: " blog-table__lift--brand", navy: " blog-table__lift--navy" };
const TABLE_CHECK = `<svg class="blog-table__icon blog-table__icon--check" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const TABLE_CROSS = `<svg class="blog-table__icon blog-table__icon--cross" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const YES = ["yes", "y", "true", "1", "✓", "✔", "on"];

const tableCellHtml = (cell: string, type: ColumnType, i: number): string => {
    const value = cell.trim();
    if (i === 0) return `<td class="blog-table__geo">${esc(cell)}</td>`;
    switch (type) {
        case "text":
            return `<td>${esc(cell)}</td>`;
        case "bold":
            return `<td><span class="blog-table__bold">${esc(cell)}</span></td>`;
        case "muted":
            return `<td><span class="blog-table__muted">${esc(cell)}</span></td>`;
        case "check":
            return `<td>${YES.indexOf(value.toLowerCase()) >= 0 ? TABLE_CHECK : TABLE_CROSS}</td>`;
        case "pill-gray":
        case "pill-brand":
        case "pill-navy":
            return `<td><span class="blog-table__lift${PILL_MOD[type.slice(5)]}">${esc(cell)}</span></td>`;
        default:
            if (value.startsWith("+")) return `<td><span class="blog-table__lift">${esc(cell)}</span></td>`;
            if (value.startsWith("-")) return `<td><span class="blog-table__lift blog-table__lift--down">${esc(cell)}</span></td>`;
            return `<td>${esc(cell)}</td>`;
    }
};

export function buildMetricsTableEmbed({
    title,
    description,
    columns,
    rows,
}: {
    title: string;
    description?: string;
    /** Columns (2–5). The first column is the row label; each other column carries a cell type. */
    columns: TableColumn[];
    /** Rows of plain string values, aligned to `columns`. */
    rows: string[][];
}): string {
    const cols = Math.min(Math.max(columns.length, 2), 5);
    const desc = description ? `\n      <p class="blog-table__desc">${esc(description)}</p>` : "";
    const head = columns
        .slice(0, cols)
        .map((column) => `<th>${esc(column.name)}</th>`)
        .join("");
    const body = rows
        .map((row) => {
            // Pad each row to the column count so header and body always align.
            let cells = "";
            for (let i = 0; i < cols; i++) cells += tableCellHtml(row[i] ?? "", columns[i]?.type ?? "auto", i);
            return `          <tr>${cells}</tr>`;
        })
        .join("\n");
    return `<div class="blog-embed">
  <div class="blog-table">
    <div class="blog-table__head">
      <p class="blog-table__title">${esc(title)}</p>${desc}
    </div>
    <div class="blog-table__scroll">
      <table>
        <thead>
          <tr>${head}</tr>
        </thead>
        <tbody>
${body}
        </tbody>
      </table>
    </div>
  </div>
</div>`;
}

// ---------------------------------------------------------------------------
// FAQ  (native <details>, no JS)
// ---------------------------------------------------------------------------
export interface FaqItemEmbed {
    question: string;
    answer: string;
}

const FAQ_ICON = `<svg class="blog-faq__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line class="blog-faq__icon-v" x1="12" y1="8" x2="12" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

export function buildFaqEmbed({
    eyebrow,
    heading,
    description,
    items,
}: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items: FaqItemEmbed[];
}): string {
    const eb = eyebrow ? `\n    <p class="blog-faq__eyebrow">${esc(eyebrow)}</p>` : "";
    const desc = description ? `\n    <p class="blog-faq__desc">${esc(description)}</p>` : "";
    const list = items
        .map(
            (item) => `      <details class="blog-faq__item">
        <summary class="blog-faq__q">${esc(item.question)}${FAQ_ICON}</summary>
        <p class="blog-faq__a">${esc(item.answer)}</p>
      </details>`,
        )
        .join("\n");
    return `<div class="blog-embed">
  <section class="blog-faq">${eb}
    <h2 class="blog-faq__heading">${esc(heading)}</h2>${desc}
    <div class="blog-faq__list">
${list}
    </div>
  </section>
</div>`;
}

// ---------------------------------------------------------------------------
// Charts (Chart.js runtime) — line / bar / doughnut / radar
// ---------------------------------------------------------------------------
export type ChartType = "line" | "bar" | "doughnut" | "radar";

/** Escape a JSON string for use inside a single-quoted HTML attribute. */
const escConfig = (json: string): string => json.replace(/&/g, "&amp;").replace(/'/g, "&#39;");

/**
 * Build a chart embed. The chart renders via the Nimbus charts runtime
 * (Embed Kit → *Charts runtime*), which reads `data-chart` + `data-config`.
 */
export function buildChartEmbed(type: ChartType, title: string, config: unknown, description?: string): string {
    const json = escConfig(JSON.stringify(config));
    const titleHtml = title ? `\n      <p class="blog-chart-card__title">${esc(title)}</p>` : "";
    const descHtml = description ? `\n      <p class="blog-chart-card__desc">${esc(description)}</p>` : "";
    const head = titleHtml || descHtml ? `\n    <div class="blog-chart-card__head">${titleHtml}${descHtml}\n    </div>` : "";
    return `<div class="blog-embed">
  <div class="blog-chart-card">${head}
    <div class="blog-chart" data-chart="${type}" data-config='${json}'></div>
  </div>
</div>`;
}

// ---------------------------------------------------------------------------
// Performance Panels  (static bars)
// ---------------------------------------------------------------------------
export interface PerfMetricEmbed {
    label: string;
    /** Percentage lift 0–100; drives the bar fill and the "+NN%" value. */
    value: number;
}
export interface PerfPanelEmbed {
    title: string;
    badge?: string;
    metrics: PerfMetricEmbed[];
}

export function buildPerformancePanelsEmbed(panels: PerfPanelEmbed[]): string {
    const blocks = panels
        .map((panel) => {
            const badge = panel.badge ? ` <span class="blog-perf__badge">${esc(panel.badge)}</span>` : "";
            const rows = panel.metrics
                .map((metric) => {
                    const pct = Math.max(0, Math.min(metric.value, 100));
                    return `      <div class="blog-perf__row">
        <div>
          <span class="blog-perf__metric-eyebrow">Metric</span>
          <span class="blog-perf__metric-label">${esc(metric.label)}</span>
        </div>
        <div class="blog-perf__bar"><div class="blog-perf__bar-fill" style="width:${pct}%"></div></div>
        <div class="blog-perf__value"><span class="pct">+</span>${metric.value}<span class="pct">%</span></div>
      </div>`;
                })
                .join("\n");
            return `    <div class="blog-perf__panel">
      <h3 class="blog-perf__title">${esc(panel.title)}${badge}</h3>
${rows}
    </div>`;
        })
        .join("\n");
    return `<div class="blog-embed">
  <div class="blog-perf">
${blocks}
  </div>
</div>`;
}
