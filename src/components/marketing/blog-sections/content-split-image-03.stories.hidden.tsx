import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentSplitImage03 } from "./content-split-image-03";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

const meta = {
    title: "Blog Sections/Content/Split Image 03",
    component: ContentSplitImage03,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ContentSplitImage03>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: { article: nimbusArticles[0] },
};
