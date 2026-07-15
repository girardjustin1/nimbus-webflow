import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderFeaturedPost03 } from "./blog-header-featured-post-03";

const meta = {
    title: "Blog Sections/Headers/Featured Post 03",
    component: BlogHeaderFeaturedPost03,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BlogHeaderFeaturedPost03>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
