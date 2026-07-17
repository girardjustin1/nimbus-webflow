import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

/**
 * Enriched variants of the real Nimbus articles — the published body copy
 * interleaved with enrichment blocks (stat, statGrid, quote, checklist,
 * keyTakeaway, imageryIdea, charts, faq) to show how ArticleBody breaks up a
 * content-rich post.
 *
 * These live here rather than inside a *.stories.tsx file so they can be shared
 * by more than one story (the Blog Article Templates set and the Webflow Picks
 * set both render them) without duplicating the content.
 */

/** The Ad Quality article (index 1) with enrichment sections woven between the copy. */
export const enriched02: NimbusArticle = {
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
 * An enriched variant of the Floors article (index 2): the real body copy
 * interleaved with enrichment blocks (stat, statGrid, keyTakeaway, imageryIdea)
 * to show how ArticleBody breaks up a content-rich house-style post.
 */
export const enriched11: NimbusArticle = {
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
 * The Tumblr case study, adapted from the live page at
 * https://www.adsbynimbus.com/tumblr-case-study into the Nimbus article
 * content model. Renders through the Case Studies template (BlogPost02).
 */
export const tumblrCaseStudy: NimbusArticle = {
    id: "tumblr-case-study",
    slug: "tumblr-case-study",
    href: "#",
    title: "Tumblr drives significant monetization gains after migrating to Nimbus full-stack mediation",
    summary:
        "Tumblr achieved a 42% combined revenue lift and an 87% rCPM increase across iOS and Android after migrating from a layered auction to Nimbus full-stack mediation. Here's how unified auction dynamics drove the results.",
    category: { name: "Case Study: Tumblr", href: "#" },
    author: { name: "Nimbus Ad Ops", href: "#", avatarUrl: "https://i.pravatar.cc/150?img=15" },
    publishedAt: "19 May 2026",
    readingTime: "6 min read",
    thumbnailUrl: "unsplash/mobile-phone-app-technology/mobile-phone-app-technology-9e9PD9blAto.jpg",
    heroImage: "case-studies/tumblr-mobile-app.png",
    heroImageAlt: "The Tumblr mobile app interface held on a smartphone",
    tags: [
        { name: "Case Study", color: "brand", href: "#" },
        { name: "Full-Stack Mediation", color: "sky", href: "#" },
        { name: "Mobile", color: "indigo", href: "#" },
    ],
    body: [
        {
            type: "statGrid",
            stats: [
                { value: "+42%", label: "Combined revenue lift (iOS & Android avg)", trend: "positive" },
                { value: "+87%", label: "rCPM lift (iOS & Android avg)", trend: "positive" },
            ],
        },
        { type: "heading", text: "Background" },
        {
            type: "paragraph",
            text: "Tumblr is one of the internet's most recognizable platforms for creators, fandoms, and culture-driven communities. With highly engaged audiences across its mobile apps on iOS and Android, Tumblr's monetization strategy needs to support both scale and user experience — unlocking more demand without adding operational complexity.",
        },
        { type: "heading", text: "The challenge" },
        {
            type: "paragraph",
            text: "Tumblr was previously running Nimbus as a layered auction inside an existing mediation stack. While that approach introduced incremental demand, it inherently limited:",
        },
        {
            type: "list",
            items: [
                "Auction transparency and control",
                "Holistic demand competition",
                "Operational efficiency across partners",
                "Full access to the Nimbus demand ecosystem",
            ],
        },
        {
            type: "quote",
            variant: "navy",
            layout: "centered",
            text: "Layered integrations optimize around existing systems — they don't redefine the auction itself.",
        },
        {
            type: "paragraph",
            text: "Like many scaled publishers, Tumblr faced a structural constraint. For a platform of Tumblr's scale — where diverse content and engaged sessions create meaningful monetization opportunities on mobile — that limitation made it harder to fully capitalize on available demand.",
        },
        { type: "heading", text: "The solution" },
        {
            type: "paragraph",
            text: "Tumblr migrated to Nimbus as its full-stack mediation platform, replacing the layered architecture with a unified auction environment.",
        },
        {
            type: "checklist",
            heading: "The migration enabled",
            items: [
                "Full demand competition across all partners",
                "Streamlined integrations — no deep custom partner work required",
                "Real-time reporting and buyer-level visibility",
                "Centralized control over auction dynamics",
                "A true, accurate representation of auction deliverables in the post-back to demand",
            ],
        },
        {
            type: "paragraph",
            text: "By moving to full-stack mediation, Tumblr better aligned its monetization infrastructure with the scale and complexity of its product: a global platform where creators and communities across iOS and Android generate continuous, high-value engagement.",
        },
        {
            type: "quote",
            variant: "teal",
            layout: "card",
            text: "Moving to full-stack mediation helped us better align our monetization infrastructure with the scale and complexity of Tumblr's mobile experience — and the results have been significant.",
            attribution: "Julia Wilson",
            role: "Tumblr",
        },
        { type: "heading", text: "The results: post-migration vs. legacy" },
        {
            type: "performancePanels",
            panels: [
                {
                    title: "iOS Performance",
                    badge: "Mobile app",
                    metrics: [
                        { label: "rCPM", value: 87 },
                        { label: "Revenue", value: 59 },
                        { label: "eCPM", value: 43 },
                    ],
                },
                {
                    title: "Android Performance",
                    badge: "Mobile app",
                    metrics: [
                        { label: "rCPM", value: 54 },
                        { label: "Revenue", value: 25 },
                        { label: "eCPM", value: 4 },
                    ],
                },
            ],
        },
        {
            type: "quote",
            variant: "pink",
            layout: "border",
            text: "We quickly unlocked incremental demand without needing deep partner integrations, and the reporting pipelines were easy to set up.",
            attribution: "Carolina Wagner",
            role: "Tumblr",
        },
        {
            type: "keyTakeaway",
            title: "Key takeaway",
            text: "The migration drove material efficiency gains across both platforms — with particularly strong performance on iOS, where demand competition and auction dynamics were most constrained.",
        },
        {
            type: "numberedSteps",
            heading: "Structural improvements",
            description: "The performance uplift was driven by three factors:",
            steps: [
                {
                    title: "Unified auction dynamics",
                    items: ["Eliminated fragmentation between mediation layers", "Increased bid density and competition"],
                },
                {
                    title: "Expanded demand access without friction",
                    items: ["Incremental demand unlocked without deep integrations", "Faster time-to-value for new partners"],
                },
                {
                    title: "Operational clarity",
                    items: [
                        "Centralized reporting and optimization",
                        "Reduced auction waste",
                        "Accurate win/loss signals in the bidstream for all partner participants",
                    ],
                },
            ],
        },
    ],
};
