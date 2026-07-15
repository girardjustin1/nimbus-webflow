import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderSimple01 } from "./blog-header-simple-01";

const meta = {
    title: "Blog Sections/Headers/Simple 01",
    component: BlogHeaderSimple01,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogHeaderSimple01>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
