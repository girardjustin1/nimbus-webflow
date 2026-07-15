import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checklist, ImageryIdea, KeyTakeaway, PullQuote, StatCallout, StatGrid } from "./article-enrichments";

/**
 * Components → Body → Enrichments → Intertwined Example
 * All enrichment sections woven into a sample Nimbus article body.
 */
const meta = {
    title: "Components/Body/Enrichments/Intertwined Example",
    parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <article className="mx-auto max-w-3xl bg-[#f9f7f3] p-8">
            <span className="text-[13px] font-semibold tracking-[0.11em] text-[#08c6c7] uppercase">Yield</span>
            <h1 className="mt-3 text-[40px] leading-[1.05] font-black text-[#181d27]">Floors Are a Publisher's Pricing Power</h1>

            <p className="my-4 text-[18px] leading-[28px] text-[#535862]">
                In-app bidding gave publishers a better auction. It also handed pricing leverage to the buy side in ways
                that are easy to miss. Floors are how publishers push back.
            </p>

            <StatCallout value="42%" label="revenue increase Tumblr saw after switching to Nimbus" />

            <p className="my-4 text-[18px] leading-[28px] text-[#535862]">
                A floor tells bidding algorithms that the discount-hunting stops here, restoring competitive pressure that
                bid shading quietly removes. Used well, floors keep DSPs honest.
            </p>

            <Checklist
                heading="What publishers get with Nimbus"
                items={[
                    "Auction transparency and control",
                    "Holistic demand competition",
                    "Operational efficiency across partners",
                    "Full access to the Nimbus demand ecosystem",
                ]}
            />

            <PullQuote
                quote="Every bid competes on the same terms. That's the whole design."
                attribution="Kristen Smith, Chief Product Officer, Nimbus"
                avatarSrc="https://i.pravatar.cc/150?img=47"
            />

            <p className="my-4 text-[18px] leading-[28px] text-[#535862]">
                Granularity is what makes floors work. Nimbus flooring adjusts across geo, ad type, and size — refined as
                reporting reveals what each slice of inventory commands.
            </p>

            <StatGrid
                stats={[
                    { value: "31%", label: "avg publisher lift with Nimbus+" },
                    { value: "24%", label: "avg lift with Nimbus Core" },
                    { value: "60+", label: "demand sources connected" },
                ]}
            />

            <ImageryIdea caption="floored vs. unfloored eCPM over time — real ad-ops numbers" ratio="16/9" />

            <KeyTakeaway text="A floor is a dial, not a switch — set the terms the market has to beat." />
        </article>
    ),
};
