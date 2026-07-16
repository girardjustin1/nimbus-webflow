import { useState } from "react";
import { ArrowUpRight } from "@untitledui/icons";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { type BadgeColor } from "@/components/base/badges/badges";
import { Select } from "@/components/base/select/select";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

const sortByOptions = [
    { id: "recent", label: "Most recent" },
    { id: "popular", label: "Most popular" },
    { id: "viewed", label: "Most viewed" },
];

const tabs = [
    { id: "all", label: "View all" },
    { id: "design", label: "Design" },
    { id: "product", label: "Product" },
    { id: "software-engineering", label: "Programmatic" },
    { id: "customer-success", label: "Publisher Success" },
];

type Article = {
    id: string;
    href: string;
    thumbnailUrl: string;
    title: string;
    summary: string;
    category: {
        href: string;
        name: string;
    };
    author: {
        href: string;
        name: string;
        avatarUrl: string;
    };
    publishedAt: string;
    readingTime: string;
    tags: Array<{ name: string; color: BadgeColor<"color">; href: string }>;
    isFeatured?: boolean;
};

const articles: Article[] = [
    {
        id: "article-01",
        title: "Ad quality review best practices",
        summary: "How to review the ads that actually served in your app and block surgically without sacrificing revenue.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "/unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-JKUTrJ4vK00.jpg",
        publishedAt: "20 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Jordan Kim", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Presentation", color: "pink", href: "#" },
        ],
        isFeatured: true,
    },
    {
        id: "article-02",
        title: "Migrating to in-app header bidding 101",
        summary: "In-app header bidding gave publishers a better auction. Here is how to migrate without losing fill.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "/unsplash/mobile-phone-app-technology/mobile-phone-app-technology-9e9PD9blAto.jpg",

        publishedAt: "19 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Marcus Bell", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80" },
        tags: [
            { name: "Product", color: "sky", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-03",
        title: "Building your in-app bidding stack",
        summary: "The rise of in-app bidding has been met by a rise in tools for pricing, quality, and reporting.",
        href: "#",
        category: { name: "Programmatic", href: "#" },
        thumbnailUrl: "/unsplash/server-network-data-center/server-network-data-center-pgdaAwf6IJg.jpg",
        publishedAt: "18 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Elena Vasquez", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
        tags: [
            { name: "Ad Tech", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-04",
        title: "Floors are a publisher's pricing power",
        summary: "How top publishers turn floors into pricing power and set the terms the market has to beat.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "/unsplash/advertising-billboard-city/advertising-billboard-city-bPHY2KV1Oe4.jpg",
        publishedAt: "17 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Ryan Cho", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/alec-whitten?fm=webp&q=80" },
        tags: [
            { name: "Leadership", color: "brand", href: "#" },
            { name: "Management", color: "slate", href: "#" },
        ],
    },
    {
        id: "article-05",
        title: "Yield management mental models",
        summary: "Simple mental models for yield management: a floor is a dial, not a switch.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "/unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-hpjSkU2UYSU.jpg",
        publishedAt: "16 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Priya Nair", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80" },
        tags: [
            { name: "Product", color: "sky", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Frameworks", color: "orange", href: "#" },
        ],
    },
    {
        id: "article-06",
        title: "What is bid shading?",
        summary: "A plain-language guide to bid shading and how floors keep DSPs honest in the auction.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "/unsplash/programmatic-advertising/programmatic-advertising-jyoSxjUE22g.jpg",
        publishedAt: "15 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Sofia Reyes", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-07",
        title: "How the Dynamic Unit creates a native ad experience",
        summary: "The Dynamic Unit adapts to your app's look and UX while accepting programmatic demand in multiple formats.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "/unsplash/mobile-phone-app-technology/mobile-phone-app-technology-w33-zg-dNL4.jpg",
        publishedAt: "14 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Maya Patel", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-08",
        title: "Our top 10 tactics for higher eCPMs",
        summary: "Ten practical tactics our ad ops team uses to lift eCPMs across geos, formats, and sizes.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "/unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-qwtCeJ5cLYs.jpg",
        publishedAt: "13 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Chris Tanaka", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80" },
        tags: [
            { name: "Ad Tech", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-09",
        title: "Podcast: Building a healthier programmatic auction",
        summary: "Building a healthier programmatic auction does not need to be complicated. Here is where to start.",
        href: "#",
        category: { name: "Publisher Success", href: "#" },
        thumbnailUrl: "/unsplash/abstract-technology-gradient-blue/abstract-technology-gradient-blue-6EQZ2JcHZmk.jpg",
        publishedAt: "12 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Andre Okafor", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80" },
        tags: [
            { name: "Podcasts", color: "brand", href: "#" },
            { name: "Publisher Success", color: "slate", href: "#" },
        ],
    },
];

const Simple01Vertical = ({ article, imageClassName }: { article: Article; imageClassName?: string }) => (
    <div className="flex flex-col gap-4">
        <a href={article.href} className="overflow-hidden rounded-2xl" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover transition duration-100 ease-linear hover:scale-105", imageClassName)} />
        </a>

        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-brand-secondary">{article.category.name}</span>
                <div className="flex flex-col gap-1">
                    <a
                        href={article.href}
                        className="group/title flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.title}
                        <ArrowUpRight
                            className="mt-0.5 size-6 shrink-0 text-fg-quaternary transition duration-100 ease-linear group-hover/title:text-fg-quaternary_hover"
                            aria-hidden="true"
                        />
                    </a>

                    <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
                </div>
            </div>

            <div className="flex gap-2">
                <a href={article.author.href} tabIndex={-1} className="flex">
                    <Avatar focusable alt={article.author.name} src={article.author.avatarUrl} size="md" />
                </a>

                <div>
                    <a
                        href={article.author.href}
                        className="block rounded-xs text-sm font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.author.name}
                    </a>
                    <p className="text-sm text-tertiary">{article.publishedAt}</p>
                </div>
            </div>
        </div>
    </div>
);

const BlogHeaderFeaturedPost01 = () => {
    const isDesktop = useBreakpoint("lg");
    const [sortBy, setSortBy] = useState(sortByOptions[0].id);

    const featuredArticle: Article = {
        id: "article-001",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "/unsplash/modern-office-business-team/modern-office-business-team-l90zRbWvCoE.jpg",
        title: 'Improve your design skills: Develop an "eye" for design',
        summary: 'Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.',
        href: "#",
        publishedAt: "10 April 2026",
        readingTime: "8 min read",
        author: { name: "Amélie Laurent", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "gray", href: "#" },
            { name: "Research", color: "gray", href: "#" },
            { name: "Presentation", color: "gray", href: "#" },
        ],
    };

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
                <a
                    href={featuredArticle.href}
                    className="relative hidden w-full overflow-hidden rounded-2xl outline-focus-ring select-none focus:outline-2 focus:outline-offset-4 md:block md:h-145 lg:h-180"
                >
                    <img src="/unsplash/abstract-technology-gradient-blue/abstract-technology-gradient-blue-r5lbaK3fDaM.jpg" alt={featuredArticle.title} className="absolute inset-0 size-full rounded-[inherit] object-cover outline-[0.5px] -outline-offset-[0.5px] outline-alpha-black/10" />

                    <div className="absolute inset-x-0 bottom-0 w-full bg-linear-to-t from-black/40 to-transparent pt-24">
                        <div className="flex w-full flex-col gap-6 p-8">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-4">
                                    <p className="flex-1 text-display-xs font-extrabold text-white">{featuredArticle.title}</p>
                                    <ArrowUpRight className="size-6 shrink-0 text-fg-white" />
                                </div>
                                <p className="line-clamp-2 text-md text-white/80">{featuredArticle.summary}</p>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex flex-1 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold text-white">Written by</p>
                                        <div className="flex items-center gap-2">
                                            <Avatar
                                                border
                                                focusable
                                                size="md"
                                                src={featuredArticle.author.avatarUrl}
                                                alt={featuredArticle.author.name}
                                                className="bg-primary"
                                            />
                                            <p className="text-sm font-semibold text-white">{featuredArticle.author.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold text-white">Published on</p>
                                        <div className="flex h-10 items-center">
                                            <p className="text-md font-semibold text-white">{featuredArticle.publishedAt}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold text-white">File under</p>
                                    <ul className="flex h-10 items-center gap-2">
                                        {featuredArticle.tags.map((tag) => (
                                            <li
                                                key={tag.name}
                                                className="rounded-full bg-transparent px-2 py-0.5 text-xs font-medium text-fg-white ring-1 ring-white/30 ring-inset"
                                            >
                                                {tag.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="md:hidden">
                    <Simple01Vertical article={featuredArticle} />
                </div>

                <div className="flex flex-col items-end gap-8 md:flex-row">
                    <Tabs className="w-full">
                        <TabList type="underline" size="md" items={tabs} className="overflow-auto" />
                    </Tabs>

                    <div className="relative w-full md:max-w-44">
                        <Select aria-label="Sort by" size="md" value={sortBy} onChange={(value) => setSortBy(value as string)} items={sortByOptions}>
                            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                        </Select>
                    </div>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <li key={index} className={cx(!isDesktop && "nth-[n+7]:hidden")}>
                            <Simple01Vertical article={article} />
                        </li>
                    ))}
                </ul>

                <PaginationPageDefault rounded />
            </main>
        </div>
    );
};





const BlogPage01 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <NimbusHeader />

            <BlogHeaderFeaturedPost01 />

            <SectionDivider />



            <NimbusFooter />
        </div>
    );
};

export default BlogPage01;
