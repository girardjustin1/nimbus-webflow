import { Check, Copy01, MarkerPin02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { ArticleBody } from "@/pages/blog/article-body";
import { type NimbusArticle } from "@/content/blog/nimbus-articles";
import { useClipboard } from "@/hooks/use-clipboard";

export const ContentAlternative03 = ({ article }: { article: NimbusArticle }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="grid grid-cols-1 gap-16 px-4 py-16 md:grid-cols-2 md:justify-items-start md:gap-0 md:p-0">
                <div className="flex w-full max-w-(--breakpoint-sm) flex-col justify-between md:pt-24 md:pr-8 md:pb-16 md:pl-16">
                    <MarkerPin02 className="size-6 text-fg-quaternary" />
                    <h1 className="mt-4 text-display-md font-extrabold text-primary md:text-display-lg">{article.title}</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">{article.summary}</p>
                    <div className="mt-8 flex items-center gap-3 md:mt-auto">
                        <div className="size-12 rounded-full object-cover bg-[#84D7D9]" />
                        <div>
                            <p className="text-md font-semibold text-primary">{article.author.name}</p>
                            <p className="text-md text-tertiary">
                                Published in{" "}
                                <a
                                    href="#"
                                    className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    {article.category.name}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-80 w-full object-cover md:order-first md:h-200 bg-[#84D7D9]" />
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
