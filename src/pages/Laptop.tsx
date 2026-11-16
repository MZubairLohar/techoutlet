import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageByline from "@/components/PageByline";
import { Link } from "react-router-dom";
import { laptopFaqs } from "@/seo/faqs";
import { BUSINESS } from "@/seo/site";

const services = [
  {
    ServiceName: "Laptop Screen Replacement",
    Description:
      "We replace cracked or broken laptop screens with high-quality displays for all major brands like HP, Dell, Lenovo, and Apple MacBook.",
    icon: "💻",
  },
  {
    ServiceName: "Battery Replacement",
    Description: "We install new laptop batteries to fix charging issues, fast draining, and power backup problems.",
    icon: "🔋",
  },
  {
    ServiceName: "Keyboard Repair & Replacement",
    Description: "We repair or replace faulty laptop keyboards including unresponsive keys or liquid damage issues.",
    icon: "⌨️",
  },
  {
    ServiceName: "Motherboard Repair",
    Description: "Advanced motherboard-level repair for laptops that are not powering on or facing major hardware issues.",
    icon: "🧠",
  },
  {
    ServiceName: "SSD / HDD Upgrade",
    Description: "We upgrade your storage to SSD or higher capacity HDD for faster performance and better speed.",
    icon: "💾",
  },
  {
    ServiceName: "RAM Upgrade",
    Description: "We increase laptop RAM to improve multitasking speed and overall performance.",
    icon: "⚡",
  },
  {
    ServiceName: "Software Installation & OS Setup",
    Description: "We install Windows, macOS, drivers, and required software for smooth system operation.",
    icon: "⚙️",
  },
  {
    ServiceName: "Virus & Malware Removal",
    Description: "We remove viruses, malware, and unwanted software to secure and speed up your laptop.",
    icon: "🦠",
  },
  {
    ServiceName: "Overheating Fix & Cleaning",
    Description:
      "We clean internal dust and fix overheating issues by servicing fans and thermal paste replacement.",
    icon: "🔥",
  },
  {
    ServiceName: "Charging Port Repair",
    Description: "We repair or replace faulty charging ports to fix power connection issues.",
    icon: "🔌",
  },
  {
    ServiceName: "Data Recovery",
    Description: "We recover lost or deleted files, documents, photos, and important data from damaged laptops.",
    icon: "🔄",
  },
  {
    ServiceName: "Laptop Upgrade & Optimization",
    Description: "We optimize and upgrade your laptop for better speed, performance, and stability.",
    icon: "🚀",
  },
];

const prices = [
  { repair: "Laptop screen replacement", price: "£80–£200", note: "MacBook screens cost more because the assembly is bonded" },
  { repair: "Laptop battery replacement", price: "£60–£150", note: "Depends on make and model" },
  { repair: "Diagnosis", price: "Free", note: "Test, explanation and quote before any work" },
  { repair: "Keyboards, ports, upgrades and data recovery", price: "Quoted", note: "Fixed price confirmed after free diagnosis" },
];

const brands = ["Apple MacBook Air and MacBook Pro", "HP", "Dell", "Lenovo", "ASUS", "Acer", "Chromebooks and gaming laptops"];

const Laptop = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <main>
        {/* Heading + answer-first intro */}
        <header className="text-center pt-32 px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600">Laptop &amp; MacBook Repair on Tottenham Court Road</h1>
          <p className="mt-4 text-gray-600">
            TechOutlet repairs laptops and MacBooks at 260 Tottenham Court Road, London. Most screen, battery,
            keyboard and SSD jobs are finished the same day, diagnosis is free, and you get a clear quote before any
            work starts.
          </p>
          <PageByline className="mt-3" />
        </header>

        {/* Prices */}
        <section className="mt-14 px-4 max-w-4xl mx-auto" aria-labelledby="laptop-prices">
          <h2 id="laptop-prices" className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Laptop repair prices
          </h2>
          <p className="mt-3 text-gray-600 text-center">
            Typical prices at our Central London shop. We confirm the exact price for your model before we start.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-red-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-red-50 text-gray-900">
                <tr>
                  <th scope="col" className="px-4 py-3">Repair</th>
                  <th scope="col" className="px-4 py-3">Typical price</th>
                  <th scope="col" className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row) => (
                  <tr key={row.repair} className="border-t border-red-100">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900">{row.repair}</th>
                    <td className="px-4 py-3 font-semibold text-red-600 whitespace-nowrap">{row.price}</td>
                    <td className="px-4 py-3 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mt-16 px-4 md:px-10 lg:px-20" aria-labelledby="laptop-services">
          <h2 id="laptop-services" className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Laptop repair services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.ServiceName}</h3>
                <p className="text-sm text-gray-500 mb-6">{service.Description}</p>
                <Link
                  to="/book"
                  className="mt-auto w-full text-center border-2 border-red-600 text-red-600 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Brands + process */}
        <section className="mt-16 px-4 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Laptop brands we repair</h2>
            <p className="mt-3 text-gray-600">
              We repair Windows laptops, MacBooks and Chromebooks from every major manufacturer, including:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-1 text-gray-700">
              {brands.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">How a laptop repair works</h2>
            <p className="mt-3 text-gray-600">
              Walk in during opening hours ({BUSINESS.openingHours.days}, {BUSINESS.openingHours.opens}–
              {BUSINESS.openingHours.closes}) or <Link to="/book" className="text-red-600 underline">book online</Link>.
            </p>
            <ol className="mt-4 list-decimal pl-6 space-y-1 text-gray-700">
              <li>Free diagnosis: we test the laptop and explain the fault in plain English.</li>
              <li>Upfront quote: you approve the price before any work starts.</li>
              <li>Repair: most screen, battery and storage jobs are done the same day.</li>
              <li>Collection: we test the laptop with you and the repair is covered by our warranty.</li>
            </ol>
          </div>
        </section>

        {/* Repair or replace */}
        <section className="mt-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">Is it worth repairing my laptop?</h2>
          <p className="mt-3 text-gray-600">
            In our experience, a repair is usually worth it if it costs less than half the price of a new machine,
            especially for laptops under four years old. A new battery, screen or SSD often makes an older laptop feel
            new again for a fraction of the cost of replacing it.
          </p>
          <p className="mt-3 text-gray-600">
            Battery wear is normal. According to Apple, most modern MacBook batteries are designed to retain up to 80%
            of their original capacity at 1,000 complete charge cycles, so shorter battery life after a few years is
            expected, and a replacement restores it.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-16 px-4 max-w-3xl mx-auto pb-20" aria-labelledby="laptop-faq">
          <h2 id="laptop-faq" className="text-2xl md:text-3xl font-bold text-gray-900">Laptop repair FAQs</h2>
          <div className="mt-6 space-y-6">
            {laptopFaqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-red-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/book"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full"
            >
              Book a laptop repair
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Laptop;
