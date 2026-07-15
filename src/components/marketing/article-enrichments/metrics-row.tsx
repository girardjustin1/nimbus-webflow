export interface MetricsRowItem {
    /** Big number, e.g. "+31%" or "98%". */
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
 */
export const MetricsRow = ({ metrics = defaultMetrics }: { metrics?: MetricsRowItem[] }) => (
    <div className="my-10 flex flex-col gap-5 sm:flex-row">
        {metrics.map((metric) => (
            <div
                key={metric.subtitle}
                className="flex flex-1 flex-col gap-3 rounded-xl bg-white p-6 shadow-xs-skeuomorphic ring-1 ring-primary ring-inset"
            >
                <p className="line-clamp-2 text-sm font-medium text-tertiary">{metric.subtitle}</p>
                <p className="mt-auto text-display-sm font-semibold text-primary">{metric.title}</p>
            </div>
        ))}
    </div>
);
