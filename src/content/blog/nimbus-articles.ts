import type { Article } from "@/components/marketing/blog/base-components/blog-cards";

/** A block of blog-post body content. Includes enrichment blocks that break up copy. */
export type BlogBlock =
    | { type: "heading"; text: string }
    | { type: "paragraph"; lead?: string; text: string }
    | { type: "list"; items: string[] }
    | { type: "quote"; text: string; attribution?: string; avatarSrc?: string }
    // --- enrichment blocks (rendered via article-enrichments) ---
    | { type: "stat"; value: string; label: string }
    | { type: "statGrid"; stats: { value: string; label: string }[] }
    | { type: "checklist"; heading?: string; items: string[] }
    | { type: "keyTakeaway"; title?: string; text: string }
    | { type: "imageryIdea"; caption: string }
    | { type: "faq"; eyebrow?: string; heading?: string; description?: string; items: { question: string; answer: string }[] }
    | { type: "cta"; heading?: string; description?: string; primaryLabel?: string; primaryHref?: string };

/** An Article (for cards) enriched with a slug + full body (for post pages). */
export type NimbusArticle = Article & { slug: string; body: BlogBlock[] };

const AUTHOR = {
    href: "#",
    name: "Nimbus Ad Ops",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
};

export const nimbusArticles: NimbusArticle[] = [
    {
        id: "dynamic-unit",
        slug: "nimbus-dynamic-unit",
        href: "#",
        thumbnailUrl: "https://picsum.photos/seed/nimbus-dynamic-unit/1200/800",
        title: "The Nimbus Dynamic Unit: A Native Ad Experience Without Sacrificing Demand",
        summary:
            "The Dynamic Unit is infinitely customizable to your app's look and UX — while accepting programmatic demand in multiple formats so you never trade a native feel for fill.",
        category: { href: "#", name: "Product" },
        author: AUTHOR,
        publishedAt: "14 Jul 2026",
        readingTime: "6 min read",
        isFeatured: true,
        tags: [
            { name: "Native", color: "brand", href: "#" },
            { name: "Demand", color: "sky", href: "#" },
            { name: "Dynamic Unit", color: "indigo", href: "#" },
        ],
        body: [
            { type: "heading", text: "What is the Nimbus Dynamic Unit?" },
            {
                type: "paragraph",
                text: "The Dynamic Unit is Nimbus' proprietary offering for in-app programmatic native advertising. Our incredibly flexible unit can be customized to suit almost any app's unique visual and UX needs without sacrificing available demand — resulting in a great-looking, unique ad that appeals to both publishers and buyers.",
            },
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
            { type: "heading", text: "Achieving a Native Feel" },
            {
                type: "paragraph",
                text: "Nimbus works with 45+ demand partners in the core auction, and we make each creative asset they send look great within the custom-designed Dynamic Unit. Once you've specified your design, there is no extra work: the Nimbus SDK automatically places the winning creative to best fit your container — resizing, scaling, or letterboxing as appropriate, or not scaling at all. The decisions are in your hands.",
            },
            {
                type: "paragraph",
                text: "Depending on your implementation, your CPMs might not be as high as a static-only or video-only unit, but they will almost certainly be significantly higher than the CPMs from native programmatic ads. And you can A/B test to find the best performance for your app.",
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
    },
    {
        id: "ad-quality",
        slug: "ad-quality",
        href: "#",
        thumbnailUrl: "https://picsum.photos/seed/nimbus-ad-quality/1200/800",
        title: "Your Reviews Are Part of Your Revenue: How Nimbus Approaches Ad Quality",
        summary:
            "Your app's rating took years to earn and monetization can damage it fast. Here's how Nimbus treats ad quality — creative validation, surgical blocking, and revenue-aware decisions — as part of the job.",
        category: { href: "#", name: "Ad Quality" },
        author: AUTHOR,
        publishedAt: "07 Jul 2026",
        readingTime: "5 min read",
        tags: [
            { name: "Quality", color: "brand", href: "#" },
            { name: "Publishers", color: "sky", href: "#" },
            { name: "Retention", color: "pink", href: "#" },
        ],
        body: [
            {
                type: "paragraph",
                text: "Ask any publisher what they fear most about advertising and the answer is rarely about revenue. It's about the ad they never saw coming: the misleading creative, the offensive category, the broken video that froze their app — and the one-star review that followed.",
            },
            {
                type: "paragraph",
                text: "Your app's rating is an asset. Most apps spend years earning it, and monetization is one of the few things that can damage it quickly. Protecting that rating is part of a monetization platform's job — and it's one reason ad quality tooling has been part of Nimbus since the beginning. This is how we approach it.",
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
            {
                type: "paragraph",
                text: "Blocklists built on suspicion are guesswork. Nimbus' creative review lets you see the ads that actually served in your app, so quality decisions are based on what ran rather than what you suspect ran.",
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
            { type: "heading", text: "Defense is part of the job" },
            {
                type: "paragraph",
                text: "Monetization teams spend most of their energy on offense: more demand, better floors, higher eCPMs. Quality is the defensive side of the same job, and the publishers with the strongest long-term revenue treat it that way — because retention, ratings, and revenue are the same flywheel. Your reviews took years to earn; your ad stack should help you keep them.",
            },
            {
                type: "paragraph",
                text: "Reach out to your Nimbus Account Manager to review your blocking setup, or get started at nimbus.co.",
            },
        ],
    },
    {
        id: "floors",
        slug: "floors-pricing-power",
        href: "#",
        thumbnailUrl: "https://picsum.photos/seed/nimbus-floors/1200/800",
        title: "Floors Are a Publisher's Pricing Power",
        summary:
            "Bidding handed pricing leverage to the buy side. Floors are how publishers push back — and with granular, dynamic flooring, you set the terms the market has to beat.",
        category: { href: "#", name: "Yield" },
        author: AUTHOR,
        publishedAt: "30 Jun 2026",
        readingTime: "5 min read",
        tags: [
            { name: "Floors", color: "brand", href: "#" },
            { name: "Pricing", color: "indigo", href: "#" },
            { name: "Monetization", color: "sky", href: "#" },
        ],
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
    },
    {
        id: "prebid",
        slug: "prebid-live-on-nimbus",
        href: "#",
        thumbnailUrl: "https://picsum.photos/seed/nimbus-prebid/1200/800",
        title: "Prebid Is Now Live on Nimbus",
        summary:
            "Open-source server-side demand, activated without another SDK — Prebid Server demand now competes in the Nimbus unified auction on equal terms.",
        category: { href: "#", name: "Product" },
        author: AUTHOR,
        publishedAt: "15 Jul 2026",
        readingTime: "5 min read",
        isFeatured: true,
        tags: [
            { name: "Prebid", color: "brand", href: "#" },
            { name: "Programmatic", color: "indigo", href: "#" },
            { name: "Demand", color: "sky", href: "#" },
        ],
        body: [
            {
                type: "paragraph",
                text: "The in-app monetization stack has a tendency to accumulate. A wrapper here, an SDK bidder there, a mediation layer on top, a few server hops underneath. Every addition promises more competition. Most of it adds weight, latency, and one more place where the auction stops being a fair fight.",
            },
            {
                type: "paragraph",
                text: "Today we're closing one of those gaps the right way. Prebid's auction demand is now live on Nimbus, giving publishers access to Prebid-native server-side demand that has historically been difficult to operationalize in mobile app environments — with no new SDK.",
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
            { type: "heading", text: "One auction, one set of rules" },
            {
                type: "paragraph",
                text: "Most stacks don't run one auction. They run several — a wrapper deciding one thing, SDK bidders deciding another, a mediation layer arbitrating on top, server participants settling somewhere underneath. Decisioning gets fragmented across hops, and 'competition' starts to mean 'whoever the architecture happened to favor.'",
            },
            {
                type: "paragraph",
                text: "On Nimbus, Prebid Server demand competes in the same unified auction as every other source, under the same normalized rules. One environment. One set of signals. The highest bid wins, no matter the source — including this one. Prebid demand doesn't get a head start, and it doesn't get held back. It bids, and the auction decides.",
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
    },
];

export const getArticleBySlug = (slug: string) => nimbusArticles.find((a) => a.slug === slug);
