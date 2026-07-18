import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildMetricsEmbed, type MetricItem } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

/**
 * Metrics Row — Webflow embed playground.
 *
 * Edit the copy in the Controls panel, watch the preview update, then copy the
 * embed code into a Webflow Rich Text "Custom Code" block. Styling comes from
 * the blog-embeds stylesheet (Blog Components → Embed Kit → Stylesheet).
 */
interface PlaygroundArgs {
    count: 2 | 3 | 4;
    metric1Label: string;
    metric1Value: string;
    metric2Label: string;
    metric2Value: string;
    metric3Label: string;
    metric3Value: string;
    metric4Label: string;
    metric4Value: string;
}

const meta: Meta<PlaygroundArgs> = {
    title: "Rich Text Editor/Embed Kit/Metrics & Charts/Metrics Row",
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
        count: { name: "Number of metrics", control: { type: "inline-radio" }, options: [2, 3, 4] },
        metric1Label: { name: "Metric 1 · label" },
        metric1Value: { name: "Metric 1 · value" },
        metric2Label: { name: "Metric 2 · label" },
        metric2Value: { name: "Metric 2 · value" },
        metric3Label: { name: "Metric 3 · label" },
        metric3Value: { name: "Metric 3 · value" },
        metric4Label: { name: "Metric 4 · label" },
        metric4Value: { name: "Metric 4 · value" },
    },
};

export default meta;
type Story = StoryObj<PlaygroundArgs>;

/** Live embed builder. A leading "+" on a value shows a teal up-arrow, "-" a pink down-arrow. */
export const Embed: Story = {
    args: {
        count: 4,
        metric1Label: "Avg eCPM lift",
        metric1Value: "+31%",
        metric2Label: "Fill rate",
        metric2Value: "98%",
        metric3Label: "Demand sources",
        metric3Value: "60+",
        metric4Label: "Ad render rate",
        metric4Value: "99.9%",
    },
    render: (args) => {
        const all: MetricItem[] = [
            { label: args.metric1Label, value: args.metric1Value },
            { label: args.metric2Label, value: args.metric2Value },
            { label: args.metric3Label, value: args.metric3Value },
            { label: args.metric4Label, value: args.metric4Value },
        ];
        return <EmbedPlayground html={buildMetricsEmbed(all.slice(0, args.count))} />;
    },
};
