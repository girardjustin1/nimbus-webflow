import type { Meta, StoryObj } from "@storybook/react-vite";
import { PullQuote } from "./pull-quote";

const meta = {
    title: "Templates Components/Body/Pull Quote",
    component: PullQuote,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: {
        quote: "Every bid competes on the same terms. That's the whole design.",
        attribution: "Kristen Smith",
        role: "Chief Product Officer, Nimbus",
        avatarSrc: "https://i.pravatar.cc/150?img=47",
        variant: "teal",
        layout: "border",
    },
    argTypes: {
        variant: { control: "inline-radio", options: ["teal", "pink", "navy"] },
        layout: { control: "inline-radio", options: ["border", "centered", "card"] },
    },
} satisfies Meta<typeof PullQuote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The three accent colorways (left-border layout). */
export const Colorways: Story = {
    render: (args) => (
        <div className="flex flex-col gap-6">
            <PullQuote {...args} variant="teal" />
            <PullQuote {...args} variant="pink" />
            <PullQuote {...args} variant="navy" />
        </div>
    ),
};

/** The three layouts. */
export const Layouts: Story = {
    render: (args) => (
        <div className="flex flex-col gap-8">
            <PullQuote {...args} layout="border" />
            <PullQuote {...args} layout="centered" />
            <PullQuote {...args} layout="card" />
        </div>
    ),
};

export const Centered: Story = { args: { layout: "centered" } };
export const Card: Story = { args: { layout: "card", variant: "pink" } };

/** A wall of publisher testimonials — varied people, colorways, and layouts. */
export const Testimonials: Story = {
    render: () => (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <PullQuote
                layout="card"
                variant="teal"
                quote="Switching to Nimbus lifted our eCPMs 31% in the first quarter — without adding a single SDK."
                attribution="Priya Nair"
                role="Head of Monetization, Northwind Media"
                avatarSrc="https://i.pravatar.cc/150?img=32"
            />
            <PullQuote
                layout="card"
                variant="pink"
                quote="The Dynamic Unit let us keep our native feel without leaving demand on the table."
                attribution="Marcus Bell"
                role="VP Product, Skylark"
                avatarSrc="https://i.pravatar.cc/150?img=12"
            />
            <PullQuote
                layout="card"
                variant="navy"
                quote="Nimbus' ad quality tooling protected our app rating through our biggest growth year."
                attribution="Elena Vasquez"
                role="Head of Growth, Loop"
                avatarSrc="https://i.pravatar.cc/150?img=45"
            />
            <PullQuote
                layout="card"
                variant="teal"
                quote="Floors finally feel like a lever we control — pricing power we didn't have before."
                attribution="Chris Tanaka"
                role="Yield Lead, Beacon"
                avatarSrc="https://i.pravatar.cc/150?img=53"
            />
        </div>
    ),
};
