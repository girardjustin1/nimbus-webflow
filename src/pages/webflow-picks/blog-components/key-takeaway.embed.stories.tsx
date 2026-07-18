import type { Meta, StoryObj } from "@storybook/react-vite";
import { type Accent, buildKeyTakeawayEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

interface Args {
    title: string;
    text: string;
    variant: Accent;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Callouts & Quotes/Key Takeaway",
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
        title: { name: "Eyebrow" },
        text: { name: "Text" },
    },
};

export default meta;
type Story = StoryObj<Args>;

export const Embed: Story = {
    args: {
        title: "Key takeaway",
        text: "A unified auction beats a longer waterfall — fewer hops, more competition per impression.",
        variant: "teal",
    },
    render: (args) => <EmbedPlayground html={buildKeyTakeawayEmbed(args)} />,
};
