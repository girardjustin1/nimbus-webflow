import { Check, Copy01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { ArticleBody } from "@/pages/blog/article-body";
import { type NimbusArticle } from "@/content/blog/nimbus-articles";
import { useClipboard } from "@/hooks/use-clipboard";

export const ContentLargeImage04 = ({ article }: { article: NimbusArticle }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="w-full bg-brand-section py-16 pb-32 md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-240 flex-col items-center text-center">
                        <span className="text-sm font-semibold text-primary_on-brand md:text-md">{article.category.name}</span>
                        <h1 className="mt-3 text-display-md font-extrabold text-tertiary_on-brand md:text-display-lg">{article.title}</h1>
                        <p className="mt-4 max-w-3xl text-lg text-primary_on-brand md:mt-6 md:text-xl">{article.summary}</p>

                        <div className="mt-8 flex items-center gap-3 text-left">
                            <div className="size-12 rounded-full object-cover bg-[#84D7D9]" />
                            <div>
                                <p className="text-md font-semibold text-tertiary_on-brand">{article.author.name}</p>
                                <p className="text-md text-primary_on-brand">{article.publishedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto -mt-16 h-60 w-full object-cover md:-mt-24 md:h-160 bg-[#84D7D9]" />
                <div className="mx-auto max-w-prose pt-16 md:max-w-180 md:pt-24">
                    <ArticleBody blocks={article.body} className="mx-auto max-w-none" />

                    <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row md:items-center">
                        <div className="flex gap-2">
                            {article.tags.map((tag) => (
                                <Badge key={tag.name} type="color" color={tag.color} size="md">
                                    {tag.name}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Copy01}>
                                {copied ? "Copied" : "Copy link"}
                            </Button>
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
