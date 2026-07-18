import type { Preview } from "@storybook/react-vite";

// Import the Untitled UI design system styles (Tailwind + theme tokens)
// so components render with the correct theme inside Storybook.
import "../src/styles/globals.css";

// Namespaced blog-embed styles, so the Webflow embed previews render exactly
// as they will on the Webflow site (which loads this same CSS once).
import "../src/webflow-embeds/blog-embeds.css";

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                method: "alphabetical",
                order: [
                    "Overview",
                    "Rich Text Editor",
                    ["Content Style Guide", "Embed Kit", ["*Stylesheet*", "*Charts runtime*", "*"]],
                    "Webflow Guide",
                    ["Blog Directory", "Case Studies", "News", "Blog Components"],
                    "White Background",
                    ["Blog Directory", "Case Studies", "News", "Blog Components"],
                    "Styles",
                    ["Color", "Elevation", "Icons", "Imagery", "Logos", "Shape", "Typography"],
                    "Blog Article Templates",
                    ["Blog Directory", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
                    "Templates Components",
                    ["Navigation", "Breadcrumbs", "Body", "Footer"],
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
