import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogSectionSplitLayout02 } from "./blog-section-split-layout-02";

const meta = {
    title: "Blog Sections/Sections/Split Layout 02",
    component: BlogSectionSplitLayout02,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogSectionSplitLayout02>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
