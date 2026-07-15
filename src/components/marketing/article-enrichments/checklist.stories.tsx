import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checklist } from "./checklist";

const meta = {
    title: "Components/Body/Enrichments/Checklist",
    component: Checklist,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: {
        heading: "What publishers get with Nimbus",
        items: [
            "Auction transparency and control",
            "Holistic demand competition",
            "Operational efficiency across partners",
            "Full access to the Nimbus demand ecosystem",
        ],
    },
} satisfies Meta<typeof Checklist>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
