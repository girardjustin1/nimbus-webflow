import { Check, Copy01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { ArticleBody } from "@/pages/blog/article-body";
import { type NimbusArticle } from "@/content/blog/nimbus-articles";
import { useClipboard } from "@/hooks/use-clipboard";

export const ContentSplitImage04 = ({ article }: { article: NimbusArticle }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:justify-items-end md:gap-0">
                <div className="flex max-w-(--breakpoint-sm) flex-col items-start px-4 pb-16 md:w-full md:px-8 md:pb-0">
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

                <div className="order-first h-60 w-screen max-w-none object-cover md:order-1 md:h-180 md:w-full md:max-w-full bg-[#84D7D9]" />
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
