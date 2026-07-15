export const MetricsCardBrandDark = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 rounded-2xl bg-brand-section px-6 py-10 md:gap-16 md:rounded-none md:bg-primary md:bg-transparent md:p-0">
                    <div className="flex w-full flex-col self-center text-center md:max-w-3xl">
                        <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md md:text-primary">
                            One auction, one set of rules
                        </h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl md:text-tertiary">
                            Prebid Server demand now competes in the Nimbus unified auction on equal terms — no new SDK.
                        </p>
                    </div>

                    <dl className="flex flex-col gap-8 rounded-2xl md:flex-row md:bg-brand-section md:p-16">
                        {[
                            {
                                title: "0",
                                subtitle: "New SDKs to integrate",
                            },
                            {
                                title: "1",
                                subtitle: "Unified auction, one set of rules",
                            },
                            {
                                title: "100%",
                                subtitle: "Accurate win/loss signaling",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-1 flex-col-reverse gap-3 text-center">
                                <dt className="text-lg font-semibold text-tertiary_on-brand">{item.subtitle}</dt>
                                <dd className="text-display-lg font-semibold text-primary_on-brand md:text-display-xl">{item.title}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
