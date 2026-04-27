import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Laptop = () => {
  const services = [
    {
      ServiceName: "Laptop Screen Replacement",
      Description:
        "We replace cracked or broken laptop screens with high-quality displays for all major brands like HP, Dell, Lenovo, and Apple MacBook.",
      icon: "💻",
    },
    {
      ServiceName: "Battery Replacement",
      Description:
        "We install new laptop batteries to fix charging issues, fast draining, and power backup problems.",
      icon: "🔋",
    },
    {
      ServiceName: "Keyboard Repair & Replacement",
      Description:
        "We repair or replace faulty laptop keyboards including unresponsive keys or liquid damage issues.",
      icon: "⌨️",
    },
    {
      ServiceName: "Motherboard Repair",
      Description:
        "Advanced motherboard-level repair for laptops that are not powering on or facing major hardware issues.",
      icon: "🧠",
    },
    {
      ServiceName: "SSD / HDD Upgrade",
      Description:
        "We upgrade your storage to SSD or higher capacity HDD for faster performance and better speed.",
      icon: "💾",
    },
    {
      ServiceName: "RAM Upgrade",
      Description:
        "We increase laptop RAM to improve multitasking speed and overall performance.",
      icon: "⚡",
    },
    {
      ServiceName: "Software Installation & OS Setup",
      Description:
        "We install Windows, macOS, drivers, and required software for smooth system operation.",
      icon: "⚙️",
    },
    {
      ServiceName: "Virus & Malware Removal",
      Description:
        "We remove viruses, malware, and unwanted software to secure and speed up your laptop.",
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
      Description:
        "We repair or replace faulty charging ports to fix power connection issues.",
      icon: "🔌",
    },
    {
      ServiceName: "Data Recovery",
      Description:
        "We recover lost or deleted files, documents, photos, and important data from damaged laptops.",
      icon: "🔄",
    },
    {
      ServiceName: "Laptop Upgrade & Optimization",
      Description:
        "We optimize and upgrade your laptop for better speed, performance, and stability.",
      icon: "🚀",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Heading */}
      <div className="text-center mt-24 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600">
          Laptop Repair Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer expert laptop repair services for all major brands. Whether
          it's a cracked screen, battery replacement, or water damage, our
          skilled technicians have you covered.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-12 px-4 md:px-10 lg:px-20 pb-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.ServiceName}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-6">
                {service.Description}
              </p>

              {/* Button */}
              <Link to="/book">
                <button className="mt-auto w-full border-2 border-red-600 text-red-600 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Laptop;