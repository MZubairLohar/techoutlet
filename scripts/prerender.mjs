// Prerenders every public route listed in src/seo/routes.ts into static HTML
// so crawlers and AI systems that don't execute JavaScript still receive the
// full page content, title, meta tags and JSON-LD. Also generates
// sitemap.xml, robots.txt and llms.txt from the same route list.
//
// Run after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`
// (see the "build" script in package.json).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const ssrEntry = ["entry-server.js", "entry-server.mjs"].map((f) => path.join(ssrDir, f)).find(fs.existsSync);
if (!ssrEntry) throw new Error("SSR bundle not found - run `vite build --ssr src/entry-server.tsx --outDir dist-ssr` first.");

const { render, renderHeadHtml, ROUTES, SITE_URL, BUSINESS, CONTENT_UPDATED, canonicalUrl } = await import(
  pathToFileURL(ssrEntry).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!SEO_BLOCK.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error("index.html is missing the <!--seo:start-->/<!--seo:end--> markers or the empty #root div.");
}

// Non-prerendered URLs (dashboards, login, unknown paths) are served
// index.html by the Vercel rewrite; main.tsx then renders them client-side.
for (const route of ROUTES) {
  const appHtml = render(route.path);
  const html = template
    .replace(SEO_BLOCK, `<!--seo:start-->\n    ${renderHeadHtml(route.path)}\n    <!--seo:end-->`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="${route.path}">${appHtml}</div>`);

  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  const words = appHtml.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  console.log(`[prerender] ${route.path.padEnd(16)} -> ${file.padEnd(22)} ~${words} words`);
}

// ---------- sitemap.xml ----------
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${canonicalUrl(r)}</loc>
    <lastmod>${CONTENT_UPDATED}</lastmod>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

// ---------- robots.txt ----------
const PRIVATE = ["/admin", "/technician", "/login", "/Checkout", "/checkout", "/blogsdata"];
const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot",
];
const disallow = PRIVATE.map((p) => `Disallow: ${p}`).join("\n");
const robots = `# Search engines and AI assistants are welcome to crawl the public site.
User-agent: *
Allow: /
${disallow}

# AI search and assistant crawlers (explicitly allowed)
${AI_BOTS.map((b) => `User-agent: ${b}`).join("\n")}
Allow: /
${disallow}

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(dist, "robots.txt"), robots);

// ---------- llms.txt (https://llmstxt.org) ----------
const { address: a, openingHours: h } = BUSINESS;
const llms = `# ${BUSINESS.name} (${BUSINESS.legalName})

> ${BUSINESS.description}

- Address: ${a.streetAddress}, ${a.addressLocality} ${a.postalCode}, United Kingdom
- Phone: ${BUSINESS.telephoneDisplay}
- Email: ${BUSINESS.email}
- Opening hours: ${h.days}, ${h.opens}–${h.closes}
- Areas served: ${BUSINESS.areaServed.join(", ")}
- Most phone screen, battery and charging port repairs take 30–60 minutes; most laptop repairs are same-day.
- Free diagnosis and an upfront quote before any work starts; every repair carries a warranty on parts and labour.

## Pages

${ROUTES.map((r) => `- [${r.breadcrumb}](${canonicalUrl(r)}): ${r.description}`).join("\n")}
`;
fs.writeFileSync(path.join(dist, "llms.txt"), llms);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`[prerender] ${ROUTES.length} pages, sitemap.xml, robots.txt and llms.txt written for ${SITE_URL}`);
