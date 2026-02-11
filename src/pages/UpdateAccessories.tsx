import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
// import EditAccessoryModal from "./EditAccessoryModal";
import { BASE_URL } from "@/Base_URL/Base_URL";
import EditAccessoryModal from "./EditAccessoryModal";
import AccessoriesFormModal from "@/components/AccessoriesFormModal";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

export default function UpdateAccessories() {
  const [items, setItems] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BASE_URL}/getAccessories`);
      console.log(res.data.message);
      setItems(res.data.message); // your data is in message array
    };
    fetchData();
  }, []);
  const delAccessories = async (id: string) => {
      console.log("delete id", id);
    try {
      await axios.delete(`${BASE_URL}/deleteAccessory/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      alert("Error deleting accessory");
    }
 
  }
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Update Accessories</h1>
      <Button
        onClick={() => setOpen(true)}
        size="sm"
        variant="default"
        className="flex items-center gap-1"
      >
        Add new Accessory
      </Button>

      {/* <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="border rounded-xl p-4 shadow bg-white relative"
          >
            <img
              src={item.images[0]}
              className="h-40 w-full object-cover rounded-lg"
            />

            <h2 className="font-semibold mt-3">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.category}</p>

            <div className="absolute top-3 right-3 flex gap-2">
              <Pencil
                className="cursor-pointer text-blue-600"
                onClick={() => setSelected(item)}
              />
              <Trash2 className="cursor-pointer text-red-600" />
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-8 gap-8">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-white border rounded-2xl shadow hover:shadow-xl transition overflow-hidden relative"
          >
            {/* Image */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={item.images?.[0]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Edit/Delete Icons */}
            <div className="absolute top-3 right-3 flex gap-2">
              <Pencil
                size={18}
                className="cursor-pointer text-blue-600 bg-white p-1 rounded-full shadow"
                onClick={() => setSelected(item)}
              />
              <Trash2
                size={18}
                className="cursor-pointer text-red-600 bg-white p-1 rounded-full shadow"
               onClick={() => delAccessories(item._id)} 
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Name + Brand */}
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-500">Brand: {item.brand}</p>
              </div>

              {/* Category & Condition */}
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full capitalize">
                  {item.category}
                </span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full capitalize">
                  {item.condition}
                </span>
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-3">
                {item.discountPrice > 0 ? (
                  <>
                    <span className="text-lg font-bold text-green-600">
                      Rs {item.discountPrice}
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      Rs {item.price}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold">Rs {item.price}</span>
                )}
              </div>

              {/* Stock + Warranty */}
              <div className="flex justify-between text-sm text-gray-600">
                <span>Stock: {item.stock}</span>
                <span>Warranty: {item.warrantyDays}d</span>
              </div>

              {/* Availability */}
              <div className="flex gap-2 flex-wrap">
                {item.isAvailable && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Available
                  </span>
                )}
                {item.isFeatured && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <AccessoriesFormModal isOpen={open} onClose={() => setOpen(false)} />

      {selected && (
        <EditAccessoryModal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
