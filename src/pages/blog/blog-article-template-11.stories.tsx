import type { Meta, StoryObj } from "@storybook/react-vite";
import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import { NimbusBlogPost } from "./nimbus-blog-post";

/**
 * An enriched variant of the Floors article (index 2): the real body copy
 * interleaved with enrichment blocks (stat, statGrid, keyTakeaway, imageryIdea)
 * to show how ArticleBody breaks up a content-rich house-style post.
 */
const enriched11: NimbusArticle = {
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
        {
            type: "paragraph",
            text: "Floors are how publishers push back. Used well, they are one of the few levers in programmatic that the publisher controls completely.",
        },
        { type: "stat", value: "+33%", label: "median eCPM lift with granular floors" },
        {
            type: "quote",
            text: "Trust the market to find the price. Don't trust it to protect yours — that's the floor's job.",
            attribution: "Nimbus Yield Team",
            role: "Publisher pricing strategy",
            variant: "pink",
            layout: "centered",
        },
        { type: "heading", text: "What a floor actually does" },
        {
            type: "paragraph",
            text: "A floor is a minimum price for your inventory: bids below it don't win, no matter what. Its real function is behavioral — a floor tells bidding algorithms that the discount-hunting stops here, restoring competitive pressure that bid shading quietly removes. Floors keep DSPs honest.",
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
            type: "paragraph",
            text: "Nimbus flooring is built for that granularity. Publishers can set and adjust floors across the dimensions where value actually varies — geo, ad type, and size — and refine them as reporting reveals what each slice commands. Identified and anonymous traffic behave differently in the auction, and your flooring strategy can account for that.",
        },
        {
            type: "metricsTable",
            title: "Floored vs. unfloored eCPM by geo",
            description: "Same inventory, one 30-day flight — the only change is a geo-level floor on the top slices.",
            rows: [
                { geo: "US", unflooredEcpm: "$4.10", flooredEcpm: "$5.60", lift: "+37%" },
                { geo: "UK", unflooredEcpm: "$3.40", flooredEcpm: "$4.55", lift: "+34%" },
                { geo: "DE", unflooredEcpm: "$3.05", flooredEcpm: "$3.95", lift: "+30%" },
                { geo: "JP", unflooredEcpm: "$2.90", flooredEcpm: "$3.70", lift: "+28%" },
            ],
        },
        { type: "heading", text: "Dynamic floors: pricing that keeps up" },
        {
            type: "paragraph",
            text: "Markets move. Demand surges around seasonal spend, softens in slow weeks, and shifts as buyers come and go. A static floor that was right in March can be wrong in June. Dynamic floors adjust to those conditions, keeping pricing competitive without manually re-deriving the right number every week. For publishers without a dedicated yield team, this is the difference between flooring as a strategy and flooring as a setup task that quietly goes stale.",
        },
        {
            type: "stackRadar",
            title: "Nimbus dynamic flooring vs. a static global floor",
            data: [
                { dimension: "Pricing control", Nimbus: 9, "Legacy stack": 5 },
                { dimension: "Fill retention", Nimbus: 8, "Legacy stack": 6 },
                { dimension: "Granularity", Nimbus: 9, "Legacy stack": 4 },
                { dimension: "Adaptivity", Nimbus: 9, "Legacy stack": 4 },
                { dimension: "Low effort", Nimbus: 8, "Legacy stack": 5 },
            ],
        },
        {
            type: "quote",
            text: "A static floor makes one decision, once. A dynamic floor makes it again every time the auction changes.",
            attribution: "Nimbus Yield Team",
            role: "Dynamic flooring",
            variant: "pink",
            layout: "centered",
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
        {
            type: "keyTakeaway",
            text: "A floor is a dial, not a switch — set the terms the market has to beat.",
        },
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
            eyebrow: "Floors",
            heading: "Flooring questions publishers ask us",
            description: "The practical concerns that come up before turning floors on.",
            items: [
                {
                    question: "Won't floors cost me fill?",
                    answer: "Sometimes a little — that's the tradeoff being managed. A floor too high costs impressions; a floor too low or absent costs price. The goal is the level where the eCPM gain outweighs the fill loss, and Nimbus finds it by moving in steps, not leaps.",
                },
                {
                    question: "Do I need a yield team to run dynamic floors?",
                    answer: "No. Dynamic floors adjust to demand conditions automatically, so pricing keeps up without anyone re-deriving the right number every week. That's the difference between flooring as a strategy and flooring as a setup task that quietly goes stale.",
                },
                {
                    question: "How granular can Nimbus floors get?",
                    answer: "Floors can be set and adjusted across geo, ad type, and size — the dimensions where value actually varies — and refined as reporting reveals what each slice commands. Identified and anonymous traffic can be treated differently too.",
                },
                {
                    question: "How fast do floors show up in reporting?",
                    answer: "Baseline eCPM and fill are visible from day one, and floored vs. unfloored performance is broken out by geo and format so you can watch the auction respond before scaling to more slices.",
                },
            ],
        },
        {
            type: "cta",
            heading: "Get started with Nimbus",
            description: "Walk through your current floor setup with a Nimbus Account Manager and find where there's room to work.",
            primaryLabel: "Talk to Nimbus",
            primaryHref: "https://nimbus.co",
        },
    ],
};

/**
 * Blog Article Template 11 — the custom Nimbus house-style post layout
 * (NimbusBlogPost), rendered with each of the four real Nimbus articles.
 */
const meta = {
    title: "Blog Layouts/Blog Article Template/11",
    component: NimbusBlogPost,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NimbusBlogPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicUnit: Story = { name: "The Nimbus Dynamic Unit", args: { article: nimbusArticles[0] } };
export const AdQuality: Story = { name: "Ad Quality", args: { article: nimbusArticles[1] } };
export const Floors: Story = { name: "Floors: Pricing Power", args: { article: nimbusArticles[2] } };
export const Prebid: Story = { name: "Prebid Is Now Live", args: { article: nimbusArticles[3] } };
export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched11 } };
