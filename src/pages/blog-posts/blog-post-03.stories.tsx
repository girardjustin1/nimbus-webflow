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
            text: "In-app bidding gave publishers a better auction. It also handed pricing leverage to the buy side in ways that are easy to miss.",
        },
        {
            type: "paragraph",
            text: "DSPs are optimized to spend as little as possible for the same outcome. That's not bad behavior — it's their job. Bidding algorithms learn the minimum price your inventory will accept, and without resistance, they'll find it. The result is a market that drifts toward the lowest tolerable price, one fractional bid adjustment at a time.",
        },
        { type: "stat", value: "42%", label: "revenue increase Tumblr saw with Nimbus" },
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
            text: "A floor is a dial, not a switch — set the terms the market has to beat.",
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
            type: "statGrid",
            stats: [
                { value: "31%", label: "avg lift with Nimbus+" },
                { value: "24%", label: "avg lift with Nimbus Core" },
                { value: "60+", label: "demand sources" },
            ],
        },
        {
            type: "paragraph",
            text: "Nimbus flooring is built for that granularity. Publishers can set and adjust floors across the dimensions where value actually varies — geo, ad type, and size — and refine them as reporting reveals what each slice commands. Identified and anonymous traffic behave differently in the auction, and your flooring strategy can account for that.",
        },
        { type: "heading", text: "Dynamic floors: pricing that keeps up" },
        {
            type: "paragraph",
            text: "Markets move. Demand surges around seasonal spend, softens in slow weeks, and shifts as buyers come and go. A static floor that was right in March can be wrong in June. Dynamic floors adjust to those conditions, keeping pricing competitive without manually re-deriving the right number every week. For publishers without a dedicated yield team, this is the difference between flooring as a strategy and flooring as a setup task that quietly goes stale.",
        },
        { type: "heading", text: "A practical way to start" },
        {
            type: "list",
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
    ],
};

const meta = {
    title: "Blog Layouts/Blog Article Template/03",
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
