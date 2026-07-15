import type { ComponentProps } from "react";
import { ArrowUpRight, Check, Copy01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { ArticleBody } from "@/pages/blog/article-body";
import { nimbusArticles, type NimbusArticle } from "@/content/blog/nimbus-articles";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";





const HeaderPrimaryDark = (props: ComponentProps<typeof NimbusHeader>) => {
    return <NimbusHeader {...props} />;
};

const ContentLargeImage04 = ({ article }: { article: NimbusArticle }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="w-full bg-brand-section py-16 pb-32 md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-240 flex-col items-center text-center">
                        <span className="text-sm font-semibold text-primary_on-brand md:text-md">{article.category.name}</span>
                        <h1 className="mt-3 text-display-md font-extrabold text-primary_on-brand md:text-display-lg">{article.title}</h1>
                        <p className="mt-4 max-w-3xl text-lg text-primary_on-brand md:mt-6 md:text-xl">{article.summary}</p>

                        <div className="mt-8 flex items-center gap-3 text-left">
                            <div className="size-12 rounded-full object-cover bg-[#84D7D9]" />
                            <div>
                                <p className="text-md font-semibold text-tertiary_on-brand">{article.author.name}</p>
                                <p className="text-md text-primary_on-brand">{article.publishedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <img src="/unsplash/abstract-technology-gradient-blue/abstract-technology-gradient-blue-6EQZ2JcHZmk.jpg" alt="Abstract blue technology gradient" className="mx-auto -mt-16 h-60 w-full object-cover md:-mt-24 md:h-160" />
                <div className="mx-auto max-w-prose pt-16 md:max-w-180 md:pt-24">
                    <ArticleBody blocks={article.body} className="mx-auto max-w-none" />

                    <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row md:items-center">
                        <div className="flex gap-2">
                            {article.tags.map((tag) => (
                                <Badge key={tag.name} type="color" color={tag.color} size="md">
                                    {tag.name}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Copy01}>
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

const Simple02Vertical = ({
    article,
    badgeTheme = "light",
    imageClassName,
}: {
    article: Article;
    badgeTheme?: ComponentProps<typeof BadgeGroup>["theme"];
    imageClassName?: string;
}) => (
    <article className="flex flex-col gap-4">
        <a href={article.href} className="overflow-hidden" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover", imageClassName)} />
        </a>

        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-3">
                <BadgeGroup addonText={article.category.name} size="md" theme={badgeTheme} color="brand" className="pr-3" iconTrailing={null}>
                    {article.readingTime}
                </BadgeGroup>
                <div className="flex flex-col gap-1">
                    <a
                        href={article.category.href}
                        className="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {article.title}
                        <ArrowUpRight className="mt-0.5 size-6 shrink-0 text-fg-quaternary" aria-hidden="true" />
                    </a>
                    <p className="line-clamp-2 text-md text-tertiary md:line-clamp-none">{article.summary}</p>
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
                    <time className="block text-sm text-tertiary">{article.publishedAt}</time>
                </div>
            </div>
        </div>
    </article>
);

const articles: Article[] = [
    {
        id: "article-1",
        title: "Ad quality review best practices",
        summary: "How to review the ads that actually served in your app and block surgically without sacrificing revenue.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "/unsplash/programmatic-advertising/programmatic-advertising-MjVq8u7bHhM.jpg",
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
        thumbnailUrl: "/unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-hpjSkU2UYSU.jpg",

        publishedAt: "19 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Marcus Bell", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80" },
        tags: [
            { name: "Product", color: "sky", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
];

const BlogSectionSplitLayout01 = () => {
    return (
        <section className="bg-[#f9f7f3] py-16 md:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-x-16 gap-y-12 px-4 md:px-8 lg:flex-row">
                <div className="w-full max-w-100">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Latest</p>

                    <h2 className="mt-3 text-display-sm font-extrabold text-primary md:text-display-md">From the blog</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5">Monetization strategy, product deep-dives, and ad-tech insights.</p>
                    <div className="mt-12 hidden flex-col gap-3 md:mt-8 md:flex md:flex-row">
                        <Button size="xl">View all posts</Button>
                    </div>
                </div>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:col-span-3">
                    {articles.slice(0, 2).map((article) => (
                        <li key={article.id} className="flex flex-col gap-5">
                            <Simple02Vertical article={article} />
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




const BlogPost07 = ({ article = nimbusArticles[0] }: { article?: NimbusArticle }) => {
    return (
        <div className="bg-[#f9f7f3]">
            <HeaderPrimaryDark />

            <ContentLargeImage04 article={article} />

            <SectionDivider />

            <BlogSectionSplitLayout01 />

            <SectionDivider />


            <NimbusFooter />
        </div>
    );
};

export default BlogPost07;
