import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoStatement } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Picks/Blog Components/Media & Meta/Logo Statement",
    component: LogoStatement,
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
} satisfies Meta<typeof LogoStatement>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <LogoStatement
            logoSrc="case-studies/tumblr-logo.svg"
            logoAlt="Tumblr"
            text="Tumblr is one of the internet's most recognizable platforms for creators, fandoms, and culture-driven communities. With highly engaged audiences across its mobile apps on iOS and Android, Tumblr's monetization strategy needs to support both scale and user experience — unlocking more demand without adding operational complexity."
        />
    ),
};
