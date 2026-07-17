/** Highlighted key-takeaway band — teal top rule, light-teal wash, centered copy. */
export const KeyTakeaway = ({ title = "Key takeaway", text }: { title?: string; text: string }) => (
    <aside className="my-16 border-t-[3px] border-[#4a9ea0] bg-[#f1fbfa] px-6 py-10 text-center md:my-20 md:px-8 md:py-14">
        <p className="text-[13px] font-bold tracking-[0.16em] text-[#3f9a9c] uppercase">{title}</p>
        <p className="mx-auto mt-4 max-w-2xl text-[22px] leading-[1.45] font-medium text-[#1f2d33] md:text-[26px]">{text}</p>
    </aside>
);
