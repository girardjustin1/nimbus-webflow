import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Foundations → Colors
 * The Nimbus design-system palette, read straight from the CSS theme tokens in
 * `src/styles/theme.css`. Brand = Nimbus teal (derived from adsbynimbus.com).
 */
const meta = {
    title: "Foundations/Colors",
    parameters: { layout: "fullscreen" },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const Swatch = ({ token, label }: { token: string; label: string }) => (
    <div className="flex flex-col gap-1.5">
        <div
            className="h-16 w-full rounded-lg ring-1 ring-black/10 ring-inset"
            style={{ background: `var(${token})` }}
        />
        <div className="flex flex-col">
            <span className="text-xs font-semibold text-primary">{label}</span>
            <span className="text-xs text-tertiary">{token.replace("--color-", "")}</span>
        </div>
    </div>
);

const Scale = ({ name, prefix, steps = SCALE_STEPS }: { name: string; prefix: string; steps?: number[] }) => (
    <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-primary capitalize">{name}</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">
            {steps.map((step) => (
                <Swatch key={step} token={`--color-${prefix}-${step}`} label={`${step}`} />
            ))}
        </div>
    </section>
);

const SemanticGroup = ({ title, tokens }: { title: string; tokens: string[] }) => (
    <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {tokens.map((t) => (
                <Swatch key={t} token={t} label={t.replace(/^--color-(bg|text|border|fg)-/, "")} />
            ))}
        </div>
    </section>
);

/** Full brand / neutral / accent ramps + the semantic tokens components consume. */
export const Palette: Story = {
    render: () => (
        <div className="flex flex-col gap-12 bg-primary p-8 text-primary">
            <div className="flex flex-col gap-2">
                <h2 className="text-display-xs font-semibold">Nimbus color system</h2>
                <p className="text-md text-tertiary">Brand = Nimbus teal. Neutrals + pink accent from the Untitled UI base.</p>
            </div>
            <Scale name="Brand — Nimbus teal" prefix="brand" />
            <Scale name="Neutral (gray)" prefix="neutral" />
            <Scale name="Pink (accent)" prefix="pink" />
            <SemanticGroup
                title="Background tokens"
                tokens={[
                    "--color-bg-primary",
                    "--color-bg-secondary",
                    "--color-bg-tertiary",
                    "--color-bg-brand",
                    "--color-bg-success",
                    "--color-bg-warning",
                    "--color-bg-error",
                ]}
            />
            <SemanticGroup
                title="Foreground / border tokens"
                tokens={[
                    "--color-fg-brand",
                    "--color-fg-primary",
                    "--color-fg-secondary",
                    "--color-border-primary",
                    "--color-border-secondary",
                    "--color-border-brand",
                ]}
            />
        </div>
    ),
};
