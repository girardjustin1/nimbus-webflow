import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildChecklistEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

interface Args {
    heading: string;
    count: number;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
    item7: string;
    item8: string;
    item9: string;
    item10: string;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Lists & Steps/Checklist",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-primary px-4 py-10 md:px-8">
                <div className="mx-auto max-w-200">
                    <Story />
                </div>
            </div>
        ),
    ],
    argTypes: {
        heading: { name: "Heading (optional)" },
        count: { name: "Number of items", control: "select", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        item1: { name: "Item 1" },
        item2: { name: "Item 2" },
        item3: { name: "Item 3" },
        item4: { name: "Item 4" },
        item5: { name: "Item 5" },
        item6: { name: "Item 6" },
        item7: { name: "Item 7" },
        item8: { name: "Item 8" },
        item9: { name: "Item 9" },
        item10: { name: "Item 10" },
    },
};

export default meta;
type Story = StoryObj<Args>;

export const Embed: Story = {
    args: {
        heading: "What the migration unlocked",
        count: 4,
        item1: "Single unified auction",
        item2: "60+ demand sources, one connection",
        item3: "No added SDK weight",
        item4: "Transparent, advertiser-level reporting",
        item5: "Fewer hops per impression",
        item6: "Higher win rates across geos",
        item7: "Cleaner, unified yield reporting",
        item8: "Faster time to value",
        item9: "Lower operational overhead",
        item10: "One integration to maintain",
    },
    render: (args) => {
        const items = [args.item1, args.item2, args.item3, args.item4, args.item5, args.item6, args.item7, args.item8, args.item9, args.item10]
            .slice(0, args.count);
        return <EmbedPlayground html={buildChecklistEmbed({ heading: args.heading || undefined, items })} />;
    },
};
