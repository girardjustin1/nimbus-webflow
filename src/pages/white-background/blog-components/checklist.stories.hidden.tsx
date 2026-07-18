import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checklist } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "White Background/Blog Components/Lists & Steps/Checklist",
    component: Checklist,
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-white px-4 py-10 md:px-8">
                <div className="mx-auto max-w-180">
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof Checklist>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <Checklist
            heading="The migration enabled"
            items={[
                "Full demand competition across all partners",
                "Streamlined integrations — no deep custom partner work required",
                "Real-time reporting and buyer-level visibility",
                "Centralized control over auction dynamics",
            ]}
        />
    ),
};
