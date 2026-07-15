import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentSplitImage02 } from "./content-split-image-02";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

const meta = {
    title: "Blog Sections/Content/Split Image 02",
    component: ContentSplitImage02,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ContentSplitImage02>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: { article: nimbusArticles[0] },
};
