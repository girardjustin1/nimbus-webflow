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
        thumbnailUrl: "/unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-bMWHu8wU1Vk.jpg",
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
        thumbnailUrl: "/unsplash/mobile-phone-app-technology/mobile-phone-app-technology-n31x0hhnzOs.jpg",

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
        thumbnailUrl: "/unsplash/server-network-data-center/server-network-data-center-y4GHs9GEFdM.jpg",
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
        thumbnailUrl: "/unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-mcSDtbWXUZU.jpg",
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
        thumbnailUrl: "/unsplash/programmatic-advertising/programmatic-advertising-jyoSxjUE22g.jpg",
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
        thumbnailUrl: "/unsplash/mobile-phone-app-technology/mobile-phone-app-technology-0VGG7cqTwCo.jpg",
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
        thumbnailUrl: "/unsplash/advertising-billboard-city/advertising-billboard-city-bPHY2KV1Oe4.jpg",
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
                        <div className="size-12 rounded-full object-cover bg-[#84D7D9]" />
                        <div>
                            <p className="text-md font-semibold text-primary">{article.author.name}</p>
                            <p className="text-md text-tertiary">Published {article.publishedAt}</p>
                        </div>
                    </div>
                </div>

                <img src="/unsplash/abstract-technology-gradient-blue/abstract-technology-gradient-blue-dGN0ZrJvaOk.jpg" alt="Blue and black abstract technology pattern" className="mt-16 h-100 w-full object-cover md:mt-0 md:ml-auto md:h-180 md:w-140 md:max-w-[50vw]" />

                <svg
                    className="absolute bottom-[53px] left-1/2 hidden -translate-x-[62%] lg:block"
                    width="349"
                    height="337"
                    viewBox="0 0 349 337"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M334.362 168.096C334.544 166.727 333.582 165.47 332.213 165.289C330.844 165.107 329.587 166.07 329.406 167.438L334.362 168.096ZM196.062 244.976L196.54 242.522L196.54 242.522L196.062 244.976ZM79.9305 219.721L78.7646 221.933L78.7654 221.933L79.9305 219.721ZM45.8562 104.044C44.8641 103.084 43.2814 103.11 42.3211 104.102C41.3608 105.094 41.3866 106.676 42.3788 107.637L45.8562 104.044ZM36.8047 147.192C36.7399 148.571 37.8055 149.742 39.1847 149.807C40.5639 149.872 41.7344 148.806 41.7992 147.427L36.8047 147.192ZM75.4853 108.658C76.8418 108.916 78.1502 108.025 78.4077 106.668C78.6653 105.312 77.7744 104.003 76.4179 103.746L75.4853 108.658ZM331.884 167.767C329.406 167.438 329.406 167.438 329.406 167.438C329.406 167.439 329.406 167.439 329.406 167.44C329.405 167.441 329.405 167.444 329.405 167.448C329.404 167.456 329.402 167.468 329.4 167.485C329.395 167.518 329.388 167.57 329.378 167.639C329.359 167.777 329.33 167.984 329.289 168.255C329.209 168.798 329.086 169.599 328.918 170.619C328.58 172.66 328.06 175.575 327.33 179.057C325.868 186.033 323.575 195.235 320.251 204.226C316.911 213.258 312.603 221.871 307.201 227.829C301.853 233.727 295.664 236.808 288.29 235.524L287.431 240.449C297.021 242.12 304.817 237.902 310.905 231.188C316.938 224.533 321.515 215.223 324.94 205.961C328.38 196.658 330.732 187.197 332.223 180.083C332.97 176.521 333.503 173.534 333.851 171.435C334.024 170.385 334.151 169.556 334.236 168.986C334.278 168.702 334.309 168.482 334.33 168.332C334.341 168.257 334.348 168.199 334.354 168.16C334.357 168.14 334.359 168.125 334.36 168.114C334.361 168.109 334.361 168.104 334.362 168.101C334.362 168.1 334.362 168.098 334.362 168.098C334.362 168.097 334.362 168.096 331.884 167.767ZM288.29 235.524C281.517 234.344 277.786 228.264 275.744 217.463C273.726 206.787 273.634 192.937 273.007 178.341C272.388 163.928 271.243 148.889 266.957 136.482C262.636 123.973 255.002 113.832 241.314 109.827L239.91 114.626C251.55 118.032 258.245 126.577 262.231 138.114C266.252 149.753 267.391 164.119 268.012 178.555C268.624 192.808 268.725 207.249 270.832 218.391C272.914 229.409 277.24 238.674 287.431 240.449L288.29 235.524ZM241.314 109.827C227.315 105.731 214.723 112.47 204.687 123.961C194.645 135.459 186.715 152.145 181.712 169.384C176.709 186.628 174.55 204.714 176.286 219.116C177.995 233.291 183.703 245.118 195.585 247.43L196.54 242.522C188.118 240.884 182.911 232.29 181.251 218.518C179.618 204.973 181.637 187.587 186.514 170.778C191.393 153.964 199.048 138.018 208.453 127.25C217.864 116.474 228.58 111.311 239.91 114.626L241.314 109.827ZM195.584 247.43C201.273 248.537 206.362 247.496 210.746 244.768C215.07 242.077 218.574 237.832 221.37 232.719C226.946 222.517 230.014 208.285 230.947 193.796C231.883 179.272 230.692 164.199 227.531 152.192C225.952 146.193 223.853 140.85 221.202 136.703C218.564 132.578 215.22 129.397 211.073 128.204L209.691 133.009C212.218 133.736 214.7 135.816 216.989 139.397C219.266 142.957 221.196 147.764 222.696 153.465C225.695 164.856 226.866 179.378 225.958 193.474C225.047 207.604 222.067 221.019 216.982 230.32C214.447 234.959 211.467 238.43 208.104 240.523C204.801 242.579 200.998 243.39 196.54 242.522L195.584 247.43ZM211.073 128.204C203.491 126.022 195.86 128.146 188.805 132.283C181.752 136.419 174.989 142.726 168.924 149.465C162.841 156.224 157.361 163.531 152.897 169.762C148.359 176.096 145.013 181.109 142.978 183.626L146.866 186.77C149.018 184.108 152.611 178.748 156.961 172.674C161.385 166.499 166.741 159.365 172.64 152.81C178.556 146.236 184.92 140.357 191.334 136.596C197.748 132.835 203.925 131.35 209.691 133.009L211.073 128.204ZM142.978 183.626C138.482 189.185 130.925 201.667 120.086 210.998C114.74 215.601 108.795 219.228 102.333 220.714C95.9369 222.186 88.8657 221.602 81.0957 217.509L78.7654 221.933C87.5715 226.572 95.8653 227.333 103.454 225.587C110.978 223.856 117.638 219.703 123.349 214.787C134.624 205.08 142.986 191.568 146.866 186.77L142.978 183.626ZM81.0965 217.51C73.6294 213.573 69.4997 206.861 67.1168 198.111C64.7107 189.276 64.1722 178.687 63.6988 167.357C63.2304 156.148 62.8256 144.263 60.5569 133.307C58.2806 122.315 54.084 112.008 45.8562 104.044L42.3788 107.637C49.6251 114.65 53.4993 123.883 55.6608 134.321C57.8298 144.796 58.2296 156.233 58.7031 167.566C59.1716 178.777 59.7121 189.95 62.2925 199.425C64.8959 208.985 69.6602 217.133 78.7646 221.933L81.0965 217.51ZM39.302 147.31C41.7992 147.427 41.7992 147.427 41.7992 147.426C41.7993 147.426 41.7993 147.426 41.7993 147.425C41.7993 147.424 41.7994 147.422 41.7995 147.42C41.7997 147.415 41.8001 147.409 41.8005 147.4C41.8014 147.381 41.8026 147.354 41.8043 147.318C41.8077 147.247 41.8127 147.14 41.8193 147.001C41.8325 146.722 41.8518 146.313 41.8767 145.79C41.9264 144.745 41.998 143.247 42.0856 141.433C42.2608 137.806 42.4999 132.921 42.7558 127.885C43.2709 117.75 43.8456 107.184 44.1029 104.875L39.1336 104.321C38.8547 106.825 38.2713 117.615 37.7623 127.632C37.5061 132.673 37.2667 137.563 37.0914 141.192C37.0037 143.007 36.9321 144.507 36.8823 145.553C36.8574 146.076 36.8381 146.486 36.8249 146.765C36.8183 146.904 36.8132 147.011 36.8099 147.083C36.8082 147.119 36.8069 147.146 36.806 147.165C36.8056 147.174 36.8053 147.181 36.8051 147.185C36.805 147.188 36.8049 147.189 36.8048 147.19C36.8048 147.191 36.8048 147.192 36.8048 147.192C36.8047 147.192 36.8047 147.192 39.302 147.31ZM44.1029 104.875C44.045 105.394 43.7514 105.699 43.6356 105.79C43.5635 105.846 43.6177 105.782 43.9488 105.685C44.6067 105.492 45.71 105.354 47.267 105.318C50.3293 105.247 54.4623 105.58 58.6937 106.078C62.8989 106.573 67.0985 107.218 70.2538 107.741C71.8295 108.002 73.1407 108.232 74.0567 108.396C74.5146 108.479 74.8735 108.544 75.1171 108.589C75.2389 108.612 75.3318 108.629 75.3939 108.641C75.4249 108.647 75.4482 108.651 75.4635 108.654C75.4712 108.655 75.4769 108.657 75.4805 108.657C75.4823 108.658 75.4836 108.658 75.4844 108.658C75.4848 108.658 75.4851 108.658 75.4852 108.658C75.4853 108.658 75.4853 108.658 75.9516 106.202C76.4179 103.746 76.4176 103.746 76.4172 103.746C76.4169 103.746 76.4163 103.746 76.4157 103.745C76.4145 103.745 76.4127 103.745 76.4104 103.744C76.4059 103.744 76.3993 103.742 76.3907 103.741C76.3735 103.737 76.3483 103.733 76.3154 103.727C76.2495 103.714 76.1526 103.696 76.0267 103.673C75.775 103.626 75.4073 103.559 74.94 103.475C74.0056 103.307 72.6721 103.073 71.0711 102.808C67.8726 102.278 63.5894 101.62 59.2783 101.112C54.9933 100.608 50.5765 100.24 47.151 100.319C45.4641 100.358 43.839 100.508 42.546 100.886C41.9017 101.074 41.1748 101.365 40.5487 101.856C39.879 102.382 39.2584 103.201 39.1336 104.321L44.1029 104.875Z"
                        fill="#181d27"
                    />
                </svg>
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
