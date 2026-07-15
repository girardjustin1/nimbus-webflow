import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    ArrowRight,
    ArrowUpRight,
    BookClosed,
    BookOpen01,
    Bookmark,
    Calendar,
    Clock,
    Copy01,
    Edit05,
    Eye,
    Feather,
    Heart,
    Link01,
    MessageChatCircle,
    MessageCircle01,
    Rss01,
    SearchLg,
    Send01,
    Share07,
    Star01,
    Tag01,
    ThumbsUp,
    User01,
    Users01,
} from "@untitledui/icons";

/**
 * Foundations → Icons
 * A blog-focused slice of the @untitledui/icons set (line icons used across
 * blog cards, bylines, article meta, and share/engagement actions).
 */
const meta = {
    title: "Foundations/Icons",
    parameters: { layout: "fullscreen" },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const ICONS = [
    { Icon: BookOpen01, name: "BookOpen01" },
    { Icon: BookClosed, name: "BookClosed" },
    { Icon: Feather, name: "Feather" },
    { Icon: Edit05, name: "Edit05" },
    { Icon: Calendar, name: "Calendar" },
    { Icon: Clock, name: "Clock" },
    { Icon: Tag01, name: "Tag01" },
    { Icon: SearchLg, name: "SearchLg" },
    { Icon: User01, name: "User01" },
    { Icon: Users01, name: "Users01" },
    { Icon: MessageCircle01, name: "MessageCircle01" },
    { Icon: MessageChatCircle, name: "MessageChatCircle" },
    { Icon: Heart, name: "Heart" },
    { Icon: ThumbsUp, name: "ThumbsUp" },
    { Icon: Bookmark, name: "Bookmark" },
    { Icon: Eye, name: "Eye" },
    { Icon: Share07, name: "Share07" },
    { Icon: Send01, name: "Send01" },
    { Icon: Link01, name: "Link01" },
    { Icon: Copy01, name: "Copy01" },
    { Icon: Rss01, name: "Rss01" },
    { Icon: Star01, name: "Star01" },
    { Icon: ArrowRight, name: "ArrowRight" },
    { Icon: ArrowUpRight, name: "ArrowUpRight" },
];

export const BlogIcons: Story = {
    render: () => (
        <div className="flex flex-col gap-6 bg-primary p-8 text-primary">
            <div className="flex flex-col gap-2">
                <h2 className="text-display-xs font-semibold">Blog icons</h2>
                <p className="text-md text-tertiary">From @untitledui/icons — inherit brand color via currentColor.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
                {ICONS.map(({ Icon, name }) => (
                    <div
                        key={name}
                        className="flex flex-col items-center gap-2 rounded-lg border border-secondary p-4 text-center"
                    >
                        <Icon className="size-6 text-fg-brand" />
                        <span className="text-xs text-tertiary">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    ),
};
