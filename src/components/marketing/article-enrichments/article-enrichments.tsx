import { CheckCircle } from "@untitledui/icons";

/**
 * Article enrichment sections — drop-in blocks to break up content-rich Nimbus
 * blog articles (metrics, pull-quotes, key takeaways, checklists, social proof,
 * imagery placeholders). Copy is drawn from the Nimbus article decks. All are
 * prop-driven so you can reuse them per template.
 */

/** Big single metric callout — e.g. a headline stat pulled from a case study. */
export const StatCallout = ({ value, label }: { value: string; label: string }) => (
    <div className="my-10 flex flex-col items-center gap-2 rounded-2xl bg-[#f1fcfb] px-6 py-10 text-center ring-1 ring-[#cef4f4] ring-inset">
        <span className="text-[64px] leading-none font-extrabold text-[#08c6c7]">{value}</span>
        <span className="max-w-md text-[18px] text-[#535862]">{label}</span>
    </div>
);

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

/** Large pull-quote / testimonial with attribution. */
export const PullQuote = ({ quote, attribution }: { quote: string; attribution?: string }) => (
    <blockquote className="my-10 border-l-4 border-[#08c6c7] pl-6">
        <p className="text-[26px] leading-[1.35] font-medium text-[#181d27]">“{quote}”</p>
        {attribution && <footer className="mt-3 text-[16px] text-[#535862]">— {attribution}</footer>}
    </blockquote>
);

/** Highlighted key-takeaway blurb box. */
export const KeyTakeaway = ({ title = "Key takeaway", text }: { title?: string; text: string }) => (
    <aside className="my-10 rounded-2xl bg-[#003a5b] px-6 py-8 text-white md:px-8">
        <p className="text-[13px] font-semibold tracking-[0.11em] text-[#6bddda] uppercase">{title}</p>
        <p className="mt-2 text-[21px] leading-[1.4] font-medium">{text}</p>
    </aside>
);

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

/** Imagery-idea placeholder — a #84D7D9 block with a caption describing suggested art. */
export const ImageryIdea = ({ caption, ratio = "16/9" }: { caption: string; ratio?: string }) => (
    <figure className="my-10">
        <div className="w-full rounded-2xl bg-[#84D7D9]" style={{ aspectRatio: ratio }} />
        <figcaption className="mt-3 text-[15px] text-[#535862] italic">Imagery idea: {caption}</figcaption>
    </figure>
);
