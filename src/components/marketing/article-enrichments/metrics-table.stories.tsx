import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricsTable } from "./metrics-table";

const meta = {
    title: "Components/Body/Metrics Table",
    component: MetricsTable,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
} satisfies Meta<typeof MetricsTable>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
