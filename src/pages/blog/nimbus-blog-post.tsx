import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import type { BlogBlock, NimbusArticle } from "@/content/blog/nimbus-articles";

const Block = ({ block }: { block: BlogBlock }) => {
    if (block.type === "heading") {
        return <h2 className="mt-10 mb-3 text-[28px] leading-[1.2] font-extrabold text-[#181d27]">{block.text}</h2>;
    }
    if (block.type === "list") {
        return (
            <ul className="my-4 list-disc space-y-2 pl-6 text-[18px] leading-[28px] text-[#535862] marker:text-[#08c6c7]">
                {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        );
    }
    if (block.type === "quote") {
        return (
            <blockquote className="my-8 border-l-4 border-[#08c6c7] pl-6">
                <p className="text-[21px] leading-[30px] font-medium text-[#181d27]">{block.text}</p>
                {block.attribution && <footer className="mt-3 text-[16px] text-[#535862]">— {block.attribution}</footer>}
            </blockquote>
        );
    }
    return (
        <p className="my-4 text-[18px] leading-[28px] text-[#535862]">
            {block.lead && <strong className="font-bold text-[#181d27]">{block.lead} </strong>}
            {block.text}
        </p>
    );
};

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

            <img
                src={article.thumbnailUrl}
                alt=""
                className="my-10 aspect-[16/9] w-full rounded-2xl object-cover"
            />

            <div className="flex flex-col">
                {article.body.map((block, i) => (
                    <Block key={i} block={block} />
                ))}
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
