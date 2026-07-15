import type { Meta, StoryObj } from "@storybook/react-vite";
import { PullQuote } from "./pull-quote";

const meta = {
    title: "Components/Body/Enrichments/Pull Quote",
    component: PullQuote,
    parameters: { layout: "padded" },
    tags: ["autodocs"],
    args: {
        quote: "Every bid competes on the same terms. That's the whole design.",
        attribution: "Kristen Smith, Chief Product Officer, Nimbus",
    },
} satisfies Meta<typeof PullQuote>;

export default meta;
export const Default: StoryObj<typeof meta> = {};
