import type { Meta, StoryObj } from "@storybook/react-vite";
import { enriched02, tumblrCaseStudy } from "@/content/blog/enriched-articles";
import WebflowPicksCaseStudies, { type HeroStat } from "./case-studies";

/** The two "lift" figures floated over the Tumblr hero, matching the live case study. */
const TUMBLR_HERO_STATS: HeroStat[] = [
    { value: "87%", label: "rCPM Lift", sublabel: "Average across iOS & Android", variant: "pink" },
    { value: "42%", label: "COMBINED REVENUE LIFT", sublabel: "Average across iOS & Android", variant: "teal" },
];

/**
 * Webflow Guide — the case-study article layout selected for the Webflow port.
 *
 * Forked from Blog Article Templates → 02 → Enriched, with the byline author and
 * avatar removed and month/year timestamps. Avatars inside the article body
 * (pull quotes, testimonials) are kept.
 */
const meta = {
    title: "White Background/Case Studies",
    component: WebflowPicksCaseStudies,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof WebflowPicksCaseStudies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enriched: Story = { name: "Enriched (with sections)", args: { article: enriched02 } };
export const TumblrCaseStudy: Story = { name: "Tumblr Case Study", args: { article: tumblrCaseStudy, heroStats: TUMBLR_HERO_STATS } };
