import type { Meta, StoryObj } from "@storybook/react-vite";
import BlogPost01 from "./blog-post-01";
import BlogPost02 from "./blog-post-02";
import BlogPost03 from "./blog-post-03";
import BlogPost04 from "./blog-post-04";
import BlogPost05 from "./blog-post-05";
import BlogPost06 from "./blog-post-06";
import BlogPost07 from "./blog-post-07";
import BlogPost08 from "./blog-post-08";
import BlogPost09 from "./blog-post-09";
import BlogPost10 from "./blog-post-10";

/**
 * Blog Post Pages — full article / blog-post reading layouts from Untitled UI,
 * themed with the Nimbus design system. One story per variant (01–10).
 */
const meta = {
    title: "Blog Post Pages",
    parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Post01: Story = { name: "01", render: () => <BlogPost01 /> };
export const Post02: Story = { name: "02", render: () => <BlogPost02 /> };
export const Post03: Story = { name: "03", render: () => <BlogPost03 /> };
export const Post04: Story = { name: "04", render: () => <BlogPost04 /> };
export const Post05: Story = { name: "05", render: () => <BlogPost05 /> };
export const Post06: Story = { name: "06", render: () => <BlogPost06 /> };
export const Post07: Story = { name: "07", render: () => <BlogPost07 /> };
export const Post08: Story = { name: "08", render: () => <BlogPost08 /> };
export const Post09: Story = { name: "09", render: () => <BlogPost09 /> };
export const Post10: Story = { name: "10", render: () => <BlogPost10 /> };
