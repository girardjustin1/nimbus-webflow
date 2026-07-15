import { TabList, Tabs } from "@/components/application/tabs/tabs";

export type CategoryTabItem = { id: string; label: string };

/** The category filter tab bar used at the top of blog directory pages. */
export const CategoryTabs = ({ items, className }: { items: CategoryTabItem[]; className?: string }) => (
    <Tabs className={className ?? "w-full"}>
        <TabList type="underline" size="md" items={items} className="overflow-auto" />
    </Tabs>
);
