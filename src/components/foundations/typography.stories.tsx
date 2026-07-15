import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Foundations → Typography
 * Proxima Nova (Adobe Fonts) type ramp using the theme's text-size tokens.
 * NOTE: class names are written as full literal strings so Tailwind v4's
 * source scanner generates them (dynamic `text-${x}` would be missed).
 */
const meta = {
    title: "Foundations/Typography",
    parameters: { layout: "fullscreen" },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const DISPLAY: { cls: string; label: string }[] = [
    { cls: "text-display-2xl", label: "text-display-2xl" },
    { cls: "text-display-xl", label: "text-display-xl" },
    { cls: "text-display-lg", label: "text-display-lg" },
    { cls: "text-display-md", label: "text-display-md" },
    { cls: "text-display-sm", label: "text-display-sm" },
    { cls: "text-display-xs", label: "text-display-xs" },
];

const TEXT: { cls: string; label: string }[] = [
    { cls: "text-xl", label: "text-xl" },
    { cls: "text-lg", label: "text-lg" },
    { cls: "text-md", label: "text-md" },
    { cls: "text-sm", label: "text-sm" },
    { cls: "text-xs", label: "text-xs" },
];

const Row = ({ cls, label, sample }: { cls: string; label: string; sample: string }) => (
    <div className="flex flex-col gap-1 border-b border-secondary py-5">
        <span className="text-xs font-medium text-tertiary">{label}</span>
        <p className={`${cls} text-primary`}>{sample}</p>
    </div>
);

export const TypeScale: Story = {
    render: () => (
        <div className="flex flex-col gap-10 bg-primary p-8 text-primary">
            <div className="flex flex-col gap-2">
                <h2 className="text-display-xs font-semibold">Proxima Nova type scale</h2>
                <p className="text-md text-tertiary">Display sizes for headings, text sizes for body & UI.</p>
            </div>

            <section className="flex flex-col">
                <h3 className="mb-2 text-lg font-semibold">Display</h3>
                {DISPLAY.map((t) => (
                    <Row key={t.cls} cls={t.cls} label={t.label} sample="The quick brown fox" />
                ))}
            </section>

            <section className="flex flex-col">
                <h3 className="mb-2 text-lg font-semibold">Text</h3>
                {TEXT.map((t) => (
                    <Row key={t.cls} cls={t.cls} label={t.label} sample="The quick brown fox jumps over the lazy dog" />
                ))}
            </section>

            <section className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Weights</h3>
                <div className="flex flex-col gap-2 text-display-xs">
                    <span className="font-normal">Regular 400 — Nimbus</span>
                    <span className="font-semibold">Semibold 600 — Nimbus</span>
                    <span className="font-bold">Bold 700 — Nimbus</span>
                </div>
                <p className="text-sm text-tertiary">
                    Note: weight 500 (medium) falls back to the nearest weight unless added to the Adobe kit.
                </p>
            </section>
        </div>
    ),
};
