import type { Meta, StoryObj } from "@storybook/react-vite";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import BlogPost02 from "./blog-post-02";

/**
 * Blog Article Template 02, rendered with each of the four real Nimbus articles
 * to see how the template adapts to actual content.
 */
const meta = {
    title: "Blog Layouts/Blog Article Template/02",
    component: BlogPost02,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogPost02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = { name: "The Nimbus Dynamic Unit", args: { article: nimbusArticles[0] } };
export const AdQuality: Story = { name: "Ad Quality", args: { article: nimbusArticles[1] } };
export const Floors: Story = { name: "Floors: Pricing Power", args: { article: nimbusArticles[2] } };
export const Prebid: Story = { name: "Prebid Is Now Live", args: { article: nimbusArticles[3] } };
