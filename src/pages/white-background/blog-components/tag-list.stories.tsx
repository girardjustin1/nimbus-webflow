import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagList } from "@/components/marketing/blog-atoms/tag-list";

const meta = {
    title: "White Background/Blog Components/Media & Meta/Tag List",
    component: TagList,
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
} satisfies Meta<typeof TagList>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <TagList
            size="md"
            tags={[
                { name: "Case Study", color: "brand" },
                { name: "Full-Stack Mediation", color: "sky" },
                { name: "Mobile", color: "indigo" },
                { name: "Publishers", color: "pink" },
            ]}
        />
    ),
};
