import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { motion, Variants } from "framer-motion";
import { Wrench, PoundSterling, Smartphone, Battery, Shield, Cpu, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageByline from "@/components/PageByline";
import FaqSection from "@/components/FaqSection";
import { serviceFaqs } from "@/seo/faqs";
import { Link } from "react-router-dom";

const serviceAreas = [
  {
    title: "Phone repair",
    text: "iPhone, Samsung, Google Pixel and other smartphones. Most repairs take 30 to 60 minutes while you wait.",
    items: ["Screen replacement", "Battery replacement", "Charging port repair", "Water damage repair"],
    link: "/phone-repair",
    linkLabel: "Phone repair details",
  },
  {
    title: "Laptop & MacBook repair",
    text: "MacBooks, Windows laptops and Chromebooks. Screens typically £80–£200 and batteries £60–£150.",
    items: ["Screen and keyboard repair", "Battery replacement", "SSD and RAM upgrades", "Data recovery"],
    link: "/laptop",
    linkLabel: "Laptop repair prices",
  },
  {
    title: "iPad & tablet repair",
    text: "All iPad generations and Samsung tablets, plus software updates and accessories.",
    items: ["Screen and glass repair", "Battery replacement", "Charging issues", "Software updates"],
    link: "/book",
    linkLabel: "Book a tablet repair",
  },
];

interface Service {
  _id: string;
  ServiceName: string;
  Description: string;
  icon : string;
}

export default function NewServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all services
  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/getAllServices`);
      setServices(res.data.message);
    } catch (error) {
      console.error("Failed to fetch services", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Get icon based on service name (for visual variety)
  const getServiceIcon = (serviceName: string, index: number) => {
    const icons = [
      <Smartphone className="w-8 h-8" />,
      <Battery className="w-8 h-8" />,
      <Shield className="w-8 h-8" />,
      <Cpu className="w-8 h-8" />,
      <Zap className="w-8 h-8" />,
    //   <Tool className="w-8 h-8" />,
      <Wrench className="w-8 h-8" />,
    ];
    
    // Use index to cycle through icons
    return icons[index % icons.length];
  };

  function Book() {
    window.open("/book", "_self");
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      } 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
      {/* Hero Section */}
      <div className="text-[#0F1729] py-28 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Phone, Laptop &amp; Tablet Repair Services</h1>
          <p className="text-xl text-[#6588BB] max-w-3xl mx-auto">
            TechOutlet offers phone, tablet and laptop repair services at 260 Tottenham Court Road, London: screen
            and battery replacement, charging ports, water damage and data recovery, with a free diagnosis first.
          </p>
          <PageByline className="mt-3" />
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 mb-16 grid md:grid-cols-3 gap-6">
        {serviceAreas.map((area) => (
          <div key={area.title} className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold text-gray-900">{area.title}</h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{area.text}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
              {area.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            {area.link && (
              <Link to={area.link} className="mt-4 inline-block text-red-600 font-medium underline">
                {area.linkLabel}
              </Link>
            )}
          </div>
        ))}
      </section>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4">
        {loading ? (
      <div className="py-20 flex items-center justify-center" role="status">
        <div className="text-center">
          {/* Animated Loader */}
          <div className="relative">
            <div className="w-20 h-20 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Wrench className="w-8 h-8 text-red-600 animate-pulse" />
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="mt-4 text-gray-600 font-medium"
          >
            Loading our services...
          </motion.p>
        </div>
      </div>
        ) : services.length > 0 ? (
          <>
            {/* Header with count */}
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
                <p className="text-gray-500 mt-1">Choose from our range of professional services</p>
              </div>
              <div className="bg-red-50 px-4 py-2 rounded-lg">
                <span className="text-red-600 font-semibold">{services.length} Services</span>
              </div>
            </div>

            {/* Services Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {services.map((service, index) => {
                // const priceNum = parseFloat(service.price) || 0;
                
                return (
                  <motion.div
                    key={service._id}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Top gradient bar */}
                    <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
                    
                    <div className="p-6">
                      {/* Icon Circle */}
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-red-600 text-3xl">
                          {/* {getServiceIcon(service.ServiceName, index)} */}
                          {service.icon }
                        </div>
                      </div>

                      {/* Service Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.ServiceName}
                      </h3>

                      <p className="text-xs font-thin text-gray-900 mb-2">
                        {service.Description}
                      </p>

                      

                      {/* Price */}
                      {/* <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-bold text-red-600">
                          £{priceNum.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500">
                          / service
                        </span>
                      </div> */}

                      {/* Divider */}
                      <div className="border-t border-gray-100 my-4"></div>

                      {/* Book Now Button */}
                      <button onClick={Book} className="w-full mt-6 bg-gray-50 hover:bg-red-600 text-gray-700 hover:text-white py-3 rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2 group-hover:shadow-lg">
                        <span>Book Now</span>
                        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        ) : (
          // Empty State
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Services Available</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We're currently updating our service catalog. Please check back later!
            </p>
          </motion.div>
        )}
      </div>
      <section className="max-w-3xl mx-auto px-4 mt-20">
        <h2 className="text-2xl font-bold text-gray-900">How our repairs work</h2>
        <ol className="mt-4 list-decimal pl-6 space-y-1 text-gray-700">
          <li>Walk in or <Link to="/book" className="text-red-600 underline">book online</Link>.</li>
          <li>Free diagnosis: we test your device and explain the fault.</li>
          <li>Upfront quote: you approve the price before any work starts.</li>
          <li>Repair: most phone repairs take 30–60 minutes and most laptop repairs are same-day.</li>
          <li>Collection: every repair is covered by our warranty on parts and workmanship.</li>
        </ol>
      </section>
      <FaqSection faqs={serviceFaqs} className="mt-16" />
        <div className="mt-16">
        <Footer />
        </div>
    </div>
  );
}