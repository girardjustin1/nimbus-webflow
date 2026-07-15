import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderAltLayout04 } from "./blog-header-alt-layout-04";

const meta = {
    title: "Blog Sections/Headers/Alt Layout 04",
    component: BlogHeaderAltLayout04,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BlogHeaderAltLayout04>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
