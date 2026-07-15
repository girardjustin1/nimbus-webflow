import { StarIcon } from "@/components/foundations/rating-stars";

export const TestimonialSimpleLeftAligned = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <figure className="flex flex-col gap-10 lg:flex-row lg:gap-32">
                    <img
                        alt="Mathilde Lewis"
                        src="https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80"
                        className="size-[200px] rounded-2xl object-cover md:size-[328px]"
                        aria-hidden="true"
                    />
                    <div className="flex flex-col gap-8 md:-ml-2">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div aria-hidden="true" className="flex gap-1">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <blockquote className="text-display-xs font-medium text-primary md:text-display-md">
                                Love the simplicity of the service and the prompt customer support. We can't imagine working without it.
                            </blockquote>
                        </div>
                        <figcaption className="flex flex-col gap-1">
                            <p className="text-lg font-semibold text-primary">— Mathilde Lewis</p>
                            <cite className="text-md text-tertiary not-italic">Head of Design, Layers</cite>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    );
};
