import { cx } from "@/utils/cx";

/**
 * A logo + statement band, bracketed by content dividers — the case-study
 * "Background" treatment (partner logo on the left, intro copy on the right).
 *
 * The logo is sized inside a bounding box (max-width + max-height) rather than a
 * fixed height, so wide wordmarks and compact logos stay balanced. Pass
 * `logoShape="square"` for compact/stacked logos (an icon over a wordmark) to
 * raise the height cap and give them equal visual weight.
 */
export const LogoStatement = ({
    logoSrc,
    logoAlt,
    text,
    logoShape = "wide",
}: {
    logoSrc: string;
    logoAlt: string;
    text: string;
    logoShape?: "wide" | "square";
}) => (
    <div className="my-16 border-y border-black/10 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-center md:gap-12">
            <img
                src={logoSrc}
                alt={logoAlt}
                className={cx(
                    "h-auto w-auto self-start object-contain md:self-center",
                    logoShape === "square"
                        ? "max-h-[72px] max-w-[150px] md:max-h-[88px] md:max-w-[180px]"
                        : "max-h-10 max-w-[130px] md:max-h-12 md:max-w-40",
                )}
            />
            <p className="text-[18px] leading-[28px] text-[#535862] md:text-[20px] md:leading-[32px]">{text}</p>
        </div>
    </div>
);
