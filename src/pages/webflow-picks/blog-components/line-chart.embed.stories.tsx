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
    valueSuffix: string;
    xLabels: string;
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
    s4Label: string;
    s4Color: string;
    s4Values: string;
}

const valuesHelp = "Comma-separated numbers, one per X label";

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Metrics & Charts/Line Chart",
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
        valueSuffix: { name: "Value suffix" },
        xLabels: { name: "X-axis labels (comma-separated)" },
        seriesCount: { name: "Number of lines", control: "inline-radio", options: [1, 2, 3, 4] },
        s1Label: { name: "Line 1 · label" },
        s1Color: colorControl("Line 1 · color"),
        s1Values: { name: "Line 1 · values", description: valuesHelp },
        s2Label: { name: "Line 2 · label" },
        s2Color: colorControl("Line 2 · color"),
        s2Values: { name: "Line 2 · values", description: valuesHelp },
        s3Label: { name: "Line 3 · label" },
        s3Color: colorControl("Line 3 · color"),
        s3Values: { name: "Line 3 · values", description: valuesHelp },
        s4Label: { name: "Line 4 · label" },
        s4Color: colorControl("Line 4 · color"),
        s4Values: { name: "Line 4 · values", description: valuesHelp },
    },
};

export default meta;
type Story = StoryObj<Args>;

const guide = (
    <div className="flex flex-col gap-2 text-sm text-secondary">
        <p>A line chart with up to 4 series.</p>
        <ul className="flex flex-col gap-1.5">
            <li>
                <b className="font-semibold text-primary">X-axis labels</b> — comma-separated, one per data point.
            </li>
            <li>
                <b className="font-semibold text-primary">Each line</b> — a label, a color, and comma-separated values (one per X label).
            </li>
            <li>Needs the Chart.js runtime loaded once — see Embed Kit → *Charts runtime*.</li>
        </ul>
    </div>
);

/** Up to 4 lines, each its own color (picker) + legend entry. Requires the Chart.js runtime (Embed Kit → *Charts runtime*). */
export const Embed: Story = {
    args: {
        title: "eCPM trend, last 6 months",
        valueSuffix: "",
        xLabels: "Jan, Feb, Mar, Apr, May, Jun",
        seriesCount: 2,
        s1Label: "iOS",
        s1Color: "#08c6c7",
        s1Values: "3.2, 3.6, 4.1, 4.0, 4.6, 5.1",
        s2Label: "Android",
        s2Color: "#dc438c",
        s2Values: "2.8, 3.0, 3.3, 3.5, 3.9, 4.3",
        s3Label: "iPadOS",
        s3Color: "#003a5b",
        s3Values: "3.0, 3.3, 3.7, 3.6, 4.0, 4.4",
        s4Label: "Web",
        s4Color: "#15b7f0",
        s4Values: "2.4, 2.6, 2.9, 2.8, 3.1, 3.5",
    },
    render: (args) => {
        const all = [
            { label: args.s1Label, color: args.s1Color, values: nums(args.s1Values) },
            { label: args.s2Label, color: args.s2Color, values: nums(args.s2Values) },
            { label: args.s3Label, color: args.s3Color, values: nums(args.s3Values) },
            { label: args.s4Label, color: args.s4Color, values: nums(args.s4Values) },
        ];
        const series = all.slice(0, args.seriesCount).filter((s) => s.values.length);
        const config = { labels: labels(args.xLabels), series, valueSuffix: args.valueSuffix };
        return <EmbedPlayground guide={guide} renderPreview={(html) => <ChartEmbedPreview html={html} />} html={buildChartEmbed("line", args.title, config)} />;
    },
};
