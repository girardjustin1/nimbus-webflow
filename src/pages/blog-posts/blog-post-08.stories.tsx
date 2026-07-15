import type { Meta, StoryObj } from "@storybook/react-vite";
import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import BlogPost08 from "./blog-post-08";

/**
 * Blog Article Template 08, rendered with each of the four real Nimbus articles
 * to see how the template adapts to actual content.
 */
const meta = {
    title: "Blog Layouts/Blog Article Template/08",
    component: BlogPost08,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogPost08>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = { name: "The Nimbus Dynamic Unit", args: { article: nimbusArticles[0] } };
export const AdQuality: Story = { name: "Ad Quality", args: { article: nimbusArticles[1] } };
export const Floors: Story = { name: "Floors: Pricing Power", args: { article: nimbusArticles[2] } };
export const Prebid: Story = { name: "Prebid Is Now Live", args: { article: nimbusArticles[3] } };

const enriched08: NimbusArticle = {
    ...nimbusArticles[3],
    body: [
        {
            type: "paragraph",
            text: "The in-app monetization stack has a tendency to accumulate. A wrapper here, an SDK bidder there, a mediation layer on top, a few server hops underneath. Every addition promises more competition. Most of it adds weight, latency, and one more place where the auction stops being a fair fight.",
        },
        {
            type: "paragraph",
            text: "Today we're closing one of those gaps the right way. Prebid's auction demand is now live on Nimbus, giving publishers access to Prebid-native server-side demand that has historically been difficult to operationalize in mobile app environments — with no new SDK.",
        },
        {
            type: "keyTakeaway",
            text: "Every bid competes on the same terms. That's the whole design.",
        },
        { type: "heading", text: "Access the demand, skip the SDK tax" },
        {
            type: "paragraph",
            text: "Bringing Prebid demand into an app has usually meant bringing in more app. Another SDK to install, another dependency to maintain, more startup latency, more crash surface, more weight in a build that's already carrying too much.",
        },
        {
            type: "paragraph",
            text: "Nimbus connects Prebid Server demand server-to-server, through the integration you already have. No additional SDK. Your app size, startup time, and crash profile stay exactly where they are. The demand shows up. The overhead doesn't.",
        },
        {
            type: "checklist",
            heading: "Prebid on Nimbus",
            items: [
                "No new SDK — server-to-server",
                "One unified auction, one set of rules",
                "Accurate win/loss signaling",
                "A cleaner supply path for buyers",
            ],
        },
        { type: "heading", text: "One auction, one set of rules" },
        {
            type: "paragraph",
            text: "Most stacks don't run one auction. They run several — a wrapper deciding one thing, SDK bidders deciding another, a mediation layer arbitrating on top, server participants settling somewhere underneath. Decisioning gets fragmented across hops, and 'competition' starts to mean 'whoever the architecture happened to favor.'",
        },
        {
            type: "paragraph",
            text: "On Nimbus, Prebid Server demand competes in the same unified auction as every other source, under the same normalized rules. One environment. One set of signals. The highest bid wins, no matter the source — including this one. Prebid demand doesn't get a head start, and it doesn't get held back. It bids, and the auction decides.",
        },
        {
            type: "quote",
            text: "Most stacks add demand by adding architecture. That's backwards.",
            attribution: "Kristen Smith, Chief Product Officer, Nimbus", avatarSrc: "https://i.pravatar.cc/150?img=47",
        },
        { type: "heading", text: "Accurate signals in, accurate optimization out" },
        {
            type: "paragraph",
            text: "Demand partners can only optimize against the feedback they receive. When win and loss signaling is distorted — inconsistent across wrappers, lost in a server hop, or quietly reshaped inside a managed side auction — partners end up bidding against a picture of the auction that isn't real.",
        },
        {
            type: "paragraph",
            text: "Nimbus passes accurate win/loss signaling to every participant. Prebid Server demand sees what actually happened, which means it can optimize correctly instead of chasing a distorted loop. No double dipping. No preferred networks. No shadow economics running in the background with their own scorekeeping.",
        },
        { type: "heading", text: "A cleaner supply path for buyers" },
        {
            type: "paragraph",
            text: "DSPs are paying closer attention than ever to where their supply comes from and whether the path is honest. Accurate outcome representation and consistent signaling make Nimbus an easy supply path to trust — clean, agnostic, and free of the opaque intermediary auctions that erode supply-path efficiency. Better signaling on the publisher side is better SPO on the buyer side.",
        },
        { type: "heading", text: "Infrastructure that doesn't need rebuilding" },
        {
            type: "paragraph",
            text: "The pace of change in this space isn't slowing down. New wrappers, new endpoints, new server-side innovations keep arriving, and publishers who hard-wire their monetization to any one of them end up rebuilding every time the ground shifts.",
        },
        {
            type: "paragraph",
            text: "Adding Prebid Server demand to Nimbus is one integration into a system designed to absorb the next one too. You adopt server-side innovation as it emerges, without re-architecting your stack to do it. Fewer custom integrations. Fewer moving parts. Less engineering overhead carried forward.",
        },
        {
            type: "quote",
            text: "Most stacks add demand by adding architecture — another SDK, another wrapper, another auction running quietly off to the side. That's backwards. The job is to let more demand compete without making the system heavier or less fair. Every bid competes on the same terms. That's the whole design.",
            attribution: "Kristen Smith, Chief Product Officer, Nimbus", avatarSrc: "https://i.pravatar.cc/150?img=47",
        },
        { type: "heading", text: "Activating Prebid Server demand" },
        {
            type: "paragraph",
            text: "Already a Nimbus publisher? Reach out to your Account Manager to turn on Prebid Server demand — no new integration required. New to Nimbus and want to see how it works in your stack? Request a demo at nimbus.co, and we'll walk through a test setup.",
        },
    ],
};

export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched08 } };
