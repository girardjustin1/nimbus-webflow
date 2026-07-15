import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderFeaturedPost01 } from "./blog-header-featured-post-01";

const meta = {
    title: "Blog Sections/Headers/Featured Post 01",
    component: BlogHeaderFeaturedPost01,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BlogHeaderFeaturedPost01>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
