import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildChartEmbed } from "@/webflow-embeds/builders";
import { ChartEmbedPreview, EmbedPlayground } from "@/webflow-embeds/embed-playground";

const numControl = { control: { type: "number" as const } };
const colorControl = (name: string) => ({ name, control: { type: "color" as const } });

interface Args {
    title: string;
    description: string;
    valueSuffix: string;
    yMin?: number;
    yMax?: number;
    yStep?: number;
    count: number;
    bar1Label: string;
    bar1Value: number;
    bar1Color: string;
    bar2Label: string;
    bar2Value: number;
    bar2Color: string;
    bar3Label: string;
    bar3Value: number;
    bar3Color: string;
    bar4Label: string;
    bar4Value: number;
    bar4Color: string;
    bar5Label: string;
    bar5Value: number;
    bar5Color: string;
    bar6Label: string;
    bar6Value: number;
    bar6Color: string;
    bar7Label: string;
    bar7Value: number;
    bar7Color: string;
    bar8Label: string;
    bar8Value: number;
    bar8Color: string;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Metrics & Charts/Bar Chart",
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
        title: { name: "Title" },
        description: { name: "Description (subheading)" },
        valueSuffix: { name: "Value suffix" },
        yMin: { ...numControl, name: "Y-axis min (blank = auto)" },
        yMax: { ...numControl, name: "Y-axis max (blank = auto)" },
        yStep: { ...numControl, name: "Y-axis step (blank = auto)" },
        count: { name: "Number of bars", control: "select", options: [2, 3, 4, 5, 6, 7, 8] },
        bar1Label: { name: "Bar 1 · label (x-axis)" },
        bar1Value: { ...numControl, name: "Bar 1 · value" },
        bar1Color: colorControl("Bar 1 · color"),
        bar2Label: { name: "Bar 2 · label (x-axis)" },
        bar2Value: { ...numControl, name: "Bar 2 · value" },
        bar2Color: colorControl("Bar 2 · color"),
        bar3Label: { name: "Bar 3 · label (x-axis)" },
        bar3Value: { ...numControl, name: "Bar 3 · value" },
        bar3Color: colorControl("Bar 3 · color"),
        bar4Label: { name: "Bar 4 · label (x-axis)" },
        bar4Value: { ...numControl, name: "Bar 4 · value" },
        bar4Color: colorControl("Bar 4 · color"),
        bar5Label: { name: "Bar 5 · label (x-axis)" },
        bar5Value: { ...numControl, name: "Bar 5 · value" },
        bar5Color: colorControl("Bar 5 · color"),
        bar6Label: { name: "Bar 6 · label (x-axis)" },
        bar6Value: { ...numControl, name: "Bar 6 · value" },
        bar6Color: colorControl("Bar 6 · color"),
        bar7Label: { name: "Bar 7 · label (x-axis)" },
        bar7Value: { ...numControl, name: "Bar 7 · value" },
        bar7Color: colorControl("Bar 7 · color"),
        bar8Label: { name: "Bar 8 · label (x-axis)" },
        bar8Value: { ...numControl, name: "Bar 8 · value" },
        bar8Color: colorControl("Bar 8 · color"),
    },
};

export default meta;
type Story = StoryObj<Args>;

/** Each bar's color is a picker; set the Y-axis min/max/step to fix the scale (blank = auto). Requires the Chart.js runtime (Embed Kit → *Charts runtime*). */
export const Embed: Story = {
    args: {
        title: "Floored eCPM by geo",
        description: "Floored eCPM across key markets.",
        valueSuffix: "",
        yMin: undefined,
        yMax: undefined,
        yStep: undefined,
        count: 5,
        bar1Label: "US",
        bar1Value: 5.6,
        bar1Color: "#08c6c7",
        bar2Label: "UK",
        bar2Value: 4.55,
        bar2Color: "#dc438c",
        bar3Label: "DE",
        bar3Value: 3.95,
        bar3Color: "#003a5b",
        bar4Label: "JP",
        bar4Value: 3.7,
        bar4Color: "#15b7f0",
        bar5Label: "BR",
        bar5Value: 2.9,
        bar5Color: "#f79009",
        bar6Label: "FR",
        bar6Value: 2.6,
        bar6Color: "#7a5af8",
        bar7Label: "IN",
        bar7Value: 2.2,
        bar7Color: "#08c6c7",
        bar8Label: "MX",
        bar8Value: 2.8,
        bar8Color: "#dc438c",
    },
    render: (args) => {
        const all = [
            { label: args.bar1Label, value: args.bar1Value, color: args.bar1Color },
            { label: args.bar2Label, value: args.bar2Value, color: args.bar2Color },
            { label: args.bar3Label, value: args.bar3Value, color: args.bar3Color },
            { label: args.bar4Label, value: args.bar4Value, color: args.bar4Color },
            { label: args.bar5Label, value: args.bar5Value, color: args.bar5Color },
            { label: args.bar6Label, value: args.bar6Value, color: args.bar6Color },
            { label: args.bar7Label, value: args.bar7Value, color: args.bar7Color },
            { label: args.bar8Label, value: args.bar8Value, color: args.bar8Color },
        ];
        const bars = all.slice(0, args.count).filter((b) => b.label);
        const config = {
            labels: bars.map((b) => b.label),
            values: bars.map((b) => b.value),
            colors: bars.map((b) => b.color),
            valueSuffix: args.valueSuffix,
            yMin: args.yMin,
            yMax: args.yMax,
            yStep: args.yStep,
        };
        return (
            <EmbedPlayground
                renderPreview={(html) => <ChartEmbedPreview html={html} />}
                html={buildChartEmbed("bar", args.title, config, args.description || undefined)}
            />
        );
    },
};
