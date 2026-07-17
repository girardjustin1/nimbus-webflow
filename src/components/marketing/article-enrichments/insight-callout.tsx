export type InsightVariant = "teal" | "pink" | "navy";

const THEMES: Record<InsightVariant, { border: string; bg: string; text: string; icon: string }> = {
    teal: { border: "#4a9ea0", bg: "#e9f7f6", text: "#4a9ea0", icon: "#23a6a9" },
    pink: { border: "#d98cb5", bg: "#fdf0f6", text: "#bf4f8a", icon: "#dc438c" },
    navy: { border: "#6a93ad", bg: "#eef4f8", text: "#3f6d8c", icon: "#003a5b" },
};

/** The "insight" lightbulb icon (from references/071726/svgexport-4.svg). */
const InsightIcon = ({ className, stroke }: { className?: string; stroke: string }) => (
    <svg viewBox="0 0 43 43" fill="none" className={className} aria-hidden="true">
        <path
            d="M17.5 32.8172V37.5C17.5 39.7092 19.2908 41.5 21.5 41.5C23.7092 41.5 25.5 39.7092 25.5 37.5V32.8172M21.5 1.5V3.5M3.5 21.5H1.5M8.5 8.5L7.2998 7.2998M34.5 8.5L35.7004 7.2998M41.5 21.5H39.5M33.5 21.5C33.5 28.1274 28.1274 33.5 21.5 33.5C14.8726 33.5 9.5 28.1274 9.5 21.5C9.5 14.8726 14.8726 9.5 21.5 9.5C28.1274 9.5 33.5 14.8726 33.5 21.5Z"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/** An "insight" band — colored left rule, tinted wash, lightbulb icon beside left-aligned copy. */
export const InsightCallout = ({ text, variant = "teal" }: { text: string; variant?: InsightVariant }) => {
    const theme = THEMES[variant];
    return (
        <figure
            className="my-10 flex items-center gap-5 border-l-4 px-6 py-6 md:gap-7 md:px-8 md:py-7"
            style={{ borderColor: theme.border, backgroundColor: theme.bg }}
        >
            <InsightIcon className="size-9 shrink-0 md:size-10" stroke={theme.icon} />
            <p className="text-[19px] leading-[1.45] font-medium md:text-[21px]" style={{ color: theme.text }}>
                {text}
            </p>
        </figure>
    );
};
