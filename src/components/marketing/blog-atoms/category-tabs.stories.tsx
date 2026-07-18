import type { Meta, StoryObj } from "@storybook/react-vite";
import { CategoryTabs } from "./category-tabs";

const meta = {
    title: "Templates Components/Body/Category Tabs",
    component: CategoryTabs,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: {
        items: [
            { id: "all", label: "View all" },
            { id: "product", label: "Product" },
            { id: "programmatic", label: "Programmatic" },
            { id: "ad-tech", label: "Ad Tech" },
            { id: "publisher-success", label: "Publisher Success" },
            { id: "yield", label: "Yield" },
        ],
    },
} satisfies Meta<typeof CategoryTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
