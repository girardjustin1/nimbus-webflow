import { ArrowDown, ArrowUp } from "@untitledui/icons";
import { cx } from "@/utils/cx";

export interface MetricsRowItem {
    /** Big number, e.g. "+31%" or "98%". A leading "+" shows a teal up-arrow, "-" a pink down-arrow. */
    title: string;
    /** Label above the number, e.g. "Avg eCPM lift". */
    subtitle: string;
    /** Optional — retained for data compatibility; not rendered as a badge. */
    change?: string;
    /** Optional — retained for data compatibility. */
    trend?: "positive" | "negative";
}

const defaultMetrics: MetricsRowItem[] = [
    { title: "+31%", subtitle: "Avg eCPM lift" },
    { title: "98%", subtitle: "Fill rate" },
    { title: "60+", subtitle: "Demand sources" },
    { title: "99.9%", subtitle: "Ad render rate" },
];

/**
 * A responsive row of Nimbus metric cards — clean white cards matching the
 * infographic style (rounded-xl / bg-white / subtle ring). No action menu.
 * A leading "+" renders a teal up-arrow; a leading "-" a pink down-arrow.
 */
export const MetricsRow = ({ metrics = defaultMetrics }: { metrics?: MetricsRowItem[] }) => {
    const count = metrics.length;
    // Columns respond to the *container* width, not the viewport — so a metrics row in a
    // narrow article column stacks 2-up (4 → 2×2, 3 → 2+1) while a wide container lays them in a line.
    const cols =
        count >= 4
            ? "grid-cols-2 @3xl:grid-cols-4"
            : count === 3
              ? "grid-cols-2 @2xl:grid-cols-3"
              : count === 2
                ? "grid-cols-1 @md:grid-cols-2"
                : "grid-cols-1";

    return (
        <div className="@container my-10">
            <div className={cx("grid gap-5", cols)}>
                {metrics.map((metric) => {
                    const value = metric.title.trim();
                    const direction = value.startsWith("+") ? "up" : value.startsWith("-") ? "down" : null;

                    return (
                        <div
                            key={metric.subtitle}
                            className="flex flex-col gap-3 rounded-xl bg-white p-6 shadow-xs-skeuomorphic ring-1 ring-primary ring-inset"
                        >
                            <p className="line-clamp-2 text-sm font-medium text-tertiary">{metric.subtitle}</p>
                            <div className="mt-auto flex items-center gap-1.5">
                                {direction === "up" && <ArrowUp aria-hidden="true" className="size-6 text-[#08c6c7]" strokeWidth={3} />}
                                {direction === "down" && <ArrowDown aria-hidden="true" className="size-6 text-[#DA6EA3]" strokeWidth={3} />}
                                <p className="text-display-sm font-semibold text-primary">{metric.title}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
