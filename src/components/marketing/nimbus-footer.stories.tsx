import type { Meta, StoryObj } from "@storybook/react-vite";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";

/**
 * Marketing → Footer
 * The Nimbus site footer (navy background, white logo, teal CTA link).
 */
const meta = {
    title: "Templates Components/Footer",
    component: NimbusFooter,
    parameters: { layout: "fullscreen" },
    tags: ["autodocs"],
} satisfies Meta<typeof NimbusFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
