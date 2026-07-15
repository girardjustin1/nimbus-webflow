import { Check, Copy01, Link01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { ArticleBody } from "@/pages/blog/article-body";
import { type NimbusArticle } from "@/content/blog/nimbus-articles";
import { useClipboard } from "@/hooks/use-clipboard";

export const ContentSplitImage03 = ({ article }: { article: NimbusArticle }) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 pb-16 md:grid-cols-2 md:gap-8 md:px-8 md:pt-16 md:pb-24">
                <div className="flex max-w-180 flex-col items-start">
                    <BadgeGroup size="md" addonText={article.category.name} color="brand" theme="modern" className="pr-3" iconTrailing={null}>
                        {article.readingTime}
                    </BadgeGroup>
                    <h1 className="mt-4 text-display-md font-extrabold text-primary md:text-display-lg">{article.title}</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:max-w-120 md:text-xl">{article.summary}</p>
                </div>

                <div className="order-first -ml-4 h-60 w-screen max-w-none object-cover md:order-1 md:ml-0 md:h-160 md:w-full md:max-w-full bg-[#84D7D9]" />
            </div>

            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex justify-center gap-16">
                    <div className="hidden w-70 flex-col gap-8 lg:flex">
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
                        <div className="flex flex-col gap-6">
                            <p className="text-md font-semibold text-brand-secondary">Contributors</p>
                            <ul className="flex flex-col gap-6">
                                {[
                                    {
                                        name: "Marcus Bell",
                                        role: "Product Manager",
                                        avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
                                    },
                                    {
                                        name: "Dana Wolfe",
                                        role: "Product Manager",
                                        avatarUrl: "https://www.untitledui.com/images/avatars/lori-bryson?fm=webp&q=80",
                                    },
                                    {
                                        name: "Noah Frank",
                                        role: "Frontend Engineer",
                                        avatarUrl: "https://www.untitledui.com/images/avatars/loki-bright?fm=webp&q=80",
                                    },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <div className="flex items-center gap-3">
                                            <div className="size-12 rounded-full object-cover bg-[#84D7D9]" />
                                            <div>
                                                <p className="text-md font-semibold text-primary">{item.name}</p>
                                                <p className="text-md text-tertiary">{item.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full border-t border-secondary" />
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex flex-col gap-4"
                        >
                            <label htmlFor="email-input" className="text-md font-semibold text-brand-secondary">
                                Subscribe to our newsletter
                            </label>
                            <Input isRequired id="email-input" name="email" type="email" placeholder="Enter your email" size="lg" />
                            <Button type="submit" size="xl">
                                Subscribe
                            </Button>
                        </Form>
                        <div className="w-full border-t border-secondary" />
                        <div className="flex gap-3">
                            <Button color="secondary" size="md" iconLeading={Link01} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>

                    <div className="max-w-prose lg:max-w-180">
                        <ArticleBody blocks={article.body} className="mx-auto max-w-none" />

                        <div className="flex flex-col items-start justify-between gap-y-8 lg:hidden lg:flex-row">
                            <div className="flex flex-col gap-6">
                                <p className="text-md font-semibold text-brand-secondary">Contributors</p>
                                <ul className="flex flex-col gap-6">
                                    {[
                                        {
                                            name: "Marcus Bell",
                                            role: "Product Manager",
                                            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
                                        },
                                        {
                                            name: "Dana Wolfe",
                                            role: "Product Manager",
                                            avatarUrl: "https://www.untitledui.com/images/avatars/lori-bryson?fm=webp&q=80",
                                        },
                                        {
                                            name: "Noah Frank",
                                            role: "Frontend Engineer",
                                            avatarUrl: "https://www.untitledui.com/images/avatars/loki-bright?fm=webp&q=80",
                                        },
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <div className="flex items-center gap-3">
                                                <div className="size-12 rounded-full object-cover bg-[#84D7D9]" />
                                                <div>
                                                    <p className="text-md font-semibold text-primary">{item.name}</p>
                                                    <p className="text-md text-tertiary">{item.role}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex gap-3">
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
