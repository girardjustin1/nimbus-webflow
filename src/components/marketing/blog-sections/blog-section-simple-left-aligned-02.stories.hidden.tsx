import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogSectionSimpleLeftAligned02 } from "./blog-section-simple-left-aligned-02";

const meta = {
    title: "Blog Sections/Sections/Simple Left Aligned 02",
    component: BlogSectionSimpleLeftAligned02,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BlogSectionSimpleLeftAligned02>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
