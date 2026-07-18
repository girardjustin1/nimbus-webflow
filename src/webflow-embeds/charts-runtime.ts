/**
 * Nimbus Blog — chart runtime (Chart.js)
 *
 * Paste the Chart.js CDN tag + this runtime into Webflow's site-wide custom code
 * ONCE (see Embed Kit → *Charts runtime*). Then every chart embed is just a
 * `<div class="blog-chart" data-chart="line|bar|doughnut|radar" data-config='…'>`
 * that the runtime finds and renders — no per-embed script needed.
 */

export const CHARTJS_CDN = "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js";

// Plain ES5 JS (no backticks / no template placeholders) so it drops straight
// into a <script> tag and doesn't clash with this file's template literal.
export const CHARTS_RUNTIME = `(function () {
  var PALETTE = ["#08c6c7", "#dc438c", "#003a5b", "#15b7f0", "#f79009", "#7a5af8"];
  var GRID = "#e9eaeb";
  var FONT = "proxima-nova, 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

  function alpha(hex, a) {
    var h = hex.replace("#", "");
    return "rgba(" + parseInt(h.substring(0, 2), 16) + "," + parseInt(h.substring(2, 4), 16) + "," + parseInt(h.substring(4, 6), 16) + "," + a + ")";
  }

  // Small circle markers with a gap before the label text.
  function paddedLabels() {
    return {
      usePointStyle: true, pointStyle: "circle", boxWidth: 6, boxHeight: 6, padding: 16, font: { size: 12 },
      generateLabels: function (chart) {
        var items = window.Chart.defaults.plugins.legend.labels.generateLabels(chart);
        for (var i = 0; i < items.length; i++) items[i].text = "  " + items[i].text;
        return items;
      }
    };
  }

  function barLabels(labels, colors) {
    return {
      usePointStyle: true, pointStyle: "circle", boxWidth: 6, boxHeight: 6, padding: 16, font: { size: 12 },
      generateLabels: function () {
        var out = [];
        for (var i = 0; i < labels.length; i++) out.push({ text: "  " + labels[i], fillStyle: colors[i % colors.length], strokeStyle: colors[i % colors.length], lineWidth: 0, pointStyle: "circle", index: i });
        return out;
      }
    };
  }

  function cartScales(cfg) {
    return {
      x: { grid: { display: false }, ticks: { color: "#535862", font: { size: 12 } } },
      y: { grid: { color: GRID }, ticks: { color: "#a4a7ae", font: { size: 11 }, callback: function (v) { return v + (cfg.valueSuffix || ""); } } }
    };
  }

  function build(type, cfg) {
    if (type === "line") {
      var ls = cfg.series || [];
      var ld = [];
      for (var i = 0; i < ls.length; i++) {
        var c = ls[i].color || PALETTE[i % PALETTE.length];
        ld.push({ label: ls[i].label, data: ls[i].values, borderColor: c, backgroundColor: alpha(c, 0.1), fill: false, tension: 0.4, borderWidth: 2, pointRadius: 3, pointBackgroundColor: c });
      }
      return { type: "line", data: { labels: cfg.labels, datasets: ld }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: paddedLabels() }, tooltip: { callbacks: { label: function (ctx) { return ctx.dataset.label + ": " + ctx.parsed.y + (cfg.valueSuffix || ""); } } } }, scales: cartScales(cfg) } };
    }
    if (type === "bar") {
      var bc = cfg.colors || PALETTE;
      var bg = [];
      for (var j = 0; j < cfg.labels.length; j++) bg.push(bc[j % bc.length]);
      return { type: "bar", data: { labels: cfg.labels, datasets: [{ data: cfg.values, backgroundColor: bg, borderRadius: 6, maxBarThickness: 48 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: barLabels(cfg.labels, bc) }, tooltip: { callbacks: { label: function (ctx) { return ctx.parsed.y + (cfg.valueSuffix || ""); } } } }, scales: cartScales(cfg) } };
    }
    if (type === "doughnut") {
      return { type: "doughnut", data: { labels: cfg.labels, datasets: [{ data: cfg.values, backgroundColor: cfg.colors || PALETTE, borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: "62%", plugins: { legend: { position: "bottom", labels: barLabels(cfg.labels, cfg.colors || PALETTE) } } } };
    }
    if (type === "radar") {
      var rs = cfg.series || [];
      var rd = [];
      for (var k = 0; k < rs.length; k++) {
        var rc = rs[k].color || PALETTE[k % PALETTE.length];
        rd.push({ label: rs[k].label, data: rs[k].values, borderColor: rc, backgroundColor: alpha(rc, 0.15), borderWidth: 2, pointBackgroundColor: rc });
      }
      return { type: "radar", data: { labels: cfg.dimensions, datasets: rd }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: paddedLabels() } }, scales: { r: { beginAtZero: true, grid: { color: GRID }, angleLines: { color: GRID }, pointLabels: { font: { size: 12 } }, ticks: { display: false } } } } };
    }
    return null;
  }

  function render(el) {
    if (!window.Chart || el.getAttribute("data-rendered")) return;
    if (!window.__nimbusFont) { window.Chart.defaults.font.family = FONT; window.Chart.defaults.color = "#535862"; window.__nimbusFont = true; }
    var type = el.getAttribute("data-chart");
    var cfg;
    try { cfg = JSON.parse(el.getAttribute("data-config") || "{}"); } catch (e) { return; }
    var spec = build(type, cfg);
    if (!spec) return;
    var canvas = document.createElement("canvas");
    el.appendChild(canvas);
    new window.Chart(canvas, spec);
    el.setAttribute("data-rendered", "1");
  }

  function renderAll() {
    var els = document.querySelectorAll(".blog-chart[data-chart]");
    for (var i = 0; i < els.length; i++) render(els[i]);
  }

  window.NimbusCharts = { render: render, renderAll: renderAll };
  if (document.readyState !== "loading") renderAll();
  else document.addEventListener("DOMContentLoaded", renderAll);
})();`;

