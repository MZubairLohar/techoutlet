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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
        <link rel="canonical" href="https://www.techoutlet.uk/contact" />

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
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-foreground">
                Contact Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                Have questions? Reach out to us and we'll get back to you as soon as
                possible.
              </p>
              <div className="mt-8 space-y-1">
                {[
                  { icon: Mail, text: "info@techoutlet.uk" },
                  { icon: Phone, text: "+442080620553" },
                  { icon: MapPin, text: "260 Tottenham Ct Rd, London W1T 7 RF " },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden">
                {/* <img src={happyCustomer} alt="Happy customer" className="w-full h-64 object-cover rounded-2xl" /> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6742975501626!2d-0.13135629999999998!3d51.517439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad8cc23e4a7%3A0x6f9bcd0432a8f965!2s260%20Tottenham%20Court%20Road%2C%20London%20W1T%207RF%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  className="h-64 w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border/50 h-full"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                  <input
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <input
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <textarea
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
      <Footer />
    </>
  )
}

export default Contact;