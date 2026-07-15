import { Avatar } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";

export type PullQuoteVariant = "teal" | "pink" | "navy";
export type PullQuoteLayout = "border" | "centered" | "card";

const ACCENT: Record<PullQuoteVariant, string> = {
    teal: "#08c6c7",
    pink: "#DA6EA3",
    navy: "#003a5b",
};

export type PullQuoteProps = {
    quote: string;
    attribution?: string;
    /** Optional role/company line under the name. */
    role?: string;
    avatarSrc?: string;
    /** Accent colorway. */
    variant?: PullQuoteVariant;
    /** Layout: left-border (default), centered, or card. */
    layout?: PullQuoteLayout;
};

/** Pull-quote / testimonial with avatar, colorways, and layout options. */
export const PullQuote = ({ quote, attribution, role, avatarSrc, variant = "teal", layout = "border" }: PullQuoteProps) => {
    const accent = ACCENT[variant];

    const author = attribution && (
        <footer className={cx("mt-4 flex items-center gap-3", layout === "centered" && "justify-center")}>
            {avatarSrc && <Avatar size="md" src={avatarSrc} alt={attribution} />}
            <div className={layout === "centered" ? "text-center" : ""}>
                <span className="block text-[16px] font-semibold text-[#181d27]">{attribution}</span>
                {role && <span className="block text-[15px] text-[#535862]">{role}</span>}
            </div>
        </footer>
    );

    if (layout === "card") {
        return (
            <figure className="my-10 rounded-2xl border-l-4 bg-white p-8 ring-1 ring-black/5 ring-inset" style={{ borderColor: accent }}>
                <p className="text-[24px] leading-[1.4] font-medium text-[#181d27]">“{quote}”</p>
                {author}
            </figure>
        );
    }

    if (layout === "centered") {
        return (
            <figure className="my-10 flex flex-col items-center text-center">
                <span aria-hidden className="text-[48px] leading-none font-black" style={{ color: accent }}>
                    “
                </span>
                <p className="text-[28px] leading-[1.3] font-medium text-[#181d27]">{quote}</p>
                {author}
            </figure>
        );
    }

    return (
        <blockquote className="my-10 border-l-4 pl-6" style={{ borderColor: accent }}>
            <p className="text-[26px] leading-[1.35] font-medium text-[#181d27]">“{quote}”</p>
            {author}
        </blockquote>
    );
};
