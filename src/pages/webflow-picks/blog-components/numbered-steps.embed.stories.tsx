import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildNumberedStepsEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

const splitItems = (value: string) =>
    value
        .split(";")
        .map((s) => s.trim())
        .filter(Boolean);

interface Args {
    heading: string;
    description: string;
    count: number;
    step1Title: string;
    step1Items: string;
    step2Title: string;
    step2Items: string;
    step3Title: string;
    step3Items: string;
    step4Title: string;
    step4Items: string;
    step5Title: string;
    step5Items: string;
    step6Title: string;
    step6Items: string;
    step7Title: string;
    step7Items: string;
    step8Title: string;
    step8Items: string;
    step9Title: string;
    step9Items: string;
    step10Title: string;
    step10Items: string;
}

const itemsHelp = { name: "", description: "Separate bullet items with a semicolon ( ; )" };

const meta: Meta<Args> = {
    title: "Webflow Guide/Embed Kit/Lists & Steps/Numbered Steps",
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
        heading: { name: "Heading (optional)" },
        description: { name: "Description (optional)" },
        count: { name: "Number of steps", control: "select", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        step1Title: { name: "Step 1 · title" },
        step1Items: { ...itemsHelp, name: "Step 1 · items (; separated)" },
        step2Title: { name: "Step 2 · title" },
        step2Items: { ...itemsHelp, name: "Step 2 · items (; separated)" },
        step3Title: { name: "Step 3 · title" },
        step3Items: { ...itemsHelp, name: "Step 3 · items (; separated)" },
        step4Title: { name: "Step 4 · title" },
        step4Items: { ...itemsHelp, name: "Step 4 · items (; separated)" },
        step5Title: { name: "Step 5 · title" },
        step5Items: { ...itemsHelp, name: "Step 5 · items (; separated)" },
        step6Title: { name: "Step 6 · title" },
        step6Items: { ...itemsHelp, name: "Step 6 · items (; separated)" },
        step7Title: { name: "Step 7 · title" },
        step7Items: { ...itemsHelp, name: "Step 7 · items (; separated)" },
        step8Title: { name: "Step 8 · title" },
        step8Items: { ...itemsHelp, name: "Step 8 · items (; separated)" },
        step9Title: { name: "Step 9 · title" },
        step9Items: { ...itemsHelp, name: "Step 9 · items (; separated)" },
        step10Title: { name: "Step 10 · title" },
        step10Items: { ...itemsHelp, name: "Step 10 · items (; separated)" },
    },
};

export default meta;
type Story = StoryObj<Args>;

/** Numbers follow the brand teal ramp (light → dark) across up to 10 steps. */
export const Embed: Story = {
    args: {
        heading: "Why the results held",
        description: "",
        count: 3,
        step1Title: "Unified auction dynamics",
        step1Items: "Every demand source bids in one real-time auction; The highest bid wins, with no waterfall bias",
        step2Title: "Expanded demand access without friction",
        step2Items: "More buyers compete on each impression; No added integration overhead",
        step3Title: "Operational clarity",
        step3Items: "One source of truth for pricing and performance; Advertiser-level reporting out of the box",
        step4Title: "Cleaner yield signals",
        step4Items: "Real-time bid data per source; Fewer blind spots in reporting",
        step5Title: "Lower operational overhead",
        step5Items: "One integration to maintain; No waterfall to hand-tune",
        step6Title: "Faster experimentation",
        step6Items: "Test floors by geo and format; Roll changes back safely",
        step7Title: "Stronger buyer competition",
        step7Items: "More demand per impression; Higher clearing prices",
        step8Title: "Predictable revenue",
        step8Items: "Smoother day-to-day yield; Fewer surprises at month end",
        step9Title: "Better fill",
        step9Items: "Backfill gaps automatically; Protect high-value inventory",
        step10Title: "Room to scale",
        step10Items: "Add demand without re-architecting; Grow without added ops",
    },
    render: (args) => {
        const all = [
            { title: args.step1Title, items: splitItems(args.step1Items) },
            { title: args.step2Title, items: splitItems(args.step2Items) },
            { title: args.step3Title, items: splitItems(args.step3Items) },
            { title: args.step4Title, items: splitItems(args.step4Items) },
            { title: args.step5Title, items: splitItems(args.step5Items) },
            { title: args.step6Title, items: splitItems(args.step6Items) },
            { title: args.step7Title, items: splitItems(args.step7Items) },
            { title: args.step8Title, items: splitItems(args.step8Items) },
            { title: args.step9Title, items: splitItems(args.step9Items) },
            { title: args.step10Title, items: splitItems(args.step10Items) },
        ];
        const steps = all.slice(0, args.count);
        return <EmbedPlayground html={buildNumberedStepsEmbed({ heading: args.heading || undefined, description: args.description || undefined, steps })} />;
    },
};
