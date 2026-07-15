import { cx } from "@/utils/cx";

export type StatCalloutVariant = "teal" | "pink" | "navy";
export type StatCalloutLayout = "centered" | "left" | "inline";

const THEMES: Record<StatCalloutVariant, { bg: string; ring: string; value: string }> = {
    teal: { bg: "bg-[#f1fcfb]", ring: "ring-[#cef4f4]", value: "text-[#08c6c7]" },
    pink: { bg: "bg-[#fdf2f7]", ring: "ring-[#f6d4e6]", value: "text-[#DA6EA3]" },
    navy: { bg: "bg-[#eef3f7]", ring: "ring-[#d1e0ea]", value: "text-[#003a5b]" },
};

/** Big single metric callout — a headline stat pulled from an article. Supports teal/pink/navy
 *  colorways and centered/left/inline layouts. */
export const StatCallout = ({
    value,
    label,
    variant = "teal",
    layout = "centered",
}: {
    value: string;
    label: string;
    variant?: StatCalloutVariant;
    layout?: StatCalloutLayout;
}) => {
    const theme = THEMES[variant];

    if (layout === "inline") {
        return (
            <div className={cx("my-10 flex flex-col items-center gap-4 rounded-2xl px-6 py-8 ring-1 ring-inset sm:flex-row sm:gap-6", theme.bg, theme.ring)}>
                <span className={cx("text-[64px] leading-none font-extrabold", theme.value)}>{value}</span>
                <span className="text-[18px] text-[#535862] sm:border-l sm:border-black/10 sm:pl-6">{label}</span>
            </div>
        );
    }

    return (
        <div
            className={cx(
                "my-10 flex flex-col gap-2 rounded-2xl px-6 py-10 ring-1 ring-inset",
                layout === "left" ? "items-start text-left" : "items-center text-center",
                theme.bg,
                theme.ring,
            )}
        >
            <span className={cx("text-[64px] leading-none font-extrabold", theme.value)}>{value}</span>
            <span className="max-w-md text-[18px] text-[#535862]">{label}</span>
        </div>
    );
};
