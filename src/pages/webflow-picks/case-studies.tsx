import { Check, Copy01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { ArticleBody } from "@/pages/blog/article-body";
import { nimbusArticles, type NimbusArticle } from "@/content/blog/nimbus-articles";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";
import { BlogThumbnailCard, type WebflowArticle } from "./blog-thumbnail-card";
import { toMonthYear } from "./format-date";

/** A floating stat card overlaid on the case-study hero (e.g. the Tumblr lift figures). */
export type HeroStat = {
    value: string;
    label: string;
    sublabel: string;
    variant: "teal" | "pink";
};

const HERO_STAT_ACCENT: Record<HeroStat["variant"], string> = {
    teal: "#08c6c7",
    pink: "#dc438c",
};

/** Up arrow inside a filled circle — the icon used on the hero stat cards (from references/071726). */
const ArrowUpCircle = ({ fill, className }: { fill: string; className?: string }) => (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 46C36.1502 46 46 36.1502 46 24C46 11.8497 36.1502 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1502 11.8497 46 24 46ZM24 34C22.8954 34 22 33.1046 22 32V20.8284L17.4142 25.4142C16.6332 26.1952 15.3668 26.1952 14.5858 25.4142C13.8047 24.6332 13.8047 23.3668 14.5858 22.5858L22.5858 14.5858C23.3668 13.8047 24.6332 13.8047 25.4142 14.5858L33.4142 22.5858C34.1952 23.3668 34.1952 24.6332 33.4142 25.4142C32.6332 26.1952 31.3668 26.1952 30.5858 25.4142L26 20.8284V32C26 33.1046 25.1046 34 24 34Z"
            fill={fill}
        />
    </svg>
);

/** The pink/teal "lift" cards floated over the Tumblr hero image. */
const HeroStatCard = ({ stat, className }: { stat: HeroStat; className?: string }) => {
    const accent = HERO_STAT_ACCENT[stat.variant];
    return (
        <div className={cx("rounded-2xl border-2 bg-white p-4 shadow-lg md:p-6", className)} style={{ borderColor: accent }}>
            <div className="flex items-center gap-2.5 md:gap-3">
                <ArrowUpCircle fill={accent} className="size-8 shrink-0 md:size-11" />
                <span className="text-[32px] leading-none font-black text-[#181d27] md:text-[56px]">{stat.value}</span>
            </div>
            <hr className="my-2.5 border-0 border-t border-black/10 md:my-3.5" />
            <p className="text-[13px] font-semibold md:text-[15px]" style={{ color: accent }}>
                {stat.label}
            </p>
            <p className="text-[13px] text-[#535862] md:text-[15px]">{stat.sublabel}</p>
        </div>
    );
};

/**
 * Webflow Picks — Case Studies.
 *
 * A fork of template 02 (ContentLargeImage01 + a "From the blog" grid) for the
 * Webflow port: byline authors and their avatars are removed, posts are stamped
 * by month/year only, and cards/filters use the Webflow Picks taxonomy
 * (Case Study, News, Announcement, Product). Avatars inside the article body
 * (pull quotes, testimonials) are intentionally kept.
 */
const ContentLargeImage01 = ({ article, heroStats }: { article: NimbusArticle; heroStats?: HeroStat[] }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">{article.category.name}</span>
                        <h1 className="mt-3 text-display-md font-extrabold text-primary md:text-display-lg">{article.title}</h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">{article.summary}</p>
                    </div>
                    <div className="mt-8 flex gap-2">
                        {article.tags.map((tag) => (
                            <Badge key={tag.name} type="color" color={tag.color} size="md">
                                {tag.name}
                            </Badge>
                        ))}
                    </div>
                </div>
                {heroStats && heroStats.length > 0 ? (
                    <div className="relative mx-auto mt-12 w-full max-w-xl md:mt-16">
                        <img src={article.heroImage} alt={article.heroImageAlt} className="w-full rounded-2xl object-cover" />
                        <HeroStatCard
                            stat={heroStats[0]}
                            className="absolute top-2 right-2 w-[160px] sm:top-6 sm:right-0 sm:w-[220px] md:w-[280px] lg:-right-16"
                        />
                        {heroStats[1] && (
                            <HeroStatCard
                                stat={heroStats[1]}
                                className="absolute bottom-2 left-2 w-[160px] sm:bottom-6 sm:left-0 sm:w-[220px] md:w-[280px] lg:-left-16"
                            />
                        )}
                    </div>
                ) : (
                    <img src={article.heroImage} alt={article.heroImageAlt} className="mt-12 h-80 w-full rounded-2xl object-cover md:mt-16 md:h-160" />
                )}
            </div>
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto max-w-prose md:max-w-180">
                    <ArticleBody blocks={article.body} className="mx-auto max-w-none" />

                    <div className="-mt-px flex flex-col items-start justify-between gap-y-8 border-t border-secondary pt-6 md:flex-row md:items-center">
                        <div className="flex flex-col">
                            <p className="text-md font-semibold text-primary md:text-lg">{article.category.name}</p>
                            <p className="text-md text-tertiary">{toMonthYear(article.publishedAt)}</p>
                        </div>

                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.adsbynimbus.com/")} iconLeading={copied ? Check : Copy01}>
                                {copied ? "Copied" : "Copy link"}
                            </Button>
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const articles: WebflowArticle[] = [
    {
        id: "article-1",
        title: "Ad quality review best practices",
        summary: "How to review the ads that actually served in your app and block surgically without sacrificing revenue.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-hpjSkU2UYSU.jpg",
        publishedAt: "20 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Presentation", color: "pink", href: "#" },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Migrating to in-app header bidding 101",
        summary: "In-app header bidding gave publishers a better auction. Here is how to migrate without losing fill.",
        href: "#",
        category: { name: "News", href: "#" },
        thumbnailUrl: "unsplash/mobile-phone-app-technology/mobile-phone-app-technology-w33-zg-dNL4.jpg",
        publishedAt: "19 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Product", color: "sky", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3",
        title: "Building your in-app bidding stack",
        summary: "The rise of in-app bidding has been met by a rise in tools for pricing, quality, and reporting.",
        href: "#",
        category: { name: "Announcement", href: "#" },
        thumbnailUrl: "unsplash/server-network-data-center/server-network-data-center-VHmBX7FnXw0.jpg",
        publishedAt: "18 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Ad Tech", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3.5",
        title: "Floors are a publisher's pricing power",
        summary: "How top publishers turn floors into pricing power and set the terms the market has to beat.",
        href: "#",
        category: { name: "Case Study", href: "#" },
        thumbnailUrl: "unsplash/modern-office-business-team/modern-office-business-team-l90zRbWvCoE.jpg",
        publishedAt: "17 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Leadership", color: "brand", href: "#" },
            { name: "Management", color: "slate", href: "#" },
        ],
    },
];

const BlogSectionSimpleLeftAligned02 = () => {
    return (
        <section className="bg-[#f9f7f3] py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-display-sm font-extrabold text-primary md:text-display-md">From the blog</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Monetization strategy, product deep-dives, and ad-tech insights.</p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2">
                    {articles.slice(0, 4).map((article) => (
                        <li key={article.id}>
                            <BlogThumbnailCard article={article} />
                        </li>
                    ))}
                </ul>

                <div className="mt-12 flex flex-col gap-3 border-secondary md:mt-16 md:flex-row md:justify-end md:border-t md:pt-4">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};

const WebflowPicksCaseStudies = ({ article = nimbusArticles[0], heroStats }: { article?: NimbusArticle; heroStats?: HeroStat[] }) => {
    return (
        <div className="bg-[#f9f7f3]">
            <NimbusHeader />

            <ContentLargeImage01 article={article} heroStats={heroStats} />

            <SectionDivider />

            <BlogSectionSimpleLeftAligned02 />

            <NimbusFooter />
        </div>
    );
};

export default WebflowPicksCaseStudies;
