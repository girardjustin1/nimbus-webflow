import { type ComponentProps } from "react";
import { ArrowUpRight } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import type { BadgeColor } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";
import { toMonthYear } from "./format-date";

export type WebflowArticle = {
    id: string;
    href: string;
    thumbnailUrl: string;
    title: string;
    summary: string;
    category: {
        href: string;
        name: string;
    };
    publishedAt: string;
    readingTime: string;
    tags: Array<{ name: string; color: BadgeColor<"color">; href: string }>;
    isFeatured?: boolean;
};

/**
 * The Webflow Picks blog thumbnail card: a plain top thumbnail, a category +
 * reading-time badge, the title (with an arrow), a two-line summary, and a
 * month/year stamp — no byline author. Shared by the Blog Directory grid and the
 * Case Studies "From the blog" grid so both use one card style.
 */
export const BlogThumbnailCard = ({
    article,
    badgeTheme = "light",
    imageClassName,
}: {
    article: WebflowArticle;
    badgeTheme?: ComponentProps<typeof BadgeGroup>["theme"];
    imageClassName?: string;
}) => (
    <div className="flex flex-col gap-4">
        <a href={article.href} className="overflow-hidden" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full rounded-2xl object-cover", imageClassName)} />
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

            <p className="text-sm text-tertiary">{toMonthYear(article.publishedAt)}</p>
        </div>
    </div>
);
