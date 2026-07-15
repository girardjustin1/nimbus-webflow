import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentSplitImage04 } from "./content-split-image-04";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

const meta = {
    title: "Blog Sections/Content/Split Image 04",
    component: ContentSplitImage04,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ContentSplitImage04>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: { article: nimbusArticles[0] },
};
