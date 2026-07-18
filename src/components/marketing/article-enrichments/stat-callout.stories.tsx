import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatCallout } from "./stat-callout";

const meta = {
    title: "Templates Components/Body/Stat Callout",
    component: StatCallout,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: { value: "42%", label: "revenue lift Tumblr saw after switching to Nimbus" },
} satisfies Meta<typeof StatCallout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Pink: Story = {
    args: { variant: "pink", value: "1★", label: "the review a single bad ad can leave behind" },
};

export const Navy: Story = {
    args: { variant: "navy", value: "45+", label: "demand partners competing in the Nimbus core auction" },
};

export const LeftAligned: Story = {
    args: { layout: "left", value: "+31%", label: "average eCPM lift after turning on granular floors" },
};

export const Inline: Story = {
    args: { layout: "inline", value: "99.9%", label: "creative render rate across the Nimbus auction" },
};

export const InlinePink: Story = {
    name: "Inline (pink)",
    args: { layout: "inline", variant: "pink", value: "0", label: "new SDKs needed to add Prebid Server demand" },
};
