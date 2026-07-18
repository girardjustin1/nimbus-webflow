import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatCallout } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "White Background/Blog Components/Callouts & Quotes/Stat Callout",
    component: StatCallout,
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-white px-4 py-10 md:px-8">
                <div className="mx-auto max-w-180">
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof StatCallout>;

export default meta;

/** Teal — the signature brand colorway. */
export const Teal: StoryObj = {
    render: () => <StatCallout value="+87%" label="rCPM lift after migrating to Nimbus full-stack mediation" variant="teal" layout="centered" />,
};

/** Pink — the accent brand colorway. */
export const Pink: StoryObj = {
    render: () => <StatCallout value="+42%" label="Combined revenue lift across iOS & Android" variant="pink" layout="centered" />,
};

/** Navy — the deep brand colorway. */
export const Navy: StoryObj = {
    render: () => <StatCallout value="45+" label="Demand partners competing in the core auction" variant="navy" layout="centered" />,
};
