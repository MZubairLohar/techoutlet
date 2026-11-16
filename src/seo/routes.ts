import { BUSINESS, CONTENT_UPDATED, SITE_URL, absoluteUrl } from "./site";
import {
  Faq,
  aboutUsFaqs,
  accessoryFaqs,
  bookFaqs,
  brandFaqs,
  contactFaqs,
  homeFaqs,
  laptopFaqs,
  phoneFaqs,
  serviceFaqs,
} from "./faqs";

type WebPageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

interface PricedService {
  name: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface RouteSeo {
  path: string;
  /** 50–60 characters. */
  title: string;
  /** 120–155 characters. */
  description: string;
  /** Label used in the breadcrumb trail. */
  breadcrumb: string;
  pageType: WebPageType;
  image?: string;
  faqs?: Faq[];
  service?: { name: string; serviceType: string; offers: PricedService[] };
  /** Sitemap priority (0–1). Routes are listed in the sitemap in array order. */
  priority: number;
}

// Order matters: the sitemap lists routes in this order, and crawlers that
// only sample the first N sitemap URLs should see the most important pages first.
export const ROUTES: RouteSeo[] = [
  {
    path: "/",
    title: "Laptop & Phone Repair Tottenham Court Road | TechOutlet",
    description:
      "Same-day laptop, MacBook and phone repairs at 260 Tottenham Court Road, London. Free diagnosis, upfront quotes and tech accessories. Open 7 days a week.",
    breadcrumb: "Home",
    pageType: "WebPage",
    image: "/outlet-pic.jpeg",
    faqs: homeFaqs,
    priority: 1.0,
  },
  {
    path: "/phone-repair",
    title: "Mobile Phone Repair Tottenham Court Road | TechOutlet",
    description:
      "iPhone, Samsung and Google Pixel repairs on Tottenham Court Road, London. Most screen, battery and charging port fixes are done in 30 to 60 minutes.",
    breadcrumb: "Phone Repair",
    pageType: "WebPage",
    image: "/tottenham-court-road-phone-repair-services.jpg.webp",
    faqs: phoneFaqs,
    service: {
      name: "Mobile Phone Repair",
      serviceType: "Mobile phone repair",
      offers: [
        { name: "Phone screen replacement" },
        { name: "Phone battery replacement" },
        { name: "Charging port repair" },
        { name: "Back glass repair" },
        { name: "Water damage repair" },
        { name: "Software troubleshooting and data recovery" },
      ],
    },
    priority: 0.9,
  },
  {
    path: "/laptop",
    title: "Laptop & MacBook Repair Tottenham Court Road | TechOutlet",
    description:
      "Same-day laptop and MacBook repair in Central London: screens from £80, batteries from £60, keyboards, SSD upgrades and data recovery. Free diagnosis.",
    breadcrumb: "Laptop Repair",
    pageType: "WebPage",
    image: "/laptop-repair-central-london-macbook-workbench.jp.webp",
    faqs: laptopFaqs,
    service: {
      name: "Laptop Repair",
      serviceType: "Laptop and MacBook repair",
      offers: [
        { name: "Laptop screen replacement", minPrice: 80, maxPrice: 200 },
        { name: "Laptop battery replacement", minPrice: 60, maxPrice: 150 },
        { name: "Keyboard repair and replacement" },
        { name: "Motherboard repair" },
        { name: "SSD and RAM upgrade" },
        { name: "Data recovery" },
      ],
    },
    priority: 0.9,
  },
  {
    path: "/about",
    title: "About TechOutlet | Repair Shop on Tottenham Court Road",
    description:
      "Meet TechOutlet, the laptop and phone repair shop and electronics store at 260 Tottenham Court Road, London. Honest advice, same-day repairs, fair prices.",
    breadcrumb: "About",
    pageType: "AboutPage",
    image: "/outlet-pic.jpeg",
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact TechOutlet | Repair Shop Tottenham Court Road",
    description:
      "Call 020 8062 0553, email info@techoutlet.uk or visit 260 Tottenham Court Road, London W1T 7RF. Open Monday to Sunday, 10am to 7pm, for walk-in repairs.",
    breadcrumb: "Contact",
    pageType: "ContactPage",
    image: "/outlet-pic.jpeg",
    faqs: contactFaqs,
    priority: 0.8,
  },
  {
    path: "/services",
    title: "Phone, Laptop & Tablet Repair Services | TechOutlet London",
    description:
      "Browse TechOutlet repair services and prices: screen and battery replacement, charging ports, water damage and data recovery at Tottenham Court Road.",
    breadcrumb: "Services",
    pageType: "WebPage",
    faqs: serviceFaqs,
    service: {
      name: "Phone, Laptop and Tablet Repair",
      serviceType: "Electronics repair",
      offers: [
        { name: "Phone repair" },
        { name: "Laptop and MacBook repair" },
        { name: "iPad and tablet repair" },
      ],
    },
    priority: 0.8,
  },
  {
    path: "/brands",
    title: "Phone & Laptop Brands We Repair in London | TechOutlet",
    description:
      "We repair Apple, Samsung, Google Pixel, OnePlus, Xiaomi, HP, Dell, Lenovo and more at our Tottenham Court Road shop. See the brands and models we fix.",
    breadcrumb: "Brands",
    pageType: "WebPage",
    faqs: brandFaqs,
    priority: 0.6,
  },
  {
    path: "/accessories",
    title: "Phone Accessories Shop Tottenham Court Road | TechOutlet",
    description:
      "Chargers, cables, earphones, cases and screen protectors from TechOutlet's electronics store at 260 Tottenham Court Road, London. Add to cart or visit us.",
    breadcrumb: "Accessories",
    pageType: "WebPage",
    faqs: accessoryFaqs,
    priority: 0.6,
  },
  {
    path: "/blogs",
    title: "Phone & Laptop Repair Tips and Guides | TechOutlet Blog",
    description:
      "Practical repair tips from the TechOutlet technicians on Tottenham Court Road: phone and laptop care, battery health, water damage and when to repair.",
    breadcrumb: "Blog",
    pageType: "WebPage",
    priority: 0.6,
  },
  {
    path: "/book",
    title: "Book a Phone or Laptop Repair Online | TechOutlet London",
    description:
      "Book your phone, tablet or laptop repair online in a few steps. Choose your device and model, pick a date and visit our Tottenham Court Road repair shop.",
    breadcrumb: "Book a Repair",
    pageType: "WebPage",
    faqs: bookFaqs,
    priority: 0.7,
  },
  {
    path: "/aboutus",
    title: "Phone, iPad & Laptop Repair Experts London | TechOutlet",
    description:
      "TechOutlet repairs iPhones, Samsung phones, iPads, MacBooks and HP or Dell laptops in London, with send-in repairs and free return delivery across the UK.",
    breadcrumb: "Why TechOutlet",
    pageType: "AboutPage",
    image: "/outlet-pic.jpeg",
    faqs: aboutUsFaqs,
    priority: 0.5,
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | TechOutlet Repairs Tottenham Court Road",
    description:
      "How TECH OUTLET LTD collects, uses and protects personal data from repair bookings, contact forms and accessory orders, and your rights under UK GDPR.",
    breadcrumb: "Privacy Policy",
    pageType: "WebPage",
    priority: 0.3,
  },
  {
    path: "/terms",
    title: "Repair Terms & Conditions | TechOutlet Tottenham Court Road",
    description:
      "The terms that apply to repairs, quotes, warranties, collections and accessory purchases at TECH OUTLET LTD, 260 Tottenham Court Road, London W1T 7RF.",
    breadcrumb: "Terms & Conditions",
    pageType: "WebPage",
    priority: 0.3,
  },
];

export const normalizePath = (path: string) => {
  const clean = (path || "/").split(/[?#]/)[0].replace(/\/+$/, "").toLowerCase();
  return clean === "" ? "/" : clean;
};

export const findRoute = (path: string) => ROUTES.find((r) => r.path === normalizePath(path));

// ---------- JSON-LD ----------
const ORG_ID = `${SITE_URL}/#organization`;
const STORE_ID = `${SITE_URL}/#store`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  ...BUSINESS.address,
};

const organizationNode = () => ({
  "@type": "Organization",
  "@id": ORG_ID,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  alternateName: BUSINESS.alternateName,
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: absoluteUrl(BUSINESS.logo) },
  email: BUSINESS.email,
  telephone: BUSINESS.telephone,
  address: postalAddress,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: ["English"],
  },
});

