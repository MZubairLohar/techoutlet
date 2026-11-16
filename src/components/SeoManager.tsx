import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getHeadTags } from "@/seo/head";

/**
 * Keeps <title>, meta description, canonical, Open Graph / Twitter tags and
 * JSON-LD in sync with the current route during client-side navigation.
 * Prerendered pages already ship identical tags (see scripts/prerender.mjs);
 * every managed tag carries a `data-seo` attribute so it can be swapped cleanly.
 */
const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const head = document.head;
    head.querySelectorAll("[data-seo]").forEach((el) => el.remove());

    for (const { tag, attrs, content } of getHeadTags(pathname)) {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      el.setAttribute("data-seo", "");
      if (content !== undefined) el.textContent = content;
      head.appendChild(el);
    }
  }, [pathname]);

  return null;
};

export default SeoManager;
