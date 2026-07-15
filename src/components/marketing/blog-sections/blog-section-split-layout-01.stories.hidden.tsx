import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogSectionSplitLayout01 } from "./blog-section-split-layout-01";

const meta = {
    title: "Blog Sections/Sections/Split Layout 01",
    component: BlogSectionSplitLayout01,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogSectionSplitLayout01>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
