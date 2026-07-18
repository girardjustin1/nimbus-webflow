import type { CSSProperties, ImgHTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import nimbusBlue from "./nimbus-blue.svg";
import nimbusWhite from "./nimbus-white.svg";

type NimbusLogoProps = {
    /** "blue" for light backgrounds, "white" for dark backgrounds. */
    variant?: "blue" | "white";
    /** Optional hex color to recolor the wordmark (e.g. "#006E6F"). Renders via CSS mask. */
    color?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;

/**
 * The Nimbus wordmark. Uses the brand SVG assets as-is.
 * - `blue`  → the teal wordmark (use on light surfaces)
 * - `white` → the white wordmark (use on dark surfaces, e.g. the footer)
 * - `color` → recolor the wordmark to any hex (masks the SVG shape)
 */
export const NimbusLogo = ({ variant = "blue", color, className, style, ...props }: NimbusLogoProps) => {
    const src = variant === "white" ? nimbusWhite : nimbusBlue;

    if (color) {
        const maskStyle: CSSProperties = {
            aspectRatio: "135 / 29",
            backgroundColor: color,
            maskImage: `url(${src})`,
            WebkitMaskImage: `url(${src})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            ...style,
        };
        return <span role="img" aria-label="Nimbus" className={cx("inline-block h-7 w-auto", className)} style={maskStyle} />;
    }

    return <img src={src} alt="Nimbus" className={cx("h-7 w-auto", className)} style={style} {...props} />;
};
