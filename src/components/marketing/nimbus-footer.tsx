import { cx } from "@/utils/cx";

export type NimbusFooterProps = {
    /** Twitter/X profile URL for the "Follow us" icon. */
    twitterHref?: string;
    /** Security & SOC II compliance page URL. */
    securityHref?: string;
    /** Privacy policy page URL. */
    privacyHref?: string;
    className?: string;
};

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.797-1.56 2.457-2.548z" />
    </svg>
);

/**
 * Nimbus site footer — matches adsbynimbus.com:
 * navy (#0f3151, the brand "blue-darkest") background, a centered "Follow us"
 * row with the Twitter icon, then a copyright + legal links line
 * (Security & SOC II Compliance • Privacy Policy).
 */
export const NimbusFooter = ({
    twitterHref = "https://twitter.com/intent/follow?screen_name=adsbynimbus",
    securityHref = "https://www.adsbynimbus.com/security-compliance",
    privacyHref = "https://www.adsbynimbus.com/privacy-policy",
    className,
}: NimbusFooterProps) => (
    <footer className={cx("w-full self-stretch bg-[#0f3151] px-6 py-10 text-white", className)}>
        <div className="mx-auto flex max-w-[940px] flex-col items-center gap-5 text-center">
            <a
                href={twitterHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Nimbus on Twitter"
                className="flex items-center gap-3 text-white no-underline transition-colors duration-150 hover:text-[#83d7da] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#83d7da]"
            >
                <span className="text-[0.9rem] leading-none font-bold uppercase">Follow us</span>
                <TwitterIcon />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[0.8rem] uppercase">
                <span>Copyright © 2025 Nimbus Advertising Solutions Inc</span>
                <span aria-hidden="true" className="text-[0.5rem] text-white/70">•</span>
                <a href={securityHref} target="_blank" rel="noreferrer" className="underline underline-offset-2 transition-colors duration-150 hover:text-[#83d7da]">
                    Security &amp; SOC II Compliance
                </a>
                <span aria-hidden="true" className="text-[0.5rem] text-white/70">•</span>
                <a href={privacyHref} target="_blank" rel="noreferrer" className="underline underline-offset-2 transition-colors duration-150 hover:text-[#83d7da]">
                    Privacy Policy
                </a>
            </div>
        </div>
    </footer>
);
