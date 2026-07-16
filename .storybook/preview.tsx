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
                    "Overview",
                    "Styles",
                    ["Color", "Elevation", "Icons", "Imagery", "Logos", "Shape", "Typography"],
                    "Components",
                    ["Navigation", "Breadcrumbs", "Body", "Footer"],
                    "Blog Article Templates",
                    ["Blog Directory", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
                    "Blog Sections",
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
