import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageByline from "@/components/PageByline";
import FaqSection from "@/components/FaqSection";
import { accessoryFaqs } from "@/seo/faqs";
import { Link } from "react-router-dom";
import { SITE_URL } from "@/seo/site";
import { useCart } from "@/contexts/CartContext";
import AddToCartModal from "@/components/AddToCartModal";
import { showErrorToast } from "@/lib/toast";

const categoryColors = {
  charger: "bg-yellow-500/10 text-yellow-600",
  cable: "bg-blue-500/10 text-blue-600",
  earphones: "bg-pink-500/10 text-pink-600",
  airpods: "bg-purple-500/10 text-purple-600",
  cover: "bg-green-500/10 text-green-600",
  protector: "bg-cyan-500/10 text-cyan-600",
  battery: "bg-red-500/10 text-red-600",
  speaker: "bg-orange-500/10 text-orange-600",
  adapter: "bg-indigo-500/10 text-indigo-600",
  other: "bg-gray-500/10 text-gray-600",
};

export default function AccessoriesPage() {
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getAccessories`);
        // console.log("Accessories Data:", response.data);

        // ✅ Correct place of array
        const accessoriesArray = response.data.message;

        setItems(Array.isArray(accessoriesArray) ? accessoriesArray : []);
      } catch (error: any) {
        // console.log("Error:", error.response?.data || error.message);
        showErrorToast("Failed to load accessories!");
      } finally {
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);



  // Product structured data for the accessories actually loaded from the API.
  useEffect(() => {
    if (!items.length) return;
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "ld-products";
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": items.slice(0, 50).map((item) => ({
        "@type": "Product",
        name: item.name,
        description: item.description || undefined,
        image: item.images?.[0] || undefined,
        category: item.category || undefined,
        sku: item._id,
        offers: {
          "@type": "Offer",
          price: item.discountPrice > 0 ? item.discountPrice : item.price,
          priceCurrency: "GBP",
          url: `${SITE_URL}/accessories`,
          seller: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    }).replace(/</g, "\\u003c");
    document.head.appendChild(el);
    return () => el.remove();
  }, [items]);

  return (
    <>
    <div className="min-h-screen pt-28 px-4 lg:px-12 bg-gradient-to-b from-background to-muted/30">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">Phone &amp; Laptop Accessories on Tottenham Court Road</h1>
        <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
          TechOutlet's electronics store at 260 Tottenham Court Road, London stocks quality chargers, cables,
          adapters, earphones, cases and screen protectors. Add items to your cart online or visit the shop, open
          every day from 10:00 to 19:00.
        </p>
        <PageByline className="mt-2" />
      </motion.div>

      {loading && (
        <div className="text-center py-20 text-lg font-semibold">
          Loading accessories...
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-2">
        {items.map((item, i) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-2xl bg-card border border-border shadow-md hover:shadow-xl overflow-hidden flex flex-col"
          >
            <div className="h-52 bg-muted overflow-hidden">
              <img
                src={item.images?.[0]}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-3 flex flex-col gap-2 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full capitalize ${categoryColors[item.category]}`}
                >
                  {item.category}
                </span>
              </div>

              <p className="text-[11px] text-muted-foreground line-clamp-1">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  {item.discountPrice > 0 ? (
                    <>
                      <span className="text-lg font-bold text-primary">
                        £{item.discountPrice}
                      </span>
                      <span className="text-xs line-through text-muted-foreground">
                        £{item.price}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold">£{item.price}</span>
                  )}
                </div>

                {item.warrantyDays > 0 && (
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <ShieldCheck className="w-3 h-3" /> {item.warrantyDays}-day warranty
                  </span>
                )}
              </div>

              <div className="flex gap-2 mt-2">
                <Button
                  className="flex-1 rounded-full"
                  onClick={() => setSelectedItem(item)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add To Cart
                </Button>

                {/* <Button variant="secondary" className="flex-1 rounded-full">
                  Buy Now
                </Button> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <AddToCartModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

      <section className="max-w-4xl mx-auto mt-16 mb-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-foreground">What we stock</h2>
          <ul className="mt-4 list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Fast chargers and power adapters for iPhone, Samsung and laptops</li>
            <li>USB-C, Lightning and laptop charging cables</li>
            <li>Earphones and headphones</li>
            <li>Phone cases and screen protectors</li>
            <li>Power banks with honest mAh ratings</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Not sure what fits your device?</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            If you're not sure which charger, cable or adapter fits, bring your phone or laptop into the shop and
            ask us. If it still won't charge with a new cable, the fault may be the charging port; see our{" "}
            <Link to="/phone-repair" className="text-red-600 underline">phone repair</Link> page.
          </p>
        </div>
      </section>
      <FaqSection faqs={accessoryFaqs} className="mb-20" />
    </div>
    <Footer />
    </>
  );
}

