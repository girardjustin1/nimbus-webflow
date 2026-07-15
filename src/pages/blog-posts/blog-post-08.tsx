import { ArrowUpRight, Check, Copy01, Link01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
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
        title: "Yield management mental models",
        summary: "Simple mental models for yield management: a floor is a dial, not a switch.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
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
        thumbnailUrl: "https://www.untitledui.com/marketing/brainstorming.webp",
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
        thumbnailUrl: "https://www.untitledui.com/marketing/workspace-4.webp",
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
        thumbnailUrl: "https://www.untitledui.com/marketing/collaboration.webp",
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
        thumbnailUrl: "https://www.untitledui.com/marketing/man-and-laptop-2.webp",
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
        thumbnailUrl: "https://www.untitledui.com/marketing/podcast-girl-2.webp",
        publishedAt: "12 Jan 2026",
        readingTime: "8 min read",
        author: { name: "Andre Okafor", href: "#", avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80" },
        tags: [
            { name: "Podcasts", color: "brand", href: "#" },
            { name: "Customer success", color: "slate", href: "#" },
        ],
    },
];





const ContentSplitImage03 = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 pb-16 md:grid-cols-2 md:gap-8 md:px-8 md:pt-16 md:pb-24">
                <div className="flex max-w-180 flex-col items-start">
                    <BadgeGroup size="md" addonText="Product" color="brand" theme="modern" className="pr-3" iconTrailing={null}>
                        8 min read
                    </BadgeGroup>
                    <h1 className="mt-4 text-display-md font-extrabold text-primary md:text-display-lg">Migrating to in-app header bidding 101</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:max-w-120 md:text-xl">
                        Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.
                    </p>
                </div>

                <div className="order-first -ml-4 h-60 w-screen max-w-none object-cover md:order-1 md:ml-0 md:h-160 md:w-full md:max-w-full bg-[#84D7D9]" />
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
                        <div className="prose-centered-quote mx-auto prose md:prose-lg">
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                                fringilla.
                            </p>
                            <hr />
                            <h2>Introduction</h2>
                            <p>
                                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
                                quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
                                feugiat sapien varius id.
                            </p>
                            <p>
                                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames
                                arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
                                molestie aliquet sodales id est ac volutpat.
                            </p>
                            <figure>
                                <div className="h-60 md:h-120 bg-[#84D7D9]" />
                                <figcaption>
                                    <Link01 className="size-4 text-utility-neutral-400" />
                                    <span>
                                        Image courtesy of Vlada Karpovich via{" "}
                                        <a
                                            href="https://www.pexels.com/photo/photo-of-woman-leaning-on-wooden-table-3182746/"
                                            className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Pexels
                                        </a>
                                    </span>
                                </figcaption>
                            </figure>
                            <p>
                                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis.
                                Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
                                felis elit erat nam nibh orci.
                            </p>
                            <figure>
                                <blockquote>
                                    <p>
                                        In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we
                                        have lost or never attained, living by voices we shall never hear.
                                    </p>
                                </blockquote>
                                <figcaption className="not-prose mt-6 inline-flex flex-col items-center md:mt-8">
                                    <div className="size-10 rounded-full object-cover bg-[#84D7D9]" />
                                    <p className="mt-3 text-md font-semibold text-primary">Jordan Kim</p>
                                    <cite className="mt-0.5 text-md text-tertiary not-italic">Product Designer</cite>
                                </figcaption>
                            </figure>
                            <p>
                                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac
                                vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                            </p>
                            <p>
                                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
                                dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
                                congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam
                                lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                            </p>
                            <p>
                                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis.
                                Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
                                felis elit erat nam nibh orci.
                            </p>
                            <h3>Software and tools</h3>
                            <p>
                                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
                                quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
                                feugiat sapien varius id.
                            </p>
                            <p>
                                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames
                                arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
                                molestie aliquet sodales id est ac volutpat.
                            </p>
                            <h3>Other resources</h3>
                            <p>
                                Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
                                Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit
                                dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                            </p>
                            <ol>
                                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                                <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                                <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                            </ol>
                            <figure>
                                <div className="h-110 md:h-210 bg-[#84D7D9]" />
                                <figcaption>
                                    <Link01 className="size-4 text-utility-neutral-400" />
                                    <span>
                                        Image courtesy of Michael Burrows via{" "}
                                        <a
                                            href="https://www.pexels.com/photo/pensive-woman-sitting-in-light-workspace-7148059/"
                                            className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Pexels
                                        </a>
                                    </span>
                                </figcaption>
                            </figure>
                            <p>
                                Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum
                                vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed
                                etiam turpis suspendisse at.
                            </p>
                            <p>
                                Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat
                                elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus
                                elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
                            </p>
                            <div className="not-prose my-8 rounded-2xl bg-secondary px-5 py-6 text-lg text-tertiary md:my-12 md:p-8 [&>p+p]:mt-4.5">
                                <h2 className="mb-4 text-display-xs font-extrabold text-primary">Conclusion</h2>
                                <p>
                                    Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed
                                    leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                                </p>
                                <p>
                                    Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed
                                    duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                                </p>
                                <p>
                                    Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim.
                                    Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat
                                    scelerisque et, nunc tortor.
                                </p>
                            </div>
                        </div>

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
            <div className={cx("aspect-[1.5] w-full object-cover bg-[#84D7D9]", imageClassName)} />
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





const BlogPost08 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <NimbusHeader />

            <ContentSplitImage03 />

            <SectionDivider />

            <BlogSectionSimpleCenterAligned01 />

            <SectionDivider />



            <NimbusFooter />
        </div>
    );
};

export default BlogPost08;
