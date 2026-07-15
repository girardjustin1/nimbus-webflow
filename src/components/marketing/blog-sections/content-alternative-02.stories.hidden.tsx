import type { Meta, StoryObj } from "@storybook/react-vite";
import { nimbusArticles } from "@/content/blog/nimbus-articles";
import { ContentAlternative02 } from "./content-alternative-02";

const meta = {
    title: "Blog Sections/Content/Alternative 02",
    component: ContentAlternative02,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ContentAlternative02>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: { article: nimbusArticles[0] },
};
