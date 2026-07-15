import { ArrowUpRight } from "@untitledui/icons";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useBreakpoint } from "@/hooks/use-breakpoint";
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

const Simple01Horizontal = ({ article, imageClassName }: { article: Article; imageClassName?: string }) => (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-start">
        <a href={article.href} className="shrink-0 overflow-hidden rounded-2xl" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover xl:w-80", imageClassName)} />
        </a>

        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-brand-secondary">{article.category.name}</span>

                <div className="flex flex-col gap-1">
                    <a
                        href={article.category.href}
                        className="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
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

const BlogHeaderAltLayout04 = () => {
    const isDesktop = useBreakpoint("lg");
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

    return (
        <div className="bg-[#f9f7f3]">
            <section className="bg-[#f9f7f3] py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Resources</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Nimbus blog</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Tool and strategies modern teams need to help their companies grow.</p>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="mt-8 grid w-full grid-cols-1 items-start gap-4 sm:mt-12 sm:w-auto sm:grid-cols-[335px_max-content]"
                        >
                            <div className="flex flex-col gap-1.5">
                                <Input isRequired name="email" type="email" size="lg" placeholder="Enter your email" wrapperClassName="py-0.5" />
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
                            <Button type="submit" size="xl">
                                Get started
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>

            <section className="mx-auto flex w-full max-w-container flex-col gap-12 bg-[#f9f7f3] px-4 pb-16 md:gap-16 md:px-8 md:pb-24">
                <ul className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 sm:max-w-lg xl:max-w-3xl">
                    {articles.map((article) => (
                        <li key={article.id} className={cx(!isDesktop && "nth-[n+7]:hidden")}>
                            <Simple01Horizontal article={article} imageClassName="xl:w-screen xl:max-w-93.5" />
                        </li>
                    ))}
                </ul>

                <PaginationPageDefault />
            </section>
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
    <div className={cx("flex flex-col gap-4", className)}>
        <a href={article.href} className="overflow-hidden rounded-2xl" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover", imageClassName)} />
        </a>

        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-semibold text-brand-secondary">
                    {article.author.name} • {article.publishedAt}
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
    </div>
);

const BlogSectionSimpleCenterAligned01 = () => {
    return (
        <section className="bg-[#f9f7f3] py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold text-brand-secondary md:text-md">Latest posts</p>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Nimbus blog</h2>
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

const CardVertical = () => {
    return (
        <section className="bg-[#f9f7f3] pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-secondary px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary xl:text-display-md">
                        Still thinking <br className="md:hidden" /> about it?
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">Sign up for our newsletter and get 10% off your next purchase.</p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch text-left sm:grid-cols-[360px_max-content] sm:self-center md:mt-8 md:gap-0"
                    >
                        <Input
                            isRequired
                            size="lg"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            wrapperClassName="py-0.5 md:max-w-[345px]"
                            hint={
                                <span>
                                    We care about your data in our{" "}
                                    <a
                                        href="#"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </span>
                            }
                        />
                        <Button type="submit" size="xl">
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

const navList = [
    {
        title: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Products", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: <span className="ml-1 rounded-md bg-white/10 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-white/30 ring-inset">New</span>,
            },
            { label: "Tutorials", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Releases", href: "#" },
        ],
    },

    {
        title: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
];

const FooterLarge04 = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                        <UntitledLogo className="dark-mode" />
                        <p className="text-md text-tertiary_on-brand">Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <nav className="flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 xl:justify-end">
                        <ul className="grid w-full grid-cols-2 gap-8 md:max-w-xs">
                            {navList.map((category) => (
                                <li key={category.title}>
                                    <h4 className="text-sm font-semibold text-quaternary_on-brand">{category.title}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label} className="flex">
                                                <Button
                                                    className="max-h-5 gap-1 text-footer-button-fg hover:text-footer-button-fg_hover"
                                                    color="link-color"
                                                    size="md"
                                                    href={item.href}
                                                    iconTrailing={item.badge}
                                                >
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex w-full flex-col gap-4 md:max-w-90"
                        >
                            <label htmlFor="newsletters-email" className="text-sm font-semibold text-primary_on-brand">
                                Stay up to date
                            </label>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Input
                                    isRequired
                                    id="newsletters-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    size="lg"
                                    wrapperClassName="flex-1"
                                />
                                <Button type="submit" size="lg">
                                    Subscribe
                                </Button>
                            </div>
                        </Form>
                    </nav>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-brand_alt pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-sm text-quaternary_on-brand">© 2026 Nimbus. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { title: "Terms", href: "#" },
                            { title: "Privacy", href: "#" },
                            { title: "Cookies", href: "#" },
                        ].map(({ title, href }) => (
                            <li key={title}>
                                <a href={href} className="text-md text-quaternary_on-brand transition duration-100 ease-linear hover:text-tertiary_on-brand">
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const BlogPage10 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <NimbusHeader />

            <BlogHeaderAltLayout04 />

            <SectionDivider />

            <BlogSectionSimpleCenterAligned01 />

            <CardVertical />

            <FooterLarge04 />
        </div>
    );
};

export default BlogPage10;
