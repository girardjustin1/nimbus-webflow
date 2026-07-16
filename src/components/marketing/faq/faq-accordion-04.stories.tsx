import type { Meta, StoryObj } from "@storybook/react-vite";
import { FAQAccordion04 } from "./faq-accordion-04";

const meta = {
    title: "Components/Body/FAQ",
    component: FAQAccordion04,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof FAQAccordion04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomContent: Story = {
    args: {
        eyebrow: "Support",
        heading: "Questions, answered",
        description: "Everything you need to know about running Nimbus. Can't find an answer? Reach out to your Nimbus Account Manager.",
        faqs: [
            {
                question: "How does the Dynamic Ad Unit adapt to my layout?",
                answer: "It reads the available slot at request time and negotiates the optimal size and format on the fly, so you always render the highest-value ad your layout can support.",
            },
            {
                question: "Will Ad Quality controls slow down my page?",
                answer: "No. Filtering happens server-side before the ad is returned, so blocked creatives never reach the browser and there is no client-side rendering penalty.",
            },
            {
                question: "Can I set floors per placement?",
                answer: "Yes. Floors can be configured globally or scoped to individual placements, geos, and device types, giving you granular control over your pricing power.",
            },
        ],
    },
};
