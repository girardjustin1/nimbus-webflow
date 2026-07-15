import { Avatar } from "@/components/base/avatar/avatar";

/** Large pull-quote / testimonial with an optional author avatar + attribution. */
export const PullQuote = ({ quote, attribution, avatarSrc }: { quote: string; attribution?: string; avatarSrc?: string }) => (
    <blockquote className="my-10 border-l-4 border-[#08c6c7] pl-6">
        <p className="text-[26px] leading-[1.35] font-medium text-[#181d27]">“{quote}”</p>
        {attribution && (
            <footer className="mt-4 flex items-center gap-3">
                {avatarSrc && <Avatar size="md" src={avatarSrc} alt={attribution} />}
                <span className="text-[16px] text-[#535862]">— {attribution}</span>
            </footer>
        )}
    </blockquote>
);
