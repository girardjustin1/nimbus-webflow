import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogSectionSimpleLeftAligned01 } from "./blog-section-simple-left-aligned-01";

const meta = {
    title: "Blog Sections/Sections/Simple Left Aligned 01",
    component: BlogSectionSimpleLeftAligned01,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BlogSectionSimpleLeftAligned01>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
