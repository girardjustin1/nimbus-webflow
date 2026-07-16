import type { ComponentProps, FC } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy01, Link01 } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
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
import { isReactComponent } from "@/utils/is-react-component";

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
        thumbnailUrl: "unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-bMWHu8wU1Vk.jpg",
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
        thumbnailUrl: "unsplash/mobile-phone-app-technology/mobile-phone-app-technology-n31x0hhnzOs.jpg",

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
        thumbnailUrl: "unsplash/server-network-data-center/server-network-data-center-y4GHs9GEFdM.jpg",
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
        thumbnailUrl: "unsplash/modern-office-business-team/modern-office-business-team-rtD_lcsN6_U.jpg",
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
        thumbnailUrl: "unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-mcSDtbWXUZU.jpg",
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
        thumbnailUrl: "unsplash/programmatic-advertising/programmatic-advertising-jyoSxjUE22g.jpg",
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
        thumbnailUrl: "unsplash/mobile-phone-app-technology/mobile-phone-app-technology-0VGG7cqTwCo.jpg",
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
        thumbnailUrl: "unsplash/advertising-billboard-city/advertising-billboard-city-bPHY2KV1Oe4.jpg",
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
        thumbnailUrl: "unsplash/modern-office-business-team/modern-office-business-team-yd_RKGH_RH4.jpg",
        publishedAt: "12 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Andre Okafor", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80" },
        tags: [
            { name: "Podcasts", color: "brand", href: "#" },
            { name: "Customer success", color: "slate", href: "#" },
        ],
    },
];

const ContentSplitImage01 = ({ article }: { article: NimbusArticle }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="relative mx-auto flex max-w-container flex-col items-center px-4 py-16 md:flex-row md:px-8 md:pt-16 md:pb-24">
                <div className="flex max-w-180 flex-col items-start md:absolute">
                    <BadgeGroup size="md" addonText={article.category.name} color="brand" theme="light" className="pr-3" iconTrailing={null}>
                        {article.readingTime}
                    </BadgeGroup>
                    <h1 className="mt-4 text-display-md font-extrabold text-primary md:text-display-xl">{article.title}</h1>
                    <p className="mt-4 max-w-140 text-lg text-tertiary md:mt-6 md:text-xl">{article.summary}</p>

                    <div className="mt-8 flex items-center gap-3 md:mt-12">
                        <img src={article.author.avatarUrl} alt={article.author.name} className="size-12 rounded-full object-cover" />
                        <div>
                            <p className="text-md font-semibold text-primary">{article.author.name}</p>
                            <p className="text-md text-tertiary">Published {article.publishedAt}</p>
                        </div>
                    </div>
                </div>

                <img src={article.heroImage} alt={article.heroImageAlt} className="mt-16 h-100 w-full object-cover md:mt-0 md:ml-auto md:h-180 md:w-140 md:max-w-[50vw]" />
            </div>

            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex justify-center gap-16">
                    <div className="hidden w-60 flex-col gap-8 md:flex">
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
                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Link01} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                    <div className="max-w-prose md:max-w-180">
                        <ArticleBody blocks={article.body} className="mx-auto max-w-none" />

                        <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row">
                            <div className="flex gap-2">
                                {article.tags.map((tag) => (
                                    <Badge key={tag.name} type="color" color={tag.color} size="md">
                                        {tag.name}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-3 md:hidden">
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

type RoundButtonProps = ComponentProps<typeof Button> & {
    icon?: FC<{ className?: string }>;
};

const RoundButton = ({ icon: Icon, ...props }: RoundButtonProps) => {
    return (
        <Button
            {...props}
            color="link-gray"
            className={cx(
                "group flex size-12 items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14",
                props.className,
            )}
        >
            {props.children ??
                (isReactComponent(Icon) ? (
                    <Icon className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover md:size-6" />
                ) : null)}
        </Button>
    );
};

const Simple04Vertical = ({ article, imageClassName, className }: { article: Article; imageClassName?: string; className?: string }) => (
    <article className={cx("flex flex-col gap-4", className)}>
        <div className="relative">
            <a href={article.href} className="w-full" tabIndex={-1}>
                <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover", imageClassName)} />
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
                        <time className="block text-sm text-white">{article.publishedAt}</time>
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
    </article>
);

const BlogSectionCarouselLayout01 = () => {
    return (
        <section className="overflow-hidden bg-[#f9f7f3] py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Latest posts</p>
                        <h2 className="mt-3 text-display-sm font-extrabold text-primary md:text-display-md">Nimbus blog</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Interviews, tips, guides, industry best practices, and news.</p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button size="xl">View all posts</Button>
                    </div>
                </div>

                <Carousel.Root className="mt-12 md:mt-16" opts={{ align: "start" }}>
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:gap-8 md:pr-8">
                        {articles.map((article) => (
                            <Carousel.Item key={article.id} className="max-w-xs md:max-w-96">
                                <Simple04Vertical article={article} />
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                    <div className="flex gap-4 md:mt-8 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
                <div className="mt-12 flex flex-col gap-3 lg:hidden">
                    <Button size="xl">View all posts</Button>
                </div>
            </div>
        </section>
    );
};




const BlogPost05 = ({ article = nimbusArticles[0] }: { article?: NimbusArticle }) => {
    return (
        <div className="bg-[#f9f7f3]">
            <NimbusHeader />

            <ContentSplitImage01 article={article} />

            <SectionDivider />

            <BlogSectionCarouselLayout01 />

            <SectionDivider />


            <NimbusFooter />
        </div>
    );
};

export default BlogPost05;
