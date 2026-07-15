import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderSimple06 } from "./blog-header-simple-06";

const meta = {
    title: "Blog Sections/Headers/Simple 06",
    component: BlogHeaderSimple06,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogHeaderSimple06>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
