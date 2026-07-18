import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildTagListEmbed, type TagColor } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

const COLORS: TagColor[] = ["brand", "pink", "navy", "gray", "success", "indigo", "sky"];
const colorControl = (label: string) => ({ name: label, control: { type: "select" as const }, options: COLORS });

interface Args {
    count: number;
    tag1Name: string;
    tag1Color: TagColor;
    tag2Name: string;
    tag2Color: TagColor;
    tag3Name: string;
    tag3Color: TagColor;
    tag4Name: string;
    tag4Color: TagColor;
    tag5Name: string;
    tag5Color: TagColor;
    tag6Name: string;
    tag6Color: TagColor;
    tag7Name: string;
    tag7Color: TagColor;
    tag8Name: string;
    tag8Color: TagColor;
    tag9Name: string;
    tag9Color: TagColor;
    tag10Name: string;
    tag10Color: TagColor;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Media & Meta/Tag List",
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
        count: { name: "Number of tags", control: "select", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        tag1Name: { name: "Tag 1 · label" },
        tag1Color: colorControl("Tag 1 · color"),
        tag2Name: { name: "Tag 2 · label" },
        tag2Color: colorControl("Tag 2 · color"),
        tag3Name: { name: "Tag 3 · label" },
        tag3Color: colorControl("Tag 3 · color"),
        tag4Name: { name: "Tag 4 · label" },
        tag4Color: colorControl("Tag 4 · color"),
        tag5Name: { name: "Tag 5 · label" },
        tag5Color: colorControl("Tag 5 · color"),
        tag6Name: { name: "Tag 6 · label" },
        tag6Color: colorControl("Tag 6 · color"),
        tag7Name: { name: "Tag 7 · label" },
        tag7Color: colorControl("Tag 7 · color"),
        tag8Name: { name: "Tag 8 · label" },
        tag8Color: colorControl("Tag 8 · color"),
        tag9Name: { name: "Tag 9 · label" },
        tag9Color: colorControl("Tag 9 · color"),
        tag10Name: { name: "Tag 10 · label" },
        tag10Color: colorControl("Tag 10 · color"),
    },
};

export default meta;
type Story = StoryObj<Args>;

/** Colors: brand · pink · navy · gray · success · indigo · sky. */
export const Embed: Story = {
    args: {
        count: 4,
        tag1Name: "Native",
        tag1Color: "brand",
        tag2Name: "Demand",
        tag2Color: "navy",
        tag3Name: "Ad Tech",
        tag3Color: "success",
        tag4Name: "Case Study",
        tag4Color: "pink",
        tag5Name: "Mediation",
        tag5Color: "sky",
        tag6Name: "Yield",
        tag6Color: "indigo",
        tag7Name: "Programmatic",
        tag7Color: "gray",
        tag8Name: "Publisher",
        tag8Color: "brand",
        tag9Name: "Revenue",
        tag9Color: "success",
        tag10Name: "Strategy",
        tag10Color: "navy",
    },
    render: (args) => {
        const all = [
            { name: args.tag1Name, color: args.tag1Color },
            { name: args.tag2Name, color: args.tag2Color },
            { name: args.tag3Name, color: args.tag3Color },
            { name: args.tag4Name, color: args.tag4Color },
            { name: args.tag5Name, color: args.tag5Color },
            { name: args.tag6Name, color: args.tag6Color },
            { name: args.tag7Name, color: args.tag7Color },
            { name: args.tag8Name, color: args.tag8Color },
            { name: args.tag9Name, color: args.tag9Color },
            { name: args.tag10Name, color: args.tag10Color },
        ];
        const tags = all.slice(0, args.count);
        return <EmbedPlayground html={buildTagListEmbed(tags)} />;
    },
};
