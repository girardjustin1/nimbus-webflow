import type { Meta, StoryObj } from "@storybook/react-vite";
import { InsightCallout } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Picks/Blog Components/Callouts & Quotes/Insight Callout",
    component: InsightCallout,
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
} satisfies Meta<typeof InsightCallout>;

export default meta;

/** Teal — the default brand colorway. */
export const Teal: StoryObj = {
    render: () => <InsightCallout text="Layered integrations optimize around existing systems — they don't redefine the auction itself." variant="teal" />,
};

/** Pink — the accent brand colorway. */
export const Pink: StoryObj = {
    render: () => <InsightCallout text="A native unit shouldn't have to choose between looking right and filling well. It refuses the tradeoff." variant="pink" />,
};

/** Navy — the deep brand colorway. */
export const Navy: StoryObj = {
    render: () => <InsightCallout text="Most stacks add demand by adding architecture. The job is to let more demand compete without more weight." variant="navy" />,
};
