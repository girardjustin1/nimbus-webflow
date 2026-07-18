import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildLogoStatementEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

interface Args {
    logoUrl: string;
    logoAlt: string;
    text: string;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Media & Meta/Logo Statement",
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
        logoUrl: { name: "Logo URL" },
        logoAlt: { name: "Logo alt text" },
        text: { name: "Statement" },
    },
};

export default meta;
type Story = StoryObj<Args>;

/** Point the logo URL at a Webflow asset (e.g. from your blog-src folder). */
export const Embed: Story = {
    args: {
        logoUrl: "https://cdn.prod.website-files.com/690ce1421a42b6af818eb338/690e5213d4707592cf1e3a92_tumblr.png",
        logoAlt: "Tumblr",
        text: "Tumblr partnered with Nimbus to migrate its in-app monetization onto full-stack mediation, consolidating a fragmented waterfall into a single unified auction.",
    },
    render: (args) => <EmbedPlayground html={buildLogoStatementEmbed(args)} />,
};
