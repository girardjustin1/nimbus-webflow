import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildChartEmbed } from "@/webflow-embeds/builders";
import { ChartEmbedPreview, EmbedPlayground } from "@/webflow-embeds/embed-playground";

const numControl = { control: { type: "number" as const } };
const colorControl = (name: string) => ({ name, control: { type: "color" as const } });

interface Args {
    title: string;
    count: number;
    slice1Label: string;
    slice1Value: number;
    slice1Color: string;
    slice2Label: string;
    slice2Value: number;
    slice2Color: string;
    slice3Label: string;
    slice3Value: number;
    slice3Color: string;
    slice4Label: string;
    slice4Value: number;
    slice4Color: string;
    slice5Label: string;
    slice5Value: number;
    slice5Color: string;
    slice6Label: string;
    slice6Value: number;
    slice6Color: string;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Metrics & Charts/Pie Chart",
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
        count: { name: "Number of slices", control: "select", options: [2, 3, 4, 5, 6] },
        slice1Label: { name: "Slice 1 · label" },
        slice1Value: { ...numControl, name: "Slice 1 · value" },
        slice1Color: colorControl("Slice 1 · color"),
        slice2Label: { name: "Slice 2 · label" },
        slice2Value: { ...numControl, name: "Slice 2 · value" },
        slice2Color: colorControl("Slice 2 · color"),
        slice3Label: { name: "Slice 3 · label" },
        slice3Value: { ...numControl, name: "Slice 3 · value" },
        slice3Color: colorControl("Slice 3 · color"),
        slice4Label: { name: "Slice 4 · label" },
        slice4Value: { ...numControl, name: "Slice 4 · value" },
        slice4Color: colorControl("Slice 4 · color"),
        slice5Label: { name: "Slice 5 · label" },
        slice5Value: { ...numControl, name: "Slice 5 · value" },
        slice5Color: colorControl("Slice 5 · color"),
        slice6Label: { name: "Slice 6 · label" },
        slice6Value: { ...numControl, name: "Slice 6 · value" },
        slice6Color: colorControl("Slice 6 · color"),
    },
};

export default meta;
type Story = StoryObj<Args>;

/** Each slice's color is a picker (custom or brand). Requires the Chart.js runtime (Embed Kit → *Charts runtime*). */
export const Embed: Story = {
    args: {
        title: "Demand mix",
        count: 4,
        slice1Label: "Open marketplace",
        slice1Value: 42,
        slice1Color: "#08c6c7",
        slice2Label: "Nimbus+ demand",
        slice2Value: 28,
        slice2Color: "#dc438c",
        slice3Label: "Direct deals",
        slice3Value: 18,
        slice3Color: "#003a5b",
        slice4Label: "House ads",
        slice4Value: 12,
        slice4Color: "#15b7f0",
        slice5Label: "PMP deals",
        slice5Value: 8,
        slice5Color: "#f79009",
        slice6Label: "Other",
        slice6Value: 4,
        slice6Color: "#7a5af8",
    },
    render: (args) => {
        const all = [
            { label: args.slice1Label, value: args.slice1Value, color: args.slice1Color },
            { label: args.slice2Label, value: args.slice2Value, color: args.slice2Color },
            { label: args.slice3Label, value: args.slice3Value, color: args.slice3Color },
            { label: args.slice4Label, value: args.slice4Value, color: args.slice4Color },
            { label: args.slice5Label, value: args.slice5Value, color: args.slice5Color },
            { label: args.slice6Label, value: args.slice6Value, color: args.slice6Color },
        ];
        const slices = all.slice(0, args.count).filter((s) => s.label);
        const config = { labels: slices.map((s) => s.label), values: slices.map((s) => s.value), colors: slices.map((s) => s.color) };
        return <EmbedPlayground renderPreview={(html) => <ChartEmbedPreview html={html} />} html={buildChartEmbed("doughnut", args.title, config)} />;
    },
};
