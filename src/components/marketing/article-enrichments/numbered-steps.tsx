export interface NumberedStep {
    title: string;
    items: string[];
}

export interface NumberedStepsProps {
    heading?: string;
    description?: string;
    steps: NumberedStep[];
    /** Render a content divider above the section heading. */
    divider?: boolean;
}

/** Teal ramp for the big 01 / 02 / 03 numbers — light to dark, matching the live case study. */
const NUMBER_RAMP = ["#83d7da", "#2fa0a2", "#134f53"];

/**
 * A numbered "factors" section: a big teal-graded number in the left column, a
 * bold title and hollow-bullet list on the right, divided by hairlines.
 */
export const NumberedSteps = ({ heading, description, steps, divider }: NumberedStepsProps) => (
    <section className={divider ? "mt-16 mb-10 border-t border-black/10 pt-8" : "my-10"}>
        {heading && <h2 className="text-display-sm leading-[1.2] font-extrabold text-[#181d27] md:text-display-md">{heading}</h2>}
        {description && <p className="mt-3 text-[18px] leading-[28px] text-[#535862]">{description}</p>}
        <div className="mt-6 flex flex-col">
            {steps.map((step, i) => (
                <div key={step.title} className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-black/10 py-8 md:gap-x-10 md:py-10">
                    <span
                        className="text-[44px] leading-none font-black md:text-[64px]"
                        style={{ color: NUMBER_RAMP[i % NUMBER_RAMP.length] }}
                        aria-hidden="true"
                    >
                        {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                        <h3 className="text-[20px] font-extrabold text-[#181d27] md:text-[24px]">{step.title}</h3>
                        <ul className="mt-4 flex list-[circle] flex-col gap-2.5 pl-5 text-[18px] leading-[26px] text-[#535862] marker:text-[#98a2b3]">
                            {step.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
