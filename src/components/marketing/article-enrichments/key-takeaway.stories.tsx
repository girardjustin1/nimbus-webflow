import type { Meta, StoryObj } from "@storybook/react-vite";
import { KeyTakeaway } from "./key-takeaway";

const meta = {
    title: "Components/Body/Enrichments/Key Takeaway",
    component: KeyTakeaway,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: { text: "A floor is a dial, not a switch — set the terms the market has to beat." },
} satisfies Meta<typeof KeyTakeaway>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
