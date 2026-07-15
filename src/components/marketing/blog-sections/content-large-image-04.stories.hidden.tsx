import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentLargeImage04 } from "./content-large-image-04";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

const meta = {
    title: "Blog Sections/Content/Large Image 04",
    component: ContentLargeImage04,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ContentLargeImage04>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: { article: nimbusArticles[0] },
};
