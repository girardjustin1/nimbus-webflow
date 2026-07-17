import type { Meta, StoryObj } from "@storybook/react-vite";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import { enriched11 } from "@/content/blog/enriched-articles";
import { NimbusBlogPost } from "./nimbus-blog-post";

/**
 * Blog Article Template 11 — the custom Nimbus house-style post layout
 * (NimbusBlogPost), rendered with each of the four real Nimbus articles.
 */
const meta = {
    title: "Blog Article Templates/11",
    component: NimbusBlogPost,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NimbusBlogPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = { name: "The Nimbus Dynamic Unit", args: { article: nimbusArticles[0] } };
export const AdQuality: Story = { name: "Ad Quality", args: { article: nimbusArticles[1] } };
export const Floors: Story = { name: "Floors: Pricing Power", args: { article: nimbusArticles[2] } };
export const Prebid: Story = { name: "Prebid Is Now Live", args: { article: nimbusArticles[3] } };
export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched11 } };
