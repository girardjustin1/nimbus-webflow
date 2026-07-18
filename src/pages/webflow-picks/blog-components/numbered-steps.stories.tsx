import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberedSteps } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Guide/Blog Components/Lists & Steps/Numbered Steps",
    component: NumberedSteps,
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
} satisfies Meta<typeof NumberedSteps>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <NumberedSteps
            heading="Structural improvements"
            description="The performance uplift was driven by three factors:"
            steps={[
                {
                    title: "Unified auction dynamics",
                    items: ["Eliminated fragmentation between mediation layers", "Increased bid density and competition"],
                },
                {
                    title: "Expanded demand access without friction",
                    items: ["Incremental demand unlocked without deep integrations", "Faster time-to-value for new partners"],
                },
                {
                    title: "Operational clarity",
                    items: ["Centralized reporting and optimization", "Reduced auction waste"],
                },
            ]}
        />
    ),
};
