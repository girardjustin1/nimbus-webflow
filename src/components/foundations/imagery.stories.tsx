import type { Meta, StoryObj } from "@storybook/react-vite";
import { unsplashImages } from "@/content/blog/unsplash-images";
import { UnsplashImage } from "@/components/foundations/unsplash-image";

/**
 * Styles → Imagery
 * The locally-hosted Unsplash photo library used across the blog directory and
 * article templates. Files live in /public/unsplash and are committed to the repo,
 * so they render from local/GitHub — the Unsplash API key is only used at fetch time.
 *
 * Refresh or extend the set with: `npm run fetch-images -- --query "..." --count N`
 */
const meta = {
    title: "Styles/Imagery",
    parameters: { layout: "fullscreen" },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const prettyLabel = (slug: string) =>
    slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

// Group the flat image list by collection so each batch is labeled.
const collections = [...new Set(unsplashImages.map((i) => i.collection))].map((slug) => ({
    slug,
    label: prettyLabel(slug),
    images: unsplashImages.filter((i) => i.collection === slug),
}));

export const AllImagery: Story = {
    name: "All imagery",
    render: () =>
        collections.length === 0 ? (
            <div className="bg-[#f9f7f3] p-12 text-md text-tertiary">
                No images yet. Run <code className="rounded bg-secondary px-1.5 py-0.5">npm run fetch-images -- --query "..."</code> to populate the library.
            </div>
        ) : (
            <div className="flex flex-col gap-16 bg-[#f9f7f3] p-8 md:p-12">
                {collections.map((c) => (
                    <section key={c.slug}>
                        <div className="mb-6 flex items-baseline gap-3">
                            <h2 className="text-display-xs font-extrabold text-[#181d27]">{c.label}</h2>
                            <span className="rounded-full bg-[#cef4f4] px-2.5 py-0.5 text-xs font-semibold text-[#0a9a9b]">{c.images.length}</span>
                            <span className="text-xs text-tertiary">/unsplash/{c.slug}/</span>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {c.images.map((image) => (
                                <UnsplashImage key={image.id} image={image} className="aspect-[1.5]" />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        ),
};
