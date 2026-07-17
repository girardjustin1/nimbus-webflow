import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricsTable } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Picks/Blog Components/Metrics & Charts/Metrics Table",
    component: MetricsTable,
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
} satisfies Meta<typeof MetricsTable>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <MetricsTable
            title="Floored vs. unfloored eCPM by geo"
            description="Same inventory, one 30-day flight — the only change is a geo-level floor on the top slices."
            rows={[
                { geo: "US", unflooredEcpm: "$4.10", flooredEcpm: "$5.60", lift: "+37%" },
                { geo: "UK", unflooredEcpm: "$3.40", flooredEcpm: "$4.55", lift: "+34%" },
                { geo: "DE", unflooredEcpm: "$3.05", flooredEcpm: "$3.95", lift: "+30%" },
            ]}
        />
    ),
};
