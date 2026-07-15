import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageryIdea } from "./imagery-idea";

const meta = {
    title: "Components/Body/Imagery Idea",
    component: ImageryIdea,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: { caption: "teal flow diagram — request → auction → creative validation → render" },
} satisfies Meta<typeof ImageryIdea>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
