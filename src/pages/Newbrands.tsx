import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { motion, Variants } from "framer-motion";
import { Package, Smartphone, Star, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageByline from "@/components/PageByline";
import FaqSection from "@/components/FaqSection";
import { brandFaqs } from "@/seo/faqs";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/seo/site";

const phoneBrands = ["Apple iPhone and iPad", "Samsung Galaxy", "Google Pixel", "OnePlus", "Xiaomi", "Oppo", "Huawei"];
const laptopBrands = ["Apple MacBook Air and MacBook Pro", "HP", "Dell", "Lenovo", "ASUS", "Acer"];

interface BrandDetail {
  _id: string;
  brand: string;
  description: string;
  image: string;
  createdAt: string;
}

export default function Newbrands() {
  const [brands, setBrands] = useState<BrandDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<BrandDetail | null>(null);

  // Fetch all brand details
  const fetchBrandDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/getBrandDetails`);
      setBrands(res.data.message);
    } catch (error) {
      console.error("Failed to fetch brand details", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrandDetails();
  }, []);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Phone &amp; Laptop Brands We Repair</h1>
          <p className="text-xl text-[#6588BB] max-w-3xl mx-auto">
            TechOutlet repairs phones, tablets and laptops from every major brand at 260 Tottenham Court Road,
            London, including Apple, Samsung, Google Pixel, OnePlus, Xiaomi, HP, Dell and Lenovo.
          </p>
          <PageByline className="mt-3" />
        </div>
      </div>

      {/* Brands Grid Section */}
      <div className="max-w-7xl mx-auto px-4">
        {loading ? (
      <div className="py-20 flex items-center justify-center" role="status">
        <div className="text-center">
          {/* Animated Loader */}
          <div className="relative">
            <div className="w-20 h-20 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-red-600 animate-pulse" />
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="mt-4 text-gray-600 font-medium"
          >
            Loading amazing brands...
          </motion.p>
        </div>
      </div>
        ) : brands.length > 0 ? (
          <>
            {/* Brands Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {brands.map((brand) => (
                <motion.div
                  key={brand._id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedBrand(selectedBrand?._id === brand._id ? null : brand)}
                >
                  {/* Image Container */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 p-6 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={brand.image}
                      alt={brand.brand}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-300"></div>
                    
                    {/* Brand Icon Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                      <Smartphone className="w-4 h-4 text-red-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {brand.brand}
                      </h3>
                      <ChevronRight className={`w-5 h-5 text-red-600 transition-transform duration-300 ${
                        selectedBrand?._id === brand._id ? 'rotate-90' : ''
                      }`} />
                    </div>
                    
                    <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                      selectedBrand?._id === brand._id ? '' : 'line-clamp-2'
                    }`}>
                      {brand.description}
                    </p>

                    {/* View Details Button */}
                    <button 
                      className="mt-4 text-red-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBrand(selectedBrand?._id === brand._id ? null : brand);
                      }}
                    >
                      {selectedBrand?._id === brand._id ? 'Show less' : 'Read more'}
                      <ChevronRight size={16} className={`transition-transform duration-300 ${
                        selectedBrand?._id === brand._id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Selected Brand Detail Modal (Optional - if you want a modal view) */}
            {selectedBrand && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 bg-red-50 rounded-2xl p-8 border border-red-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-xl p-2 shadow">
                    <img 
                      src={selectedBrand.image} 
                      alt={selectedBrand.brand}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedBrand.brand}</h2>
                    <p className="text-sm text-gray-500">Brand Details</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {selectedBrand.description}
                </p>
              </motion.div>
            )}
          </>
        ) : (
          // Empty State
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Brands Available</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We're currently updating our brand catalog. Please check back later for exciting new partnerships!
            </p>
          </motion.div>
        )}
      </div>
      <section className="max-w-5xl mx-auto px-4 mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Phone brands we repair</h2>
          <ul className="mt-4 list-disc pl-6 space-y-1 text-gray-700">
            {phoneBrands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600">
            Most phone screen, battery and charging port repairs take 30 to 60 minutes.{" "}
            <Link to="/phone-repair" className="text-red-600 underline">See phone repairs</Link>.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Laptop brands we repair</h2>
          <ul className="mt-4 list-disc pl-6 space-y-1 text-gray-700">
            {laptopBrands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600">
            Most laptop repairs are completed the same day, with a free diagnosis first.{" "}
            <Link to="/laptop" className="text-red-600 underline">See laptop repairs</Link>.
          </p>
        </div>
        <p className="md:col-span-2 text-gray-600">
          Don't see your brand? We might need to source parts for less common models, but we don't turn people away
          based on brand. Call us on <a href={BUSINESS.telephoneHref} className="text-red-600 underline">{BUSINESS.telephoneDisplay}</a>{" "}
          or <Link to="/book" className="text-red-600 underline">book a repair online</Link>.
        </p>
      </section>

      <FaqSection faqs={brandFaqs} className="mt-16" />

      <div className="mt-16">
      <Footer />
      </div>
    </div>
  );
}