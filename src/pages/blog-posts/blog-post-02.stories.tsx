import type { Meta, StoryObj } from "@storybook/react-vite";
import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import BlogPost02 from "./blog-post-02";

/** The Ad Quality article (index 1) with enrichment sections woven between the copy. */
const enriched02: NimbusArticle = {
    ...nimbusArticles[1],
    body: [
        {
            type: "paragraph",
            text: "Ask any publisher what they fear most about advertising and the answer is rarely about revenue. It's about the ad they never saw coming: the misleading creative, the offensive category, the broken video that froze their app — and the one-star review that followed.",
        },
        {
            type: "paragraph",
            text: "Your app's rating is an asset. Most apps spend years earning it, and monetization is one of the few things that can damage it quickly. Protecting that rating is part of a monetization platform's job — and it's one reason ad quality tooling has been part of Nimbus since the beginning. This is how we approach it.",
        },
        { type: "stat", value: "1★", label: "the review one bad ad can leave behind" },
        {
            type: "statGrid",
            stats: [
                { value: "99.9%", label: "Creative render rate" },
                { value: "2.4M+", label: "Creatives validated monthly" },
                { value: "3,800+", label: "Advertisers & creatives blocked", trend: "positive" },
                { value: "4.8★", label: "Avg store rating protected", trend: "positive" },
            ],
        },
        { type: "heading", text: "Quality starts before the ad ever renders" },
        {
            type: "paragraph",
            text: "Some quality problems aren't about offensive content — they're about ads that simply fail. An auction is won, the creative never renders, and the result is a blank container and a janky experience. Worse, a won auction that doesn't render isn't a billable impression — money left on the table.",
        },
        {
            type: "paragraph",
            text: "Creative validation sits at the core of how Nimbus works, and at the core of our patent: before a winning bid is passed through, Nimbus confirms the ad will actually render. Broken creative is caught in the auction pipeline, not in your app.",
        },
        {
            type: "quote",
            variant: "navy",
            layout: "border",
            text: "Nearly every ad we serve renders on the first try. The ones that don't never reach a user's screen — they're caught in the pipeline, before they can turn into a blank container or a bad review.",
            attribution: "Priya Anand",
            role: "Director of Product, Ad Quality at Nimbus",
        },
        { type: "heading", text: "Blocking, at every level that matters" },
        {
            type: "paragraph",
            text: "When something gets through that you never want to see again, blocking is your control surface. Within Nimbus, publishers can block:",
        },
        {
            type: "list",
            items: [
                "Individual creatives — block a single bad creative by its creative ID, without touching the advertiser's other campaigns.",
                "Advertisers — remove a specific advertiser from your auction entirely.",
                "Categories — exclude entire content categories that don't belong in your app.",
                "Apps — block app-install campaigns you don't want appearing in your experience.",
            ],
        },
        {
            type: "paragraph",
            text: "Granularity matters because blunt instruments cost money. Blocking an entire category to stop one bad actor sacrifices revenue you didn't need to give up. The right tool removes exactly the thing that's hurting you and nothing else.",
        },
        { type: "heading", text: "See what actually ran" },
        { type: "imageryIdea", caption: "creative review dashboard showing the ads that actually served, with per-creative block controls and associated revenue in view" },
        {
            type: "paragraph",
            text: "Blocklists built on suspicion are guesswork. Nimbus' creative review lets you see the ads that actually served in your app, so quality decisions are based on what ran rather than what you suspect ran.",
        },
        {
            type: "quote",
            variant: "navy",
            layout: "border",
            text: "We stopped blocking whole categories on a hunch. Now we open creative review, find the exact creative behind a complaint, and block that one thing — the rest of the demand keeps earning.",
            attribution: "Marcus Lee",
            role: "Head of Monetization, mobile publisher",
        },
        { type: "heading", text: "Make quality decisions with the tradeoff in view" },
        {
            type: "paragraph",
            text: "Every block has a revenue consequence, and pretending otherwise doesn't help. Nimbus reporting shows the revenue associated with what you're considering blocking, so you can weigh the decision honestly. Sometimes the answer is yes — the point is that it should be your decision, made with real numbers, not a discovery on next month's invoice.",
        },
        { type: "heading", text: "A practical cadence for publishers" },
        {
            type: "list",
            items: [
                "Review monthly. Look at what served, not just what earned.",
                "Block surgically. Start with the creative or advertiser, not the category. Escalate only if the pattern repeats.",
                "Check the revenue context. Look at associated revenue before and after each block.",
                "Watch render rate. An ad that doesn't render is a quality failure too.",
            ],
        },
        {
            type: "checklist",
            heading: "Your monthly blocking cadence",
            items: [
                "Open creative review and scan the ads that actually served this month",
                "Flag any misleading, offensive, or off-brand creative you spot",
                "Block at the tightest level that fixes it — creative ID first, advertiser next",
                "Check the associated revenue before you confirm each block",
                "Confirm render rate held above 99% across your placements",
            ],
        },
        { type: "heading", text: "Defense is part of the job" },
        {
            type: "paragraph",
            text: "Monetization teams spend most of their energy on offense: more demand, better floors, higher eCPMs. Quality is the defensive side of the same job, and the publishers with the strongest long-term revenue treat it that way — because retention, ratings, and revenue are the same flywheel. Your reviews took years to earn; your ad stack should help you keep them.",
        },
        {
            type: "keyTakeaway",
            text: "Your reviews took years to earn. Your ad stack should help you keep them.",
        },
        {
            type: "paragraph",
            text: "Reach out to your Nimbus Account Manager to review your blocking setup, or get started at nimbus.co.",
        },
        {
            type: "faq",
            eyebrow: "Ad Quality",
            heading: "Questions publishers ask about ad quality",
            description: "How creative validation, blocking, and revenue-aware review work inside Nimbus.",
            items: [
                {
                    question: "How does Nimbus stop a broken ad before it reaches my users?",
                    answer: "Creative validation runs inside the auction pipeline. Before a winning bid is passed through, Nimbus confirms the ad will actually render — so broken creative is caught before it ever reaches your app, not after a user sees a blank container. That's how render rate stays above 99%.",
                },
                {
                    question: "Can I block one bad creative without losing the advertiser's other campaigns?",
                    answer: "Yes. You can block an individual creative by its creative ID and leave the rest of that advertiser's demand untouched. You can also escalate to blocking the advertiser, a whole category, or specific app-install campaigns when the pattern warrants it.",
                },
                {
                    question: "Will I be able to see the revenue I'm giving up when I block something?",
                    answer: "Nimbus reporting shows the revenue associated with what you're considering blocking, so you can weigh each decision with real numbers instead of discovering the cost on next month's invoice.",
                },
                {
                    question: "How often should my team review ad quality?",
                    answer: "A monthly cadence works for most publishers: review what actually served, block surgically starting with the creative or advertiser, check the revenue context, and confirm render rate held. Escalate to broader blocks only if a pattern repeats.",
                },
            ],
        },
        {
            type: "cta",
            heading: "Get started with Nimbus",
            description: "Reach out to your Nimbus Account Manager to review your blocking setup and creative review dashboard, or get started at nimbus.co.",
            primaryLabel: "Talk to Nimbus",
            primaryHref: "#",
        },
    ],
};

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
export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched02 } };
