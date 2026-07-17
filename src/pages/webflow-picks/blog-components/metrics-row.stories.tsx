import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricsRow } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Picks/Blog Components/Metrics & Charts/Metrics Row",
    component: MetricsRow,
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-[#f9f7f3] px-4 py-10 md:px-8">
                <div className="mx-auto max-w-180">
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof MetricsRow>;

export default meta;

/** Up and down: a leading "+" shows a teal up arrow, a leading "-" a pink down arrow. */
export const UpAndDown: StoryObj = {
    render: () => (
        <MetricsRow
            metrics={[
                { title: "+87%", subtitle: "rCPM lift", trend: "positive" },
                { title: "-12%", subtitle: "Fill loss on floored slices", trend: "negative" },
                { title: "+43%", subtitle: "eCPM", trend: "positive" },
                { title: "-3%", subtitle: "Latency vs. legacy stack", trend: "negative" },
            ]}
        />
    ),
};

/** Four across. */
export const Four: StoryObj = {
    render: () => (
        <MetricsRow
            metrics={[
                { title: "+87%", subtitle: "rCPM lift" },
                { title: "+59%", subtitle: "Revenue" },
                { title: "+43%", subtitle: "eCPM" },
                { title: "45+", subtitle: "Demand partners" },
            ]}
        />
    ),
};

/** Three across. */
export const Three: StoryObj = {
    render: () => (
        <MetricsRow
            metrics={[
                { title: "+87%", subtitle: "rCPM lift" },
                { title: "+59%", subtitle: "Revenue" },
                { title: "+43%", subtitle: "eCPM" },
            ]}
        />
    ),
};

/** Two across. */
export const Two: StoryObj = {
    render: () => (
        <MetricsRow
            metrics={[
                { title: "+42%", subtitle: "Combined revenue lift" },
                { title: "+87%", subtitle: "rCPM lift" },
            ]}
        />
    ),
};

/** One. */
export const One: StoryObj = {
    render: () => <MetricsRow metrics={[{ title: "99.9%", subtitle: "Creative render rate" }]} />,
};
