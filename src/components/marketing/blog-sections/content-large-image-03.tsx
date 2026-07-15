import type { FC } from "react";
import { Check, Copy01, Send01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { ArticleBody } from "@/pages/blog/article-body";
import { type NimbusArticle } from "@/content/blog/nimbus-articles";
import { useClipboard } from "@/hooks/use-clipboard";

const BlobSubscribeCard = ({ icon, title, description }: { icon: FC<{ className?: string }>; title: string; description: string }) => (
    <Form
        onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            console.log("Form data:", data);
        }}
        className="flex flex-col gap-8 self-start rounded-2xl bg-secondary p-6 shadow-xs ring-1 ring-secondary ring-inset md:p-8"
    >
        <FeaturedIcon icon={icon} color="gray" theme="modern" size="xl" />
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-primary">{title}</h2>
                <p className="text-md text-tertiary">{description}</p>
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="lg"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    hint={
                        <span>
                            Read about our{" "}
                            <a
                                href="#"
                                className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                privacy policy
                            </a>
                            .
                        </span>
                    }
                />
                <Button type="submit" size="xl">
                    Subscribe
                </Button>
            </div>
        </div>
    </Form>
);

export const ContentLargeImage03 = ({ article }: { article: NimbusArticle }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="w-full max-w-3xl">
                    <BadgeGroup size="md" addonText={article.category.name} color="brand" theme="light" className="pr-3" iconTrailing={null}>
                        {article.readingTime}
                    </BadgeGroup>

                    <h1 className="mt-4 text-display-md font-extrabold text-primary md:text-display-lg">{article.title}</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">{article.summary}</p>
                </div>
                <div className="mt-16 w-full">
                    <div className="h-60 w-full object-cover md:h-160 bg-[#84D7D9]" />
                    <div className="mt-8 flex items-start justify-between gap-24">
                        <dl className="flex gap-12 md:gap-12">
                            <div>
                                <dt className="text-sm font-semibold text-brand-secondary">Written by</dt>
                                <dd className="mt-3 text-lg font-medium text-primary">{article.author.name}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-semibold text-brand-secondary">Published on</dt>
                                <dd className="mt-3 text-lg font-medium text-primary">{article.publishedAt}</dd>
                            </div>
                        </dl>

                        <div className="hidden gap-3 md:flex">
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
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex max-w-180 flex-col justify-center gap-12 md:items-start lg:max-w-none lg:flex-row lg:gap-24">
                    <ArticleBody blocks={article.body} className="max-w-none" />
                    <div className="lg:max-w-sm lg:min-w-85">
                        <BlobSubscribeCard
                            icon={Send01}
                            title="Weekly newsletter"
                            description="No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
