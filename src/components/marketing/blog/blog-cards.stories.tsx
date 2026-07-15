import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    type Article,
    CardFullWidthImage01Vertical,
    Simple01Horizontal,
    Simple01Vertical,
    Simple02Vertical,
    Simple03Vertical,
    Simple04Vertical,
} from "@/components/marketing/blog/base-components/blog-cards";

/**
 * Blog Components → Blog Cards
 * The reusable article-card variants used to build the blog listing pages,
 * themed with the Nimbus design system.
 */
const meta = {
    title: "Components/Blog Cards",
    parameters: { layout: "padded" },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const article: Article = {
    id: "1",
    href: "#",
    thumbnailUrl: "https://www.untitledui.com/marketing/spirals.webp",
    title: "How Nimbus builds a design system with Untitled UI",
    summary: "A look at our approach to tokens, theming, and shipping a consistent component library across products.",
    category: { href: "#", name: "Design" },
    author: {
        href: "#",
        name: "Justin Girard",
        avatarUrl: "https://i.pravatar.cc/150?img=13",
    },
    publishedAt: "20 Jan 2026",
    readingTime: "8 min read",
    tags: [
        { name: "Design", color: "brand", href: "#" },
        { name: "Research", color: "indigo", href: "#" },
        { name: "Systems", color: "pink", href: "#" },
    ],
};

const secondArticle: Article = {
    ...article,
    id: "2",
    title: "Theming Untitled UI with a custom brand palette",
    summary: "Deriving a full 50–950 scale from a single brand color, and wiring it through semantic tokens.",
    category: { href: "#", name: "Engineering" },
    tags: [
        { name: "Product", color: "sky", href: "#" },
        { name: "Tokens", color: "brand", href: "#" },
    ],
};

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
