import type { SVGProps } from "react";
import { cx } from "@/utils/cx";
import { NimbusLogo } from "./nimbus-logo";

/**
 * Compact brand mark. Nimbus has a single wordmark (no icon-only mark), so this
 * renders the wordmark scaled to fit its box via `object-contain` — used in
 * collapsed sidebars / mobile. Kept the original export name to avoid touching
 * call sites. `dark-mode` -> white variant.
 */
export const UntitledLogoMinimal = ({ className }: SVGProps<SVGSVGElement>) => {
    const variant = typeof className === "string" && className.includes("dark-mode") ? "white" : "blue";
    return <NimbusLogo variant={variant} className={cx("h-8 w-auto object-contain", className)} />;
};
