/* eslint-disable react-refresh/only-export-components -- build-time entry, never hot-reloaded */
// Build-time entry used by scripts/prerender.mjs (vite build --ssr).
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell } from "./App";
import Root from "./Root";

export { ROUTES, canonicalUrl } from "./seo/routes";
export { renderHeadHtml } from "./seo/head";
export { BUSINESS, SITE_URL, CONTENT_UPDATED } from "./seo/site";
export { homeFaqs, phoneFaqs, laptopFaqs } from "./seo/faqs";

export function render(url: string): string {
  return renderToString(
    <Root>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </Root>,
  );
}
