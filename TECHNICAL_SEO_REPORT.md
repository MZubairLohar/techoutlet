# Technical SEO Report (auto-generated)

## AI Crawlability & Bot Access (AEO Parameter 7)
robots.txt now explicitly allows: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, Claude-Web, Google-Extended, PerplexityBot, Perplexity-User, CCBot, Amazonbot, Bytespider, Applebot-Extended.
Verify none of these are blocked elsewhere (CDN/WAF rules, Cloudflare bot-fight mode, etc.) —
robots.txt only controls what your own server declares, not upstream network-level blocks.

## AI Rendering & Content Accessibility (AEO Parameter 8)
No client components detected among the mapped pages — content should be present
in the initial server-rendered HTML.

## AI Discoverability (AEO Parameter 10)
llms.txt and sitemap.xml/sitemap.js are generated. Orphan-page check (pages with
zero detected internal links pointing to them, from your CSV's `internal_links` column):
- ⚠️ https://www.techoutlet.uk/book — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/blogs — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/accessories — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/ — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/brands — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/phone-repair — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/services — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/contact — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/laptop — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/aboutus — no internal links found; add links to it from other pages
- ⚠️ https://www.techoutlet.uk/about — no internal links found; add links to it from other pages

## HTTPS / mobile viewport / canonical (from CSV)

| URL | HTTPS | Notes |
|---|---|---|
| https://www.techoutlet.uk/book | ✅ | missing viewport meta (mobile); no canonical tag |
| https://www.techoutlet.uk/blogs | ✅ | missing viewport meta (mobile) |
| https://www.techoutlet.uk/accessories | ✅ | missing viewport meta (mobile) |
| https://www.techoutlet.uk/ | ✅ | — |
| https://www.techoutlet.uk/brands | ✅ | missing viewport meta (mobile); no canonical tag |
| https://www.techoutlet.uk/phone-repair | ✅ | missing viewport meta (mobile) |
| https://www.techoutlet.uk/services | ✅ | missing viewport meta (mobile); no canonical tag |
| https://www.techoutlet.uk/contact | ✅ | missing viewport meta (mobile) |
| https://www.techoutlet.uk/laptop | ✅ | missing viewport meta (mobile); no canonical tag |
| https://www.techoutlet.uk/aboutus | ✅ | missing viewport meta (mobile); no canonical tag |
| https://www.techoutlet.uk/about | ✅ | missing viewport meta (mobile) |

## Still to check manually / with a live tool
- Core Web Vitals (LCP, CLS, INP) — run PageSpeed Insights per URL
- Page speed — run Lighthouse in CI
- 404 / 5xx status codes — run a live crawler (e.g. Screaming Frog) post-deploy
- JS rendering — verify with 'view source' vs rendered DOM (App Router SSR helps here)
- Mobile technical SEO — confirm responsive breakpoints render correctly
