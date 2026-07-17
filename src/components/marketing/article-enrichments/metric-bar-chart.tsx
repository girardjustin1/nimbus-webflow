import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartTooltipContent } from "@/components/application/charts/charts-base";

export interface BarDatum {
    /** Category label, e.g. a geo. */
    label: string;
    /** Value for the bar. */
    value: number;
}

const defaultData: BarDatum[] = [
    { label: "US", value: 5.6 },
    { label: "UK", value: 4.55 },
    { label: "DE", value: 3.95 },
    { label: "JP", value: 3.7 },
    { label: "BR", value: 2.9 },
];

/** A titled card with a single-series bar chart in a Nimbus brand color. */
export const MetricBarChart = ({
    title = "eCPM by geo",
    data = defaultData,
    color = "#08c6c7",
    valueSuffix = "",
}: {
    title?: string;
    data?: BarDatum[];
    color?: string;
    valueSuffix?: string;
}) => (
    <div className="my-10 rounded-xl bg-white p-6 shadow-xs-skeuomorphic ring-1 ring-primary ring-inset">
        <h3 className="mb-4 text-[18px] font-semibold text-[#181d27]">{title}</h3>

        <div className="h-[300px] w-full">
            <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} width="100%" height="100%">
                <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
                    <CartesianGrid vertical={false} stroke="#e9eaeb" />
                    <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#535862", fontSize: 12 }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fill: "#a4a7ae", fontSize: 11 }} width={40} />
                    <Tooltip content={<ChartTooltipContent />} cursor={{ fill: "rgba(0,0,0,0.04)" }} formatter={(value) => `${value}${valueSuffix}`} />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={48} fill={color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
);
