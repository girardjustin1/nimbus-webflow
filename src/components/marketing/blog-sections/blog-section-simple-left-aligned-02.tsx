import { ArrowUpRight } from "@untitledui/icons";
import { type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

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

export const BlogSectionSimpleLeftAligned02 = () => {
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
