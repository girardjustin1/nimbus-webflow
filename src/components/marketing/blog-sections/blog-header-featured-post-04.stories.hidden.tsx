import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderFeaturedPost04 } from "./blog-header-featured-post-04";

const meta = {
    title: "Blog Sections/Headers/Featured Post 04",
    component: BlogHeaderFeaturedPost04,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BlogHeaderFeaturedPost04>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
