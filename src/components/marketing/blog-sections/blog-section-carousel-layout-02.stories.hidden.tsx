import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogSectionCarouselLayout02 } from "./blog-section-carousel-layout-02";

const meta = {
    title: "Blog Sections/Sections/Carousel Layout 02",
    component: BlogSectionCarouselLayout02,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogSectionCarouselLayout02>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
