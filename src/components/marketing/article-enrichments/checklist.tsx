import { CheckCircle } from "@untitledui/icons";

/** Checklist infographic — teal check bullets (matches the case-study challenge list). */
export const Checklist = ({ heading, items }: { heading?: string; items: string[] }) => (
    <div className="my-10 rounded-2xl bg-[#f9f7f3] px-6 py-8 md:px-8">
        {heading && <h3 className="mb-4 text-[21px] font-extrabold text-[#181d27]">{heading}</h3>}
        <ul className="flex flex-col gap-4">
            {items.map((item) => (
                <li key={item} className="flex items-center gap-4">
                    <CheckCircle className="size-5 shrink-0 text-[#23a6a9]" />
                    <span className="text-[18px] leading-[24px] text-[#181d27]">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);
