import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogSectionSimpleCenterAligned01 } from "./blog-section-simple-center-aligned-01";

const meta = {
    title: "Blog Sections/Sections/Simple Center Aligned 01",
    component: BlogSectionSimpleCenterAligned01,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BlogSectionSimpleCenterAligned01>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
