import type { Meta, StoryObj } from "@storybook/react-vite";
import { DemandMixPie } from "@/components/marketing/article-enrichments/article-enrichments";

const meta = {
    title: "Webflow Guide/Blog Components/Metrics & Charts/Demand Mix (Pie)",
    component: DemandMixPie,
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-[#f9f7f3] px-4 py-10 md:px-8">
                <div className="mx-auto max-w-180">
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof DemandMixPie>;

export default meta;

const data = [
    { name: "Static", value: 38 },
    { name: "Video", value: 27 },
    { name: "Interstitial", value: 22 },
    { name: "Native", value: 13 },
];

/** Teal ramp — the signature default. */
export const Teal: StoryObj = {
    render: () => <DemandMixPie title="How demand fills the Dynamic Unit, by format" data={data} colors={["#08c6c7", "#23a6a9", "#6bddda", "#cef4f4"]} />,
};

/** Pink ramp. */
export const Pink: StoryObj = {
    render: () => <DemandMixPie title="How demand fills the Dynamic Unit, by format" data={data} colors={["#dc438c", "#e87ab0", "#f2a9cb", "#fbe0ec"]} />,
};

/** Navy ramp. */
export const Navy: StoryObj = {
    render: () => <DemandMixPie title="How demand fills the Dynamic Unit, by format" data={data} colors={["#003a5b", "#2f6d8c", "#6a9cb8", "#c3dae7"]} />,
};

/** Full-brand mix — teal, pink, navy, light teal. */
export const BrandMix: StoryObj = {
    render: () => <DemandMixPie title="How demand fills the Dynamic Unit, by format" data={data} colors={["#08c6c7", "#dc438c", "#003a5b", "#6bddda"]} />,
};
