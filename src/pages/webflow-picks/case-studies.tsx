import { Badge } from "@/components/base/badges/badges";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { ArticleBody } from "@/pages/blog/article-body";
import { nimbusArticles, type NimbusArticle } from "@/content/blog/nimbus-articles";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { motion } from "motion/react";
import { cx } from "@/utils/cx";
import { CountUp } from "@/components/marketing/article-enrichments/count-up";
import { FromTheBlog } from "./from-the-blog";
import { ShareArticle } from "./share-article";
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

/** The pink/teal "lift" cards floated over the Tumblr hero image — fade/stack in, number counts up. */
const HeroStatCard = ({ stat, index = 0, className }: { stat: HeroStat; index?: number; className?: string }) => {
    const accent = HERO_STAT_ACCENT[stat.variant];
    const parts = stat.value.match(/^(\D*)(\d+)(\D*)$/);
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.22 }}
            className={cx("rounded-2xl border-2 bg-white p-4 shadow-lg md:p-6", className)}
            style={{ borderColor: accent }}
        >
            <div className="flex items-center gap-2.5 md:gap-3">
                <ArrowUpCircle fill={accent} className="size-8 shrink-0 md:size-11" />
                <span className="text-[32px] leading-none font-black text-[#181d27] tabular-nums md:text-[56px]">
                    {parts ? (
                        <>
                            {parts[1]}
                            <CountUp value={Number(parts[2])} />
                            {parts[3]}
                        </>
                    ) : (
                        stat.value
                    )}
                </span>
            </div>
            <hr className="my-2.5 border-0 border-t border-black/10 md:my-3.5" />
            <p className="text-[13px] font-semibold md:text-[15px]" style={{ color: accent }}>
                {stat.label}
            </p>
            <p className="text-[13px] text-[#535862] md:text-[15px]">{stat.sublabel}</p>
        </motion.div>
    );
};

/**
 * Webflow Guide — Case Studies.
 *
 * A fork of template 02 (ContentLargeImage01 + a "From the blog" grid) for the
 * Webflow port: byline authors and their avatars are removed, posts are stamped
 * by month/year only, and cards/filters use the Webflow Guide taxonomy
 * (Case Study, News, Announcement, Product). Avatars inside the article body
 * (pull quotes, testimonials) are intentionally kept.
 */
const ContentLargeImage01 = ({ article, heroStats }: { article: NimbusArticle; heroStats?: HeroStat[] }) => {
    return (
        <div className="bg-[#f9f7f3]">
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">{article.category.name}</span>
                        <h1 className="mt-3 text-display-md font-extrabold text-primary md:text-display-lg">{article.title}</h1>
                        <p className="mt-4 text-md text-tertiary md:mt-5">
                            {toMonthYear(article.publishedAt)} · {article.readingTime}
                        </p>
                    </div>
                    <div className="mt-8 flex gap-2">
                        {article.tags.map((tag) => (
                            <Badge key={tag.name} type="color" color={tag.color} size="md">
                                {tag.name}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className="relative mt-12 md:mt-16">
                    <img src={article.heroImage} alt={article.heroImageAlt} className="h-80 w-full rounded-2xl object-cover md:h-160" />
                    {heroStats && heroStats.length > 0 && (
                        <>
                            <HeroStatCard
                                stat={heroStats[0]}
                                index={0}
                                className="absolute top-3 right-3 w-[150px] sm:top-6 sm:right-6 sm:w-[230px] md:top-8 md:right-8 md:w-[300px]"
                            />
                            {heroStats[1] && (
                                <HeroStatCard
                                    stat={heroStats[1]}
                                    index={1}
                                    className="absolute bottom-3 left-3 w-[150px] sm:bottom-6 sm:left-6 sm:w-[230px] md:bottom-8 md:left-8 md:w-[300px]"
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto max-w-prose md:max-w-180">
                    <ArticleBody blocks={article.body} className="mx-auto max-w-none" />

                    <ShareArticle heading="Share this case study" />
                </div>
            </div>
        </div>
    );
};

const WebflowPicksCaseStudies = ({ article = nimbusArticles[0], heroStats }: { article?: NimbusArticle; heroStats?: HeroStat[] }) => {
    return (
        <div className="bg-[#f9f7f3]">
            <NimbusHeader />

            <ContentLargeImage01 article={article} heroStats={heroStats} />

            <SectionDivider />

            <FromTheBlog />

            <NimbusFooter />
        </div>
    );
};

export default WebflowPicksCaseStudies;
