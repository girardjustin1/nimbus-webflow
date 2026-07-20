import type { CodeLine, CodeToken } from "@/webflow-embeds/builders";

/** Syntax token colors — mirror the `.t-*` rules in blog-embeds.css (Nimbus brand palette). */
const TOKEN_COLOR: Record<CodeToken, string> = {
    obj: "#003a5b",
    fn: "#0b6e70",
    key: "#b32a6e",
    str: "#b54708",
    num: "#7a5af8",
    kw: "#7a5af8",
    punc: "#717680",
    com: "#98a2b3",
};

const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';

/**
 * A line-numbered code window with Nimbus-branded syntax colors. Visually mirrors
 * the `.blog-code` embed (buildCodeEmbed) so the Storybook preview matches the paste.
 */
export const CodeSnippet = ({ filename, lines }: { filename?: string; lines: CodeLine[] }) => (
    <div className="my-10 overflow-hidden rounded-xl border border-[#e9eaeb] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        <div className="flex items-center gap-[7px] border-b border-[#f0f0f2] bg-[#fcfcfd] px-4 py-3">
            <span className="size-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="size-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <span className="size-2.5 rounded-full" style={{ background: "#28c840" }} />
            {filename && (
                <span className="ml-1.5 text-xs text-[#717680]" style={{ fontFamily: MONO }}>
                    {filename}
                </span>
            )}
        </div>
        <ol className="m-0 list-none overflow-x-auto py-3.5 text-[13px] text-[#181d27]" style={{ fontFamily: MONO, lineHeight: 1.85 }}>
            {lines.map((line, i) => (
                <li key={i} className="relative py-0 pr-5 pl-14 whitespace-pre">
                    <span className="absolute left-0 w-10 text-right text-[#a4a7ae]" aria-hidden="true">
                        {i + 1}
                    </span>
                    {line.map((seg, j) =>
                        seg.t ? (
                            <span key={j} style={{ color: TOKEN_COLOR[seg.t], fontStyle: seg.t === "com" ? "italic" : undefined }}>
                                {seg.s}
                            </span>
                        ) : (
                            <span key={j}>{seg.s}</span>
                        ),
                    )}
                </li>
            ))}
        </ol>
    </div>
);
