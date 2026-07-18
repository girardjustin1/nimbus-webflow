import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    CardFullWidthImage01Vertical,
    Simple01Horizontal,
    Simple01Vertical,
    Simple02Vertical,
    Simple03Vertical,
    Simple04Vertical,
} from "@/components/marketing/blog/base-components/blog-cards";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

/**
 * Components → Blog Cards
 * The reusable article-card variants used to build the blog listing pages,
 * populated with real Nimbus articles and themed with the Nimbus design system.
 */
const meta = {
    title: "Templates Components/Body/Blog Cards",
    parameters: { layout: "padded" },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const [article, secondArticle] = nimbusArticles;

export const SimpleVertical: Story = {
    render: () => (
        <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Simple01Vertical article={article} />
            <Simple02Vertical article={secondArticle} />
            <Simple03Vertical article={article} />
            <Simple04Vertical article={secondArticle} />
        </div>
    ),
};

export const SimpleHorizontal: Story = {
    render: () => (
        <div className="flex max-w-3xl flex-col gap-8">
            <Simple01Horizontal article={article} />
            <Simple01Horizontal article={secondArticle} />
        </div>
    ),
};

export const FullWidthImage: Story = {
    render: () => (
        <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <CardFullWidthImage01Vertical article={article} />
            <CardFullWidthImage01Vertical article={secondArticle} />
        </div>
    ),
};
