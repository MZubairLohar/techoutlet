import { describe, expect, it } from "vitest";
import { ROUTES, buildJsonLd, findRoute } from "@/seo/routes";
import { getHeadTags, renderHeadHtml } from "@/seo/head";

describe("route SEO config", () => {
  it.each(ROUTES.map((r) => [r.path, r] as const))("%s has a 50–60 char title and 120–155 char description", (_, r) => {
    expect(r.title.length).toBeGreaterThanOrEqual(50);
    expect(r.title.length).toBeLessThanOrEqual(60);
    expect(r.description.length).toBeGreaterThanOrEqual(120);
    expect(r.description.length).toBeLessThanOrEqual(155);
    expect(r.title).toContain("TechOutlet");
  });

  it("titles and descriptions are unique", () => {
    expect(new Set(ROUTES.map((r) => r.title)).size).toBe(ROUTES.length);
    expect(new Set(ROUTES.map((r) => r.description)).size).toBe(ROUTES.length);
  });

  it("normalises paths when matching routes", () => {
    expect(findRoute("/Phone-Repair/")?.path).toBe("/phone-repair");
    expect(findRoute("/admin")).toBeUndefined();
  });
});

describe("head tags", () => {
  it("emits canonical, Open Graph, Twitter and JSON-LD for public routes", () => {
    const tags = getHeadTags("/laptop");
    const attr = (k: string, v: string) => tags.find((t) => t.attrs[k] === v);
    expect(attr("rel", "canonical")?.attrs.href).toMatch(/\/laptop$/);
    expect(tags.filter((t) => t.attrs.property?.startsWith("og:")).length).toBeGreaterThanOrEqual(4);
    expect(tags.filter((t) => t.attrs.name?.startsWith("twitter:")).length).toBeGreaterThanOrEqual(3);
    expect(tags.some((t) => t.attrs.type === "application/ld+json")).toBe(true);
  });

  it("marks unknown and private routes noindex", () => {
    const robots = getHeadTags("/admin/orders").find((t) => t.attrs.name === "robots");
    expect(robots?.attrs.content).toContain("noindex");
  });

  it("never lets JSON-LD close the script tag early", () => {
    expect(renderHeadHtml("/")).not.toMatch(/<\/script>[\s\S]*<\/script>/);
  });
});

describe("JSON-LD", () => {
  it("includes Organization, store, WebSite and breadcrumbs, and FAQPage when the page has FAQs", () => {
    const types = (path: string) =>
      (buildJsonLd(findRoute(path)!)["@graph"] as { "@type": string }[]).map((n) => n["@type"]);
    expect(types("/")).toEqual(expect.arrayContaining(["Organization", "ElectronicsStore", "WebSite", "FAQPage"]));
    expect(types("/laptop")).toEqual(expect.arrayContaining(["BreadcrumbList", "Service", "FAQPage"]));
    expect(types("/contact")).toEqual(expect.arrayContaining(["ContactPage", "BreadcrumbList"]));
  });
});
