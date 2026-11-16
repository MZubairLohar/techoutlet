// Single source of truth for business facts used in meta tags, JSON-LD
// structured data, the footer, llms.txt and the generated sitemap.
// Keep these in sync with the Google Business Profile.

const envSiteUrl =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) || "";

/** Canonical origin, no trailing slash. Override with VITE_SITE_URL for local audits. */
export const SITE_URL = (envSiteUrl || "https://www.techoutlet.uk").replace(/\/+$/, "");

/** Date the page copy was last reviewed. Bump when content changes. */
export const CONTENT_UPDATED = "2026-11-16";

export const BUSINESS = {
  name: "TechOutlet",
  legalName: "TECH OUTLET LTD",
  alternateName: "Tech Outlet",
  description:
    "TechOutlet is an electronics store and repair shop at 260 Tottenham Court Road, London, offering same-day laptop, MacBook, iPhone, Samsung and tablet repairs plus tech accessories.",
  telephone: "+44 20 8062 0553",
  telephoneDisplay: "020 8062 0553",
  telephoneHref: "tel:+442080620553",
  email: "info@techoutlet.uk",
  address: {
    streetAddress: "260 Tottenham Court Road",
    addressLocality: "London",
    postalCode: "W1T 7RF",
    addressCountry: "GB",
  },
  geo: { latitude: 51.5173345, longitude: -0.1308551 },
  hasMap: "https://www.google.com/maps/place/TECH+OUTLET+LTD/@51.5173345,-0.1308551,17z",
  openingHours: { days: "Monday–Sunday", opens: "10:00", closes: "19:00" },
  areaServed: ["Fitzrovia", "Soho", "Bloomsbury", "Covent Garden", "Holborn", "Central London"],
  logo: "/logo.gif",
  image: "/outlet-pic.jpeg",
} as const;

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

export const formatDisplayDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
