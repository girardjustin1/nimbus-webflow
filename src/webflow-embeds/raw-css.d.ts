// Allow importing a stylesheet's raw text (Vite `?raw`) so the Embed Kit can
// display the blog-embeds.css source for copy-paste into Webflow.
declare module "*.css?raw" {
    const content: string;
    export default content;
}
