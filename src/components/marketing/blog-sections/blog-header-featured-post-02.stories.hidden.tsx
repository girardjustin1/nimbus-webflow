import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderFeaturedPost02 } from "./blog-header-featured-post-02";

const meta = {
    title: "Blog Sections/Headers/Featured Post 02",
    component: BlogHeaderFeaturedPost02,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BlogHeaderFeaturedPost02>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
