import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmbedChartsRuntime } from "@/webflow-embeds/embed-playground";

/**
 * The one-time Chart.js runtime for the blog's chart embeds. Paste it into the
 * Webflow site's footer custom code once; then every chart embed renders itself.
 */
const meta = {
    title: "Webflow Guide/Embed Kit/*Charts runtime*",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-primary px-4 py-10 md:px-8">
                <div className="mx-auto max-w-4xl">
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta;

export default meta;

export const Runtime: StoryObj = { render: () => <EmbedChartsRuntime /> };
