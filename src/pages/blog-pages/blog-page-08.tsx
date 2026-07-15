import { useState } from "react";
import { ArrowUpRight } from "@untitledui/icons";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

const categories = [
    { id: "all", name: "View all", href: "#" },
    { id: "design", name: "Design", href: "#" },
    { id: "product", name: "Product", href: "#" },
    { id: "software-engineering", name: "Programmatic", href: "#" },
    { id: "customer-success", name: "Publisher Success", href: "#" },
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
        id: "article-1",
        title: "Ad quality review best practices",
        summary: "How to review the ads that actually served in your app and block surgically without sacrificing revenue.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/spirals.webp",
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
        id: "article-2",
        title: "Migrating to in-app header bidding 101",
        summary: "In-app header bidding gave publishers a better auction. Here is how to migrate without losing fill.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/conversation.webp",

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
        id: "article-3",
        title: "Building your in-app bidding stack",
        summary: "The rise of in-app bidding has been met by a rise in tools for pricing, quality, and reporting.",
        href: "#",
        category: { name: "Programmatic", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp",
        publishedAt: "18 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Elena Vasquez", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
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
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
        publishedAt: "17 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Ryan Cho", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/alec-whitten?fm=webp&q=80" },
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
        thumbnailUrl: "https://www.untitledui.com/marketing/smiling-girl-6.webp",
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
        id: "article-5",
        title: "What is bid shading?",
        summary: "A plain-language guide to bid shading and how floors keep DSPs honest in the auction.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/bid shading-layout.webp",
        publishedAt: "15 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Sofia Reyes", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
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
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/two-people.webp",
        publishedAt: "14 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Maya Patel", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80" },
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
        thumbnailUrl: "https://www.untitledui.com/marketing/workspace-5.webp",
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
        id: "article-8",
        title: "Podcast: Building a healthier programmatic auction",
        summary: "Building a healthier programmatic auction does not need to be complicated. Here is where to start.",
        href: "#",
        category: { name: "Publisher Success", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/sythesize.webp",
        publishedAt: "12 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Andre Okafor", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80" },
        tags: [
            { name: "Podcasts", color: "brand", href: "#" },
            { name: "Publisher Success", color: "slate", href: "#" },
        ],
    },
];


const Simple04Vertical = ({ article, imageClassName, className }: { article: Article; imageClassName?: string; className?: string }) => (
    <div className={cx("flex flex-col gap-4", className)}>
        <div className="relative">
            <a href={article.href} className="w-full" tabIndex={-1}>
                <div className={cx("aspect-[1.5] w-full object-cover bg-[#84D7D9]", imageClassName)} />
            </a>
            <div className="absolute inset-x-0 bottom-0 overflow-hidden bg-linear-to-b from-transparent to-black/40">
                <div className="relative flex items-start justify-between bg-alpha-white/30 p-4 backdrop-blur-md before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:p-5">
                    <div>
                        <a
                            href={article.author.href}
                            className="block rounded-xs text-sm font-semibold text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            {article.author.name}
                        </a>
                        <p className="text-sm text-white">{article.publishedAt}</p>
                    </div>
                    <a
                        href={article.category.href}
                        className="rounded-xs text-sm font-semibold text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.category.name}
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col gap-1">
                <a
                    href={article.category.href}
                    className="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    {article.title}
                </a>
                <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
            </div>

            <Button href={article.href} color="link-color" size="lg" iconTrailing={ArrowUpRight}>
                Read post
            </Button>
        </div>
    </div>
);

const tabs = [
    { id: "all", label: "View all", href: "#" },
    { id: "design", label: "Design", href: "#" },
    { id: "product", label: "Product", href: "#" },
    { id: "software-engineering", label: "Programmatic", href: "#" },
    { id: "customer-success", label: "Publisher Success", href: "#" },
];

const BlogHeaderSimple05 = () => {
    const isDesktop = useBreakpoint("lg");
    const [selectedTabIndex, setSelectedTabIndex] = useState(1);

    return (
        <div className="bg-[#f9f7f3]">
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mb-3 text-sm font-semibold text-brand-secondary md:text-md">Blog</div>
                    <div className="grid grid-cols-[minmax(1fr,768px)] gap-x-16 lg:grid-cols-[2fr_1fr]">
                        <h2 className="text-display-md font-extrabold text-primary md:text-display-lg">Resource library</h2>

                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl lg:mt-3 lg:h-0 lg:w-120">
                            Subscribe to learn about new product features, the latest in technology, solutions, and updates.
                        </p>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[335px_max-content]"
                        >
                            <div className="flex flex-col gap-1.5">
                                <Input isRequired size="lg" name="email" type="email" placeholder="Enter your email" wrapperClassName="py-0.5" />
                                <span className="self-start text-sm text-tertiary">
                                    We care about your data in our{" "}
                                    <a
                                        href="#"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </span>
                            </div>
                            <Button size="xl" type="submit">
                                <span className="hidden md:inline">Get started</span>
                                <span className="inline md:hidden">Subscribe</span>
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>

            <main className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
                <NativeSelect
                    aria-label="Page tabs"
                    className="md:hidden"
                    value={categories[selectedTabIndex - 1].name}
                    onChange={(event) => setSelectedTabIndex(categories.findIndex((tab) => tab.name === event.target.value))}
                    options={categories.map((tab) => ({ label: tab.name, value: tab.name }))}
                />
                <div className="-m-1 hidden flex-1 self-start overflow-auto p-1 md:flex md:self-auto">
                    <Tabs>
                        <TabList type="button-gray" size="md" items={tabs} />
                    </Tabs>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-12">
                    {articles.slice(0, 8).map((article) => (
                        <li key={article.id} className={cx(!isDesktop && "nth-[n+7]:hidden")}>
                            <Simple04Vertical article={article} />
                        </li>
                    ))}
                </ul>

                <PaginationPageMinimalCenter />
            </main>
        </div>
    );
};


const BlogSectionSimpleLeftAligned02 = () => {
    const articles: Article[] = [
        {
            id: "article-1",
            title: "Ad quality review best practices",
            summary: "How to review the ads that actually served in your app and block surgically without sacrificing revenue.",
            href: "#",
            category: { name: "Design", href: "#" },
            thumbnailUrl: "https://www.untitledui.com/marketing/spirals.webp",
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
            id: "article-2",
            title: "Migrating to in-app header bidding 101",
            summary: "In-app header bidding gave publishers a better auction. Here is how to migrate without losing fill.",
            href: "#",
            category: { name: "Design", href: "#" },
            thumbnailUrl: "https://www.untitledui.com/marketing/conversation.webp",

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
            id: "article-3",
            title: "Building your in-app bidding stack",
            summary: "The rise of in-app bidding has been met by a rise in tools for pricing, quality, and reporting.",
            href: "#",
            category: { name: "Design", href: "#" },
            thumbnailUrl: "https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp",
            publishedAt: "18 Jan 2026",
            readingTime: "8 min read",
            author: { name: "Elena Vasquez", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
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
            category: { name: "Design", href: "#" },
            thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
            publishedAt: "17 Jan 2026",
            readingTime: "8 min read",
            author: { name: "Ryan Cho", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/alec-whitten?fm=webp&q=80" },
            tags: [
                { name: "Leadership", color: "brand", href: "#" },
                { name: "Management", color: "slate", href: "#" },
            ],
        },
    ];

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
                            <Simple04Vertical article={article} />
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


const BlogPage08 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <NimbusHeader />

            <BlogHeaderSimple05 />

            <SectionDivider />

            <BlogSectionSimpleLeftAligned02 />

            <SectionDivider />


            <NimbusFooter />
        </div>
    );
};

export default BlogPage08;
