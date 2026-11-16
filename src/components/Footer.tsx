import { Link } from "react-router-dom";
import { Mail, Phone, Building2, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { BUSINESS } from "@/seo/site";

const quickLinks = [
  { label: "Phone Repair", to: "/phone-repair" },
  { label: "Laptop Repair", to: "/laptop" },
  { label: "Repair Services", to: "/services" },
  { label: "Brands We Repair", to: "/brands" },
  { label: "Accessories", to: "/accessories" },
  { label: "Book a Repair", to: "/book" },
  { label: "Repair Blog", to: "/blogs" },
  { label: "About Us", to: "/about" },
  { label: "Why TechOutlet", to: "/aboutus" },
  { label: "Contact", to: "/contact" },
];

const headingClass =
  "text-base font-bold text-primary-foreground tracking-wider uppercase pb-2 mb-3 border-b border-primary-foreground/10";

const Footer = () => {
  return (
    <footer className="bg-black text-primary-foreground pt-12 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <h3 className={headingClass}>ABOUT US</h3>
            <p className="text-primary-foreground/70 text-sm md:text-[15px] leading-relaxed">
              TECH OUTLET LTD is a local electronics store specializing in fast laptop repair on Tottenham Court
              Road and expert mobile servicing. We work right in the heart of Central London — so we know the panic
              of a dropped screen on the way to the tube or a dead MacBook right before a deadline. While we keep
              essential tech in stock, our main focus is simple: clear upfront pricing, zero technical jargon, and
              same-day repairs that get you back on track without the stress.
            </p>
          </div>

          {/* Address & contact */}
          <div>
            <h3 className={headingClass}>OUR ADDRESS</h3>
            <address className="not-italic space-y-4 text-sm md:text-[15px]">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary-foreground/60 mt-0.5 shrink-0" />
                <div className="text-primary-foreground/70 leading-snug">
                  <div className="font-bold text-primary-foreground">{BUSINESS.legalName}</div>
                  <a href={BUSINESS.hasMap} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality} {BUSINESS.address.postalCode}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground shrink-0 fill-primary-foreground" />
                <a href={BUSINESS.telephoneHref} className="font-bold text-primary-foreground hover:text-red-500 transition-colors">
                  {BUSINESS.telephoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/60 shrink-0" />
                <a href={`mailto:${BUSINESS.email}`} className="text-red-500 hover:underline transition-colors">
                  {BUSINESS.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-primary-foreground/60 shrink-0" />
                <span>
                  {BUSINESS.openingHours.days}: 10:00 AM – 7:00 PM
                </span>
              </div>
            </address>

            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Linkedin, href: "https://youtube.com", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-white hover:bg-red-600 transition-all duration-200 transform hover:scale-110 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links: makes every public page reachable from every page */}
          <nav aria-label="Footer">
            <h3 className={headingClass}>QUICK LINKS</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-sm md:text-[15px] text-primary-foreground/80">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-red-500 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Areas we serve */}
          <div>
            <h3 className={headingClass}>AREAS WE SERVE</h3>
            <div className="text-primary-foreground/70 text-sm md:text-[15px] mb-4">
              Serving Central London & Surrounding Areas
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm md:text-[15px] text-primary-foreground/80">
              {BUSINESS.areaServed
                .filter((a) => a !== "Central London")
                .map((area) => (
                  <li key={area} className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
                    <span className="text-red-600 font-bold text-base" aria-hidden="true">➔</span>
                    <span>{area}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base">
          <div className="text-primary-foreground/60 text-center md:text-left">
            © 2026 TECHOUTLET LTD. All rights reserved.
          </div>

          <ul className="flex items-center gap-5 text-primary-foreground/60">
            <li>
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            </li>
          </ul>

          <a
            href={BUSINESS.telephoneHref}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-2.5 rounded-xl shadow-md transition-all transform hover:scale-105 active:scale-95"
          >
            Call Now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
