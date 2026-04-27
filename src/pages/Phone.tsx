import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Phone = () => {
  const services = [
    {
      ServiceName: "Screen Replacement",
      Description:
        "We replace broken or damaged mobile screens with high-quality original or compatible displays for all major smartphone brands.",
      icon: "📱",
    },
    {
      ServiceName: "Battery Replacement",
      Description:
        "We install new batteries to fix fast draining, overheating, or low backup issues in smartphones.",
      icon: "🔋",
    },
    {
      ServiceName: "Charging Port Repair",
      Description:
        "We repair or replace faulty charging ports to fix charging issues and loose connections.",
      icon: "🔌",
    },
    {
      ServiceName: "Speaker & Microphone Repair",
      Description:
        "We fix speaker and microphone problems including low sound, no sound, or call voice issues.",
      icon: "🔊",
    },
    {
      ServiceName: "Camera Repair",
      Description:
        "We repair front and rear camera issues like blur images, camera not opening, or hardware failure.",
      icon: "📷",
    },
    {
      ServiceName: "Water Damage Repair",
      Description:
        "We clean and repair water-damaged phones to recover and restore device functionality.",
      icon: "💧",
    },
    {
      ServiceName: "Software Update & Flashing",
      Description:
        "We update or reinstall mobile software to fix bugs, lag, hanging, or system errors.",
      icon: "⚙️",
    },
    {
      ServiceName: "FRP Lock Removal",
      Description:
        "We safely remove Google FRP lock or forgotten screen lock issues from Android devices.",
      icon: "🔓",
    },
    {
      ServiceName: "Virus Removal",
      Description:
        "We remove malware and harmful apps to improve mobile speed and security.",
      icon: "🦠",
    },
    {
      ServiceName: "Network Issue Repair",
      Description:
        "We fix SIM detection issues, no signal problems, and mobile network errors.",
      icon: "📶",
    },
    {
      ServiceName: "Motherboard Repair",
      Description:
        "Advanced repair for dead or severely damaged phones at the motherboard level.",
      icon: "🧠",
    },
    {
      ServiceName: "Data Recovery",
      Description:
        "We recover lost or deleted photos, videos, contacts, and other important data.",
      icon: "🔄",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Heading */}
      <div className="text-center mt-24 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600">
          Phone Repair Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer expert phone repair services for all major brands. Whether
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
              className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.ServiceName}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                {service.Description}
              </p>

              {/* Button */}
              <Link to="/book">
                <button className="w-full border-2 border-red-600 text-red-600 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all">
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

export default Phone;