// --- Storybook preview renderer (TypeScript mirror of CHARTS_RUNTIME) ---------
// Used only in Storybook to render the preview exactly as the Webflow runtime will.
/* eslint-disable @typescript-eslint/no-explicit-any */
const P_PALETTE = ["#08c6c7", "#dc438c", "#003a5b", "#15b7f0", "#f79009", "#7a5af8"];
const P_GRID = "#e9eaeb";
const P_FONT = "proxima-nova, 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

const pAlpha = (hex: string, a: number) => {
    const h = hex.replace("#", "");
    return `rgba(${parseInt(h.substring(0, 2), 16)},${parseInt(h.substring(2, 4), 16)},${parseInt(h.substring(4, 6), 16)},${a})`;
};

const pPadded = () => ({
    usePointStyle: true,
    pointStyle: "circle" as const,
    boxWidth: 6,
    boxHeight: 6,
    padding: 16,
    font: { size: 12 },
    generateLabels: (chart: any) => {
        const items = (window as any).Chart.defaults.plugins.legend.labels.generateLabels(chart);
        items.forEach((it: any) => (it.text = `  ${it.text}`));
        return items;
    },
});

const pBarLabels = (labels: string[], colors: string[]) => ({
    usePointStyle: true,
    pointStyle: "circle" as const,
    boxWidth: 6,
    boxHeight: 6,
    padding: 16,
    font: { size: 12 },
    generateLabels: () => labels.map((lab, i) => ({ text: `  ${lab}`, fillStyle: colors[i % colors.length], strokeStyle: colors[i % colors.length], lineWidth: 0, pointStyle: "circle", index: i })),
});

const pScales = (cfg: any) => ({
    x: { grid: { display: false }, ticks: { color: "#535862", font: { size: 12 } } },
    y: { grid: { color: P_GRID }, ticks: { color: "#a4a7ae", font: { size: 11 }, callback: (v: any) => v + (cfg.valueSuffix || "") } },
});

const previewSpec = (type: string, cfg: any): any => {
    if (type === "line") {
        const ld = (cfg.series || []).map((s: any, i: number) => {
            const c = s.color || P_PALETTE[i % P_PALETTE.length];
            return { label: s.label, data: s.values, borderColor: c, backgroundColor: pAlpha(c, 0.1), fill: false, tension: 0.4, borderWidth: 2, pointRadius: 3, pointBackgroundColor: c };
        });
        return { type: "line", data: { labels: cfg.labels, datasets: ld }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: pPadded() }, tooltip: { callbacks: { label: (ctx: any) => `${ctx.dataset.label}: ${ctx.parsed.y}${cfg.valueSuffix || ""}` } } }, scales: pScales(cfg) } };
    }
    if (type === "bar") {
        const bc = cfg.colors || P_PALETTE;
        const bg = (cfg.labels || []).map((_: any, i: number) => bc[i % bc.length]);
        return { type: "bar", data: { labels: cfg.labels, datasets: [{ data: cfg.values, backgroundColor: bg, borderRadius: 6, maxBarThickness: 48 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: pBarLabels(cfg.labels, bc) }, tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + (cfg.valueSuffix || "") } } }, scales: pScales(cfg) } };
    }
    if (type === "doughnut") {
        return { type: "doughnut", data: { labels: cfg.labels, datasets: [{ data: cfg.values, backgroundColor: cfg.colors || P_PALETTE, borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: "62%", plugins: { legend: { position: "bottom", labels: pBarLabels(cfg.labels, cfg.colors || P_PALETTE) } } } };
    }
    if (type === "radar") {
        const rd = (cfg.series || []).map((s: any, i: number) => {
            const c = s.color || P_PALETTE[i % P_PALETTE.length];
            return { label: s.label, data: s.values, borderColor: c, backgroundColor: pAlpha(c, 0.15), borderWidth: 2, pointBackgroundColor: c };
        });
        return { type: "radar", data: { labels: cfg.dimensions, datasets: rd }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: pPadded() } }, scales: { r: { beginAtZero: true, grid: { color: P_GRID }, angleLines: { color: P_GRID }, pointLabels: { font: { size: 12 } }, ticks: { display: false } } } } };
    }
    return null;
};

/** Render a chart embed element in the Storybook preview (mirrors CHARTS_RUNTIME). */
export const renderChart = (el: Element) => {
    const w = window as any;
    if (!w.Chart || el.getAttribute("data-rendered")) return;
    if (!w.__nimbusFont) {
        w.Chart.defaults.font.family = P_FONT;
        w.Chart.defaults.color = "#535862";
        w.__nimbusFont = true;
    }
    const type = el.getAttribute("data-chart") || "";
    let cfg: any;
    try {
        cfg = JSON.parse(el.getAttribute("data-config") || "{}");
    } catch {
        return;
    }
    const spec = previewSpec(type, cfg);
    if (!spec) return;
    const canvas = document.createElement("canvas");
    el.appendChild(canvas);
    new w.Chart(canvas, spec);
    el.setAttribute("data-rendered", "1");
};
