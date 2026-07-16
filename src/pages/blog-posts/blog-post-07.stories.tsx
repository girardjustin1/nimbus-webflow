import type { Meta, StoryObj } from "@storybook/react-vite";
import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import BlogPost07 from "./blog-post-07";

/**
 * Blog Article Template 07, rendered with each of the four real Nimbus articles
 * to see how the template adapts to actual content.
 */
const meta = {
    title: "Blog Article Templates/07",
    component: BlogPost07,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogPost07>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = { name: "The Nimbus Dynamic Unit", args: { article: nimbusArticles[0] } };
export const AdQuality: Story = { name: "Ad Quality", args: { article: nimbusArticles[1] } };
export const Floors: Story = { name: "Floors: Pricing Power", args: { article: nimbusArticles[2] } };
export const Prebid: Story = { name: "Prebid Is Now Live", args: { article: nimbusArticles[3] } };

const enriched07: NimbusArticle = {
    ...nimbusArticles[0],
    body: [
        { type: "heading", text: "What is the Nimbus Dynamic Unit?" },
        {
            type: "paragraph",
            text: "The Dynamic Unit is Nimbus' proprietary offering for in-app programmatic native advertising. Our incredibly flexible unit can be customized to suit almost any app's unique visual and UX needs without sacrificing available demand — resulting in a great-looking, unique ad that appeals to both publishers and buyers.",
        },
        { type: "stat", value: "45+", label: "demand partners in the core auction" },
        { type: "heading", text: "What Makes It Great?" },
        {
            type: "paragraph",
            lead: "Infinite customizability.",
            text: "Unlike other SDKs, with the Nimbus Dynamic Unit you can make your ads look however you want. Full-screen horizontal slider like Snapchat? No problem. Full-screen vertical slider like TikTok? No problem. Want an X button? Great. No X button? Also great.",
        },
        {
            type: "paragraph",
            lead: "No demand limitations.",
            text: "The Dynamic Unit accepts programmatic demand in multiple formats — it is not limited to 'native programmatic demand,' which is notoriously spotty and hard to come by. That gives you access to a vastly increased ecosystem of demand, letting a native unit fill and earn CPMs at levels more akin to static or video.",
        },
        {
            type: "keyTakeaway",
            text: "The Dynamic Unit decouples native look from native demand: you design the experience, and the full programmatic auction fills it.",
        },
        {
            type: "demandMixPie",
            title: "How demand fills a Dynamic Unit",
            data: [
                { name: "Static / MRAID", value: 38 },
                { name: "Video (VAST)", value: 30 },
                { name: "Interstitial", value: 22 },
                { name: "Native programmatic", value: 10 },
            ],
        },
        { type: "heading", text: "The Dynamic Unit vs. Traditional 'Native'" },
        {
            type: "paragraph",
            lead: "Publisher native ads",
            text: "are ad units custom-designed by publishers to work with their specific product, layout, and experience — a fullscreen, side-swipeable unit like Tinder, or something even more custom. You are looking for demand to fill this unit.",
        },
        {
            type: "paragraph",
            lead: "Native programmatic ads",
            text: "refer to a specific type of ad delivered by certain demand partners. These are delivered in 'pieces' and assembled per your app's specifications, giving you some ability to customize.",
        },
        {
            type: "paragraph",
            lead: "The Nimbus Dynamic Unit",
            text: "means you are not required to fill your publisher native ad only with native programmatic ads. The unit accepts programmatic demand in multiple formats and widens the auction to bidders on interstitial, static, and video demand.",
        },
        {
            type: "quote",
            text: "You shouldn't have to choose between an ad that fits your app and an auction that actually fills. The Dynamic Unit is built so you never trade a native feel for demand.",
            attribution: "Kristen Smith",
            role: "Chief Product Officer, Nimbus",
            avatarSrc: "https://i.pravatar.cc/150?img=47",
            variant: "navy",
            layout: "card",
        },
        { type: "stat", value: "4", label: "programmatic formats in one unit" },
        { type: "heading", text: "Achieving a Native Feel" },
        {
            type: "paragraph",
            text: "Nimbus works with 45+ demand partners in the core auction, and we make each creative asset they send look great within the custom-designed Dynamic Unit. Once you've specified your design, there is no extra work: the Nimbus SDK automatically places the winning creative to best fit your container — resizing, scaling, or letterboxing as appropriate, or not scaling at all. The decisions are in your hands.",
        },
        {
            type: "paragraph",
            text: "Depending on your implementation, your CPMs might not be as high as a static-only or video-only unit, but they will almost certainly be significantly higher than the CPMs from native programmatic ads. And you can A/B test to find the best performance for your app.",
        },
        {
            type: "imageryIdea",
            caption: "a single Dynamic Unit container morphing to fit static, video, and interstitial creatives while the app chrome stays put.",
        },
        { type: "heading", text: "How Top Publishers Use the Dynamic Unit" },
        {
            type: "paragraph",
            lead: "Timehop",
            text: "deploys Snapchat-style, full-screen interstitial ads — auto-muted, without a close button or ad timers. Users swipe right to advance, up for a click-through.",
        },
        {
            type: "paragraph",
            lead: "Tumblr",
            text: "deploys a publisher native ad that scrolls along with in-app content, then appears full-screen before the user swipes it away.",
        },
        {
            type: "paragraph",
            lead: "Imgur",
            text: "uses the Dynamic Unit similarly to Timehop, serving ads within a swipe-based in-app experience.",
        },
        { type: "stat", value: "3", label: "flagship apps already ship it" },
        {
            type: "quote",
            text: "Timehop, Tumblr, and Imgur all ship completely different-looking units — and they all pull from the same full programmatic auction underneath. That's the whole point of the Dynamic Unit.",
            attribution: "Nimbus Ad Ops",
            role: "Publisher Solutions",
            variant: "navy",
            layout: "card",
        },
        {
            type: "faq",
            items: [
                {
                    question: "Is it difficult to implement?",
                    answer: "No. It's only slightly more complex than a general Nimbus implementation. Most of the lift comes with customizations, which are up to you and can expand over time.",
                },
                {
                    question: "Am I limited to programmatic interstitial?",
                    answer: "No. You can also run static, video, and Meta native. Because static, MRAID, and VAST demand tends to outperform native programmatic in these units, few publishers end up implementing native programmatic — but we'll help if you want it.",
                },
                {
                    question: "Is the Dynamic Unit oRTB compliant?",
                    answer: "Yes. It uses the oRTB spec and is fully compliant with all standards for proper performance and reporting.",
                },
            ],
        },
        {
            type: "cta",
            heading: "Get started with Nimbus",
            description: "Reach out to your Nimbus Account Manager to learn more about the Dynamic Unit, or get started at nimbus.co.",
        },
    ],
};

export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched07 } };
