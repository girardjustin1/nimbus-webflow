import type { BlogBlock } from "@/content/blog/nimbus-articles";

const Block = ({ block }: { block: BlogBlock }) => {
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
            <blockquote className="my-8 border-l-4 border-[#08c6c7] pl-6">
                <p className="text-[21px] leading-[30px] font-medium text-[#181d27]">{block.text}</p>
                {block.attribution && <footer className="mt-3 text-[16px] text-[#535862]">— {block.attribution}</footer>}
            </blockquote>
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
