import { Check, Copy01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { ArticleBody } from "@/pages/blog/article-body";
import { type NimbusArticle } from "@/content/blog/nimbus-articles";
import { useClipboard } from "@/hooks/use-clipboard";

export const ContentSplitImage02 = ({ article }: { article: NimbusArticle }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="flex flex-col gap-16 py-16 md:flex-row md:gap-0 md:py-0">
                <div className="flex md:w-1/2 md:items-end md:justify-end md:py-24">
                    <div className="flex w-full max-w-(--breakpoint-sm) flex-col px-4 md:px-8">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">{article.publishedAt} • {article.readingTime}</span>
                        <h1 className="mt-3 text-display-md font-extrabold text-primary md:mt-4 md:text-display-lg">{article.title}</h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:max-w-120 md:text-xl">{article.summary}</p>
                        <div className="mt-8 flex items-center gap-3 md:mt-12">
                            <div className="size-12 rounded-full object-cover bg-[#84D7D9]" />
                            <div>
                                <p className="text-md font-semibold text-primary">{article.author.name}</p>
                                <p className="text-md text-tertiary">{article.category.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-4 md:h-180 md:w-1/2 md:bg-secondary md:p-8">
                    <div className="h-100 w-full object-cover md:h-140 md:w-100 bg-[#84D7D9]" />
                </div>
            </div>
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:py-24">
                <div className="mx-auto max-w-prose md:max-w-180">
                    <ArticleBody blocks={article.body} className="mx-auto max-w-none" />

                    <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row md:items-center">
                        <p className="text-md font-semibold text-tertiary">Share this post</p>

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
