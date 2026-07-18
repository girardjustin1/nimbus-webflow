import type { Meta, StoryObj } from "@storybook/react-vite";
import { type Accent, buildInsightEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

interface Args {
    text: string;
    variant: Accent;
    iconUrl: string;
}

const meta: Meta<Args> = {
    title: "Webflow Guide/Embed Kit/Callouts & Quotes/Insight Callout",
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
        variant: { name: "Colorway", control: "inline-radio", options: ["teal", "pink", "navy"] },
        text: { name: "Text" },
        iconUrl: { name: "Icon URL (optional — Webflow asset)" },
    },
};

export default meta;
type Story = StoryObj<Args>;

/** Leave the icon URL blank for the auto-tinted lightbulb; paste a Webflow asset URL to use your own image (fixed color). */
export const Embed: Story = {
    args: {
        text: "Layered integrations quietly tax every ad request. Collapsing them into one auction is where the eCPM lift actually comes from.",
        variant: "teal",
        iconUrl: "",
    },
    render: (args) => <EmbedPlayground html={buildInsightEmbed({ text: args.text, variant: args.variant, iconUrl: args.iconUrl || undefined })} />,
};
