import type { Meta, StoryObj } from "@storybook/react-vite";
import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import BlogPost10 from "./blog-post-10";

/**
 * Blog Article Template 10, rendered with each of the four real Nimbus articles
 * to see how the template adapts to actual content.
 */
const meta = {
    title: "Blog Layouts/Blog Article Template/10",
    component: BlogPost10,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogPost10>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = { name: "The Nimbus Dynamic Unit", args: { article: nimbusArticles[0] } };
export const AdQuality: Story = { name: "Ad Quality", args: { article: nimbusArticles[1] } };
export const Floors: Story = { name: "Floors: Pricing Power", args: { article: nimbusArticles[2] } };
export const Prebid: Story = { name: "Prebid Is Now Live", args: { article: nimbusArticles[3] } };

const enriched01: NimbusArticle = {
    ...nimbusArticles[0],
    body: [
        // Intro: "What is the Nimbus Dynamic Unit?" heading + opening paragraph
        ...nimbusArticles[0].body.slice(0, 2),
        {
            type: "statGrid",
            stats: [
                { value: "45+", label: "demand partners competing per auction" },
                { value: "3.2×", label: "eCPM vs. native programmatic", change: "multi-format demand", trend: "positive" },
                { value: "4", label: "creative formats in a single unit" },
                { value: "100%", label: "customizable to your app's UX" },
            ],
        },
        // "What Makes It Great?" heading + Infinite customizability + No demand limitations
        ...nimbusArticles[0].body.slice(2, 5),
        {
            type: "quote",
            text: "A native unit shouldn't have to choose between looking right and filling. The Dynamic Unit takes multi-format programmatic demand and makes every winning creative look like it belongs in your app.",
            attribution: "Marcus Lee",
            role: "Head of Product, Nimbus",
            avatarSrc: "https://i.pravatar.cc/150?img=12",
            variant: "navy",
            layout: "border",
        },
        // "The Dynamic Unit vs. Traditional 'Native'" heading + 3 definition paragraphs
        ...nimbusArticles[0].body.slice(5, 9),
        {
            type: "demandMixPie",
            title: "How demand fills the Dynamic Unit",
            data: [
                { name: "Interstitial (MRAID)", value: 38 },
                { name: "Video (VAST)", value: 29 },
                { name: "Static display", value: 21 },
                { name: "Meta native", value: 8 },
                { name: "Native programmatic", value: 4 },
            ],
        },
        // "Achieving a Native Feel" heading + 45+ partners paragraph + CPM tradeoff paragraph
        ...nimbusArticles[0].body.slice(9, 12),
        {
            type: "checklist",
            heading: "Ship the layout your app deserves",
            items: [
                "Full-screen horizontal slider, Snapchat-style",
                "Full-screen vertical slider, TikTok-style",
                "Close button, ad timers, and mute controls — your call",
                "Auto resize, scale, or letterbox each winning creative to fit",
            ],
        },
        {
            type: "keyTakeaway",
            title: "The takeaway",
            text: "You don't trade native feel for fill. The Dynamic Unit gives buyers a wide, multi-format auction and gives your users an ad that looks built for your app.",
        },
        // "How Top Publishers Use the Dynamic Unit" heading + Timehop / Tumblr / Imgur
        ...nimbusArticles[0].body.slice(12, 16),
        {
            type: "quote",
            text: "We swapped in the Dynamic Unit and kept our swipe-native feel exactly as it was. The difference showed up in the eCPM, not the UX.",
            attribution: "VP Monetization",
            role: "Top-100 iOS publisher",
            variant: "navy",
            layout: "border",
        },
        // Real FAQ block, then real CTA ("Get started with Nimbus")
        ...nimbusArticles[0].body.slice(16),
    ],
};

export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched01 } };
