import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildLogoStatementEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

interface Args {
    logoUrl: string;
    logoAlt: string;
    text: string;
    logoShape: "wide" | "square";
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
        logoShape: { name: "Logo shape", control: "inline-radio", options: ["wide", "square"] },
        text: { name: "Statement" },
    },
};

export default meta;
type Story = StoryObj<Args>;

/**
 * Point the logo URL at a Webflow asset (e.g. from your blog-src folder).
 *
 * Logo shape: use "wide" for horizontal wordmarks (Tumblr) and "square" for
 * compact/stacked logos (an icon over a wordmark, e.g. Audiomack). "square"
 * raises the size cap so a compact logo carries the same visual weight as a
 * wide one — same aspect ratio, more presence.
 */
export const Embed: Story = {
    args: {
        logoUrl: "https://cdn.prod.website-files.com/690ce1421a42b6af818eb338/690e5213d4707592cf1e3a92_tumblr.png",
        logoAlt: "Tumblr",
        logoShape: "wide",
        text: "Tumblr partnered with Nimbus to migrate its in-app monetization onto full-stack mediation, consolidating a fragmented waterfall into a single unified auction.",
    },
    render: (args) => <EmbedPlayground html={buildLogoStatementEmbed(args)} />,
};

/**
 * A compact/stacked logo (icon over a wordmark) in "square" mode — the logo fills
 * the column at equal visual weight to a wide wordmark. Points at the real hosted
 * Audiomack SVG so the preview matches what renders on the live site.
 */
export const SquareLogo: Story = {
    args: {
        logoUrl: "https://cdn.prod.website-files.com/6900d7d25b1ef1963248262d/6a70b46a3603cbb8d5d8718a_audiomack-logo_080326.svg",
        logoAlt: "Audiomack",
        logoShape: "square",
        text: "Audiomack partnered with Nimbus to redesign its in-app monetization around the Dynamic Unit and unified mediation, creating custom ad experiences that nearly doubled revenue without increasing ad load.",
    },
    render: (args) => <EmbedPlayground html={buildLogoStatementEmbed(args)} />,
};
