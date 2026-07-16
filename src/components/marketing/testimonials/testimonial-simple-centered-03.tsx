import { useState } from "react";
import { Collection, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";

const reviews = [
    {
        id: "review-01",
        company: "Nimbus",
        quote: "Most stacks add demand by adding architecture — another SDK, another wrapper, another auction off to the side. That's backwards. Every bid competes on the same terms.",
        author: {
            name: "Kristen Smith",
            role: "Chief Product Officer",
            avatarUrl: "https://i.pravatar.cc/150?img=47",
        },
    },
    {
        id: "review-02",
        company: "Timehop",
        quote: "The Dynamic Unit lets us run Snapchat-style full-screen ads that feel native to our swipe experience — without giving up programmatic demand.",
        author: {
            name: "Dana Whitfield",
            role: "Head of Monetization",
            avatarUrl: "https://i.pravatar.cc/150?img=32",
        },
    },
    {
        id: "review-03",
        company: "Tumblr",
        quote: "Our native ad scrolls right along with in-app content and still fills like static or video. That balance used to be impossible.",
        author: {
            name: "Marcus Bell",
            role: "Ad Operations Lead",
            avatarUrl: "https://i.pravatar.cc/150?img=12",
        },
    },
    {
        id: "review-04",
        company: "Imgur",
        quote: "Ad quality tooling is part of the platform, not an afterthought. Blocking is surgical, so we protect our rating without sacrificing revenue.",
        author: {
            name: "Priya Nair",
            role: "VP Revenue",
            avatarUrl: "https://i.pravatar.cc/150?img=45",
        },
    },
    {
        id: "review-05",
        company: "Nimbus",
        quote: "Floors gave our publishers real pricing power. Granular, dynamic flooring keeps DSPs honest and sets the terms the market has to beat.",
        author: {
            name: "Nimbus Ad Ops",
            role: "Yield",
            avatarUrl: "https://i.pravatar.cc/150?img=15",
        },
    },
];

export const TestimonialSimpleCentered03 = () => {
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(2);

    return (
        <Tabs
            selectedKey={reviews[selectedReviewIndex].id}
            onSelectionChange={(value) => setSelectedReviewIndex(reviews.findIndex((review) => review.id === value))}
        >
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-center gap-10 md:gap-12">
                        {/* The tablist has order-last because React Aria gives a warning when a tablist is rendered before the tabpanels. */}
                        <TabList className="order-last hidden grid-cols-5 justify-items-center gap-8 md:grid" items={reviews}>
                            {(review) => (
                                <Tab className="cursor-pointer rounded-full opacity-40 outline-hidden transition duration-100 ease-linear hover:opacity-100 data-selected:opacity-100">
                                    <Avatar src={review.author.avatarUrl} alt={review.author.name} size="lg" />
                                </Tab>
                            )}
                        </TabList>

                        <Collection items={reviews}>
                            {(review) => (
                                <TabPanel className="flex flex-col gap-8 text-center">
                                    <blockquote className="text-display-sm font-medium text-balance text-primary md:text-display-md lg:text-display-lg">
                                        {review.quote}
                                    </blockquote>
                                    <figcaption className="flex justify-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <Avatar border src={review.author.avatarUrl} alt={review.author.name} size="lg" />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-lg font-semibold text-primary">{review.author.name}</p>
                                                <cite className="text-md text-tertiary not-italic">
                                                    {review.author.role}, {review.company}
                                                </cite>
                                            </div>
                                        </div>
                                    </figcaption>
                                </TabPanel>
                            )}
                        </Collection>

                        <div className="flex w-full items-center justify-between md:hidden">
                            <Button
                                aria-label="See previous review"
                                color="link-color"
                                className="text-quaternary md:hidden"
                                onClick={() => setSelectedReviewIndex(selectedReviewIndex == 0 ? reviews.length - 1 : selectedReviewIndex - 1)}
                            >
                                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>

                            <div className="text-center">
                                <p className="text-md font-semibold text-primary">{reviews[selectedReviewIndex].author.name}</p>
                                <p className="text-sm text-tertiary">{reviews[selectedReviewIndex].company}</p>
                            </div>

                            <Button
                                aria-label="See next review"
                                className="md:hidden"
                                color="link-color"
                                onClick={() => setSelectedReviewIndex(selectedReviewIndex == reviews.length - 1 ? 0 : selectedReviewIndex + 1)}
                            >
                                <svg aria-hidden="true" className="h-5 w-10 rotate-180 text-quaternary" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Tabs>
    );
};
