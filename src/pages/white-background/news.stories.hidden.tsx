import type { Meta, StoryObj } from "@storybook/react-vite";
import { enriched02, enriched11, enrichedDynamicUnit, enrichedPrebid } from "@/content/blog/enriched-articles";
import WebflowPicksNews from "./news";

/**
 * Webflow Guide — the news article layout selected for the Webflow port.
 *
 * Forked from Blog Article Templates → 11 → Enriched, with the byline author and
 * avatar removed, a month/year timestamp, and a "News" category eyebrow. Avatars
 * inside the article body (pull quotes, testimonials) are kept.
 */
const meta = {
    title: "White Background/News",
    component: WebflowPicksNews,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof WebflowPicksNews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = { name: "The Nimbus Dynamic Unit", args: { article: enrichedDynamicUnit } };
export const AdQuality: Story = { name: "Ad Quality", args: { article: enriched02 } };
export const Floors: Story = { name: "Floors: Pricing Power", args: { article: enriched11 } };
export const Prebid: Story = { name: "Prebid Is Now Live", args: { article: enrichedPrebid } };
