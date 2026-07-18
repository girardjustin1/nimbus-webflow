import { Badge } from "@/components/base/badges/badges";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { ArticleBody } from "@/pages/blog/article-body";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { FromTheBlog } from "./from-the-blog";
import { ShareArticle } from "./share-article";
import { toMonthYear } from "./format-date";

/**
 * Webflow Guide — News.
 *
 * A fork of the template-11 house-style post (NimbusBlogPost) for the Webflow
 * port: the article byline (author name + avatar) is removed, the post is
 * stamped by month/year only, and the category eyebrow reads "News".
 * Avatars inside the body (pull quotes, testimonials) are untouched.
 */
export const WebflowPicksNews = ({ article }: { article: NimbusArticle }) => (
    <div className="min-h-screen bg-white">
        <NimbusHeader className="bg-white" />

        <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
            <div className="flex flex-col gap-4">
                <span className="text-[13px] font-semibold tracking-[0.11em] text-[#08c6c7] uppercase">News</span>
                <h1 className="text-[36px] leading-[1.08] font-black text-[#181d27] md:text-[48px]">{article.title}</h1>
                <p className="text-[20px] leading-[1.4] text-[#535862]">{article.summary}</p>
                <p className="mt-2 text-sm text-[#535862]">
                    {toMonthYear(article.publishedAt)} · {article.readingTime}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                        <Badge key={tag.name} type="color" color={tag.color}>
                            {tag.name}
                        </Badge>
                    ))}
                </div>
            </div>

            <img src={article.heroImage} alt={article.heroImageAlt} className="my-10 aspect-[16/9] w-full rounded-2xl object-cover" />

            <div className="flex flex-col">
                <ArticleBody blocks={article.body} className="max-w-none" />
            </div>

            <div className="mt-10">
                <ShareArticle heading="Share this article" />
            </div>
        </article>

        <SectionDivider />

        <FromTheBlog />

        <NimbusFooter />
    </div>
);

export default WebflowPicksNews;
