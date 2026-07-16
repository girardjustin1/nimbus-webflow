export const TestimonialSimpleLeftAligned = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <figure className="flex flex-col gap-10 lg:flex-row lg:gap-32">
                    <img
                        alt="Dana Whitfield"
                        src="https://i.pravatar.cc/400?img=32"
                        className="size-[200px] rounded-2xl object-cover md:size-[328px]"
                        aria-hidden="true"
                    />
                    <div className="flex flex-col gap-8 md:-ml-2">
                        <blockquote className="text-display-xs font-medium text-primary md:text-display-md">
                            The Dynamic Unit gives us a native look and full programmatic demand — we stopped treating that as a tradeoff.
                        </blockquote>
                        <figcaption className="flex flex-col gap-1">
                            <p className="text-lg font-semibold text-primary">— Dana Whitfield</p>
                            <cite className="text-md text-tertiary not-italic">Head of Monetization, Timehop</cite>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    );
};
