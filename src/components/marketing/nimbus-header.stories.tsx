import type { Meta, StoryObj } from "@storybook/react-vite";
import { NimbusHeader } from "@/components/marketing/nimbus-header";

/**
 * Marketing → Header
 * The Nimbus site navigation: logo, links (incl. Blog), and Sign In.
 */
const meta = {
    title: "Templates Components/Navigation",
    component: NimbusHeader,
    parameters: { layout: "fullscreen" },
    tags: ["autodocs"],
} satisfies Meta<typeof NimbusHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default nav with the Blog link added. */
export const Default: Story = {
    render: (args) => (
        <div className="min-h-96 bg-[#F9F7F3]">
            <NimbusHeader {...args} />
        </div>
    ),
};

/** Custom link set. */
export const CustomLinks: Story = {
    args: {
        links: [
            { label: "Product", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "We're Hiring!", href: "#", accent: true },
        ],
    },
    render: (args) => (
        <div className="min-h-96 bg-[#F9F7F3]">
            <NimbusHeader {...args} />
        </div>
    ),
};
