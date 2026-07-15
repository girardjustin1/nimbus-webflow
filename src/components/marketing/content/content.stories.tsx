import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentSectionRichText01 } from "@/components/marketing/content/content-section-rich-text-01";
import { ContentSplitImage02 } from "@/components/marketing/content/content-split-image-02";

/**
 * Components → Content
 * Untitled UI content sections (rich text, split image), Nimbus-themed.
 */
const meta = {
    title: "Components/Body/Content",
    parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const RichText: Story = { name: "Rich text section", render: () => <ContentSectionRichText01 /> };
export const SplitImage: Story = { name: "Split image", render: () => <ContentSplitImage02 /> };
