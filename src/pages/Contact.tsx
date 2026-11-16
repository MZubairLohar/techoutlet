import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { showSuccessToast } from "@/lib/toast";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageByline from "@/components/PageByline";
import FaqSection from "@/components/FaqSection";
import { contactFaqs } from "@/seo/faqs";
import { BUSINESS } from "@/seo/site";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.placeholder.includes("First")
        ? "firstName"
        : e.target.placeholder.includes("Last")
          ? "lastName"
          : e.target.placeholder.includes("Email")
            ? "email"
            : e.target.placeholder.includes("Phone")
              ? "phoneNumber"
              : "message"]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_URL}/contact`, {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phoneNumber: Number(form.phoneNumber),
        message: form.message,
      });

      showSuccessToast("Message sent successfully");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (err: any) {
    }
  };
  return (
    <>
      <Navbar />
      <section id="contact" className="py-20 lg:py-28 bg-card">

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-red-600 uppercase tracking-wider">
                Get In Touch
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold mt-3 text-foreground">
                Contact TechOutlet on Tottenham Court Road
              </h1>
              <p className="mt-4 text-muted-foreground">
                TechOutlet is a repair shop and electronics store at 260 Tottenham Court Road, London W1T 7RF.
                Call 020 8062 0553, email info@techoutlet.uk or walk in: we are open Monday to Sunday, 10:00 to
                19:00, for repairs and accessories.
              </p>
              <PageByline className="mt-3" />
              <ul className="mt-8 space-y-1">
                {[
                  { icon: Mail, text: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
                  { icon: Phone, text: BUSINESS.telephoneDisplay, href: BUSINESS.telephoneHref },
                  { icon: MapPin, text: "260 Tottenham Court Road, London W1T 7RF", href: BUSINESS.hasMap },
                  { icon: Clock, text: "Monday–Sunday, 10:00 AM – 7:00 PM" },
                ].map(({ icon: Icon, text, href }) => (
                  <li key={text} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    {href ? (
                      <a href={href} className="text-sm hover:text-red-600" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm">{text}</span>
                    )}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-xl font-semibold text-foreground">Getting to our shop</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We are on Tottenham Court Road in Fitzrovia, within easy reach of the Elizabeth line and Northern line,
                and a short walk from Soho, Bloomsbury, Covent Garden and Holborn. Bring your device in for a free
                diagnosis, or book online first to reserve a time.
              </p>
              <div className="mt-8 rounded-2xl overflow-hidden">
                {showMap ? (
                  <iframe
                    title="Map showing TechOutlet at 260 Tottenham Court Road, London"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6742975501626!2d-0.13135629999999998!3d51.517439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad8cc23e4a7%3A0x6f9bcd0432a8f965!2s260%20Tottenham%20Court%20Road%2C%20London%20W1T%207RF%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    className="h-64 w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="h-64 w-full bg-red-50 flex flex-col items-center justify-center gap-3 text-center px-6">
                    <MapPin className="w-8 h-8 text-red-600" />
                    <div className="text-sm text-foreground font-medium">260 Tottenham Court Road, London W1T 7RF</div>
                    <div className="flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setShowMap(true)}
                        className="px-4 py-2 rounded-full bg-red-600 text-white text-sm hover:bg-red-700"
                      >
                        Show map
                      </button>
                      <a
                        href={BUSINESS.hasMap}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full border border-red-600 text-red-600 text-sm hover:bg-red-600 hover:text-white"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border/50 h-full"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    aria-label="First name"
                  placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                  <input
                    aria-label="Last name"
                  placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <input
                  aria-label="Email address"
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <input
                  aria-label="Phone number"
                  placeholder="Phone"
                  type="tel"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <textarea
                  aria-label="Your message"
                  placeholder="Your message..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="border-[2px] border-red-600 w-full bg-white text-red-600 rounded-full h-12 shadow-soft hover:bg-red-600 hover:text-white transition-all font-semibold"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <FaqSection faqs={contactFaqs} className="pb-20" />
      <Footer />
    </>
  )
}

export default Contact;