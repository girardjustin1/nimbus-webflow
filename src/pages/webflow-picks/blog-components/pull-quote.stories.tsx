import type { Meta, StoryObj } from "@storybook/react-vite";
import { PullQuote } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Picks/Blog Components/Callouts & Quotes/Pull Quote",
    component: PullQuote,
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
} satisfies Meta<typeof PullQuote>;

export default meta;

/** Pink — the default brand colorway. */
export const Pink: StoryObj = {
    render: () => (
        <PullQuote
            quote="Every bid competes on the same terms. That's the whole design."
            attribution="Kristen Smith"
            role="Chief Product Officer, Nimbus"
            variant="pink"
            layout="border"
            avatarRing="pink"
        />
    ),
};

/** Teal — the signature brand colorway. */
export const Teal: StoryObj = {
    render: () => (
        <PullQuote
            quote="We kept our native look and finally stopped leaving demand on the table."
            attribution="Priya Nair"
            role="Head of Monetization, mobile publisher"
            variant="teal"
            layout="border"
            avatarRing="teal"
        />
    ),
};

/** Navy — the deep brand colorway. */
export const Navy: StoryObj = {
    render: () => (
        <PullQuote
            quote="Moving to full-stack mediation aligned our monetization with the scale of our product."
            attribution="Julia Wilson"
            role="Tumblr"
            variant="navy"
            layout="border"
            avatarRing="navy"
        />
    ),
};
