import type { Preview } from "@storybook/react-vite";

// Import the Untitled UI design system styles (Tailwind + theme tokens)
// so components render with the correct theme inside Storybook.
import "../src/styles/globals.css";

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                method: "alphabetical",
                order: [
                    "Styles",
                    ["Color", "Elevation", "Icons", "Shape", "Typography"],
                    "Components",
                    ["Navigation", "Breadcrumbs", "Body", "Footer"],
                    "Blog Sections",
                    "Blog Layouts",
                    ["Blog Directory", "Blog Article Template"],
                    "Nimbus Blog",
                    "*",
                ],
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },
    },
};

export default preview;
