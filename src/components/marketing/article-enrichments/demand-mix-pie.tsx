import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartTooltipContent } from "@/components/application/charts/charts-base";

export interface DemandMixSlice {
    /** Format label, e.g. "Static". */
    name: string;
    /** Share of demand mix as a percentage, e.g. 38. */
    value: number;
}

/** Teal palette for the pie slices, ordered largest → smallest share. */
const defaultColors = ["#08c6c7", "#23a6a9", "#6bddda", "#cef4f4"];

const defaultData: DemandMixSlice[] = [
    { name: "Static", value: 38 },
    { name: "Video", value: 27 },
    { name: "Interstitial", value: 22 },
    { name: "Native", value: 13 },
];

/** Legend swatches colored with the actual teal palette, shown below the pie. */
const PieLegend = ({ data, colors }: { data: DemandMixSlice[]; colors: string[] }) => (
    <ul className="mt-4 flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
        {data.map((slice, index) => (
            <li key={slice.name} className="flex items-center gap-2 text-sm text-tertiary">
                <span
                    className="block size-2 rounded-full ring-[0.5px] ring-black/10 ring-inset"
                    style={{ backgroundColor: colors[index % colors.length] }}
                />
                {slice.name}
                <span className="font-medium text-[#181d27]">{slice.value}%</span>
            </li>
        ))}
    </ul>
);

/** A titled card showing Nimbus demand mix by ad format as a teal pie chart. */
export const DemandMixPie = ({
    title = "Demand mix by format",
    data = defaultData,
    colors = defaultColors,
}: {
    title?: string;
    data?: DemandMixSlice[];
    colors?: string[];
}) => (
    <div className="my-10 rounded-xl bg-white p-6 ring-1 ring-black/5 ring-inset">
        <h3 className="mb-4 text-[18px] font-semibold text-[#181d27]">{title}</h3>

        <div className="h-[300px] w-full">
            <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} width="100%" height="100%">
                <PieChart>
                    <Tooltip
                        content={<ChartTooltipContent isPieChart />}
                        formatter={(value) => `${value}%`}
                        cursor={false}
                    />

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        stroke="#ffffff"
                        strokeWidth={2}
                    >
                        {data.map((slice, index) => (
                            <Cell key={slice.name} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>

                    <Legend content={<PieLegend data={data} colors={colors} />} verticalAlign="bottom" align="center" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
);
