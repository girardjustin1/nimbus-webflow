/**
 * A logo + statement band, bracketed by content dividers — the case-study
 * "Background" treatment (partner logo on the left, intro copy on the right).
 */
export const LogoStatement = ({ logoSrc, logoAlt, text }: { logoSrc: string; logoAlt: string; text: string }) => (
    <div className="my-16 border-y border-black/10 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-center md:gap-12">
            <img src={logoSrc} alt={logoAlt} className="h-9 w-auto self-start md:h-10 md:self-center" />
            <p className="text-[18px] leading-[28px] text-[#535862] md:text-[20px] md:leading-[32px]">{text}</p>
        </div>
    </div>
);
