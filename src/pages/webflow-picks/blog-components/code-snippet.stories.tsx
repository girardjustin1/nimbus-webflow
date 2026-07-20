import type { Meta, StoryObj } from "@storybook/react-vite";
import { CodeSnippet } from "@/components/marketing/article-enrichments/article-enrichments";
import { tokenizeCode } from "@/webflow-embeds/builders";
import { NIMBUS_CODE_TEXT } from "./code-snippet.sample";

const meta = {
    title: "Webflow Guide/Blog Components/Callouts & Quotes/Code Snippet",
    component: CodeSnippet,
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-[#f9f7f3] px-4 py-10 md:px-8">
                <div className="mx-auto max-w-180">
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof CodeSnippet>;

export default meta;

/** A labeled code window with native traffic-light dots, a line-number gutter, and Nimbus syntax colors. */
export const Default: StoryObj = {
    render: () => <CodeSnippet filename="nimbus-init.ts" lines={tokenizeCode(NIMBUS_CODE_TEXT)} />,
};

/** Without a filename — just the traffic-light dots in the header. */
export const NoFilename: StoryObj = {
    render: () => <CodeSnippet lines={tokenizeCode(NIMBUS_CODE_TEXT)} />,
};
