import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmbedStylesheet } from "@/webflow-embeds/embed-playground";

/**
 * The single stylesheet every blog component embed depends on. Copy it into
 * Webflow's site-wide Head custom code once; then every embed you paste into a
 * Rich Text block is styled from here.
 */
const meta = {
    title: "Rich Text Editor/Embed Kit/*Stylesheet*",
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

export const Stylesheet: StoryObj = { render: () => <EmbedStylesheet /> };
