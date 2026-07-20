/**
 * Shared demo snippet for the Code Snippet component + embed stories: a small
 * Nimbus SDK init + ad request. Plain text — the stories run it through
 * `tokenizeCode()` so the auto-highlighter colors it (and matches what an author
 * gets by typing into the Embed Kit "Code" control).
 */
export const NIMBUS_CODE_TEXT = `import { Nimbus } from "@nimbus/sdk";

// Initialize the SDK once at app startup
const nimbus = Nimbus.init({
  apiKey: "pub_live_51H8x",
  timeout: 800,
});

// Request an ad for a placement
const ad = await nimbus.request({
  format: "banner",
  slot: "home_feed",
});`;
