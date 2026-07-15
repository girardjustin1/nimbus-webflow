import { ArrowUpRight, Check, Copy01, Link01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { ArticleBody } from "@/pages/blog/article-body";
import { nimbusArticles, type NimbusArticle } from "@/content/blog/nimbus-articles";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useClipboard } from "@/hooks/use-clipboard";
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

const articles: Article[] = [
    {
        id: "article-1",
        title: "Ad quality review best practices",
        summary: "How to review the ads that actually served in your app and block surgically without sacrificing revenue.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "/unsplash/programmatic-advertising/programmatic-advertising-jyoSxjUE22g.jpg",
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
        thumbnailUrl: "/unsplash/mobile-phone-app-technology/mobile-phone-app-technology-q8U1YgBaRQk.jpg",

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
        thumbnailUrl: "/unsplash/server-network-data-center/server-network-data-center-VHmBX7FnXw0.jpg",
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
        title: "Yield management mental models",
        summary: "Simple mental models for yield management: a floor is a dial, not a switch.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "/unsplash/modern-office-business-team/modern-office-business-team-rtD_lcsN6_U.jpg",
        publishedAt: "17 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Priya Nair", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80" },
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
        thumbnailUrl: "/unsplash/abstract-technology-gradient-blue/abstract-technology-gradient-blue-dGN0ZrJvaOk.jpg",
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
        thumbnailUrl: "/unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-bMWHu8wU1Vk.jpg",
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
        thumbnailUrl: "/unsplash/mobile-phone-app-technology/mobile-phone-app-technology-sScmok4Iq1o.jpg",
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
        thumbnailUrl: "/unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-mcSDtbWXUZU.jpg",
        publishedAt: "13 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Chris Tanaka", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80" },
        tags: [
            { name: "Software development", color: "success", href: "#" },
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
        thumbnailUrl: "/unsplash/modern-office-business-team/modern-office-business-team-yd_RKGH_RH4.jpg",
        publishedAt: "12 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Andre Okafor", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80" },
        tags: [
            { name: "Podcasts", color: "brand", href: "#" },
            { name: "Customer success", color: "slate", href: "#" },
        ],
    },
];





const ContentSplitImage03 = ({ article }: { article: NimbusArticle }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 pb-16 md:grid-cols-2 md:gap-8 md:px-8 md:pt-16 md:pb-24">
                <div className="flex max-w-180 flex-col items-start">
                    <BadgeGroup size="md" addonText={article.category.name} color="brand" theme="modern" className="pr-3" iconTrailing={null}>
                        {article.readingTime}
                    </BadgeGroup>
                    <h1 className="mt-4 text-display-md font-extrabold text-primary md:text-display-lg">{article.title}</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:max-w-120 md:text-xl">{article.summary}</p>
                </div>

                <img src="/unsplash/advertising-billboard-city/advertising-billboard-city-5GBvm1lhrFM.jpg" alt="Illuminated billboards in the city at dusk" className="order-first -ml-4 h-60 w-screen max-w-none object-cover md:order-1 md:ml-0 md:h-160 md:w-full md:max-w-full" />
            </div>

            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex justify-center gap-16">
                    <div className="hidden w-70 flex-col gap-8 lg:flex">
                        <div className="w-full border-t border-secondary" />
                        <div className="flex flex-col gap-4">
                            <p className="text-md font-semibold text-brand-secondary">Table of contents</p>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: "Introduction", href: "#" },
                                    { title: "Software and tools", href: "#" },
                                    { title: "Other resources", href: "#" },
                                    { title: "Conclusion", href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button href={item.href} size="lg" color="link-gray">
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full border-t border-secondary" />
                        <div className="flex flex-col gap-6">
                            <p className="text-md font-semibold text-brand-secondary">Contributors</p>
                            <ul className="flex flex-col gap-6">
                                {[
                                    {
                                        name: "Marcus Bell",
                                        role: "Product Manager",
                                        avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
                                    },
                                    {
                                        name: "Dana Wolfe",
                                        role: "Product Manager",
                                        avatarUrl: "https://www.untitledui.com/images/avatars/lori-bryson?fm=webp&q=80",
                                    },
                                    {
                                        name: "Noah Frank",
                                        role: "Frontend Engineer",
                                        avatarUrl: "https://www.untitledui.com/images/avatars/loki-bright?fm=webp&q=80",
                                    },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <div className="flex items-center gap-3">
                                            <div className="size-12 rounded-full object-cover bg-[#84D7D9]" />
                                            <div>
                                                <p className="text-md font-semibold text-primary">{item.name}</p>
                                                <p className="text-md text-tertiary">{item.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full border-t border-secondary" />
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex flex-col gap-4"
                        >
                            <label htmlFor="email-input" className="text-md font-semibold text-brand-secondary">
                                Subscribe to our newsletter
                            </label>
                            <Input isRequired id="email-input" name="email" type="email" placeholder="Enter your email" size="lg" />
                            <Button type="submit" size="xl">
                                Subscribe
                            </Button>
                        </Form>
                        <div className="w-full border-t border-secondary" />
                        <div className="flex gap-3">
                            <Button color="secondary" size="md" iconLeading={Link01} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>

                    <div className="max-w-prose lg:max-w-180">
                        <ArticleBody blocks={article.body} className="mx-auto max-w-none" />

                        <div className="flex flex-col items-start justify-between gap-y-8 lg:hidden lg:flex-row">
                            <div className="flex flex-col gap-6">
                                <p className="text-md font-semibold text-brand-secondary">Contributors</p>
                                <ul className="flex flex-col gap-6">
                                    {[
                                        {
                                            name: "Marcus Bell",
                                            role: "Product Manager",
                                            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
                                        },
                                        {
                                            name: "Dana Wolfe",
                                            role: "Product Manager",
                                            avatarUrl: "https://www.untitledui.com/images/avatars/lori-bryson?fm=webp&q=80",
                                        },
                                        {
                                            name: "Noah Frank",
                                            role: "Frontend Engineer",
                                            avatarUrl: "https://www.untitledui.com/images/avatars/loki-bright?fm=webp&q=80",
                                        },
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <div className="flex items-center gap-3">
                                                <div className="size-12 rounded-full object-cover bg-[#84D7D9]" />
                                                <div>
                                                    <p className="text-md font-semibold text-primary">{item.name}</p>
                                                    <p className="text-md text-tertiary">{item.role}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex gap-3">
                                <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Copy01} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Simple03Vertical = ({
    article,
    imageClassName,
    titleClassName,
    className,
}: {
    article: Article;
    imageClassName?: string;
    titleClassName?: string;
    className?: string;
}) => (
    <article className={cx("flex flex-col gap-4", className)}>
        <a href={article.href} className="overflow-hidden rounded-2xl" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover", imageClassName)} />
        </a>

        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-semibold text-brand-secondary">
                    {article.author.name} • <time>{article.publishedAt}</time>
                </p>
                <div className="flex w-full flex-col gap-1">
                    <a
                        href={article.category.href}
                        className={cx(
                            "flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2",
                            titleClassName,
                        )}
                    >
                        {article.title}
                        <ArrowUpRight className="mt-0.5 size-6 shrink-0 text-fg-quaternary" aria-hidden="true" />
                    </a>
                    <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
                </div>
            </div>

            <div className="flex gap-2">
                {article.tags.map((tag) => (
                    <a key={tag.name} href={tag.href} className="rounded-xl outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <Badge color={tag.color} size="md">
                            {tag.name}
                        </Badge>
                    </a>
                ))}
            </div>
        </div>
    </article>
);

const BlogSectionSimpleCenterAligned01 = () => {
    return (
        <section className="bg-[#f9f7f3] py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Latest posts</p>

                    <h2 className="mt-3 text-display-sm font-extrabold text-primary md:text-display-md">Nimbus blog</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Interviews, tips, guides, industry best practices, and news.</p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {articles.slice(0, 3).map((article) => (
                        <li key={article.id}>
                            <Simple03Vertical article={article} />
                        </li>
                    ))}
                </ul>

                <div className="mt-12 flex flex-col justify-center gap-3 md:mt-16 md:flex-row">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};





const BlogPost08 = ({ article = nimbusArticles[0] }: { article?: NimbusArticle }) => {
    return (
        <div className="bg-[#f9f7f3]">
            <NimbusHeader />

            <ContentSplitImage03 article={article} />

            <SectionDivider />

            <BlogSectionSimpleCenterAligned01 />

            <SectionDivider />



            <NimbusFooter />
        </div>
    );
};

export default BlogPost08;