const storeNode = () => ({
  "@type": "ElectronicsStore",
  "@id": STORE_ID,
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: `${SITE_URL}/`,
  image: absoluteUrl(BUSINESS.image),
  logo: absoluteUrl(BUSINESS.logo),
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: "££",
  address: postalAddress,
  geo: { "@type": "GeoCoordinates", ...BUSINESS.geo },
  hasMap: BUSINESS.hasMap,
  parentOrganization: { "@id": ORG_ID },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: BUSINESS.openingHours.opens,
      closes: BUSINESS.openingHours.closes,
    },
  ],
  areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
});

const websiteNode = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: BUSINESS.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-GB",
});

export const canonicalUrl = (route: RouteSeo) => (route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`);

export function buildJsonLd(route: RouteSeo) {
  const url = canonicalUrl(route);
  const graph: object[] = [organizationNode(), storeNode(), websiteNode()];

  graph.push({
    "@type": route.pageType,
    "@id": `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
    dateModified: CONTENT_UPDATED,
    ...(route.image ? { primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(route.image) } } : {}),
    ...(route.path !== "/" ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  });

  if (route.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: route.breadcrumb, item: url },
      ],
    });
  }

  if (route.service) {
    const { name, serviceType, offers } = route.service;
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name,
      serviceType,
      url,
      provider: { "@id": STORE_ID },
      areaServed: { "@type": "City", name: "London" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${name} services`,
        itemListElement: offers.map((o) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: o.name },
          ...(o.minPrice
            ? {
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "GBP",
                  minPrice: o.minPrice,
                  maxPrice: o.maxPrice,
                },
              }
            : {}),
        })),
      },
    });
  }

  if (route.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      isPartOf: { "@id": `${url}#webpage` },
      mainEntity: route.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
