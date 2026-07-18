import type { Meta, StoryObj } from "@storybook/react-vite";
import { PerformancePanels } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Guide/Blog Components/Metrics & Charts/Performance Panels",
    component: PerformancePanels,
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
} satisfies Meta<typeof PerformancePanels>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <PerformancePanels
            panels={[
                {
                    title: "iOS Performance",
                    badge: "Mobile app",
                    metrics: [
                        { label: "rCPM", value: 87 },
                        { label: "Revenue", value: 59 },
                        { label: "eCPM", value: 43 },
                    ],
                },
                {
                    title: "Android Performance",
                    badge: "Mobile app",
                    metrics: [
                        { label: "rCPM", value: 54 },
                        { label: "Revenue", value: 25 },
                        { label: "eCPM", value: 4 },
                    ],
                },
            ]}
        />
    ),
};
