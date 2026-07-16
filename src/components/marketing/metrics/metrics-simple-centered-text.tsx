import { Fragment } from "react";
import { ZapFast } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const MetricsSimpleCenteredText = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex w-full flex-col items-center self-center text-center md:max-w-3xl">
                        <FeaturedIcon icon={ZapFast} color="brand" theme="light" size="xl" />
                        <h2 className="mt-4 text-display-sm font-semibold text-primary md:mt-6 md:text-display-md">One unit, the full auction</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            The Dynamic Unit accepts programmatic demand in multiple formats — so a native-looking ad fills like static or video.
                        </p>
                    </div>
                    <dl className="flex w-full flex-col justify-center gap-8 md:max-w-3xl md:flex-row md:gap-4 md:self-center">
                        {[
                            {
                                title: "45+",
                                subtitle: "Demand partners",
                            },
                            {
                                title: "4",
                                subtitle: "Formats in a single unit",
                            },
                            {
                                title: "99.9%",
                                subtitle: "Creative render rate",
                            },
                        ].map((item, index) => (
                            <Fragment key={item.title}>
                                {index !== 0 && <div className="hidden border-l border-secondary md:block" />}
                                <div className="flex flex-1 flex-col-reverse gap-3 text-center">
                                    <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                    <dd className="text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                                </div>
                            </Fragment>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
