import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildChartEmbed } from "@/webflow-embeds/builders";
import { ChartEmbedPreview, EmbedPlayground } from "@/webflow-embeds/embed-playground";

const colorControl = (name: string) => ({ name, control: { type: "color" as const } });
const nums = (s: string) =>
    s
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((n) => !Number.isNaN(n));
const labels = (s: string) =>
    s
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean);

interface Args {
    title: string;
    dimensions: string;
    seriesCount: number;
    s1Label: string;
    s1Color: string;
    s1Values: string;
    s2Label: string;
    s2Color: string;
    s2Values: string;
    s3Label: string;
    s3Color: string;
    s3Values: string;
}

const valuesHelp = "Comma-separated numbers, one per axis";

const meta: Meta<Args> = {
    title: "Webflow Guide/Embed Kit/Metrics & Charts/Stack Comparison",
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
        dimensions: { name: "Axes (comma-separated)" },
        seriesCount: { name: "Number of series", control: "inline-radio", options: [1, 2, 3] },
        s1Label: { name: "Series 1 · label" },
        s1Color: colorControl("Series 1 · color"),
        s1Values: { name: "Series 1 · values", description: valuesHelp },
        s2Label: { name: "Series 2 · label" },
        s2Color: colorControl("Series 2 · color"),
        s2Values: { name: "Series 2 · values", description: valuesHelp },
        s3Label: { name: "Series 3 · label" },
        s3Color: colorControl("Series 3 · color"),
        s3Values: { name: "Series 3 · values", description: valuesHelp },
    },
};

export default meta;
type Story = StoryObj<Args>;

/** A radar comparing up to 3 stacks, each its own color (picker). Requires the Chart.js runtime (Embed Kit → *Charts runtime*). */
export const Embed: Story = {
    args: {
        title: "Nimbus vs. a legacy stack",
        dimensions: "Fill rate, eCPM, Latency, Demand, Transparency",
        seriesCount: 2,
        s1Label: "Nimbus",
        s1Color: "#08c6c7",
        s1Values: "90, 85, 70, 95, 88",
        s2Label: "Legacy stack",
        s2Color: "#003a5b",
        s2Values: "65, 60, 55, 50, 45",
        s3Label: "Blended",
        s3Color: "#dc438c",
        s3Values: "80, 75, 68, 85, 74",
    },
    render: (args) => {
        const all = [
            { label: args.s1Label, color: args.s1Color, values: nums(args.s1Values) },
            { label: args.s2Label, color: args.s2Color, values: nums(args.s2Values) },
            { label: args.s3Label, color: args.s3Color, values: nums(args.s3Values) },
        ];
        const series = all.slice(0, args.seriesCount).filter((s) => s.values.length);
        const config = { dimensions: labels(args.dimensions), series };
        return <EmbedPlayground renderPreview={(html) => <ChartEmbedPreview html={html} />} html={buildChartEmbed("radar", args.title, config)} />;
    },
};
