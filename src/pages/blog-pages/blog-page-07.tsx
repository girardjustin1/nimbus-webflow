import type { ComponentProps } from "react";
import { ArrowUpRight } from "@untitledui/icons";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
import { SectionDivider } from "@/components/shared-assets/section-divider";
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
        title: "UX review presentations",
        summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/spirals.webp",
        publishedAt: "20 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Olivia Rhye", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Presentation", color: "pink", href: "#" },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Migrating to Linear 101",
        summary: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/conversation.webp",

        publishedAt: "19 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Phoenix Baker", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80" },
        tags: [
            { name: "Product", color: "sky", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3",
        title: "Building your API stack",
        summary: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        href: "#",
        category: { name: "Software Engineering", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp",
        publishedAt: "18 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Lana Steiner", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
        tags: [
            { name: "Software Development", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-3.5",
        title: "Bill Walsh leadership lessons",
        summary: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
        publishedAt: "17 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Alec Whitten", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/alec-whitten?fm=webp&q=80" },
        tags: [
            { name: "Leadership", color: "brand", href: "#" },
            { name: "Management", color: "slate", href: "#" },
        ],
    },
    {
        id: "article-4",
        title: "PM mental models",
        summary: "Mental models are simple expressions of complex processes or relationships.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/smiling-girl-6.webp",
        publishedAt: "16 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Demi Wilkinson", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80" },
        tags: [
            { name: "Product", color: "sky", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Frameworks", color: "orange", href: "#" },
        ],
    },
    {
        id: "article-5",
        title: "What is wireframing?",
        summary: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/wireframing-layout.webp",
        publishedAt: "15 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Candice Wu", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-6",
        title: "How collaboration makes us better designers",
        summary: "Collaboration can make our teams stronger, and our individual designs better.",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/two-people.webp",
        publishedAt: "14 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Natali Craig", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80" },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
        ],
    },
    {
        id: "article-7",
        title: "Our top 10 Javascript frameworks to use",
        summary: "JavaScript frameworks make development easy with extensive features and functionalities.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/workspace-5.webp",
        publishedAt: "13 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Drew Cano", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80" },
        tags: [
            { name: "Software Development", color: "success", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
    {
        id: "article-8",
        title: "Podcast: Creating a better CX Community",
        summary: "Starting a community doesn't need to be complicated, but how do you get started?",
        href: "#",
        category: { name: "Customer Success", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/marketing/sythesize.webp",
        publishedAt: "12 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Orlando Diggs", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80" },
        tags: [
            { name: "Podcasts", color: "brand", href: "#" },
            { name: "Customer Success", color: "slate", href: "#" },
        ],
    },
];

const HeaderPrimaryDark = (props: ComponentProps<typeof Header>) => {
    return (
        <Header
            {...props}
            className={cx(
                "bg-brand-section [&_nav>ul>li>a]:text-secondary_on-brand [&_nav>ul>li>a]:hover:text-secondary_on-brand [&_nav>ul>li>button]:text-secondary_on-brand [&_nav>ul>li>button]:hover:text-secondary_on-brand [&_nav>ul>li>button>svg]:text-fg-brand-secondary_alt [&_svg_path.fill-fg-primary]:fill-fg-white",
                props.className,
            )}
        />
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

const featuredArticle: Article = {
    id: "article-1",
    title: "UX review presentations",
    summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    href: "#",
    category: { name: "Design", href: "#" },
    thumbnailUrl: "https://www.untitledui.com/marketing/smiling-girl-3.webp",
    publishedAt: "20 Jan 2026",
    readingTime: "8 min read",
    author: { name: "Olivia Rhye", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
    tags: [
        { name: "Design", color: "brand", href: "#" },
        { name: "Research", color: "indigo", href: "#" },
        { name: "Presentation", color: "pink", href: "#" },
    ],
    isFeatured: true,
};

const BlogHeaderFeaturedPost04 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <section className="bg-brand-section pt-16 pb-32 md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-secondary_on-brand md:text-md">Blog</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary_on-brand md:text-display-lg">Resource library</h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">
                            Subscribe to learn about new product features, the latest in technology, solutions, and updates.
                        </p>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="mt-8 grid w-full grid-cols-1 items-start gap-4 sm:mt-12 sm:w-auto sm:grid-cols-[335px_max-content]"
                        >
                            <div className="flex flex-col gap-1.5 text-start">
                                <Input isRequired size="lg" name="email" type="email" placeholder="Enter your email" wrapperClassName="py-0.5" />
                                <span className="flex w-full text-sm text-tertiary_on-brand">
                                    We care about your data in our&nbsp;
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

            <main className="mx-auto -mt-16 flex w-full max-w-container flex-col gap-y-12 px-4 pb-16 md:-mt-24 md:gap-y-16 md:px-8 md:pb-24">
                <Simple03Vertical article={featuredArticle} titleClassName="lg:text-display-xs" />

                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                    {articles.slice(1, 7).map((article) => (
                        <li key={article.id}>
                            <Simple03Vertical article={article} />
                        </li>
                    ))}
                </ul>

                <PaginationPageDefault rounded />
            </main>
        </div>
    );
};

const SimpleCentered = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Sign up for our newsletter</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Be the first to know about releases and industry news and insights.</p>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[360px_max-content] sm:gap-0 sm:self-center"
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

const IPhoneMockup02 = () => {
    return (
        <section className="bg-[#f9f7f3] pt-16 md:py-24">
            <div className="relative mx-auto grid w-full max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="z-20 flex max-w-3xl flex-col items-start">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">Growth performance tracking made easy</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Start your 30-day free trial today.</p>
                    <div className="mt-8 flex w-full gap-3 md:mt-12">
                        <AppStoreButton size="lg" />
                        <GooglePlayButton size="lg" />
                    </div>
                </div>

                {/*  Notifications List */}
                <ul className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-12 flex-col gap-3 lg:flex" aria-hidden="true">
                    <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                        <img
                            alt="Olivia Rhye"
                            src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                            className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-black/10"
                        />
                        <div>
                            <p className="text-sm text-tertiary">
                                <span className="font-medium text-brand-secondary">Olivia Rhye</span> followed you!
                            </p>
                            <p className="text-sm text-tertiary">@oliviarhye</p>
                        </div>
                    </li>
                    <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                        <img
                            alt="Candice Wu"
                            src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                            className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-black/10"
                        />
                        <div>
                            <p className="text-sm text-tertiary">
                                <span className="font-medium text-brand-secondary">Candice Wu</span> and 2 other gave you kudos on{" "}
                                <span className="font-medium text-brand-secondary">Clubhouse 101</span> post
                            </p>
                        </div>
                    </li>
                    <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-75 backdrop-blur-lg">
                        <img
                            alt="Phoenix Baker"
                            src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                            className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-black/10"
                        />
                        <div>
                            <p className="text-sm text-tertiary">
                                <span className="font-medium text-brand-secondary">Phoenix Baker</span> joined your team{" "}
                                <span className="font-medium text-brand-secondary">Melbourne Startups Growth</span>
                            </p>
                        </div>
                    </li>
                    <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-50 backdrop-blur-lg">
                        <img
                            alt="Lana Steiner"
                            src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                            className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-black/10"
                        />
                        <div>
                            <p className="text-sm text-tertiary">
                                <span className="font-medium text-brand-secondary">Lana Steiner</span> just launched{" "}
                                <span className="font-medium text-brand-secondary">The 10k users challenge</span>
                            </p>
                        </div>
                    </li>
                </ul>

                <div className="relative -mx-4 min-h-90 w-screen overflow-hidden bg-tertiary md:mx-0 md:min-h-140 md:w-full">
                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute top-6 right-1/2 w-full max-w-71 translate-x-1/2 drop-shadow-iphone-mockup sm:top-16 md:max-w-79 lg:right-12 lg:translate-x-0"
                    />
                </div>
            </div>
        </section>
    );
};

const FooterLarge08 = () => {
    return (
        <footer className="dark-mode bg-[#f9f7f3] py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <UntitledLogo className="h-7 w-min shrink-0" />
                        <nav>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                                {[
                                    { title: "Overview", href: "#" },
                                    { title: "Features", href: "#" },
                                    { title: "Pricing", href: "#" },
                                    { title: "Careers", href: "#" },
                                    { title: "Help", href: "#" },
                                    { title: "Privacy", href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button color="link-gray" size="md" href={item.href} className="max-h-5">
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex w-full flex-col gap-4 sm:max-w-90"
                    >
                        <label htmlFor="newsletters-email" className="text-sm font-semibold text-primary">
                            Start growing with Untitled
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
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-sm text-quaternary">© 2077 Untitled UI. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { title: "Terms", href: "#" },
                            { title: "Privacy", href: "#" },
                            { title: "Cookies", href: "#" },
                        ].map(({ title, href }) => (
                            <li key={title}>
                                <a href={href} className="text-md text-quaternary transition duration-100 ease-linear hover:text-tertiary">
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

const BlogPage07 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <HeaderPrimaryDark />

            <BlogHeaderFeaturedPost04 />

            <SectionDivider />

            <SimpleCentered />

            <IPhoneMockup02 />

            <FooterLarge08 />
        </div>
    );
};

export default BlogPage07;
