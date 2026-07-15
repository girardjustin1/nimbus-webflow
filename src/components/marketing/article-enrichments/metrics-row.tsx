import { MetricsSimple } from "@/components/application/metrics/metrics";

export interface MetricsRowItem {
    /** Big number, e.g. "+31%" or "98%". */
    title: string;
    /** Label under/over the number, e.g. "eCPM lift". */
    subtitle: string;
    /** Optional change badge value, e.g. "12%". Omit to hide the indicator. */
    change?: string;
    /** Direction of the change badge. Defaults to "positive". */
    trend?: "positive" | "negative";
}

const defaultMetrics: MetricsRowItem[] = [
    { title: "+31%", subtitle: "Avg eCPM lift", change: "31%", trend: "positive" },
    { title: "98%", subtitle: "Fill rate", change: "4%", trend: "positive" },
    { title: "60+", subtitle: "Demand sources", change: "12", trend: "positive" },
    { title: "99.9%", subtitle: "Ad render rate", change: "0.4%", trend: "positive" },
];

/** A responsive row of Untitled UI metric cards — Nimbus ad-tech results at a glance. */
export const MetricsRow = ({ metrics = defaultMetrics }: { metrics?: MetricsRowItem[] }) => (
    <div className="my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
            <MetricsSimple
                key={metric.subtitle}
                type="modern"
                trend={metric.trend ?? "positive"}
                title={metric.title}
                subtitle={metric.subtitle}
                change={metric.change}
            />
        ))}
    </div>
);
