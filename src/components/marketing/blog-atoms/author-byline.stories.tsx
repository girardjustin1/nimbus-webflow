import type { Meta, StoryObj } from "@storybook/react-vite";
import { AuthorByline } from "./author-byline";

const meta = {
    title: "Templates Components/Body/Author Byline",
    component: AuthorByline,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    args: { name: "Nimbus Ad Ops", meta: "14 Jul 2026", avatarSrc: "https://i.pravatar.cc/150?img=15", size: "md" },
    argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
} satisfies Meta<typeof AuthorByline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithRole: Story = { args: { meta: "Yield Lead" } };
export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <AuthorByline {...args} size="sm" />
            <AuthorByline {...args} size="md" />
            <AuthorByline {...args} size="lg" />
        </div>
    ),
};
