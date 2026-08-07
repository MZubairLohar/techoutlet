import { Mail, Phone, Building2, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const handleCall = () => {
    window.location.href = "tel:02080620553";
  };

  return (
    <footer className="bg-black text-primary-foreground pt-12 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-base font-bold text-primary-foreground tracking-wider uppercase pb-2 mb-3 border-b border-primary-foreground/10">
              ABOUT US
            </h3>
            <p className="text-primary-foreground/70 text-sm md:text-[15px] leading-relaxed">
              TECH OUTLET LTD is your local electronics store specializing in fast laptop repair on Tottenham Court Road and expert mobile servicing. We work right in the heart of Central London — so we know the panic of a dropped screen on the way to the tube or a dead MacBook right before a deadline. While we keep essential tech in stock, our main focus is simple: clear upfront pricing, zero technical jargon, and same-day repairs that get you back on track without the stress.
            </p>
          </div>

          {/* Column 2: Our Address & Social Media */}
          <div>
            <h3 className="text-base font-bold text-primary-foreground tracking-wider uppercase pb-2 mb-3 border-b border-primary-foreground/10">
              OUR ADDRESS
            </h3>
            <div className="space-y-4 text-sm md:text-[15px]">
              {/* Address Item */}
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary-foreground/60 mt-0.5 shrink-0" />
                <div className="italic text-primary-foreground/70 leading-snug">
                  <p className="font-bold text-primary-foreground not-italic">
                    TechOutlet Ltd
                  </p>
                  <p>260 Tottenham Ct Rd, London W1T 7RF</p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground shrink-0 fill-primary-foreground" />
                <a
                  href="tel:02080620553"
                  className="font-bold italic text-primary-foreground hover:text-red-500 transition-colors"
                >
                  02080620553
                </a>
              </div>

              {/* Email Item */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/60 shrink-0" />
                <a
                  href="mailto:info@techoutlet.uk"
                  className="italic text-red-500 hover:underline transition-colors"
                >
                  info@techoutlet.uk
                </a>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-primary-foreground tracking-wider uppercase pb-2 mb-3 border-b border-primary-foreground/10">
                SOCIAL MEDIA
              </h3>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Linkedin, href: "https://youtube.com", label: "Linkdin" },
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
          </div>

          {/* Column 3: Areas We Serve */}
          <div>
            <h3 className="text-base font-bold text-primary-foreground tracking-wider uppercase pb-2 mb-3 border-b border-primary-foreground/10">
              AREAS WE SERVE
            </h3>
            <p className="text-primary-foreground/70 text-sm md:text-[15px] mb-4">
              Serving Central London & Surrounding Areas
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm md:text-[15px] text-primary-foreground/80">
              {[
                "Soho",
                "Holborn",
                "Fitzrovia",
                "Bloomsbury",
                "Covent Garden",
              ].map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors"
                >
                  <span className="text-red-600 font-bold text-base">➔</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-16 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base">
          <div className="font-bold text-primary-foreground text-center md:text-left">
            Open Monday–Sunday: 10:00 AM – 7:00 PM
          </div>

          <div className="text-primary-foreground/60 text-center">
            © 2026 TECHOUTLET LTD. All rights reserved.
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button
              onClick={handleCall}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-2.5 rounded-xl shadow-md transition-all transform hover:scale-105 active:scale-95"
            >
              Call Now
            </button>
          </div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;

