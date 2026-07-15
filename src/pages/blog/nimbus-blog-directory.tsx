import { Simple01Vertical } from "@/components/marketing/blog/base-components/blog-cards";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { nimbusArticles } from "@/content/blog/nimbus-articles";

/**
 * The Nimbus blog directory — real Nimbus articles rendered as cards, framed by
 * the Nimbus header/footer and the cream brand background.
 */
export const NimbusBlogDirectory = () => (
    <div className="min-h-screen bg-[#f9f7f3]">
        <NimbusHeader />

        <main className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
            <div className="flex flex-col gap-3">
                <span className="text-[13px] font-semibold tracking-[0.11em] text-[#08c6c7] uppercase">Blog</span>
                <h1 className="text-[40px] leading-[1.05] font-black text-[#181d27] md:text-[53px]">The Nimbus Blog</h1>
                <p className="max-w-2xl text-[20px] text-[#535862]">
                    Ad tech, monetization strategy, and product deep-dives for in-app publishers.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {nimbusArticles.map((article) => (
                    <Simple01Vertical key={article.id} article={article} />
                ))}
            </div>
        </main>

        <NimbusFooter />
    </div>
);

export default NimbusBlogDirectory;
