import type { Meta, StoryObj } from "@storybook/react-vite";
import { KeyTakeaway } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Picks/Blog Components/Callouts & Quotes/Key Takeaway",
    component: KeyTakeaway,
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
} satisfies Meta<typeof KeyTakeaway>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <KeyTakeaway
            title="Key takeaway"
            text="The migration drove material efficiency gains across both platforms — with particularly strong performance on iOS, where demand competition and auction dynamics were most constrained."
        />
    ),
};
