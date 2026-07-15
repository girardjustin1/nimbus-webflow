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
        { type: "stat", value: "45+", label: "demand partners in the core auction" },
        ...nimbusArticles[0].body.slice(2, 5),
        {
            type: "keyTakeaway",
            title: "The demand advantage",
            text: "The Dynamic Unit isn't limited to native programmatic demand. It accepts programmatic bids in multiple formats, widening the auction to interstitial, static, and video buyers — so a native-looking placement can fill and earn like a standard one.",
        },
        ...nimbusArticles[0].body.slice(5, 9),
        { type: "imageryIdea", caption: "publisher native vs. native programmatic vs. Dynamic Unit — a flow diagram showing how the Dynamic Unit widens the auction to more demand formats" },
        ...nimbusArticles[0].body.slice(9, 12),
        {
            type: "metricsTable",
            title: "Dynamic Unit eCPM by geo",
            description: "The same native placement, filled two ways: native programmatic demand alone versus the Dynamic Unit's wider auction across static, video, and interstitial buyers.",
            rows: [
                { geo: "US", unflooredEcpm: "$3.40", flooredEcpm: "$4.60", lift: "+35%" },
                { geo: "UK", unflooredEcpm: "$3.10", flooredEcpm: "$4.00", lift: "+29%" },
                { geo: "DE", unflooredEcpm: "$3.00", flooredEcpm: "$3.80", lift: "+27%" },
                { geo: "JP", unflooredEcpm: "$3.60", flooredEcpm: "$5.00", lift: "+39%" },
            ],
        },
        { type: "stat", value: "+34%", label: "median eCPM lift vs. native" },
        {
            type: "quote",
            text: "A native unit shouldn't have to choose between looking right and filling. Opening the Dynamic Unit to static, video, and interstitial demand is what lets a native placement earn like one that isn't.",
            attribution: "Nimbus Ad Ops",
            role: "Product",
            avatarSrc: "https://i.pravatar.cc/150?img=15",
            variant: "teal",
            layout: "card",
        },
        ...nimbusArticles[0].body.slice(12, 16),
        {
            type: "quote",
            text: "Timehop, Tumblr, and Imgur all deploy the same Dynamic Unit — and none of them look alike. That's the whole point.",
            attribution: "Nimbus Ad Ops",
            role: "Product",
            avatarSrc: "https://i.pravatar.cc/150?img=15",
            variant: "teal",
            layout: "card",
        },
        ...nimbusArticles[0].body.slice(16),
    ],
};

export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched00 } };
