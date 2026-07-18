import type { Meta, StoryObj } from "@storybook/react-vite";
import { TrendLineChart } from "@/components/marketing/article-enrichments/trend-line-chart";

const meta = {
    title: "Webflow Guide/Blog Components/Metrics & Charts/Line Chart",
    component: TrendLineChart,
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
} satisfies Meta<typeof TrendLineChart>;

export default meta;

const data = [
    { label: "Jan", value: 3.2 },
    { label: "Feb", value: 3.6 },
    { label: "Mar", value: 4.1 },
    { label: "Apr", value: 4.0 },
    { label: "May", value: 4.6 },
    { label: "Jun", value: 5.1 },
];

/** Teal — the signature brand colorway. */
export const Teal: StoryObj = {
    render: () => <TrendLineChart title="eCPM trend, last 6 months" data={data} color="#08c6c7" valueSuffix="" />,
};

/** Pink — the accent brand colorway. */
export const Pink: StoryObj = {
    render: () => <TrendLineChart title="Revenue trend, last 6 months" data={data} color="#dc438c" />,
};

/** Navy — the deep brand colorway. */
export const Navy: StoryObj = {
    render: () => <TrendLineChart title="Fill-rate trend, last 6 months" data={data} color="#003a5b" />,
};
