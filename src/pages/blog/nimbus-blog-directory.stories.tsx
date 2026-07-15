import type { Meta, StoryObj } from "@storybook/react-vite";
import { NimbusBlogDirectory } from "./nimbus-blog-directory";

/**
 * Nimbus Blog → Directory
 * The real Nimbus blog listing built from imported article content.
 */
const meta = {
    title: "Nimbus Blog/Directory",
    component: NimbusBlogDirectory,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NimbusBlogDirectory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Directory: Story = {};
