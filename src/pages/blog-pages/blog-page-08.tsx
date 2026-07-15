import { useState } from "react";
import { ArrowUpRight } from "@untitledui/icons";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

const categories = [
    { id: "all", name: "View all", href: "#" },
    { id: "design", name: "Design", href: "#" },
    { id: "product", name: "Product", href: "#" },
    { id: "software-engineering", name: "Software Engineering", href: "#" },
    { id: "customer-success", name: "Customer Success", href: "#" },
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

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
                        New
                    </Badge>
                ),
            },
            { label: "Tutorials", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Releases", href: "#" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "About us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "News", href: "#" },
            { label: "Media kit", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
    {
        label: "Use cases",
        items: [
            { label: "Startups", href: "#" },
            { label: "Enterprise", href: "#" },
            { label: "Government", href: "#" },
            { label: "SaaS centre", href: "#" },
            { label: "Marketplaces", href: "#" },
            { label: "Ecommerce", href: "#" },
        ],
    },
    {
        label: "Social",
        items: [
            { label: "X", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "AngelList", href: "#" },
            { label: "Dribbble", href: "#" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Cookies", href: "#" },
            { label: "Licenses", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
];

const Simple04Vertical = ({ article, imageClassName, className }: { article: Article; imageClassName?: string; className?: string }) => (
    <div className={cx("flex flex-col gap-4", className)}>
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
    { id: "software-engineering", label: "Software Engineering", href: "#" },
    { id: "customer-success", label: "Customer Success", href: "#" },
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
                        <h2 className="text-display-md font-semibold text-primary md:text-display-lg">Resource library</h2>

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

const SimpleCentered = () => {
    return (
        <section className="dark-mode bg-[#f9f7f3] py-16 md:py-24">
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

const BlogSectionSimpleLeftAligned02 = () => {
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
            category: { name: "Design", href: "#" },
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
            category: { name: "Design", href: "#" },
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
            category: { name: "Design", href: "#" },
            thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
            publishedAt: "17 Jan 2026",
            readingTime: "8 min read",
            author: { name: "Alec Whitten", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/alec-whitten?fm=webp&q=80" },
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
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">From the blog</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">The latest industry news, interviews, technologies, and resources.</p>
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

const FooterLarge01 = () => {
    return (
        <footer className="bg-secondary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label} className="flex">
                                            <Button color="link-gray" size="md" href={item.href} iconTrailing={item.badge} className="max-h-5 gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-7 w-min" />
                    <p className="text-sm text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const BlogPage08 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <Header className="bg-secondary" />

            <BlogHeaderSimple05 />

            <SectionDivider />

            <BlogSectionSimpleLeftAligned02 />

            <SectionDivider />

            <SimpleCentered />

            <FooterLarge01 />
        </div>
    );
};

export default BlogPage08;
