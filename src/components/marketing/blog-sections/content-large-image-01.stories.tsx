import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentLargeImage01 } from "./content-large-image-01";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

const meta = {
    title: "Blog Sections/Content/Large Image 01",
    component: ContentLargeImage01,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ContentLargeImage01>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: {
        article: nimbusArticles[0],
    },
};
