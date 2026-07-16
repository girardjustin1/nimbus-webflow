import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

// Brand the Storybook manager (sidebar header + browser tab) as "Nimbus Blog Design".
const theme = create({
    base: "light",
    brandTitle: "Nimbus Blog Design",
    brandUrl: "https://www.adsbynimbus.com",
    brandTarget: "_blank",
});

addons.setConfig({ theme });

// Keep the browser tab titled "Nimbus Blog Design" as you navigate between stories.
const BASE_TITLE = "Nimbus Blog Design";
const applyTitle = () => {
    if (!document.title.includes(BASE_TITLE)) {
        document.title = document.title === "" ? BASE_TITLE : `${document.title} ⋅ ${BASE_TITLE}`;
    }
};
applyTitle();
new MutationObserver(applyTitle).observe(document.querySelector("title")!, { childList: true });
