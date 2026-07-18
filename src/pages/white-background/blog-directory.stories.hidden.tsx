import type { Meta, StoryObj } from "@storybook/react-vite";
import WebflowPicksBlogDirectory from "./blog-directory";

/**
 * Webflow Guide — the blog directory layout selected for the Webflow port.
 *
 * Forked from Blog Article Templates → Blog Directory → 04, with byline authors
 * removed, month/year timestamps, and the Webflow Guide category taxonomy
 * (Case Study, News, Announcement, Product).
 */
const meta = {
    title: "White Background/Blog Directory",
    component: WebflowPicksBlogDirectory,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof WebflowPicksBlogDirectory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
