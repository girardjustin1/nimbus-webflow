import { useState } from "react";
import { Collection, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";

const reviews = [
    {
        id: "review-01",
        company: "3Portals",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/3portals.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/3portals.svg",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: {
            name: "Kelly Williams",
            role: "Head of Design",
            avatarUrl: "https://www.untitledui.com/images/avatars/kelly-williams?fm=webp&q=80",
        },
    },
    {
        id: "review-02",
        company: "Warpspeed",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: {
            name: "Candice Wu",
            role: "Product Manager",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        },
    },
    {
        id: "review-03",
        company: "GlobalBank",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/global-bank.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/global-bank.svg",
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
        author: {
            name: "Ammar Foley",
            role: "UX Designer",
            avatarUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80",
        },
    },
    {
        id: "review-04",
        company: "Ikigai Labs",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/ikigai-labs.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/ikigai-labs.svg",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: {
            name: "Olivia Rhye",
            role: "Head of Product",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
    },
    {
        id: "review-05",
        company: "Eightball",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/eightball.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/eightball.svg",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: {
            name: "Alisa Hester",
            role: "Head of Product",
            avatarUrl: "https://www.untitledui.com/images/avatars/alisa-hester?fm=webp&q=80",
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
                                <Tab>
                                    <img src={review.companyLogoUrl} className="h-8 md:h-10 dark:hidden" alt={review.company} />
                                    <img src={review.companyLogoUrlDark} className="h-8 opacity-85 not-dark:hidden md:h-10" alt={review.company} />
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

                            <img src={reviews[selectedReviewIndex].companyLogoUrl} className="h-10 object-contain" alt={reviews[selectedReviewIndex].company} />

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
