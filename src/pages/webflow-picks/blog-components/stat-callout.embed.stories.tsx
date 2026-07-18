import type { Meta, StoryObj } from "@storybook/react-vite";
import { type Accent, buildStatCalloutEmbed } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

interface Args {
    value: string;
    label: string;
    variant: Accent;
    layout: "centered" | "left";
}

const meta: Meta<Args> = {
    title: "Webflow Guide/Embed Kit/Callouts & Quotes/Stat Callout",
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
        variant: { name: "Colorway", control: "inline-radio", options: ["teal", "pink", "navy"] },
        layout: { name: "Alignment", control: "inline-radio", options: ["centered", "left"] },
        value: { name: "Value" },
        label: { name: "Label" },
    },
};

export default meta;
type Story = StoryObj<Args>;

export const Embed: Story = {
    args: {
        value: "+43%",
        label: "eCPM lift after migrating to Nimbus full-stack mediation.",
        variant: "teal",
        layout: "centered",
    },
    render: (args) => <EmbedPlayground html={buildStatCalloutEmbed(args)} />,
};
