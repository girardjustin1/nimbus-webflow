/** Imagery-idea placeholder — a #84D7D9 block with a caption describing suggested art. */
export const ImageryIdea = ({ caption, ratio = "16/9" }: { caption: string; ratio?: string }) => (
    <figure className="my-10">
        <div className="w-full rounded-2xl bg-[#84D7D9]" style={{ aspectRatio: ratio }} />
        <figcaption className="mt-3 text-[15px] text-[#535862] italic">Imagery idea: {caption}</figcaption>
    </figure>
);
