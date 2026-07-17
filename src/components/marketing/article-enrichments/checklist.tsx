import { CheckCircle } from "@untitledui/icons";

/** Checklist infographic — teal check bullets (matches the case-study challenge list). */
export const Checklist = ({ heading, items }: { heading?: string; items: string[] }) => (
    <div className="my-10">
        {heading && <h3 className="mb-4 text-[21px] font-extrabold text-[#181d27]">{heading}</h3>}
        <ul className="flex flex-col gap-4">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-4">
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-[#23a6a9]" />
                    <span className="text-[18px] leading-[24px] text-[#181d27]">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);
