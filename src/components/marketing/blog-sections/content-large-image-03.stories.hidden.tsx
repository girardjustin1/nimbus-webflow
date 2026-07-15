import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentLargeImage03 } from "./content-large-image-03";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

const meta = {
    title: "Blog Sections/Content/Large Image 03",
    component: ContentLargeImage03,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ContentLargeImage03>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: { article: nimbusArticles[0] },
};
