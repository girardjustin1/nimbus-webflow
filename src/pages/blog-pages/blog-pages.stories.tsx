import type { Meta, StoryObj } from "@storybook/react-vite";
import BlogPage01 from "./blog-page-01";
import BlogPage02 from "./blog-page-02";
import BlogPage03 from "./blog-page-03";
import BlogPage04 from "./blog-page-04";
import BlogPage05 from "./blog-page-05";
import BlogPage06 from "./blog-page-06";
import BlogPage07 from "./blog-page-07";
import BlogPage08 from "./blog-page-08";
import BlogPage09 from "./blog-page-09";
import BlogPage10 from "./blog-page-10";

/**
 * Blog Pages — full blog listing / directory layouts from Nimbus,
 * themed with the Nimbus design system. One story per variant (01–10).
 */
const meta = {
    title: "Blog Layouts/Blog Pages",
    parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Page01: Story = { name: "01", render: () => <BlogPage01 /> };
export const Page02: Story = { name: "02", render: () => <BlogPage02 /> };
export const Page03: Story = { name: "03", render: () => <BlogPage03 /> };
export const Page04: Story = { name: "04", render: () => <BlogPage04 /> };
export const Page05: Story = { name: "05", render: () => <BlogPage05 /> };
export const Page06: Story = { name: "06", render: () => <BlogPage06 /> };
export const Page07: Story = { name: "07", render: () => <BlogPage07 /> };
export const Page08: Story = { name: "08", render: () => <BlogPage08 /> };
export const Page09: Story = { name: "09", render: () => <BlogPage09 /> };
export const Page10: Story = { name: "10", render: () => <BlogPage10 /> };
