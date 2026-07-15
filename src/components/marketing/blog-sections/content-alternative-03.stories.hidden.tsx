import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentAlternative03 } from "./content-alternative-03";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

const meta = {
    title: "Blog Sections/Content/Alternative 03",
    component: ContentAlternative03,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ContentAlternative03>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: {
        article: nimbusArticles[0],
    },
};
