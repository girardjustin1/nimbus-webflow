import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildFaqEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

interface Args {
    eyebrow: string;
    heading: string;
    description: string;
    count: number;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
    q8: string;
    a8: string;
    q9: string;
    a9: string;
    q10: string;
    a10: string;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Lists & Steps/FAQ",
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
        eyebrow: { name: "Eyebrow (optional)" },
        heading: { name: "Heading" },
        description: { name: "Description (optional)" },
        count: { name: "Number of questions", control: "select", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        q1: { name: "Q1 · question" },
        a1: { name: "Q1 · answer" },
        q2: { name: "Q2 · question" },
        a2: { name: "Q2 · answer" },
        q3: { name: "Q3 · question" },
        a3: { name: "Q3 · answer" },
        q4: { name: "Q4 · question" },
        a4: { name: "Q4 · answer" },
        q5: { name: "Q5 · question" },
        a5: { name: "Q5 · answer" },
        q6: { name: "Q6 · question" },
        a6: { name: "Q6 · answer" },
        q7: { name: "Q7 · question" },
        a7: { name: "Q7 · answer" },
        q8: { name: "Q8 · question" },
        a8: { name: "Q8 · answer" },
        q9: { name: "Q9 · question" },
        a9: { name: "Q9 · answer" },
        q10: { name: "Q10 · question" },
        a10: { name: "Q10 · answer" },
    },
};

export default meta;
type Story = StoryObj<Args>;

/** Native <details> accordion — no JavaScript. Set how many questions show with the dropdown. */
export const Embed: Story = {
    args: {
        eyebrow: "FAQ",
        heading: "Frequently asked questions",
        description: "Everything you need to know. Can't find an answer? Reach out to your Nimbus Account Manager.",
        count: 5,
        q1: "What is full-stack mediation?",
        a1: "A single unified auction where every demand source bids in real time, replacing a sequential waterfall.",
        q2: "How long does migration take?",
        a2: "Most publishers complete migration in a few weeks, with white-glove support from the Nimbus team.",
        q3: "Will it add SDK weight?",
        a3: "No — the Nimbus SDK consolidates integrations, so you remove weight rather than add it.",
        q4: "How many demand sources does Nimbus support?",
        a4: "Over 60 demand partners compete in the core auction — more than any other open-marketplace partner.",
        q5: "Do I keep my existing direct deals?",
        a5: "Yes. Direct and programmatic demand run side by side with no extra setup.",
        q6: "How does reporting work?",
        a6: "You get advertiser-level insights, winning-bid data, and exchange benchmarks out of the box.",
        q7: "Is there a revenue guarantee?",
        a7: "Terms vary by publisher; your account team will walk you through the options during onboarding.",
        q8: "What ad formats are supported?",
        a8: "Banner, interstitial, native, video, and the customizable Nimbus Dynamic Unit.",
        q9: "Can I set price floors?",
        a9: "Yes — floors are fully configurable by geo, format, and placement.",
        q10: "How do I get started?",
        a10: "Reach out to your Nimbus Account Manager to scope the integration and timeline.",
    },
    render: (args) => {
        const all = [
            { question: args.q1, answer: args.a1 },
            { question: args.q2, answer: args.a2 },
            { question: args.q3, answer: args.a3 },
            { question: args.q4, answer: args.a4 },
            { question: args.q5, answer: args.a5 },
            { question: args.q6, answer: args.a6 },
            { question: args.q7, answer: args.a7 },
            { question: args.q8, answer: args.a8 },
            { question: args.q9, answer: args.a9 },
            { question: args.q10, answer: args.a10 },
        ];
        const items = all.slice(0, args.count);
        return (
            <EmbedPlayground html={buildFaqEmbed({ eyebrow: args.eyebrow || undefined, heading: args.heading, description: args.description || undefined, items })} />
        );
    },
};
