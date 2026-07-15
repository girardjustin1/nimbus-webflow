import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderSimple05 } from "./blog-header-simple-05";

const meta = {
    title: "Blog Sections/Headers/Simple 05",
    component: BlogHeaderSimple05,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogHeaderSimple05>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
