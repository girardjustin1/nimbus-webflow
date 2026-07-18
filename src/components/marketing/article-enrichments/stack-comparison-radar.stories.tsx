import type { Meta, StoryObj } from "@storybook/react-vite";
import { StackComparisonRadar } from "./stack-comparison-radar";

const meta = {
    title: "Templates Components/Body/Stack Comparison (Radar)",
    component: StackComparisonRadar,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
} satisfies Meta<typeof StackComparisonRadar>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
