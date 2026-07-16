import { Badge, type BadgeColor } from "@/components/base/badges/badges";

export type TagListItem = { name: string; color: BadgeColor<"color"> };

/** A row of article tag badges. */
export const TagList = ({ tags, size = "md" }: { tags: TagListItem[]; size?: "sm" | "md" | "lg" }) => (
    <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
            <Badge key={tag.name} type="color" color={tag.color} size={size}>
                {tag.name}
            </Badge>
        ))}
    </div>
);
