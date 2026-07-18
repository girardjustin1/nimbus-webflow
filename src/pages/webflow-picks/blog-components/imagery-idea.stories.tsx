import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageryIdea } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Guide/Blog Components/Media & Meta/Imagery Idea",
    component: ImageryIdea,
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
} satisfies Meta<typeof ImageryIdea>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <ImageryIdea caption="Tumblr's iOS and Android reporting side by side, showing rCPM, revenue, and eCPM lift after the migration" />
    ),
};
