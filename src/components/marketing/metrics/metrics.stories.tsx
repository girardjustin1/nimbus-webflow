import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricsCardBrandDark } from "@/components/marketing/metrics/metrics-card-brand-dark";
import { MetricsCardGrayLight } from "@/components/marketing/metrics/metrics-card-gray-light";
import { MetricsSimpleCenteredText } from "@/components/marketing/metrics/metrics-simple-centered-text";

/**
 * Components → Metrics
 * Nimbus metrics / stats sections, Nimbus-themed.
 */
const meta = {
    title: "Components/Body/Metrics",
    parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SimpleCenteredText: Story = { name: "Simple centered text", render: () => <MetricsSimpleCenteredText /> };
export const CardGrayLight: Story = { name: "Card (gray light)", render: () => <MetricsCardGrayLight /> };
export const CardBrandDark: Story = { name: "Card (brand dark)", render: () => <MetricsCardBrandDark /> };
