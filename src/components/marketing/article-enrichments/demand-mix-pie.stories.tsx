import type { Meta, StoryObj } from "@storybook/react-vite";
import { DemandMixPie } from "./demand-mix-pie";

const meta = {
    title: "Components/Body/Demand Mix (Pie)",
    component: DemandMixPie,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
} satisfies Meta<typeof DemandMixPie>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
