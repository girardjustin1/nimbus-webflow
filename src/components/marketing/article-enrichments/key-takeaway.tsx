/** Highlighted key-takeaway blurb box. */
export const KeyTakeaway = ({ title = "Key takeaway", text }: { title?: string; text: string }) => (
    <aside className="my-10 rounded-2xl bg-[#003a5b] px-6 py-8 text-white md:px-8">
        <p className="text-[13px] font-semibold tracking-[0.11em] text-[#6bddda] uppercase">{title}</p>
        <p className="mt-2 text-[21px] leading-[1.4] font-medium">{text}</p>
    </aside>
);
