import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    // Note: the "White Background" category is temporarily hidden. Its files
    // live in src/pages/white-background/ but their story files use a
    // `.stories.hidden.tsx` suffix so Storybook does not discover them.
    // To bring the category back, rename `*.stories.hidden.tsx` →
    // `*.stories.tsx` in that folder (see scripts note in the PR/commit).
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite"
};
export default config;