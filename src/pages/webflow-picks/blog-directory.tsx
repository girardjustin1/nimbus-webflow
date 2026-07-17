import { useState } from "react";
import { SearchLg } from "@untitledui/icons";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";
import { BlogThumbnailCard, type WebflowArticle } from "./blog-thumbnail-card";
import { toMonthYear } from "./format-date";

/**
 * Webflow Picks — Blog Directory.
 *
 * A fork of Blog Directory / 04 (BlogHeaderSidebar02) for the Webflow port:
 * card bylines (author name + avatar) are removed, cards are stamped by
 * month/year only, and the category filters + card labels use the Webflow
 * Picks taxonomy — Case Study, News, Announcement, Product.
 */
const categories = [
    { id: "all", name: "View all", href: "#" },
    { id: "case-study", name: "Case Study", href: "#" },
    { id: "news", name: "News", href: "#" },
    { id: "announcement", name: "Announcement", href: "#" },
    { id: "product", name: "Product", href: "#" },
];

const articles: WebflowArticle[] = [
    {
        id: "article-1",
        title: "Ad quality review best practices",
        summary: "How to review the ads that actually served in your app and block surgically without sacrificing revenue.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "unsplash/abstract-technology-gradient-blue/abstract-technology-gradient-blue-r5lbaK3fDaM.jpg",
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
        thumbnailUrl: "unsplash/mobile-phone-app-technology/mobile-phone-app-technology-9e9PD9blAto.jpg",
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
        category: { name: "Product", href: "#" },
        thumbnailUrl: "unsplash/server-network-data-center/server-network-data-center-pgdaAwf6IJg.jpg",
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
        thumbnailUrl: "unsplash/advertising-billboard-city/advertising-billboard-city-bPHY2KV1Oe4.jpg",
        publishedAt: "17 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Leadership", color: "brand", href: "#" },
            { name: "Management", color: "slate", href: "#" },
        ],
    },
    {
        id: "article-4",
        title: "Yield management mental models",
        summary: "Simple mental models for yield management: a floor is a dial, not a switch.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-JKUTrJ4vK00.jpg",
        publishedAt: "16 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Product", color: "sky", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Frameworks", color: "orange", href: "#" },
        ],
    },
    {
        id: "article-5",
        title: "What is bid shading?",
        summary: "A plain-language guide to bid shading and how floors keep DSPs honest in the auction.",
        href: "#",
        category: { name: "News", href: "#" },
        thumbnailUrl: "unsplash/programmatic-advertising/programmatic-advertising-jyoSxjUE22g.jpg",
        publishedAt: "15 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-6",
        title: "How the Dynamic Unit creates a native ad experience",
        summary: "The Dynamic Unit adapts to your app's look and UX while accepting programmatic demand in multiple formats.",
        href: "#",
        category: { name: "Announcement", href: "#" },
        thumbnailUrl: "unsplash/mobile-phone-app-technology/mobile-phone-app-technology-w33-zg-dNL4.jpg",
        publishedAt: "14 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-7",
        title: "Our top 10 tactics for higher eCPMs",
        summary: "Ten practical tactics our ad ops team uses to lift eCPMs across geos, formats, and sizes.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-hpjSkU2UYSU.jpg",
        publishedAt: "13 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Ad Tech", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-8",
        title: "Podcast: Building a healthier programmatic auction",
        summary: "Building a healthier programmatic auction does not need to be complicated. Here is where to start.",
        href: "#",
        category: { name: "News", href: "#" },
        thumbnailUrl: "unsplash/server-network-data-center/server-network-data-center-VHmBX7FnXw0.jpg",
        publishedAt: "12 Jan 2026",
        readingTime: "8 min read",
        tags: [
            { name: "Podcasts", color: "brand", href: "#" },
            { name: "Publisher Success", color: "slate", href: "#" },
        ],
    },
];

const tabs = [
    { id: "all", label: "View all", href: "#" },
    { id: "case-study", label: "Case Study", href: "#" },
    { id: "news", label: "News", href: "#" },
    { id: "announcement", label: "Announcement", href: "#" },
    { id: "product", label: "Product", href: "#" },
];

const BlogHeaderSidebar02 = () => {
    const isDesktop = useBreakpoint("lg");
    const [selectedTabIndex, setSelectedTabIndex] = useState(1);

    return (
        <div className="bg-[#f9f7f3]">
            <section className="bg-[#f9f7f3] py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex w-full max-w-3xl flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Nimbus blog</span>
                        <h2 className="mt-3 text-display-md font-extrabold text-primary md:text-display-lg">Insights for in-app publishers</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Monetization strategy, product deep-dives, and ad-tech insights.</p>
                    </div>
                </div>
            </section>

            <main className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 pb-16 md:gap-16 md:px-8 md:pb-24">
                <div className="flex flex-col gap-12 md:flex-row md:gap-16">
                    <div className="flex w-full flex-col items-stretch md:max-w-70 md:gap-8">
                        <Input aria-label="Search" placeholder="Search" size="lg" icon={SearchLg} wrapperClassName="hidden md:flex" />
                        <div className="flex flex-col gap-5">
                            <p className="hidden text-sm font-semibold text-brand-secondary md:block">Blog categories</p>
                            <NativeSelect
                                aria-label="Page tabs"
                                className="md:hidden"
                                value={categories[selectedTabIndex - 1].name}
                                onChange={(event) => setSelectedTabIndex(categories.findIndex((tab) => tab.name === event.target.value))}
                                options={categories.map((tab) => ({ label: tab.name, value: tab.name }))}
                            />
                            <div className="hidden w-full flex-1 self-start overflow-auto md:flex md:self-auto">
                                <Tabs orientation="vertical" className="flex w-full">
                                    <TabList type="button-gray" size="md" items={tabs} className="w-full py-0" />
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
                        {articles.slice(0, 9).map((article) => (
                            <li
                                key={article.id}
                                className={cx(
                                    article.isFeatured && "lg:col-span-2 lg:flex-row",
                                    "flex flex-col gap-6 md:gap-8",
                                    !isDesktop && "nth-[n+7]:hidden",
                                )}
                            >
                                {article.isFeatured ? (
                                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start xl:gap-8">
                                        <a href={article.href} className="shrink-0 overflow-hidden" tabIndex={-1}>
                                            <img src={article.thumbnailUrl} alt={article.title} className="aspect-[1.5] w-full rounded-2xl object-cover lg:w-105 xl:w-140" />
                                        </a>

                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-col gap-4">
                                                <BadgeGroup addonText={article.category.name} size="md" theme="light" color="brand" iconTrailing>
                                                    {article.readingTime}
                                                </BadgeGroup>
                                                <div className="flex flex-col gap-2 xl:gap-3">
                                                    <a
                                                        href={article.category.href}
                                                        className="flex justify-between gap-x-4 rounded-md text-xl font-extrabold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2 md:text-display-sm"
                                                    >
                                                        {article.title}
                                                    </a>

                                                    <p className="line-clamp-2 text-md text-tertiary xl:line-clamp-4">{article.summary}</p>
                                                </div>
                                            </div>

                                            <p className="text-sm text-tertiary">{toMonthYear(article.publishedAt)}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <BlogThumbnailCard article={article} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <PaginationPageMinimalCenter />
            </main>
        </div>
    );
};

const WebflowPicksBlogDirectory = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <NimbusHeader />

            <BlogHeaderSidebar02 />

            <NimbusFooter />
        </div>
    );
};

export default WebflowPicksBlogDirectory;
