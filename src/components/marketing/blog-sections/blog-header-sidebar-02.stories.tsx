import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeaderSidebar02 } from "./blog-header-sidebar-02";

const meta = {
    title: "Blog Sections/Headers/Sidebar 02",
    component: BlogHeaderSidebar02,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogHeaderSidebar02>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
