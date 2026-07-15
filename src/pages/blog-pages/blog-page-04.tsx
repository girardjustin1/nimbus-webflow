import { type ComponentProps, useState } from "react";
import { ArrowUpRight, SearchLg } from "@untitledui/icons";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import type { BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
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

const Simple02Vertical = ({
    article,
    badgeTheme = "light",
    imageClassName,
}: {
    article: Article;
    badgeTheme?: ComponentProps<typeof BadgeGroup>["theme"];
    imageClassName?: string;
}) => (
    <div className="flex flex-col gap-4">
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
                    <p className="text-sm text-tertiary">{article.publishedAt}</p>
                </div>
            </div>
        </div>
    </div>
);

const tabs = [
    { id: "all", label: "View all", href: "#" },
    { id: "design", label: "Design", href: "#" },
    { id: "product", label: "Product", href: "#" },
    { id: "software-development", label: "Software Development", href: "#" },
    { id: "customer-success", label: "Customer Success", href: "#" },
    { id: "leadership", label: "Leadership", href: "#" },
    { id: "management", label: "Management", href: "#" },
];

const BlogHeaderSidebar02 = () => {
    const isDesktop = useBreakpoint("lg");
    const [selectedTabIndex, setSelectedTabIndex] = useState(1);

    return (
        <div className="bg-[#f9f7f3]">
            <section className="bg-[#f9f7f3] py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex w-full max-w-3xl flex-col">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Our blog</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Resources and insights</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">The latest industry news, interviews, technologies, and resources.</p>
                    </div>
                </div>
            </section>

            <main className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 pb-16 md:gap-16 md:px-8 md:pb-24">
                <div className="flex flex-col gap-12 md:flex-row md:gap-16">
                    <div className="flex w-full flex-col items-stretch md:max-w-70 md:gap-8">
                        <Input aria-label="Search" placeholder="Search" size="lg" icon={SearchLg} wrapperClassName="hidden md:flex" />
                        <div className="flex flex-col gap-5">
                            <p className="hidden text-sm font-semibold text-brand-secondary md:block">Blog categories</p>
                            <NativeSelect
                                aria-label="Page tabs"
                                className="md:hidden"
                                value={categories[selectedTabIndex - 1].name}
                                onChange={(event) => setSelectedTabIndex(categories.findIndex((tab) => tab.name === event.target.value))}
                                options={categories.map((tab) => ({ label: tab.name, value: tab.name }))}
                            />
                            <div className="hidden w-full flex-1 self-start overflow-auto md:flex md:self-auto">
                                <Tabs orientation="vertical" className="flex w-full">
                                    <TabList type="button-gray" size="md" items={tabs} className="w-full py-0" />
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
                        {articles.slice(0, 9).map((article) => (
                            <li
                                key={article.id}
                                className={cx(
                                    article.isFeatured && "lg:col-span-2 lg:flex-row",
                                    "flex flex-col gap-6 md:gap-8",
                                    !isDesktop && "nth-[n+7]:hidden",
                                )}
                            >
                                {article.isFeatured ? (
                                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start xl:gap-8">
                                        <a href={article.href} className="shrink-0 overflow-hidden" tabIndex={-1}>
                                            <img
                                                src={article.thumbnailUrl}
                                                className="aspect-[1.5] w-full object-cover lg:w-105 xl:w-140"
                                                alt={article.title}
                                            />
                                        </a>

                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-col gap-4">
                                                <BadgeGroup addonText={article.category.name} size="md" theme="light" color="brand" iconTrailing>
                                                    {article.readingTime}
                                                </BadgeGroup>
                                                <div className="flex flex-col gap-2 xl:gap-3">
                                                    <a
                                                        href={article.category.href}
                                                        className="flex justify-between gap-x-4 rounded-md text-xl font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2 md:text-display-sm"
                                                    >
                                                        {article.title}
                                                    </a>

                                                    <p className="line-clamp-2 text-md text-tertiary xl:line-clamp-4">{article.summary}</p>
                                                </div>
                                            </div>

                                            <div className="flex max-h-10 gap-2">
                                                <a href={article.author.href} tabIndex={-1}>
                                                    <Avatar focusable alt={article.author.name} src={article.author.avatarUrl} size="md" />
                                                </a>

                                                <div>
                                                    <p className="text-sm font-semibold">
                                                        <Button href={article.author.href} color="link-gray" className="text-primary">
                                                            {article.author.name}
                                                        </Button>
                                                    </p>
                                                    <p className="text-sm text-tertiary">{article.publishedAt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Simple02Vertical article={article} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <PaginationPageMinimalCenter />
            </main>
        </div>
    );
};

const FooterLarge08 = () => {
    return (
        <footer className="bg-secondary py-12 md:pt-16">
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

const BlogPage04 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <Header />

            <BlogHeaderSidebar02 />

            <FooterLarge08 />
        </div>
    );
};

export default BlogPage04;
