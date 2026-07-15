export const MetricsCardGrayLight = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 rounded-2xl bg-secondary px-6 py-10 md:gap-16 md:rounded-none md:bg-transparent md:p-0">
                    <div className="flex w-full flex-col self-center text-center md:max-w-3xl">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Floors are pricing power</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Granular, dynamic floors keep DSPs honest — so you set the terms the market has to beat.
                        </p>
                    </div>

                    <dl className="flex flex-col gap-8 rounded-2xl bg-secondary md:flex-row md:p-16">
                        {[
                            {
                                title: "+31%",
                                subtitle: "Average eCPM lift with floors",
                            },
                            {
                                title: "3",
                                subtitle: "Dimensions to floor: geo, format, size",
                            },
                            {
                                title: "0",
                                subtitle: "Yield teams required",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-1 flex-col-reverse gap-3 text-center">
                                <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                <dd className="text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
