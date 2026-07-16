import type { UnsplashImage as UnsplashImageData } from "@/content/blog/unsplash-images";
import { cx } from "@/utils/cx";

/**
 * Renders a downloaded Unsplash image together with the photographer credit
 * that Unsplash's API terms require. Pass an entry from `unsplashImages`.
 *
 *   import { unsplashImages } from "@/content/blog/unsplash-images";
 *   <UnsplashImage image={unsplashImages[0]} className="h-120 w-full rounded-2xl" />
 */
export const UnsplashImage = ({
    image,
    className,
    showCredit = true,
    rounded = true,
}: {
    image: UnsplashImageData;
    className?: string;
    showCredit?: boolean;
    rounded?: boolean;
}) => {
    return (
        <figure className="m-0 flex flex-col gap-2">
            <img
                src={image.file}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                style={{ backgroundColor: image.color }}
                className={cx("w-full object-cover", rounded && "rounded-2xl", className)}
            />
            {showCredit && (
                <figcaption className="text-xs text-quaternary">
                    Photo by{" "}
                    <a href={image.credit.profile} target="_blank" rel="noreferrer" className="underline hover:text-tertiary">
                        {image.credit.name}
                    </a>{" "}
                    on{" "}
                    <a href={image.credit.photo} target="_blank" rel="noreferrer" className="underline hover:text-tertiary">
                        Unsplash
                    </a>
                </figcaption>
            )}
        </figure>
    );
};
