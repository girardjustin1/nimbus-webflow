import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatCallout } from "./stat-callout";

const meta = {
    title: "Components/Body/Enrichments/Stat Callout",
    component: StatCallout,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: { value: "42%", label: "revenue increase Tumblr saw after switching to Nimbus" },
} satisfies Meta<typeof StatCallout>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
