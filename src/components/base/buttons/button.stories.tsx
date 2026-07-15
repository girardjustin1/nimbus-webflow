import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/base/buttons/button";

const meta = {
    title: "Foundations/Buttons",
    component: Button,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    args: { children: "Button CTA" },
    argTypes: {
        size: { control: "inline-radio", options: ["xs", "sm", "md", "lg", "xl"] },
        color: {
            control: "select",
            options: ["primary", "secondary", "tertiary", "link-color", "link-gray", "primary-destructive"],
        },
        isDisabled: { control: "boolean" },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary button — uses the Nimbus brand-solid (teal) token. */
export const Primary: Story = {
    args: { color: "primary", size: "md" },
};

export const Secondary: Story = {
    args: { color: "secondary", size: "md" },
};

export const Tertiary: Story = {
    args: { color: "tertiary", size: "md" },
};

/** All brand colors side by side — quick visual check of the custom theme. */
export const AllColors: Story = {
    render: (args) => (
        <div className="flex flex-wrap items-center gap-3">
            <Button {...args} color="primary">Primary</Button>
            <Button {...args} color="secondary">Secondary</Button>
            <Button {...args} color="tertiary">Tertiary</Button>
            <Button {...args} color="link-color">Link</Button>
            <Button {...args} color="primary-destructive">Destructive</Button>
        </div>
    ),
    args: { size: "md" },
};

/** All sizes of the primary (teal) button. */
export const AllSizes: Story = {
    render: (args) => (
        <div className="flex flex-wrap items-center gap-3">
            <Button {...args} size="xs">Extra small</Button>
            <Button {...args} size="sm">Small</Button>
            <Button {...args} size="md">Medium</Button>
            <Button {...args} size="lg">Large</Button>
            <Button {...args} size="xl">Extra large</Button>
        </div>
    ),
    args: { color: "primary" },
};
