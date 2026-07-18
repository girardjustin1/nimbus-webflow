import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";

/** Page pagination used at the bottom of blog directory listings. */
const meta = {
    title: "Templates Components/Body/Pagination",
    component: PaginationPageDefault,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: { page: 1, total: 10 },
} satisfies Meta<typeof PaginationPageDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Rounded: Story = { args: { rounded: true } };
