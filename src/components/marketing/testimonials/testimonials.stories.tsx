import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestimonialCard } from "@/components/marketing/testimonials/testimonial-card";
import { TestimonialSimpleCentered03 } from "@/components/marketing/testimonials/testimonial-simple-centered-03";
import { TestimonialSimpleLeftAligned } from "@/components/marketing/testimonials/testimonial-simple-left-aligned";

/**
 * Components → Testimonials
 * Nimbus testimonial sections, themed with the Nimbus design system.
 */
const meta = {
    title: "Components/Body/Testimonials",
    parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SimpleCentered: Story = { name: "Simple centered", render: () => <TestimonialSimpleCentered03 /> };
export const SimpleLeftAligned: Story = { name: "Simple left-aligned", render: () => <TestimonialSimpleLeftAligned /> };
export const Card: Story = { name: "Card", render: () => <TestimonialCard /> };
