import { useState } from "react";
import { cx } from "@/utils/cx";
import { NimbusLogo } from "@/components/foundations/logo/nimbus-logo";

export type NimbusNavLink = {
    label: string;
    href: string;
    /** Renders the link in the accent color by default (e.g. "We're Hiring!"). */
    accent?: boolean;
};

export type NimbusHeaderProps = {
    links?: NimbusNavLink[];
    logoHref?: string;
    signInHref?: string;
    className?: string;
};

// Nimbus nav text colors: default #046E6F → hover #DC438C (accent).

const DEFAULT_LINKS: NimbusNavLink[] = [
    { label: "Request Demo", href: "#" },
    { label: "Partner With Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "We're Hiring!", href: "#", accent: true },
];

const NavLinkItem = ({ label, href, accent, className }: NimbusNavLink & { className?: string }) => (
    <a
        href={href}
        // Default #046E6F → hover #DC438C. Accent links start at #DC438C.
        className={cx(
            "font-semibold transition-colors duration-150",
            accent ? "text-[#DC438C] hover:text-[#DC438C]" : "text-[#046E6F] hover:text-[#DC438C]",
            className,
        )}
    >
        {label}
    </a>
);

const SignInButton = ({ href, className }: { href: string; className?: string }) => (
    <a
        href={href}
        className={cx(
            "inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-150",
            "border-[#046E6F] text-[#046E6F] hover:border-[#DC438C] hover:text-[#DC438C]",
            className,
        )}
    >
        Sign in
    </a>
);

export const NimbusHeader = ({
    links = DEFAULT_LINKS,
    logoHref = "#",
    signInHref = "#",
    className,
}: NimbusHeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={cx("w-full bg-[#F9F7F3]", className)}>
            <div className="mx-auto flex max-w-container items-center justify-between gap-6 px-4 py-4 md:px-8">
                {/* Left: logo + desktop links */}
                <div className="flex items-center gap-10">
                    <a href={logoHref} aria-label="Nimbus home" className="flex shrink-0 items-center">
                        <NimbusLogo variant="blue" color="#006E6F" className="h-7" />
                    </a>
                    <nav className="hidden items-center gap-8 md:flex">
                        {links.map((link) => (
                            <NavLinkItem key={link.label} {...link} className="text-md" />
                        ))}
                    </nav>
                </div>

                {/* Right: desktop sign in + mobile toggle */}
                <div className="flex items-center gap-3">
                    <SignInButton href={signInHref} className="hidden md:inline-flex" />
                    <button
                        type="button"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((v) => !v)}
                        className="inline-flex size-10 items-center justify-center rounded-lg text-[#046E6F] hover:text-[#DC438C] md:hidden"
                    >
                        {isOpen ? (
                            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden>
                                <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden>
                                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <nav className="flex flex-col gap-4 border-t border-black/5 px-4 py-4 md:hidden">
                    {links.map((link) => (
                        <NavLinkItem key={link.label} {...link} className="text-md" />
                    ))}
                    <SignInButton href={signInHref} className="mt-2 self-start" />
                </nav>
            )}
        </header>
    );
};
