import { unsplashImages } from "@/content/blog/unsplash-images";

/** Deterministically pick a downloaded Unsplash image from the caption, so the
 *  same idea always shows the same image (no hydration mismatch). */
const pickImage = (seed: string) => {
    if (unsplashImages.length === 0) return null;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
    return unsplashImages[hash % unsplashImages.length];
};

/** Imagery-idea block — fills with a locally-hosted Unsplash image (falls back to a
 *  #84D7D9 block if the image library is empty), plus a caption describing the suggested art. */
export const ImageryIdea = ({ caption, ratio = "16/9" }: { caption: string; ratio?: string }) => {
    const image = pickImage(caption);

    return (
        <figure className="my-10">
            {image ? (
                <img src={image.file} alt={image.alt} loading="lazy" className="w-full rounded-2xl object-cover" style={{ aspectRatio: ratio }} />
            ) : (
                <div className="w-full rounded-2xl bg-[#84D7D9]" style={{ aspectRatio: ratio }} />
            )}
            <figcaption className="mt-3 text-[15px] text-[#535862] italic">Imagery idea: {caption}</figcaption>
        </figure>
    );
};
