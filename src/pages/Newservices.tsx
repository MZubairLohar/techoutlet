import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { motion, Variants } from "framer-motion";
import { Wrench, PoundSterling, Smartphone, Battery, Shield, Cpu, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Service {
  _id: string;
  ServiceName: string;
  price: string;
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
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
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
      {/* Hero Section */}
      <div className="text-[#0F1729] py-28 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Repair Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6588BB] max-w-2xl mx-auto"
          >
            Professional repair services at competitive prices. Quality work guaranteed.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4">
        {services.length > 0 ? (
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
                const priceNum = parseFloat(service.price) || 0;
                
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
                      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-red-600">
                          {getServiceIcon(service.ServiceName, index)}
                        </div>
                      </div>

                      {/* Service Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.ServiceName}
                      </h3>

                      {/* Price */}
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-bold text-red-600">
                          £{priceNum.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500">
                          / service
                        </span>
                      </div>

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
        <div className="mt-16">
        <Footer />
        </div>
    </div>
  );
}