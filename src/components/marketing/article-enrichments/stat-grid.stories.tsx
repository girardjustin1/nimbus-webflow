import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatGrid } from "./stat-grid";

const meta = {
    title: "Components/Body/Enrichments/Stat Grid",
    component: StatGrid,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: {
        stats: [
            { value: "31%", label: "avg publisher lift with Nimbus+" },
            { value: "24%", label: "avg lift with Nimbus Core" },
            { value: "60+", label: "demand sources connected" },
        ],
    },
} satisfies Meta<typeof StatGrid>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
