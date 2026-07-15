import { Check, Copy01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { useClipboard } from "@/hooks/use-clipboard";

export const ContentSplitImage02 = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-primary">
            <div className="flex flex-col gap-16 py-16 md:flex-row md:gap-0 md:py-0">
                <div className="flex md:w-1/2 md:items-end md:justify-end md:py-24">
                    <div className="flex w-full max-w-(--breakpoint-sm) flex-col px-4 md:px-8">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">30 Jun 2026 • 5 min read</span>
                        <h1 className="mt-3 text-display-md font-semibold text-primary md:mt-4 md:text-display-lg">Floors Are a Publisher's Pricing Power</h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:max-w-120 md:text-xl">
                            Bidding handed pricing leverage to the buy side. Floors are how publishers push back — and with granular, dynamic flooring, you set
                            the terms the market has to beat.
                        </p>
                        <div className="mt-8 flex items-center gap-3 md:mt-12">
                            <img src="https://i.pravatar.cc/150?img=15" className="size-12 rounded-full object-cover" alt="Nimbus Ad Ops" />
                            <div>
                                <p className="text-md font-semibold text-primary">Nimbus Ad Ops</p>
                                <p className="text-md text-tertiary">Yield</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-4 md:h-180 md:w-1/2 md:bg-secondary md:p-8">
                    <img
                        src="/unsplash/financial-trading-data-dashboard-screen/financial-trading-data-dashboard-screen-fiXLQXAhCfk.jpg"
                        alt="Stock market candlestick chart on a screen"
                        className="h-100 w-full rounded-2xl object-cover md:h-140 md:w-100"
                    />
                </div>
            </div>
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:py-24">
                <div className="mx-auto max-w-prose md:max-w-180">
                    <div className="mx-auto prose md:prose-lg">
                        <p>In-app bidding gave publishers a better auction. It also handed pricing leverage to the buy side in ways that are easy to miss.</p>
                        <p>
                            DSPs are optimized to spend as little as possible for the same outcome. That's not bad behavior — it's their job. Bidding algorithms
                            learn the minimum price your inventory will accept, and without resistance, they'll find it. The result is a market that drifts toward
                            the lowest tolerable price, one fractional bid adjustment at a time.
                        </p>
                        <p>Floors are how publishers push back. Used well, they are one of the few levers in programmatic that the publisher controls completely.</p>

                        <h2>What a floor actually does</h2>
                        <p>
                            A floor is a minimum price for your inventory: bids below it don't win, no matter what. Its real function is behavioral — a floor tells
                            bidding algorithms that the discount-hunting stops here, restoring competitive pressure that bid shading quietly removes. Floors keep
                            DSPs honest.
                        </p>
                        <p>
                            The objection is always the same: won't floors cost me fill? Sometimes, yes — that's the tradeoff being managed. A floor set too high
                            costs impressions; a floor set too low (or not at all) costs price. The job is finding the level where the pricing gain outweighs the
                            fill loss, and that level is discovered, not declared.
                        </p>

                        <h2>Granularity is what makes floors work</h2>
                        <p>
                            A single global floor is a blunt instrument, because inventory value isn't uniform. The same placement commands different prices by
                            geography, format, and size — and treating it all identically underprices your best impressions to protect your weakest ones.
                        </p>
                        <p>
                            Nimbus flooring is built for that granularity. Publishers can set and adjust floors across the dimensions where value actually varies
                            — geo, ad type, and size — and refine them as reporting reveals what each slice commands. Identified and anonymous traffic behave
                            differently in the auction, and your flooring strategy can account for that.
                        </p>

                        <img
                            src="/unsplash/data-analytics-dashboard-screen/data-analytics-dashboard-screen-qwtCeJ5cLYs.jpg"
                            alt="Monitoring dashboard on a screen"
                            className="h-60 w-full rounded-2xl object-cover md:h-120"
                        />

                        <figure>
                            <blockquote>
                                <p>Let the market determine price — but set the terms it has to beat.</p>
                            </blockquote>
                            <figcaption className="not-prose mt-6 text-md md:mt-8">
                                — Nimbus Ad Ops, <cite className="not-italic">Yield</cite>
                            </figcaption>
                        </figure>

                        <h2>Dynamic floors: pricing that keeps up</h2>
                        <p>
                            Markets move. Demand surges around seasonal spend, softens in slow weeks, and shifts as buyers come and go. A static floor that was
                            right in March can be wrong in June. Dynamic floors adjust to those conditions, keeping pricing competitive without manually
                            re-deriving the right number every week. For publishers without a dedicated yield team, this is the difference between flooring as a
                            strategy and flooring as a setup task that quietly goes stale.
                        </p>

                        <h3>A practical way to start</h3>
                        <ol>
                            <li>Baseline first. Pull eCPM and fill by geo and format before changing anything.</li>
                            <li>Start where value is concentrated. Floor your highest-value slices first — premium geos, video, large formats.</li>
                            <li>Move in steps, not leaps. Set a floor, let it run, then adjust. Floors are a dial, not a switch.</li>
                            <li>Watch the auction respond. If eCPM rises and fill holds, keep going. If fill drops faster than price rises, step back.</li>
                            <li>Revisit quarterly at minimum. Demand conditions change; your floors should too.</li>
                        </ol>

                        <div className="not-prose my-8 rounded-2xl bg-secondary px-5 py-6 text-lg text-tertiary md:my-12 md:p-8 [&>p+p]:mt-4.5">
                            <h2 className="mb-4 text-display-xs font-semibold text-primary">Pricing control is the point</h2>
                            <p>
                                The shift to bidding asked publishers to trust the market. Trust is fine — leverage is better. Flooring strategy, alongside
                                traffic shaping and transparent reporting, is how publishers regain mastery over an auction environment that was supposed to serve
                                them. Let the market determine price — but set the terms it has to beat.
                            </p>
                            <p>Your Nimbus Account Manager can walk through your current floor setup and where there's room to work. Or get started at nimbus.co.</p>
                        </div>
                    </div>

                    <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row md:items-center">
                        <p className="text-md font-semibold text-tertiary">Share this post</p>

                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.nimbus.co/")} iconLeading={copied ? Check : Copy01}>
                                {copied ? "Copied" : "Copy link"}
                            </Button>
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
