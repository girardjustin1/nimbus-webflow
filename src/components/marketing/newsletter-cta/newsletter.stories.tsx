import type { Meta, StoryObj } from "@storybook/react-vite";
import { NewsletterCardHorizontalBrand } from "@/components/marketing/newsletter-cta/newsletter-card-horizontal-brand";
import { NewsletterCardVertical } from "@/components/marketing/newsletter-cta/newsletter-card-vertical";
import { NewsletterSimpleCentered } from "@/components/marketing/newsletter-cta/newsletter-simple-centered";

/**
 * Components → Newsletter
 * Untitled UI newsletter / email-signup sections, Nimbus-themed.
 */
const meta = {
    title: "Components/Newsletter",
    parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SimpleCentered: Story = { name: "Simple centered", render: () => <NewsletterSimpleCentered /> };
export const CardHorizontal: Story = { name: "Card horizontal (brand)", render: () => <NewsletterCardHorizontalBrand /> };
export const CardVertical: Story = { name: "Card vertical", render: () => <NewsletterCardVertical /> };
