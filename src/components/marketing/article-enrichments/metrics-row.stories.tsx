import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricsRow } from "./metrics-row";

const meta = {
    title: "Templates Components/Body/Metrics Row",
    component: MetricsRow,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
} satisfies Meta<typeof MetricsRow>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
