import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildChecklistV2Embed, CHECKLIST_ICON_TYPES, type ChecklistIcon } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

// Friendly labels for the icon dropdown (the emoji is UI-only; the embed renders the SVG marker).
const ICON_LABELS: Record<ChecklistIcon, string> = {
    check: "✓ Check (teal)",
    "check-green": "✓ Check (green)",
    x: "✗ X (red)",
    bulb: "💡 Lightbulb (amber)",
    warning: "⚠ Warning (amber)",
    info: "ⓘ Info (blue)",
    star: "★ Star (amber)",
    arrow: "→ Arrow (teal)",
    dot: "• Dot (gray)",
};
const iconControl = { control: { type: "select" as const, labels: ICON_LABELS }, options: [...CHECKLIST_ICON_TYPES] };

interface Args {
    heading: string;
    count: number;
    item1: string;
    item1Icon: ChecklistIcon;
    item2: string;
    item2Icon: ChecklistIcon;
    item3: string;
    item3Icon: ChecklistIcon;
    item4: string;
    item4Icon: ChecklistIcon;
    item5: string;
    item5Icon: ChecklistIcon;
    item6: string;
    item6Icon: ChecklistIcon;
    item7: string;
    item7Icon: ChecklistIcon;
    item8: string;
    item8Icon: ChecklistIcon;
    item9: string;
    item9Icon: ChecklistIcon;
    item10: string;
    item10Icon: ChecklistIcon;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Lists & Steps/Checklist v2",
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
        count: { name: "Number of items", control: "select", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        item1: { name: "Item 1" },
        item1Icon: { ...iconControl, name: "Item 1 · icon" },
        item2: { name: "Item 2" },
        item2Icon: { ...iconControl, name: "Item 2 · icon" },
        item3: { name: "Item 3" },
        item3Icon: { ...iconControl, name: "Item 3 · icon" },
        item4: { name: "Item 4" },
        item4Icon: { ...iconControl, name: "Item 4 · icon" },
        item5: { name: "Item 5" },
        item5Icon: { ...iconControl, name: "Item 5 · icon" },
        item6: { name: "Item 6" },
        item6Icon: { ...iconControl, name: "Item 6 · icon" },
        item7: { name: "Item 7" },
        item7Icon: { ...iconControl, name: "Item 7 · icon" },
        item8: { name: "Item 8" },
        item8Icon: { ...iconControl, name: "Item 8 · icon" },
        item9: { name: "Item 9" },
        item9Icon: { ...iconControl, name: "Item 9 · icon" },
        item10: { name: "Item 10" },
        item10Icon: { ...iconControl, name: "Item 10 · icon" },
    },
};

export default meta;
type Story = StoryObj<Args>;

/**
 * Same checklist as v1, but each item's marker icon is selectable — check, red X,
 * lightbulb, warning, info, star, arrow, or dot. Reuses the `.blog-checklist` styles,
 * so it's fully compatible with the existing stylesheet (v1 embeds are untouched).
 */
export const Embed: Story = {
    args: {
        heading: "What the migration unlocked",
        count: 5,
        item1: "Single unified auction",
        item1Icon: "check",
        item2: "60+ demand sources, one connection",
        item2Icon: "check",
        item3: "No more waterfall latency",
        item3Icon: "x",
        item4: "Insight: fewer hops means higher eCPM",
        item4Icon: "bulb",
        item5: "Watch: floors need re-tuning after migration",
        item5Icon: "warning",
        item6: "Transparent, advertiser-level reporting",
        item6Icon: "info",
        item7: "Top performer across geos",
        item7Icon: "star",
        item8: "Faster time to value",
        item8Icon: "arrow",
        item9: "Lower operational overhead",
        item9Icon: "dot",
        item10: "One integration to maintain",
        item10Icon: "check-green",
    },
    render: (args) => {
        const all = [
            { text: args.item1, icon: args.item1Icon },
            { text: args.item2, icon: args.item2Icon },
            { text: args.item3, icon: args.item3Icon },
            { text: args.item4, icon: args.item4Icon },
            { text: args.item5, icon: args.item5Icon },
            { text: args.item6, icon: args.item6Icon },
            { text: args.item7, icon: args.item7Icon },
            { text: args.item8, icon: args.item8Icon },
            { text: args.item9, icon: args.item9Icon },
            { text: args.item10, icon: args.item10Icon },
        ];
        const items = all.slice(0, args.count);
        return <EmbedPlayground html={buildChecklistV2Embed({ heading: args.heading || undefined, items })} />;
    },
};
