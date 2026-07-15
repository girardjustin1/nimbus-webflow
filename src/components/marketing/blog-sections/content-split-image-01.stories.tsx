import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentSplitImage01 } from "./content-split-image-01";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

const meta = {
    title: "Blog Sections/Content/Split Image 01",
    component: ContentSplitImage01,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ContentSplitImage01>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: { article: nimbusArticles[0] },
};
