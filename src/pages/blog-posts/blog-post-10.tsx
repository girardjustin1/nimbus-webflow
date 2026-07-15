import { Check, Copy01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayWhiteButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useClipboard } from "@/hooks/use-clipboard";

const footerSocials = [
    { label: "X", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList },
    { label: "Dribbble", icon: Dribbble },
    { label: "Layers", icon: Layers },
];

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
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">UX review presentations</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        How do you create compelling presentations that wow your colleagues and impress your managers? Here's how to get started.
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                        <img
                            src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                            className="size-14 rounded-full object-cover"
                            alt="Olivia Rhye"
                        />
                        <div>
                            <p className="text-lg font-semibold text-primary">Olivia Rhye</p>
                            <p className="text-md text-tertiary">20 Jan 2026</p>
                        </div>
                    </div>
                </div>
                <img
                    className="mx-auto mt-12 h-60 w-full object-cover md:mt-16 md:h-140 md:max-w-5xl"
                    src="https://www.untitledui.com/marketing/girl-taking-notes.webp"
                    alt="Woman taking notes during a UX presentation meeting"
                />
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
                            <img
                                className="h-86 md:h-180"
                                src="https://images.pexels.com/photos/213727/pexels-photo-213727.jpeg?cs=srgb&dl=pexels-scott-webb-213727.jpg&fm=jpg&w=1920&h=1280"
                                alt="Green leafed plant in natural lighting"
                            />
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
                                <img
                                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                    className="size-10 rounded-full object-cover"
                                    alt="Olivia Rhye"
                                />
                                <p className="mt-3 text-md font-semibold text-primary">Olivia Rhye</p>
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
                            <img
                                className="h-60 md:h-120"
                                src="https://www.untitledui.com/marketing/smiling-girl-9.webp"
                                alt="Smiling woman working on presentation design"
                            />
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
                            <h2 className="mb-4 text-display-xs font-semibold text-primary">Conclusion</h2>
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
                    <h2 className="text-display-sm font-semibold text-primary_on-brand xl:text-display-md">
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
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Join over 4,000+ startups growing with Untitled</h2>
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
                        <img alt="Ephemeral" src="https://www.untitledui.com/logos/logotype/color/ephemeral.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Wildcrafted" src="https://www.untitledui.com/logos/logotype/color/wildcrafted.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Codecraft" src="https://www.untitledui.com/logos/logotype/color/codecraft.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Convergence" src="https://www.untitledui.com/logos/logotype/color/convergence.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Imgcompress" src="https://www.untitledui.com/logos/logotype/color/img-compress.svg" className="h-9 md:h-10 dark:hidden" />
                        <img alt="Epicurious" src="https://www.untitledui.com/logos/logotype/color/epicurious.svg" className="h-9 md:h-10 dark:hidden" />
                        <img
                            alt="Watchtower"
                            src="https://www.untitledui.com/logos/logotype/color/watchtower.svg"
                            className="h-9 max-md:hidden md:h-10 dark:hidden"
                        />
                        <img
                            alt="Renaissance"
                            src="https://www.untitledui.com/logos/logotype/color/renaissance.svg"
                            className="h-9 max-md:hidden md:h-10 dark:hidden"
                        />
                        <img
                            alt="Contrastai"
                            src="https://www.untitledui.com/logos/logotype/color/contrast-ai.svg"
                            className="h-9 max-md:hidden md:h-10 dark:hidden"
                        />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="Ephemeral"
                            src="https://www.untitledui.com/logos/logotype/white/ephemeral.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Wildcrafted"
                            src="https://www.untitledui.com/logos/logotype/white/wildcrafted.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Codecraft"
                            src="https://www.untitledui.com/logos/logotype/white/codecraft.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Convergence"
                            src="https://www.untitledui.com/logos/logotype/white/convergence.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Imgcompress"
                            src="https://www.untitledui.com/logos/logotype/white/img-compress.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Epicurious"
                            src="https://www.untitledui.com/logos/logotype/white/epicurious.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-10"
                        />
                        <img
                            alt="Watchtower"
                            src="https://www.untitledui.com/logos/logotype/white/watchtower.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10"
                        />
                        <img
                            alt="Renaissance"
                            src="https://www.untitledui.com/logos/logotype/white/renaissance.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10"
                        />
                        <img
                            alt="Contrastai"
                            src="https://www.untitledui.com/logos/logotype/white/contrast-ai.svg"
                            className="h-9 opacity-85 not-dark:hidden max-md:hidden md:h-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge07 = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                            <UntitledLogo className="dark-mode" />
                            <p className="text-md text-tertiary_on-brand">Design amazing digital experiences that create more happy in the world.</p>
                        </div>
                        <nav>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                                {[
                                    { title: "Overview", href: "#" },
                                    { title: "Features", href: "#" },
                                    { title: "Pricing", href: "#" },
                                    { title: "Careers", href: "#" },
                                    { title: "Help", href: "#" },
                                    { title: "Privacy", href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button
                                            className="max-h-5 text-footer-button-fg hover:text-footer-button-fg_hover"
                                            color="link-color"
                                            size="md"
                                            href={item.href}
                                        >
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-primary_on-brand">Get the app</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 lg:flex-col">
                            <AppStoreButton href="#" className="w-[135px] bg-brand-section ring-white" />
                            <GooglePlayWhiteButton href="#" className="w-[135px] bg-brand-section ring-white" />
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row">
                    <p className="text-sm text-quaternary_on-brand">© 2077 Untitled UI. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon className="size-5" aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const BlogPost10 = () => {
    return (
        <div className="bg-[#f9f7f3]">
            <BannerSlimBrandFullWidth />

            <Header isFloating />

            <ContentLargeImage02 />

            <NewsletterCardVerticalBrand />

            <SectionDivider />

            <SectionDivider />

            <CTASimpleLogos02 />

            <FooterLarge07 />
        </div>
    );
};

export default BlogPost10;
