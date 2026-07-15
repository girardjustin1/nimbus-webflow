import { Check, Copy01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { NimbusHeader } from "@/components/marketing/nimbus-header";
import { NimbusFooter } from "@/components/marketing/nimbus-footer";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useClipboard } from "@/hooks/use-clipboard";



const BannerSlimBrandFullWidth = () => {
    return (
        <div className="relative border-b border-brand_alt bg-brand-section_subtle md:border-brand">
            <div className="p-4 md:py-3.5">
                <div className="flex flex-col gap-0.5 md:flex-row md:justify-center md:gap-1.5 md:text-center">
                    <p className="pr-8 text-md font-semibold text-primary_on-brand md:truncate md:pr-0">We've just launched a new feature!</p>
                    <p className="text-md text-tertiary_on-brand md:truncate">
                        Check out the{" "}
                        <a
                            href="#"
                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            new dashboard
                        </a>
                        .
                    </p>
                </div>
            </div>
            <div className="absolute top-2 right-2 md:top-1.5 md:right-2">
                <CloseButton size="md" theme="dark" label="Dismiss" />
            </div>
        </div>
    );
};

const ContentLargeImage02 = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-[#f9f7f3]">
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto flex w-full max-w-180 flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Design</span>
                    <h1 className="mt-3 text-display-md font-extrabold text-primary md:text-display-lg">Ad quality review best practices</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        How do you create compelling presentations that wow your colleagues and impress your managers? Here's how to get started.
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                        <div className="size-14 rounded-full object-cover bg-[#84D7D9]" />
                        <div>
                            <p className="text-lg font-semibold text-primary">Jordan Kim</p>
                            <p className="text-md text-tertiary">20 Jan 2026</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-12 h-60 w-full object-cover md:mt-16 md:h-140 md:max-w-5xl bg-[#84D7D9]" />
            </div>
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto max-w-prose md:max-w-180">
                    <div className="prose-centered-quote mx-auto prose md:prose-lg">
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                            fringilla.
                        </p>
                        <hr />
                        <h2>Introduction</h2>
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat
                            sapien varius id.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
                            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
                            aliquet sodales id est ac volutpat.
                        </p>

                        <figure>
                            <div className="h-86 md:h-180 bg-[#84D7D9]" />
                            <figcaption>
                                <span>
                                    Image courtesy of Scott Webb via{" "}
                                    <a
                                        href="https://www.pexels.com/photo/green-leafed-plant-213727/"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Pexels
                                    </a>
                                </span>
                            </figcaption>
                        </figure>

                        <figure>
                            <blockquote>
                                <p>
                                    In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have
                                    lost or never attained, living by voices we shall never hear.
                                </p>
                            </blockquote>
                            <figcaption className="not-prose mt-6 inline-flex flex-col items-center md:mt-8">
                                <div className="size-10 rounded-full object-cover bg-[#84D7D9]" />
                                <p className="mt-3 text-md font-semibold text-primary">Jordan Kim</p>
                                <cite className="mt-0.5 text-md text-tertiary not-italic">Product Designer</cite>
                            </figcaption>
                        </figure>

                        <p>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                        </p>

                        <p>
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
                            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
                            congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
                            id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                        </p>
                        <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
                            dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit
                            erat nam nibh orci.
                        </p>

                        <h3>Software and tools</h3>

                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat
                            sapien varius id.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
                            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
                            aliquet sodales id est ac volutpat.
                        </p>

                        <h3>Other resources</h3>

                        <p>
                            Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
                            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit
                            dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                        </p>
                        <ol>
                            <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                            <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                            <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                        </ol>
                        <figure>
                            <div className="h-60 md:h-120 bg-[#84D7D9]" />
                            <figcaption>
                                <span>
                                    Image courtesy of Leon via{" "}
                                    <a
                                        href="https://unsplash.com/photos/bzqU01v-G54"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Unsplash
                                    </a>
                                </span>
                            </figcaption>
                        </figure>

                        <p>
                            Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in
                            non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis
                            suspendisse at.
                        </p>

                        <p>
                            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
                            Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus
                            molestie pellentesque. Arcu ultricies sed mauris vestibulum.
                        </p>

                        <div className="not-prose my-8 rounded-2xl bg-secondary px-5 py-6 text-lg text-tertiary md:my-12 md:p-8 [&>p+p]:mt-4.5">
                            <h2 className="mb-4 text-display-xs font-extrabold text-primary">Conclusion</h2>
                            <p>
                                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo
                                nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                            </p>
                            <p>
                                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis
                                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                            </p>
                            <p>
                                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
                                id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et,
                                nunc tortor.
                            </p>
                        </div>
                    </div>

                    <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row md:items-center">
                        <div className="flex gap-2">
                            <Badge color="sky" size="md">
                                Product
                            </Badge>
                            <Badge color="pink" size="md">
                                Tools
                            </Badge>
                            <Badge color="pink" size="md">
                                SaaS
                            </Badge>
                        </div>

                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Copy01}>
                                {copied ? "Copied" : "Copy link"}
                            </Button>
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NewsletterCardVerticalBrand = () => {
    return (
        <section className="bg-[#f9f7f3] pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-brand-section px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-extrabold text-primary_on-brand xl:text-display-md">
                        Still thinking
                        <br className="md:hidden" /> about it?
                    </h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 lg:text-xl">Sign up for our newsletter and get 10% off your next purchase.</p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 flex w-full flex-col gap-4 md:max-w-120 md:flex-row"
                    >
                        <Input
                            isRequired
                            size="lg"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            inputClassName="border-none"
                            wrapperClassName="py-0.5 md:max-w-[345px]"
                            hint={
                                <span className="text-tertiary_on-brand">
                                    <span className="md:hidden">Read about our</span>
                                    <span className="max-md:hidden">We care about your data in our</span>{" "}
                                    <a
                                        href="#"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </span>
                            }
                        />
                        <Button type="submit" size="xl">
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

const CTASimpleLogos02 = () => {
    return (
        <section className="bg-[#f9f7f3] py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col">
                        <div className="max-w-3xl">
                            <h2 className="text-display-sm font-extrabold text-primary md:text-display-md">Join over 4,000+ startups growing with Nimbus</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Start your 30-day free trial today.</p>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 self-stretch sm:flex-row sm:self-start md:mt-12 lg:flex-row-reverse">
                            <Button size="xl">Get started</Button>
                            <Button color="secondary" size="xl">
                                Learn more
                            </Button>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-y-6 lg:mt-0">
                        {/* Light mode images (hidden in dark mode) */}
                        <div className="h-9 md:h-10 dark:hidden bg-[#84D7D9]" />
                        <div className="h-9 md:h-10 dark:hidden bg-[#84D7D9]" />
                        <div className="h-9 md:h-10 dark:hidden bg-[#84D7D9]" />
                        <div className="h-9 md:h-10 dark:hidden bg-[#84D7D9]" />
                        <div className="h-9 md:h-10 dark:hidden bg-[#84D7D9]" />
                        <div className="h-9 md:h-10 dark:hidden bg-[#84D7D9]" />
                        <div className="h-9 max-md:hidden md:h-10 dark:hidden bg-[#84D7D9]" />
                        <div className="h-9 max-md:hidden md:h-10 dark:hidden bg-[#84D7D9]" />
                        <div className="h-9 max-md:hidden md:h-10 dark:hidden bg-[#84D7D9]" />

                        {/* Dark mode images (hidden in light mode) */}
                        <div className="h-9 opacity-85 not-dark:hidden md:h-10 bg-[#84D7D9]" />
                        <div className="h-9 opacity-85 not-dark:hidden md:h-10 bg-[#84D7D9]" />
                        <div className="h-9 opacity-85 not-dark:hidden md:h-10 bg-[#84D7D9]" />
                        <div className="h-9 opacity-85 not-dark:hidden md:h-10 bg-[#84D7D9]" />
                        <div className="h-9 opacity-85 not-dark:hidden md:h-10 bg-[#84D7D9]" />
                        <div className="h-9 opacity-85 not-dark:hidden md:h-10 bg-[#84D7D9]" />
                        <div className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10 bg-[#84D7D9]" />
                        <div className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10 bg-[#84D7D9]" />
                        <div className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10 bg-[#84D7D9]" />
                    </div>
                </div>
            </div>
        </section>
    );
};



const BlogPost10 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <BannerSlimBrandFullWidth />

            <NimbusHeader />

            <ContentLargeImage02 />

            <NewsletterCardVerticalBrand />

            <SectionDivider />

            <SectionDivider />

            <CTASimpleLogos02 />

            <NimbusFooter />
        </div>
    );
};

export default BlogPost10;
