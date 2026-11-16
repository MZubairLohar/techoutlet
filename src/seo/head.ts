import { BUSINESS, absoluteUrl } from "./site";
import { buildJsonLd, canonicalUrl, findRoute } from "./routes";

export interface HeadTag {
  tag: "title" | "meta" | "link" | "script";
  attrs: Record<string, string>;
  content?: string;
}

const FALLBACK_TITLE = "TechOutlet | Laptop & Phone Repair Tottenham Court Road";

/**
 * Every <head> tag that depends on the current route. Used at build time by
 * the prerenderer and at runtime by <SeoManager /> on client-side navigation,
 * so both always emit identical tags.
 */
export function getHeadTags(path: string): HeadTag[] {
  const route = findRoute(path);

  // Dashboards, checkout, login and unknown URLs: never index.
  if (!route) {
    return [
      { tag: "title", attrs: {}, content: FALLBACK_TITLE },
      { tag: "meta", attrs: { name: "robots", content: "noindex, nofollow" } },
    ];
  }

  const url = canonicalUrl(route);
  const image = absoluteUrl(route.image || BUSINESS.image);
  const imageAlt = `${BUSINESS.name} repair shop at ${BUSINESS.address.streetAddress}, London`;

  return [
    { tag: "title", attrs: {}, content: route.title },
    { tag: "meta", attrs: { name: "description", content: route.description } },
    { tag: "meta", attrs: { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" } },
    { tag: "meta", attrs: { name: "author", content: BUSINESS.name } },
    { tag: "link", attrs: { rel: "canonical", href: url } },
    { tag: "meta", attrs: { property: "og:type", content: "website" } },
    { tag: "meta", attrs: { property: "og:site_name", content: BUSINESS.name } },
    { tag: "meta", attrs: { property: "og:locale", content: "en_GB" } },
    { tag: "meta", attrs: { property: "og:title", content: route.title } },
    { tag: "meta", attrs: { property: "og:description", content: route.description } },
    { tag: "meta", attrs: { property: "og:url", content: url } },
    { tag: "meta", attrs: { property: "og:image", content: image } },
    { tag: "meta", attrs: { property: "og:image:alt", content: imageAlt } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: route.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: route.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: image } },
    { tag: "meta", attrs: { name: "twitter:image:alt", content: imageAlt } },
    {
      tag: "script",
      attrs: { type: "application/ld+json" },
      // Escape "<" so the JSON can never close the <script> element early.
      content: JSON.stringify(buildJsonLd(route)).replace(/</g, "\\u003c"),
    },
  ];
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Serialises head tags to HTML for the prerendered pages. */
export function renderHeadHtml(path: string): string {
  return getHeadTags(path)
    .map(({ tag, attrs, content }) => {
      const a = Object.entries({ ...attrs, "data-seo": "" })
        .map(([k, v]) => (v === "" ? ` ${k}` : ` ${k}="${escapeHtml(v)}"`))
        .join("");
      if (tag === "meta" || tag === "link") return `<${tag}${a}>`;
      const body = tag === "script" ? content ?? "" : escapeHtml(content ?? "");
      return `<${tag}${a}>${body}</${tag}>`;
    })
    .join("\n    ");
}
