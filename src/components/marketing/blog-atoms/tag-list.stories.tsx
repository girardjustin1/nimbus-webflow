import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagList } from "./tag-list";

const meta = {
    title: "Templates Components/Body/Tag List",
    component: TagList,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    args: {
        size: "md",
        tags: [
            { name: "Programmatic", color: "brand" },
            { name: "Yield", color: "indigo" },
            { name: "Ad Tech", color: "sky" },
            { name: "Publishers", color: "pink" },
        ],
    },
    argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
