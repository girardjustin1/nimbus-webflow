import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartTooltipContent } from "@/components/application/charts/charts-base";

export interface TrendPoint {
    /** X-axis label, e.g. a month. */
    label: string;
    /** Value at that point. */
    value: number;
}

const defaultData: TrendPoint[] = [
    { label: "Jan", value: 3.2 },
    { label: "Feb", value: 3.6 },
    { label: "Mar", value: 4.1 },
    { label: "Apr", value: 4.0 },
    { label: "May", value: 4.6 },
    { label: "Jun", value: 5.1 },
];

/** A titled card with a single-series line chart in a Nimbus brand color. */
export const TrendLineChart = ({
    title = "eCPM trend, last 6 months",
    data = defaultData,
    color = "#08c6c7",
    valueSuffix = "",
}: {
    title?: string;
    data?: TrendPoint[];
    color?: string;
    valueSuffix?: string;
}) => (
    <div className="my-10 rounded-xl bg-white p-6 shadow-xs-skeuomorphic ring-1 ring-primary ring-inset">
        <h3 className="mb-4 text-[18px] font-semibold text-[#181d27]">{title}</h3>

        <div className="h-[300px] w-full">
            <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} width="100%" height="100%">
                <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
                    <CartesianGrid vertical={false} stroke="#e9eaeb" />
                    <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#535862", fontSize: 12 }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fill: "#a4a7ae", fontSize: 11 }} width={40} />
                    <Tooltip
                        content={<ChartTooltipContent />}
                        cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: "4 4" }}
                        formatter={(value) => `${value}${valueSuffix}`}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke={color}
                        strokeWidth={2.5}
                        dot={{ r: 3, fill: color, strokeWidth: 0 }}
                        activeDot={{ r: 5, fill: color, stroke: "#ffffff", strokeWidth: 2 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);
