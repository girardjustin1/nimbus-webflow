/** Big single metric callout — a headline stat pulled from a case study. */
export const StatCallout = ({ value, label }: { value: string; label: string }) => (
    <div className="my-10 flex flex-col items-center gap-2 rounded-2xl bg-[#f1fcfb] px-6 py-10 text-center ring-1 ring-[#cef4f4] ring-inset">
        <span className="text-[64px] leading-none font-extrabold text-[#08c6c7]">{value}</span>
        <span className="max-w-md text-[18px] text-[#535862]">{label}</span>
    </div>
);
