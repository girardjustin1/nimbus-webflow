import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildImageryEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

interface Args {
    imageUrl: string;
    alt: string;
    showCaption: boolean;
    caption: string;
    ratio: string;
}

const meta: Meta<Args> = {
    title: "Webflow Guide/Embed Kit/Media & Meta/Imagery Idea",
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
        imageUrl: { name: "Image URL" },
        alt: { name: "Alt text" },
        showCaption: { name: "Show caption/note", control: "boolean" },
        caption: { name: "Caption / note" },
        ratio: { name: "Aspect ratio", control: "inline-radio", options: ["16/9", "3/2", "1/1", "4/5"] },
    },
};

export default meta;
type Story = StoryObj<Args>;

/** Point the image URL at a Webflow asset (e.g. from your blog-src folder). Toggle the caption on/off and edit the note freely. */
export const Embed: Story = {
    args: {
        imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80",
        alt: "A person using a mobile app on a smartphone",
        showCaption: true,
        caption: "Imagery idea: A publisher reviewing in-app monetization dashboards",
        ratio: "16/9",
    },
    render: (args) => (
        <EmbedPlayground html={buildImageryEmbed({ imageUrl: args.imageUrl, alt: args.alt, ratio: args.ratio, showCaption: args.showCaption, caption: args.caption || undefined })} />
    ),
};
