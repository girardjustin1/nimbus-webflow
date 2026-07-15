import {
    Checklist,
    DemandMixPie,
    ImageryIdea,
    KeyTakeaway,
    MetricsRow,
    MetricsTable,
    PullQuote,
    StackComparisonRadar,
    StatCallout,
} from "@/components/marketing/article-enrichments/article-enrichments";
import { FAQAccordion04 } from "@/components/marketing/faq/faq-accordion-04";
import type { BlogBlock } from "@/content/blog/nimbus-articles";

const Block = ({ block }: { block: BlogBlock }) => {
    if (block.type === "stat") return <StatCallout value={block.value} label={block.label} />;
    if (block.type === "statGrid")
        return <MetricsRow metrics={block.stats.map((s) => ({ title: s.value, subtitle: s.label, change: s.change, trend: s.trend }))} />;
    if (block.type === "checklist") return <Checklist heading={block.heading} items={block.items} />;
    if (block.type === "keyTakeaway") return <KeyTakeaway title={block.title} text={block.text} />;
    if (block.type === "imageryIdea") return <ImageryIdea caption={block.caption} />;
    if (block.type === "demandMixPie") return <DemandMixPie title={block.title} data={block.data} />;
    if (block.type === "stackRadar") return <StackComparisonRadar title={block.title} data={block.data} />;
    if (block.type === "metricsTable") return <MetricsTable title={block.title} description={block.description} rows={block.rows} />;
    if (block.type === "faq") {
        return <FAQAccordion04 faqs={block.items} eyebrow={block.eyebrow} heading={block.heading} description={block.description} />;
    }
    // CTA ("Get started with Nimbus") removed from article pages for now — the component and
    // its standalone story are kept; re-enable by rendering CTASimpleCenteredBrand here.
    if (block.type === "cta") return null;
    if (block.type === "heading") {
        return <h2 className="mt-10 mb-3 text-[28px] leading-[1.2] font-extrabold text-[#181d27]">{block.text}</h2>;
    }
    if (block.type === "list") {
        return (
            <ul className="my-4 list-disc space-y-2 pl-6 text-[18px] leading-[28px] text-[#535862] marker:text-[#08c6c7]">
                {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        );
    }
    if (block.type === "quote") {
        return (
            <PullQuote
                quote={block.text}
                attribution={block.attribution}
                role={block.role}
                avatarSrc={block.avatarSrc}
                variant={block.variant}
                layout={block.layout}
            />
        );
    }
    return (
        <p className="my-4 text-[18px] leading-[28px] text-[#535862]">
            {block.lead && <strong className="font-bold text-[#181d27]">{block.lead} </strong>}
            {block.text}
        </p>
    );
};

/** Renders a Nimbus article's body blocks with the Nimbus post typography. */
export const ArticleBody = ({ blocks, className }: { blocks: BlogBlock[]; className?: string }) => (
    <div className={className}>
        {blocks.map((block, i) => (
            <Block key={i} block={block} />
        ))}
    </div>
);
