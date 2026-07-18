import { Button } from "@/components/base/buttons/button";
import { BlogThumbnailCard, type WebflowArticle } from "./blog-thumbnail-card";

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

/** The "From the blog" grid shared by the Webflow Guide Case Studies and News pages. */
export const FromTheBlog = () => (
    <section className="bg-[#f9f7f3] py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
                <div className="max-w-3xl">
                    <h2 className="text-display-sm font-extrabold text-primary md:text-display-md">From the blog</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Monetization strategy, product deep-dives, and ad-tech insights.</p>
                </div>
                <Button size="xl" className="shrink-0">
                    View all posts
                </Button>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2">
                {articles.slice(0, 4).map((article) => (
                    <li key={article.id}>
                        <BlogThumbnailCard article={article} />
                    </li>
                ))}
            </ul>
        </div>
    </section>
);
