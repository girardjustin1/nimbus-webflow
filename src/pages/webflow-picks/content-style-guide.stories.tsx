import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Content Style Guide — every native element you can pick from Webflow's Rich
 * Text editor, styled by the blog's `.blog-prose` class (part of the Embed Kit
 * *Stylesheet*). Apply `blog-prose` to a Rich Text element on the Webflow site
 * and the CMS body renders exactly like this.
 */
const meta = {
    title: "Rich Text Editor/Content Style Guide/Rich Text Elements",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-[#f9f7f3] px-4 py-12 md:px-8">
                <div className="mx-auto max-w-180">
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta;

export default meta;

const Label = ({ children }: { children: React.ReactNode }) => (
    <p className="mt-0 mb-2 font-mono text-xs font-semibold tracking-wide text-[#8a8f98] uppercase" style={{ margin: "0 0 8px" }}>
        {children}
    </p>
);

const Block = ({ tag, children }: { tag: string; children: React.ReactNode }) => (
    <div className="border-t border-black/10 py-8">
        <Label>{tag}</Label>
        <div className="blog-prose">{children}</div>
    </div>
);

export const RichTextElements: StoryObj = {
    render: () => (
        <div className="flex flex-col">
            <div className="mb-6">
                <p className="font-mono text-xs font-semibold tracking-wide text-[#0b6e70] uppercase">Content Style Guide</p>
                <h1 className="mt-3 text-display-md font-extrabold text-[#181d27]">Rich Text content styles</h1>
                <p className="mt-4 text-lg text-[#535862]">
                    Every element the Webflow Rich Text editor offers, styled by the <code className="rounded bg-white px-1.5 py-0.5 text-sm text-[#0b6e70]">blog-prose</code>{" "}
                    class. Apply that class to a Rich Text element and the CMS body renders like this — no per-item styling needed.
                </p>
            </div>

            <Block tag="Headings · H1–H6">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </Block>

            <Block tag="Paragraph · bold · italic · link">
                <p>
                    A standard paragraph sets the reading rhythm for the article body. You can emphasize with <strong>bold text</strong> for key terms, use{" "}
                    <em>italics</em> for nuance, and add an <a href="#0">inline link</a> that picks up the brand pink.
                </p>
            </Block>

            <Block tag="Bulleted list · UL">
                <ul>
                    <li>Every demand source bids in one real-time auction</li>
                    <li>The highest bid wins, with no waterfall bias</li>
                    <li>Advertiser-level reporting out of the box</li>
                </ul>
            </Block>

            <Block tag="Numbered list · OL">
                <ol>
                    <li>Consolidate the waterfall into a unified auction</li>
                    <li>Add demand partners without new integrations</li>
                    <li>Tune floors by geo, format, and placement</li>
                </ol>
            </Block>

            <Block tag="Blockquote">
                <blockquote>“Migrating to Nimbus full-stack mediation unified our auction and lifted eCPM — without adding operational overhead.”</blockquote>
            </Block>

            <Block tag="Image · figure + figcaption">
                <figure>
                    <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80" alt="A person using a mobile app on a smartphone" />
                    <figcaption>A publisher reviewing in-app monetization dashboards.</figcaption>
                </figure>
            </Block>

            <Block tag="Inline code">
                <p>
                    Reference a value inline like <code>eCPM</code> or <code>setFloor()</code> within body copy.
                </p>
            </Block>

            <div className="border-t border-black/10 py-8">
                <Label>Code block · light · line numbers</Label>
                <div className="blog-code">
                    <div className="blog-code__header">
                        <span className="blog-code__dot" style={{ background: "#fd6f6f" }} />
                        <span className="blog-code__dot" style={{ background: "#fdbc40" }} />
                        <span className="blog-code__dot" style={{ background: "#33c748" }} />
                        <span className="blog-code__name">design.model.ts</span>
                    </div>
                    <ol
                        className="blog-code__lines"
                        dangerouslySetInnerHTML={{
                            __html: [
                                `<li><span class="t-com">// Imports</span></li>`,
                                `<li><span class="t-kw">import</span> mongoose<span class="t-punc">, {</span> <span class="t-obj">Schema</span> <span class="t-punc">}</span> <span class="t-kw">from</span> <span class="t-str">'untitled'</span></li>`,
                                `<li><span class="t-com">// Collection name</span></li>`,
                                `<li><span class="t-kw">export const</span> collection <span class="t-punc">=</span> <span class="t-str">'Design'</span></li>`,
                                `<li><span class="t-com">// Schema</span></li>`,
                                `<li><span class="t-kw">const</span> schema <span class="t-punc">=</span> <span class="t-kw">new</span> <span class="t-obj">Schema</span><span class="t-punc">({</span></li>`,
                                `<li>  <span class="t-key">name</span><span class="t-punc">: {</span></li>`,
                                `<li>    <span class="t-key">type</span><span class="t-punc">:</span> <span class="t-obj">String</span><span class="t-punc">,</span></li>`,
                                `<li>    <span class="t-key">required</span><span class="t-punc">:</span> <span class="t-kw">true</span></li>`,
                                `<li>  <span class="t-punc">},</span></li>`,
                                `<li>  <span class="t-key">description</span><span class="t-punc">: {</span></li>`,
                                `<li>    <span class="t-key">type</span><span class="t-punc">:</span> <span class="t-obj">String</span></li>`,
                                `<li>  <span class="t-punc">}</span></li>`,
                                `<li><span class="t-punc">}, {</span><span class="t-key">timestamps</span><span class="t-punc">:</span> <span class="t-kw">true</span><span class="t-punc">})</span></li>`,
                                `<li><span class="t-com">// Model</span></li>`,
                                `<li><span class="t-kw">export default</span> untitled<span class="t-punc">.</span><span class="t-fn">model</span><span class="t-punc">(</span>collection<span class="t-punc">,</span> schema<span class="t-punc">,</span> collection<span class="t-punc">)</span></li>`,
                            ].join(""),
                        }}
                    />
                </div>
            </div>

            <Block tag="Divider · HR">
                <p>Text above the divider.</p>
                <hr />
                <p>Text below the divider.</p>
            </Block>
        </div>
    ),
};
