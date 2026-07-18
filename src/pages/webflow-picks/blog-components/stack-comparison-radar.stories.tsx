import type { Meta, StoryObj } from "@storybook/react-vite";
import { StackComparisonRadar } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Guide/Blog Components/Metrics & Charts/Stack Comparison (Radar)",
    component: StackComparisonRadar,
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
} satisfies Meta<typeof StackComparisonRadar>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <StackComparisonRadar
            title="Nimbus unified auction vs. a layered stack"
            data={[
                { dimension: "Fair competition", Nimbus: 9, "Legacy stack": 5 },
                { dimension: "Signal accuracy", Nimbus: 9, "Legacy stack": 4 },
                { dimension: "Latency", Nimbus: 8, "Legacy stack": 5 },
                { dimension: "SDK overhead", Nimbus: 9, "Legacy stack": 4 },
                { dimension: "Transparency", Nimbus: 9, "Legacy stack": 5 },
            ]}
        />
    ),
};
