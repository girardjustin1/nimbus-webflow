import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentLargeImage02 } from "./content-large-image-02";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

const meta = {
    title: "Blog Sections/Content/Large Image 02",
    component: ContentLargeImage02,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ContentLargeImage02>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: {
        article: nimbusArticles[0],
    },
};
