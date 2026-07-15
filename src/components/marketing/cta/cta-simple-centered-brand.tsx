import { Button } from "@/components/base/buttons/button";

export type CTASimpleCenteredBrandProps = {
    heading?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
};

/** Simple centered CTA on the teal brand section. Prop-driven with Nimbus defaults. */
export const CTASimpleCenteredBrand = ({
    heading = "Get started with Nimbus",
    description = "Reach out to your Nimbus Account Manager, or get started at nimbus.co.",
    primaryLabel = "Request a demo",
    primaryHref = "https://www.adsbynimbus.com",
    secondaryLabel = "Learn more",
    secondaryHref = "#",
}: CTASimpleCenteredBrandProps = {}) => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">{heading}</h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">{description}</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
                        <Button href={secondaryHref} color="secondary" size="xl" className="shadow-xs! ring-0">
                            {secondaryLabel}
                        </Button>
                        <Button href={primaryHref} size="xl">
                            {primaryLabel}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
