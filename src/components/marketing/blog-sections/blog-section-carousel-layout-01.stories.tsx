import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogSectionCarouselLayout01 } from "./blog-section-carousel-layout-01";

const meta = {
    title: "Blog Sections/Sections/Carousel Layout 01",
    component: BlogSectionCarouselLayout01,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BlogSectionCarouselLayout01>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
