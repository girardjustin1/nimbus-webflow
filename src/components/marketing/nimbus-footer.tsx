import { cx } from "@/utils/cx";
import { NimbusLogo } from "@/components/foundations/logo/nimbus-logo";

export type NimbusFooterProps = {
    /** Lead-in text above the CTA link. */
    text?: string;
    /** CTA link label. */
    linkLabel?: string;
    linkHref?: string;
    className?: string;
};

/**
 * Nimbus site footer — matches adsbynimbus.com:
 * dark navy (#003a5b) background, centered white logo, lead text (medium),
 * and a bold teal (#6bddda) CTA link.
 */
export const NimbusFooter = ({
    text = "Learn how Nimbus can bring the same level of efficiency to your stack",
    linkLabel = "Request a demo at adsbynimbus.com →",
    linkHref = "https://www.adsbynimbus.com",
    className,
}: NimbusFooterProps) => (
    <footer className={cx("w-full self-stretch bg-[#003a5b] px-10 py-20 text-center text-xl text-white", className)}>
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-3">
            <div className="flex justify-center">
                <NimbusLogo variant="white" className="h-8" />
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="m-0 font-medium">{text}</p>
                <a
                    href={linkHref}
                    className="m-0 font-bold text-[#6bddda] no-underline hover:underline focus-visible:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6bddda]"
                >
                    {linkLabel}
                </a>
            </div>
        </div>
    </footer>
);
