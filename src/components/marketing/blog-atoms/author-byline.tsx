import { Avatar } from "@/components/base/avatar/avatar";

export type AuthorBylineProps = {
    name: string;
    /** Date and/or role line shown under the name. */
    meta?: string;
    avatarSrc?: string;
    size?: "sm" | "md" | "lg";
};

/** Author avatar + name + date/role — the byline used across blog cards and posts. */
export const AuthorByline = ({ name, meta, avatarSrc, size = "md" }: AuthorBylineProps) => (
    <div className="flex items-center gap-3">
        <Avatar size={size} src={avatarSrc} alt={name} initials={name.slice(0, 2)} />
        <div className="flex flex-col">
            <span className="text-sm font-semibold text-primary">{name}</span>
            {meta && <span className="text-sm text-tertiary">{meta}</span>}
        </div>
    </div>
);
