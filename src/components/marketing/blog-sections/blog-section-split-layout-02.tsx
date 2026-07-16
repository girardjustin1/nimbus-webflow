import { Avatar } from "@/components/base/avatar/avatar";
import { type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

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

export const BlogSectionSplitLayout02 = () => {
    return (
        <section className="bg-[#f9f7f3] py-16 md:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-x-16 gap-y-12 px-4 md:px-8 lg:flex-row">
                <div className="w-full max-w-100">
                    <h2 className="text-display-sm font-extrabold text-primary md:text-display-md">From the blog</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5">Monetization strategy, product deep-dives, and ad-tech insights.</p>
                    <div className="mt-12 hidden flex-col gap-3 md:mt-8 md:flex md:flex-row">
                        <Button size="xl">View all posts</Button>
                    </div>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-12 lg:col-span-3 lg:grid-cols-1">
                    {articles.slice(0, 2).map((article) => (
                        <li key={article.id}>
                            <div className="flex flex-col gap-5 xl:flex-row xl:items-start">
                                <a
                                    href={article.href}
                                    className="shrink-0 overflow-hidden rounded-2xl transition duration-100 ease-linear hover:shadow-2xl"
                                    tabIndex={-1}
                                >
                                    <div className="h-60 w-full object-cover xl:h-50 xl:w-91.5 bg-[#84D7D9]" />
                                </a>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-start gap-2">
                                        <Button href={article.category.href} color="link-color">
                                            {article.category.name}
                                        </Button>
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href={article.href}
                                                className="rounded-md text-xl font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2 xl:text-lg"
                                            >
                                                {article.title}
                                            </a>

                                            <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <a href={article.author.href} tabIndex={-1} className="flex">
                                            <Avatar focusable alt={article.author.name} src={article.author.avatarUrl} size="md" />
                                        </a>

                                        <div>
                                            <p className="text-sm font-semibold">
                                                <a
                                                    href={article.author.href}
                                                    className="block rounded-xs text-sm font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                                >
                                                    {article.author.name}
                                                </a>
                                            </p>
                                            <p className="text-sm text-tertiary">{article.publishedAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-3 md:hidden">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};
