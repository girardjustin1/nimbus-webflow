import type { Meta, StoryObj } from "@storybook/react-vite";
import { type Accent, buildPullQuoteEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

interface Args {
    quote: string;
    attribution: string;
    role: string;
    variant: Accent;
    avatarUrl: string;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Callouts & Quotes/Pull Quote",
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
        quote: { name: "Quote" },
        attribution: { name: "Name" },
        role: { name: "Role / company" },
        avatarUrl: { name: "Avatar URL (optional)" },
    },
};

export default meta;
type Story = StoryObj<Args>;

/** Leave the avatar URL empty to use an initials avatar with a colored ring. */
export const Embed: Story = {
    args: {
        quote: "Migrating to Nimbus full-stack mediation unified our auction and lifted eCPM — without adding operational overhead.",
        attribution: "Carolina Wagner",
        role: "Monetization Lead",
        variant: "pink",
        avatarUrl: "https://cdn.prod.website-files.com/6900d7d25b1ef1963248262d/6a5e451d829f66c5b3ec284b_c-Wagner.png",
    },
    render: (args) => <EmbedPlayground html={buildPullQuoteEmbed(args)} />,
};
