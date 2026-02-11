import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { motion } from "framer-motion"; 
import { ShoppingCart, ShieldCheck } from "lucide-react"; 
import { Button } from "@/components/ui/button"; 
import Navbar from "@/components/Navbar"; 
import { useCart } from "@/contexts/CartContext"; 
import AddToCartModal from "@/components/AddToCartModal";

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
      console.log("Accessories Data:", response.data);

      // ✅ Correct place of array
      const accessoriesArray = response.data.message;

      setItems(Array.isArray(accessoriesArray) ? accessoriesArray : []);
    } catch (error: any) {
      console.log("Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchAccessories();
}, []);



  return (
    <div className="min-h-screen pt-28 px-4 lg:px-12 bg-gradient-to-b from-background to-muted/30">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">Premium Mobile Accessories</h1>
        <p className="text-muted-foreground mt-3">
          High quality chargers, cables & gadgets for your device
        </p>
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
                        Rs {item.discountPrice}$
                      </span>
                      <span className="text-xs line-through text-muted-foreground">
                        Rs {item.price}$
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold">Rs {item.price}</span>
                  )}
                </div>

                {item.warrantyDays > 0 && (
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <ShieldCheck className="w-3 h-3" /> {item.warrantyDays}days
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
    </div>
  );
}

