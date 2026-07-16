import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import { NimbusLogo } from "./nimbus-logo";

/**
 * Brand wordmark. Backed by the Nimbus logo so every existing call site across
 * the app/blog renders the Nimbus brand (kept the original export name to avoid
 * touching ~30 import sites). Elements tagged `dark-mode` (dark footers) get the
 * white variant automatically.
 */
export const UntitledLogo = ({ className }: HTMLAttributes<HTMLOrSVGElement>) => {
    const variant = className?.includes("dark-mode") ? "white" : "blue";
    return <NimbusLogo variant={variant} className={cx("h-8 w-auto", className)} />;
};
