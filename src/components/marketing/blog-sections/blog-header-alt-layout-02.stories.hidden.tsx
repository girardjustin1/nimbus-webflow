import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderAltLayout02 } from "./blog-header-alt-layout-02";

const meta = {
    title: "Blog Sections/Headers/Alt Layout 02",
    component: BlogHeaderAltLayout02,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BlogHeaderAltLayout02>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
