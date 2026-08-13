import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const schemas: Record<string, object> = {
  "/": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tech Outlet",
    url: "https://www.techoutlet.uk/",
    description:
      "Tech Outlet provides professional mobile phone and laptop repair services in the UK.",
    serviceType: [
      "Mobile Phone Repair",
      "Laptop Repair",
    ],
  },

  "/phone-repair": {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Phone Repair",
    provider: {
      "@type": "LocalBusiness",
      name: "Tech Outlet",
      url: "https://www.techoutlet.uk/",
    },
    url: "https://www.techoutlet.uk/phone-repair",
    serviceType: "Mobile Phone Repair",
  },

  "/laptop": {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Laptop Repair",
    provider: {
      "@type": "LocalBusiness",
      name: "Tech Outlet",
      url: "https://www.techoutlet.uk/",
    },
    url: "https://www.techoutlet.uk/laptop",
    serviceType: "Laptop Repair",
  },

  "/services": {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Repair Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Tech Outlet",
      url: "https://www.techoutlet.uk/",
    },
    url: "https://www.techoutlet.uk/services",
  },

  "/about": {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Tech Outlet",
    url: "https://www.techoutlet.uk/about",
  },

  "/aboutus": {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Tech Outlet",
    url: "https://www.techoutlet.uk/aboutus",
  },

  "/contact": {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Tech Outlet",
    url: "https://www.techoutlet.uk/contact",
  },

  "/blogs": {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Tech Outlet Blog",
    url: "https://www.techoutlet.uk/blogs",
  },
};

const SchemaMarkup = () => {
  const location = useLocation();

  useEffect(() => {
    const existing = document.getElementById("techoutlet-schema");

    if (existing) {
      existing.remove();
    }

    const schema = schemas[location.pathname];

    if (!schema) return;

    const script = document.createElement("script");

    script.id = "techoutlet-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);

    document.head.appendChild(script);

    return () => {
      const current = document.getElementById("techoutlet-schema");
      current?.remove();
    };
  }, [location.pathname]);

  return null;
};

export default SchemaMarkup;