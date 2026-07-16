import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import type { NimbusArticle } from "@/content/blog/nimbus-articles";
import { ArticleBody } from "@/pages/blog/article-body";

/** A single Nimbus blog post, rendered with the Nimbus type system + chrome. */
export const NimbusBlogPost = ({ article }: { article: NimbusArticle }) => (
    <div className="min-h-screen bg-[#f9f7f3]">
        <NimbusHeader />

        <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
            <div className="flex flex-col gap-4">
                <span className="text-[13px] font-semibold tracking-[0.11em] text-[#08c6c7] uppercase">
                    {article.category.name}
                </span>
                <h1 className="text-[36px] leading-[1.08] font-black text-[#181d27] md:text-[48px]">{article.title}</h1>
                <p className="text-[20px] leading-[1.4] text-[#535862]">{article.summary}</p>
                <div className="mt-2 flex items-center gap-3">
                    <Avatar size="md" src={article.author.avatarUrl} alt={article.author.name} />
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#181d27]">{article.author.name}</span>
                        <span className="text-sm text-[#535862]">
                            {article.publishedAt} · {article.readingTime}
                        </span>
                    </div>
                </div>
            </div>

            <img src={article.heroImage} alt={article.heroImageAlt} className="my-10 aspect-[16/9] w-full rounded-2xl object-cover" />

            <div className="flex flex-col">
                <ArticleBody blocks={article.body} className="max-w-none" />
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-black/5 pt-6">
                {article.tags.map((tag) => (
                    <Badge key={tag.name} type="color" color={tag.color}>
                        {tag.name}
                    </Badge>
                ))}
            </div>
        </article>

        <NimbusFooter />
    </div>
);

export default NimbusBlogPost;
