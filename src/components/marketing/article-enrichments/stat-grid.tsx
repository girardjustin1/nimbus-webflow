/** A row of stats — social proof / results at a glance. */
export const StatGrid = ({ stats }: { stats: { value: string; label: string }[] }) => (
    <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 rounded-xl bg-white p-6 ring-1 ring-black/5 ring-inset">
                <span className="text-[36px] leading-none font-extrabold text-[#181d27]">{s.value}</span>
                <span className="text-[15px] font-medium text-[#08c6c7]">{s.label}</span>
            </div>
        ))}
    </div>
);
