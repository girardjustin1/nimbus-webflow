import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildPerformancePanelsEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

// Value: the number shown as "+NN%". No upper cap — enter 197 and the bar stays at 100%.
const num = { control: { type: "number" as const, min: 0 } };
// Bar override: optional explicit fill 0–100. Leave blank to auto-derive from the value (clamped to 100).
const barNum = { control: { type: "number" as const, min: 0, max: 100 } };

interface Args {
    panelTitle: string;
    badge: string;
    count: number;
    row1Label: string;
    row1Value: number;
    row1Bar?: number;
    row2Label: string;
    row2Value: number;
    row2Bar?: number;
    row3Label: string;
    row3Value: number;
    row3Bar?: number;
    row4Label: string;
    row4Value: number;
    row4Bar?: number;
    row5Label: string;
    row5Value: number;
    row5Bar?: number;
    row6Label: string;
    row6Value: number;
    row6Bar?: number;
    row7Label: string;
    row7Value: number;
    row7Bar?: number;
    row8Label: string;
    row8Value: number;
    row8Bar?: number;
    row9Label: string;
    row9Value: number;
    row9Bar?: number;
    row10Label: string;
    row10Value: number;
    row10Bar?: number;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Metrics & Charts/Performance Panels",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-primary px-4 py-10 md:px-8">
                <div className="mx-auto max-w-200">
                    <Story />
                </div>
            </div>
        ),
    ],
    argTypes: {
        panelTitle: { name: "Panel title" },
        badge: { name: "Badge (optional)" },
        count: { name: "Number of rows", control: "select", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        row1Label: { name: "Row 1 · label" },
        row1Value: { ...num, name: "Row 1 · value %" },
        row1Bar: { ...barNum, name: "Row 1 · bar % (blank = auto)" },
        row2Label: { name: "Row 2 · label" },
        row2Value: { ...num, name: "Row 2 · value %" },
        row2Bar: { ...barNum, name: "Row 2 · bar % (blank = auto)" },
        row3Label: { name: "Row 3 · label" },
        row3Value: { ...num, name: "Row 3 · value %" },
        row3Bar: { ...barNum, name: "Row 3 · bar % (blank = auto)" },
        row4Label: { name: "Row 4 · label" },
        row4Value: { ...num, name: "Row 4 · value %" },
        row4Bar: { ...barNum, name: "Row 4 · bar % (blank = auto)" },
        row5Label: { name: "Row 5 · label" },
        row5Value: { ...num, name: "Row 5 · value %" },
        row5Bar: { ...barNum, name: "Row 5 · bar % (blank = auto)" },
        row6Label: { name: "Row 6 · label" },
        row6Value: { ...num, name: "Row 6 · value %" },
        row6Bar: { ...barNum, name: "Row 6 · bar % (blank = auto)" },
        row7Label: { name: "Row 7 · label" },
        row7Value: { ...num, name: "Row 7 · value %" },
        row7Bar: { ...barNum, name: "Row 7 · bar % (blank = auto)" },
        row8Label: { name: "Row 8 · label" },
        row8Value: { ...num, name: "Row 8 · value %" },
        row8Bar: { ...barNum, name: "Row 8 · bar % (blank = auto)" },
        row9Label: { name: "Row 9 · label" },
        row9Value: { ...num, name: "Row 9 · value %" },
        row9Bar: { ...barNum, name: "Row 9 · bar % (blank = auto)" },
        row10Label: { name: "Row 10 · label" },
        row10Value: { ...num, name: "Row 10 · value %" },
        row10Bar: { ...barNum, name: "Row 10 · bar % (blank = auto)" },
    },
};

export default meta;
type Story = StoryObj<Args>;

/**
 * One panel. Each row's **value** is the "+NN%" shown on the right; the **bar** is
 * the progress fill. They're decoupled: enter a value above 100 (e.g. 197) and the
 * bar caps at 100%. Set a row's "bar %" to override the fill independently; leave it
 * blank to auto-derive it from the value.
 */
export const Embed: Story = {
    args: {
        panelTitle: "Post-migration performance",
        badge: "iOS + Android",
        count: 3,
        row1Label: "rCPM",
        row1Value: 197,
        row2Label: "eCPM",
        row2Value: 43,
        row3Label: "Revenue",
        row3Value: 59,
        row4Label: "Fill rate",
        row4Value: 34,
        row5Label: "Win rate",
        row5Value: 51,
        row6Label: "CTR",
        row6Value: 22,
        row7Label: "Viewability",
        row7Value: 46,
        row8Label: "Completion",
        row8Value: 63,
        row9Label: "ARPDAU",
        row9Value: 38,
        row10Label: "LTV",
        row10Value: 29,
    },
    render: (args) => {
        const all = [
            { label: args.row1Label, value: args.row1Value, bar: args.row1Bar },
            { label: args.row2Label, value: args.row2Value, bar: args.row2Bar },
            { label: args.row3Label, value: args.row3Value, bar: args.row3Bar },
            { label: args.row4Label, value: args.row4Value, bar: args.row4Bar },
            { label: args.row5Label, value: args.row5Value, bar: args.row5Bar },
            { label: args.row6Label, value: args.row6Value, bar: args.row6Bar },
            { label: args.row7Label, value: args.row7Value, bar: args.row7Bar },
            { label: args.row8Label, value: args.row8Value, bar: args.row8Bar },
            { label: args.row9Label, value: args.row9Value, bar: args.row9Bar },
            { label: args.row10Label, value: args.row10Value, bar: args.row10Bar },
        ];
        const metrics = all.slice(0, args.count);
        return <EmbedPlayground html={buildPerformancePanelsEmbed([{ title: args.panelTitle, badge: args.badge || undefined, metrics }])} />;
    },
};
