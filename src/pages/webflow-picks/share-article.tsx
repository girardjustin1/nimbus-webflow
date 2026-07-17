import { Check, Copy01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { useClipboard } from "@/hooks/use-clipboard";

/** Article share row — a "share this" prompt with a value prop, copy-link, and social buttons. */
export const ShareArticle = ({
    heading = "Share this article",
    valueProp = "Found this useful? Pass it to a publisher who could put the same playbook to work.",
}: {
    heading?: string;
    valueProp?: string;
}) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="-mt-px flex flex-col items-start justify-between gap-6 border-t border-secondary pt-6 md:flex-row md:items-center md:gap-10">
            <div className="flex max-w-md flex-col">
                <p className="text-md font-semibold text-primary md:text-lg">{heading}</p>
                <p className="mt-0.5 text-md text-tertiary">{valueProp}</p>
            </div>

            <div className="flex shrink-0 gap-3">
                <Button color="secondary" size="md" onClick={() => copy("https://www.adsbynimbus.com/")} iconLeading={copied ? Check : Copy01}>
                    {copied ? "Copied" : "Copy link"}
                </Button>
                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
            </div>
        </div>
    );
};
