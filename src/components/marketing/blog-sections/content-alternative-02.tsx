import type { ComponentProps, FC } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ArticleBody } from "@/pages/blog/article-body";
import { type NimbusArticle } from "@/content/blog/nimbus-articles";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

type RoundButtonProps = ComponentProps<typeof Button> & {
    icon?: FC<{ className?: string }>;
};

const RoundButton = ({ icon: Icon, ...props }: RoundButtonProps) => {
    return (
        <Button
            {...props}
            color="link-gray"
            className={cx(
                "group flex size-12 items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14",
                props.className,
            )}
        >
            {props.children ??
                (isReactComponent(Icon) ? (
                    <Icon className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover md:size-6" />
                ) : null)}
        </Button>
    );
};

export const ContentAlternative02 = ({ article }: { article: NimbusArticle }) => {
    return (
        <div className="overflow-hidden bg-[#f9f7f3]">
            <div className="mx-auto w-full max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="max-w-3xl">
                    <div className="text-sm font-semibold text-brand-secondary md:text-md">Published {article.publishedAt}</div>
                    <h1 className="mt-3 text-display-md font-extrabold text-primary md:text-display-lg">{article.title}</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">{article.summary}</p>
                </div>

                <Carousel.Root opts={{ align: "start" }} className="mt-12 md:mt-16">
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:pr-8 lg:gap-8">
                        {[
                            { alt: "Image provided by Unsplash.com", imgUrl: "https://www.untitledui.com/marketing/blog-post-carousel-0.webp" },
                            { alt: "Image provided by Unsplash.com", imgUrl: "https://www.untitledui.com/marketing/blog-post-carousel-1.webp" },
                            {
                                alt: "Image provided by Unsplash.com",
                                imgUrl: "https://images.unsplash.com/photo-1609081144289-eacc3108cd03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                            },
                            {
                                alt: "Image provided by Unsplash.com",
                                imgUrl: "https://images.unsplash.com/photo-1656356594220-7bec7673307f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80",
                            },
                            {
                                alt: "Image provided by Unsplash.com",
                                imgUrl: "https://images.unsplash.com/photo-1648536474453-2b9e03f0238c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                            },
                        ].map((item) => (
                            <Carousel.Item key={item.imgUrl} className="basis-auto">
                                <div className="size-auto max-h-90 max-w-90 cursor-grab object-contain lg:max-h-180 lg:max-w-180 bg-[#84D7D9]" />
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>

                    <div className="mt-8 flex gap-4 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
            </div>

            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto max-w-prose md:max-w-180">
                    <ArticleBody blocks={article.body} className="mx-auto max-w-none" />

                    <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="size-12 rounded-full object-cover md:size-14 bg-[#84D7D9]" />
                            <div>
                                <p className="text-md font-semibold text-primary md:text-lg">{article.author.name}</p>
                                <p className="text-md text-tertiary">{article.category.name}</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {article.tags.map((tag) => (
                                <Badge key={tag.name} type="color" color={tag.color} size="md">
                                    {tag.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
