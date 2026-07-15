import type { Meta, StoryObj } from "@storybook/react-vite";
import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import BlogPost09 from "./blog-post-09";

/**
 * Blog Article Template 09, rendered with each of the four real Nimbus articles
 * to see how the template adapts to actual content.
 */
const meta = {
    title: "Blog Layouts/Blog Article Template/09",
    component: BlogPost09,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogPost09>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = { name: "The Nimbus Dynamic Unit", args: { article: nimbusArticles[0] } };
export const AdQuality: Story = { name: "Ad Quality", args: { article: nimbusArticles[1] } };
export const Floors: Story = { name: "Floors: Pricing Power", args: { article: nimbusArticles[2] } };
export const Prebid: Story = { name: "Prebid Is Now Live", args: { article: nimbusArticles[3] } };

const enriched00: NimbusArticle = {
    ...nimbusArticles[0],
    body: [
        ...nimbusArticles[0].body.slice(0, 2),
        { type: "stat", value: "60+", label: "demand sources in the core auction" },
        ...nimbusArticles[0].body.slice(2, 5),
        {
            type: "checklist",
            heading: "What makes the Dynamic Unit great",
            items: [
                "Infinite visual customizability",
                "No native-only demand limits",
                "Automatic creative fit — resize, scale, letterbox",
                "oRTB compliant",
            ],
        },
        ...nimbusArticles[0].body.slice(5, 9),
        { type: "imageryIdea", caption: "publisher native vs native programmatic vs Dynamic Unit flow diagram" },
        ...nimbusArticles[0].body.slice(9),
    ],
};

export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched00 } };
