import { ProgressBarBase } from "@/components/base/progress-indicators/progress-indicators";

export interface PerformanceMetric {
    /** Metric name, e.g. "rCPM". */
    label: string;
    /** Percentage lift — drives both the bar fill and the displayed "+NN%". */
    value: number;
}

export interface PerformancePanel {
    title: string;
    badge?: string;
    metrics: PerformanceMetric[];
}

export interface PerformancePanelsProps {
    panels: PerformancePanel[];
}

const TEAL = "#08c6c7";

const MetricRow = ({ metric }: { metric: PerformanceMetric }) => (
    <div className="flex flex-col gap-3 py-5 md:grid md:grid-cols-[150px_1fr_auto] md:items-center md:gap-8 md:py-6">
        <div className="flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-quaternary uppercase">Metric</span>
            <span className="text-[20px] font-bold text-[#181d27]">{metric.label}</span>
        </div>
        <ProgressBarBase
            value={Math.max(0, Math.min(metric.value, 100))}
            className="h-3 rounded-full bg-[#e9eaeb]"
            progressClassName="rounded-full bg-[#4cc4c5]"
        />
        <div className="flex items-baseline text-[32px] leading-none font-black md:text-[42px]">
            <span style={{ color: TEAL }}>+</span>
            <span className="text-[#181d27]">{metric.value}</span>
            <span style={{ color: TEAL }}>%</span>
        </div>
    </div>
);

const Panel = ({ panel }: { panel: PerformancePanel }) => (
    <div className="rounded-2xl bg-white p-6 shadow-xs-skeuomorphic ring-1 ring-primary ring-inset md:p-8">
        <div className="flex items-center gap-3">
            <h3 className="text-[20px] font-extrabold text-[#181d27] md:text-[22px]">{panel.title}</h3>
            {panel.badge && (
                <span className="rounded-full bg-[#d0f7f7] px-2.5 py-1 text-[11px] font-bold tracking-[0.12em] text-[#0a9a9b] uppercase">{panel.badge}</span>
            )}
        </div>
        <div className="mt-2 flex flex-col divide-y divide-[#eaecf0]">
            {panel.metrics.map((metric) => (
                <MetricRow key={metric.label} metric={metric} />
            ))}
        </div>
    </div>
);

/**
 * Performance panels — one white card per platform (e.g. iOS / Android), each row
 * a metric with an Untitled UI progress bar sized to its lift and a "+NN%" value.
 */
export const PerformancePanels = ({ panels }: PerformancePanelsProps) => (
    <div className="my-10 flex flex-col gap-6">
        {panels.map((panel) => (
            <Panel key={panel.title} panel={panel} />
        ))}
    </div>
);
