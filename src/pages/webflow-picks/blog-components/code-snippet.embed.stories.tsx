import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildCodeEmbed, tokenizeCode } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";
import { NIMBUS_CODE_TEXT } from "./code-snippet.sample";

interface Args {
    filename: string;
    code: string;
}

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Callouts & Quotes/Code Snippet",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-primary px-4 py-10 md:px-8">
                <div className="mx-auto max-w-200">
                    <Story />
                </div>
            </div>
        ),
    ],
    argTypes: {
        filename: { name: "Filename (blank hides it)", control: "text" },
        code: { name: "Code", control: "text" },
    },
};

export default meta;
type Story = StoryObj<Args>;

/**
 * Edit the code in the "Code" control — it's auto-highlighted with the Nimbus
 * token palette (keywords, functions, strings, numbers, types, keys, comments).
 * The three header dots are native traffic-light colors. Copy the generated
 * markup into a Webflow Rich Text "Custom Code" block.
 */
export const Embed: Story = {
    args: {
        filename: "nimbus-init.ts",
        code: NIMBUS_CODE_TEXT,
    },
    render: (args) => <EmbedPlayground html={buildCodeEmbed({ filename: args.filename || undefined, lines: tokenizeCode(args.code) })} />,
};
