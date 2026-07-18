import type { Meta, StoryObj } from "@storybook/react-vite";
import { FAQAccordion04 } from "@/components/marketing/faq/faq-accordion-04";

const meta = {
    title: "White Background/Blog Components/Lists & Steps/FAQ",
    component: FAQAccordion04,
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-white px-4 py-10 md:px-8">
                <div className="mx-auto max-w-180">
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof FAQAccordion04>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <FAQAccordion04
            eyebrow="Ad Quality"
            heading="Questions publishers ask about ad quality"
            description="How creative validation, blocking, and revenue-aware review work inside Nimbus."
            faqs={[
                {
                    question: "How does Nimbus stop a broken ad before it reaches my users?",
                    answer: "Creative validation runs inside the auction pipeline. Before a winning bid is passed through, Nimbus confirms the ad will actually render — so broken creative is caught before it ever reaches your app.",
                },
                {
                    question: "Can I block one bad creative without losing the advertiser's other campaigns?",
                    answer: "Yes. You can block an individual creative by its creative ID and leave the rest of that advertiser's demand untouched.",
                },
            ]}
        />
    ),
};
