import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricBarChart } from "@/components/marketing/article-enrichments/metric-bar-chart";

const meta = {
    title: "Webflow Picks/Blog Components/Metrics & Charts/Bar Chart",
    component: MetricBarChart,
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
} satisfies Meta<typeof MetricBarChart>;

export default meta;

const data = [
    { label: "US", value: 5.6 },
    { label: "UK", value: 4.55 },
    { label: "DE", value: 3.95 },
    { label: "JP", value: 3.7 },
    { label: "BR", value: 2.9 },
];

/** Teal — the signature brand colorway. */
export const Teal: StoryObj = {
    render: () => <MetricBarChart title="Floored eCPM by geo" data={data} color="#08c6c7" valueSuffix="" />,
};

/** Pink — the accent brand colorway. */
export const Pink: StoryObj = {
    render: () => <MetricBarChart title="Floored eCPM by geo" data={data} color="#dc438c" />,
};

/** Navy — the deep brand colorway. */
export const Navy: StoryObj = {
    render: () => <MetricBarChart title="Floored eCPM by geo" data={data} color="#003a5b" />,
};
