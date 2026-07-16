import type { Meta, StoryObj } from "@storybook/react-vite";
import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import BlogPost03 from "./blog-post-03";

/**
 * Blog Article Template 03, rendered with each of the four real Nimbus articles
 * to see how the template adapts to actual content.
 */

/** Floors article, enriched with metrics and a key-takeaway woven between the copy. */
const enriched02: NimbusArticle = {
    ...nimbusArticles[2],
    body: [
        {
            type: "paragraph",
            lead: "In-app bidding gave publishers a better auction.",
            text: "It also handed pricing leverage to the buy side in ways that are easy to miss.",
        },
        {
            type: "paragraph",
            text: "DSPs are optimized to spend as little as possible for the same outcome. That's not bad behavior — it's their job. Bidding algorithms learn the minimum price your inventory will accept, and without resistance, they'll find it. The result is a market that drifts toward the lowest tolerable price, one fractional bid adjustment at a time.",
        },
        {
            type: "quote",
            text: "Without a floor, the auction quietly negotiates you down to the lowest price you'll tolerate — and never tells you it happened.",
            attribution: "Priya Nair",
            role: "Director of Yield, Nimbus",
            variant: "pink",
            layout: "centered",
        },
        {
            type: "paragraph",
            text: "Floors are how publishers push back. Used well, they are one of the few levers in programmatic that the publisher controls completely.",
        },
        { type: "heading", text: "What a floor actually does" },
        {
            type: "paragraph",
            text: "A floor is a minimum price for your inventory: bids below it don't win, no matter what. Its real function is behavioral — a floor tells bidding algorithms that the discount-hunting stops here, restoring competitive pressure that bid shading quietly removes. Floors keep DSPs honest.",
        },
        {
            type: "keyTakeaway",
            title: "The leverage is yours to keep",
            text: "A floor is the one pricing lever the publisher controls completely — set the terms the market has to beat instead of accepting the price it drifts toward.",
        },
        {
            type: "paragraph",
            text: "The objection is always the same: won't floors cost me fill? Sometimes, yes — that's the tradeoff being managed. A floor set too high costs impressions; a floor set too low (or not at all) costs price. The job is finding the level where the pricing gain outweighs the fill loss, and that level is discovered, not declared.",
        },
        { type: "heading", text: "Granularity is what makes floors work" },
        {
            type: "paragraph",
            text: "A single global floor is a blunt instrument, because inventory value isn't uniform. The same placement commands different prices by geography, format, and size — and treating it all identically underprices your best impressions to protect your weakest ones.",
        },
        {
            type: "metricsTable",
            title: "Unfloored vs. floored eCPM, by geo",
            description: "A 30-day sample from a mobile gaming publisher after applying granular Nimbus floors to premium video inventory. Fill held within a point across every market.",
            rows: [
                { geo: "US", unflooredEcpm: "$4.10", flooredEcpm: "$5.78", lift: "+41%" },
                { geo: "UK", unflooredEcpm: "$3.55", flooredEcpm: "$4.72", lift: "+33%" },
                { geo: "DE", unflooredEcpm: "$3.05", flooredEcpm: "$3.88", lift: "+27%" },
                { geo: "JP", unflooredEcpm: "$2.90", flooredEcpm: "$3.63", lift: "+25%" },
            ],
        },
        { type: "stat", value: "+31%", label: "avg eCPM lift across geos" },
        {
            type: "paragraph",
            text: "Nimbus flooring is built for that granularity. Publishers can set and adjust floors across the dimensions where value actually varies — geo, ad type, and size — and refine them as reporting reveals what each slice commands. Identified and anonymous traffic behave differently in the auction, and your flooring strategy can account for that.",
        },
        { type: "heading", text: "Dynamic floors: pricing that keeps up" },
        {
            type: "paragraph",
            text: "Markets move. Demand surges around seasonal spend, softens in slow weeks, and shifts as buyers come and go. A static floor that was right in March can be wrong in June. Dynamic floors adjust to those conditions, keeping pricing competitive without manually re-deriving the right number every week. For publishers without a dedicated yield team, this is the difference between flooring as a strategy and flooring as a setup task that quietly goes stale.",
        },
        {
            type: "quote",
            text: "The floor that priced your December surge is leaving money on the table by February. Dynamic floors move so you don't have to.",
            attribution: "Marcus Feld",
            role: "Senior Yield Strategist, Nimbus",
            variant: "pink",
            layout: "centered",
        },
        { type: "heading", text: "A practical way to start" },
        {
            type: "checklist",
            heading: "Your first flooring pass",
            items: [
                "Baseline first. Pull eCPM and fill by geo and format before changing anything.",
                "Start where value is concentrated. Floor your highest-value slices first — premium geos, video, large formats.",
                "Move in steps, not leaps. Set a floor, let it run, then adjust. Floors are a dial, not a switch.",
                "Watch the auction respond. If eCPM rises and fill holds, keep going. If fill drops faster than price rises, step back.",
                "Revisit quarterly at minimum. Demand conditions change; your floors should too.",
            ],
        },
        { type: "imageryIdea", caption: "A tuning dial marked with geo, format, and size floors, nudged above the market bid line." },
        { type: "heading", text: "Pricing control is the point" },
        {
            type: "paragraph",
            text: "The shift to bidding asked publishers to trust the market. Trust is fine — leverage is better. Flooring strategy, alongside traffic shaping and transparent reporting, is how publishers regain mastery over an auction environment that was supposed to serve them. Let the market determine price — but set the terms it has to beat.",
        },
        {
            type: "paragraph",
            text: "Your Nimbus Account Manager can walk through your current floor setup and where there's room to work. Or get started at nimbus.co.",
        },
        {
            type: "faq",
            eyebrow: "Floors, answered",
            heading: "Common questions about flooring",
            description: "The practical concerns publishers raise before turning floors on.",
            items: [
                {
                    question: "Won't floors cost me fill?",
                    answer: "They can — that's the tradeoff you're managing. A floor set too high costs impressions; a floor set too low or absent costs price. The right level is where the pricing gain outweighs the fill loss, and it's discovered by testing in steps, not declared up front.",
                },
                {
                    question: "How granular can Nimbus floors get?",
                    answer: "You can set and adjust floors across the dimensions where value actually varies — geo, ad type, and size — and refine them as reporting reveals what each slice commands. Identified and anonymous traffic can be floored differently too.",
                },
                {
                    question: "What's the difference between static and dynamic floors?",
                    answer: "A static floor is a fixed number you maintain by hand; it drifts out of date as demand moves. Dynamic floors adjust to market conditions automatically, keeping pricing competitive without re-deriving the right number every week.",
                },
                {
                    question: "How often should I revisit my floors?",
                    answer: "Quarterly at minimum. Demand surges around seasonal spend and softens in slow weeks, so floors that were right last quarter can leave money on the table this one.",
                },
            ],
        },
        {
            type: "cta",
            heading: "Get started with Nimbus",
            description: "See where your current floors are leaving revenue on the table — and set the terms the market has to beat.",
            primaryLabel: "Talk to your Account Manager",
            primaryHref: "#",
        },
    ],
};

const meta = {
    title: "Blog Article Templates/03",
    component: BlogPost03,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogPost03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = { name: "The Nimbus Dynamic Unit", args: { article: nimbusArticles[0] } };
export const AdQuality: Story = { name: "Ad Quality", args: { article: nimbusArticles[1] } };
export const Floors: Story = { name: "Floors: Pricing Power", args: { article: nimbusArticles[2] } };
export const Prebid: Story = { name: "Prebid Is Now Live", args: { article: nimbusArticles[3] } };
export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched02 } };
