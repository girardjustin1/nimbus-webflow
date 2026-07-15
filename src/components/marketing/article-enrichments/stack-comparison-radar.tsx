import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

/** A single scored dimension shared across both series. */
export interface RadarDimension {
    /** Axis label, e.g. "Transparency". */
    dimension: string;
    /** Nimbus score on a 0–10 scale. */
    Nimbus: number;
    /** Legacy stack score on a 0–10 scale. */
    "Legacy stack": number;
}

export interface StackComparisonRadarProps {
    /** Card title. */
    title?: string;
    /** Scored dimensions. Each entry contributes one spoke on the radar. */
    data?: RadarDimension[];
}

const defaultData: RadarDimension[] = [
    { dimension: "Transparency", Nimbus: 9, "Legacy stack": 5 },
    { dimension: "Demand competition", Nimbus: 9, "Legacy stack": 6 },
    { dimension: "Signal accuracy", Nimbus: 9, "Legacy stack": 4 },
    { dimension: "Latency", Nimbus: 8, "Legacy stack": 6 },
    { dimension: "Fill", Nimbus: 8, "Legacy stack": 7 },
];

/** A radar chart comparing Nimbus against a legacy ad stack across five dimensions. */
export const StackComparisonRadar = ({ title = "Nimbus vs. a legacy stack", data = defaultData }: StackComparisonRadarProps) => (
    <div className="my-10 flex flex-col gap-4 rounded-xl bg-white p-6 shadow-xs-skeuomorphic ring-1 ring-primary ring-inset">
        <h3 className="text-[18px] font-semibold text-[#181d27]">{title}</h3>

        <ResponsiveContainer width="100%" height={340}>
            <RadarChart data={data} outerRadius="70%">
                <PolarGrid stroke="#e9eaeb" />
                <PolarAngleAxis dataKey="dimension" tick={{ fill: "#535862", fontSize: 13 }} />
                <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fill: "#a4a7ae", fontSize: 11 }} tickCount={6} />

                <Radar name="Nimbus" dataKey="Nimbus" stroke="#08c6c7" fill="#08c6c7" fillOpacity={0.4} />
                <Radar name="Legacy stack" dataKey="Legacy stack" stroke="#a4a7ae" fill="#a4a7ae" fillOpacity={0.25} />

                <Legend wrapperStyle={{ fontSize: 13, paddingTop: 8 }} />
            </RadarChart>
        </ResponsiveContainer>
    </div>
);
