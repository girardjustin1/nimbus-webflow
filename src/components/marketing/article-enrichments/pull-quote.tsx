import { Avatar } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";

export type PullQuoteVariant = "teal" | "pink" | "navy";
export type PullQuoteLayout = "border" | "centered" | "card";

const ACCENT: Record<PullQuoteVariant, string> = {
    teal: "#08c6c7",
    pink: "#DA6EA3",
    navy: "#003a5b",
};

const VARIANTS: PullQuoteVariant[] = ["teal", "pink", "navy"];

/** Stable string hash → non-negative int (deterministic, no hydration mismatch). */
const hash = (s: string) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
};

export type PullQuoteProps = {
    quote: string;
    attribution?: string;
    /** Optional role/company line under the name. */
    role?: string;
    avatarSrc?: string;
    /** Accent colorway. Omit to auto-vary the color per quote. */
    variant?: PullQuoteVariant;
    /** Layout: left-border (default), centered, or card. */
    layout?: PullQuoteLayout;
    /** Optional colored stroke around the avatar. */
    avatarRing?: PullQuoteVariant;
};

/** Pull-quote / testimonial with avatar, colorways, and layout options.
 *  When `variant` is omitted the colorway varies deterministically per quote,
 *  and any attributed quote without an `avatarSrc` gets a derived avatar. */
export const PullQuote = ({ quote, attribution, role, avatarSrc, variant, layout = "border", avatarRing }: PullQuoteProps) => {
    const resolvedVariant = variant ?? VARIANTS[hash(quote) % VARIANTS.length];
    const accent = ACCENT[resolvedVariant];
    const resolvedAvatar = attribution ? (avatarSrc ?? `https://i.pravatar.cc/150?img=${(hash(attribution) % 70) + 1}`) : undefined;

    const author = attribution && (
        <footer className={cx("mt-4 flex items-center gap-3", layout === "centered" && "justify-center")}>
            {resolvedAvatar &&
                (avatarRing ? (
                    <span className="inline-flex rounded-full" style={{ boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${ACCENT[avatarRing]}` }}>
                        <Avatar size="md" src={resolvedAvatar} alt={attribution} />
                    </span>
                ) : (
                    <Avatar size="md" src={resolvedAvatar} alt={attribution} />
                ))}
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
