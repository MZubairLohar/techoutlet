import { Link } from "react-router-dom";
import { Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-black text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"> */}
              <img
              src="/logo.gif"
              alt="Logo"
              style={{ width: 60, height: 60, borderRadius: "50%" }}
            />
            {/* </div> */}
              {/* <span className="text-xl font-bold text-red-600"> 
              <span className="text-primary text-white">TECHOUTLET </span>LTD
            </span> */}
            {/* <span className="text-xl font-bold">TECHOUTLET LTD</span> */}
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Premium mobile repair service. Fast, reliable, and certified technicians at your service.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Book Repair", "Dashboard", "About Us"].map((item) => (
              <Link key={item} to="/" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-3">
            {["Screen Repair", "Battery Replacement", "Water Damage", "Software Fix", "Charging Port"].map((item) => (
              <span key={item} className="text-sm text-primary-foreground/60">{item}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Mail className="w-4 h-4" /> support@fixmyphone.com
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Phone className="w-4 h-4" /> +1 (555) 123-4567
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4" /> 123 Repair St, Tech City
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
        © <span className="text-red-600">2026</span> FixMyPhone. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;