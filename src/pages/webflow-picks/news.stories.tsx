import type { Meta, StoryObj } from "@storybook/react-vite";
import { enriched11 } from "@/content/blog/enriched-articles";
import WebflowPicksNews from "./news";

/**
 * Webflow Picks — the news article layout selected for the Webflow port.
 *
 * Forked from Blog Article Templates → 11 → Enriched, with the byline author and
 * avatar removed, a month/year timestamp, and a "News" category eyebrow. Avatars
 * inside the article body (pull quotes, testimonials) are kept.
 */
const meta = {
    title: "Webflow Picks/News",
    component: WebflowPicksNews,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof WebflowPicksNews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched11 } };
