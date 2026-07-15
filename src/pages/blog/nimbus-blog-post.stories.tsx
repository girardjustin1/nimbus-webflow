import type { Meta, StoryObj } from "@storybook/react-vite";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import { NimbusBlogPost } from "./nimbus-blog-post";

/**
 * Nimbus Blog → Posts
 * The three imported Nimbus articles rendered as full blog-post pages.
 */
const meta = {
    title: "Nimbus Blog/Posts",
    component: NimbusBlogPost,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NimbusBlogPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = {
    name: "The Nimbus Dynamic Unit",
    args: { article: nimbusArticles[0] },
};

export const AdQuality: Story = {
    name: "Ad Quality",
    args: { article: nimbusArticles[1] },
};

export const Floors: Story = {
    name: "Floors: Pricing Power",
    args: { article: nimbusArticles[2] },
};
