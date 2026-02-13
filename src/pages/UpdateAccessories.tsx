// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Pencil, Trash2 } from "lucide-react";
// // import EditAccessoryModal from "./EditAccessoryModal";
// import { BASE_URL } from "@/Base_URL/Base_URL";
// import EditAccessoryModal from "./EditAccessoryModal";
// import AccessoriesFormModal from "@/components/AccessoriesFormModal";
// import { Button } from "@/components/ui/button";
// import { Edit } from "lucide-react";
// import { showErrorToast, showSuccessToast } from "@/lib/toast";

// export default function UpdateAccessories() {
//   const [items, setItems] = useState<any[]>([]);
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState<any | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`${BASE_URL}/getAccessories`);
//       // console.log(res.data.message);
//       setItems(res.data.message); // your data is in message array
//     };
//     fetchData();
//   }, []);
//   const delAccessories = async (id: string) => {
//     // console.log("delete id", id);
//     try {
//       await axios.delete(`${BASE_URL}/deleteAccessory/${id}`);
//       setItems(items.filter((item) => item._id !== id));
//       showSuccessToast("Accessory deleted successfully");
//     } catch (error) {
//       // alert("Error deleting accessory");
//       showErrorToast("Error deleting accessory");
//     }
//   };
//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-8">Accessories</h1>
//       <Button
//         onClick={() => setOpen(true)}
//         size="sm"
//         variant="default"
//         className="flex items-center gap-1"
//       >
//         Add new Accessory
//       </Button>
//       <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-8 gap-8">
//         {items.map((item) => (
//           <div
//             key={item._id}
//             className="bg-white border rounded-2xl shadow hover:shadow-xl transition overflow-hidden relative"
//           >
//             {/* Image */}
//             <div className="h-44 w-full overflow-hidden">
//               <img
//                 src={item.images?.[0]}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Edit/Delete Icons */}
//             <div className="absolute top-3 right-3 flex gap-2">
//               <Pencil
//                 size={18}
//                 className="cursor-pointer text-blue-600 bg-white p-1 rounded-full shadow"
//                 onClick={() => setSelected(item)}
//               />
//               <Trash2
//                 size={18}
//                 className="cursor-pointer text-red-600 bg-white p-1 rounded-full shadow"
//                 onClick={() => delAccessories(item._id)}
//               />
//             </div>

//             {/* Content */}
//             <div className="p-4 space-y-3">
//               {/* Name + Brand */}
//               <div>
//                 <h2 className="font-semibold text-lg">{item.name}</h2>
//                 <p className="text-sm text-gray-500">Brand: {item.brand}</p>
//               </div>

//               {/* Category & Condition */}
//               <div className="flex gap-2 flex-wrap">
//                 <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full capitalize">
//                   {item.category}
//                 </span>
//                 <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full capitalize">
//                   {item.condition}
//                 </span>
//               </div>

//               {/* Price Section */}
//               <div className="flex items-center gap-3">
//                 {item.discountPrice > 0 ? (
//                   <>
//                     <span className="text-lg font-bold text-green-600">
//                       Rs {item.discountPrice}
//                     </span>
//                     <span className="line-through text-gray-400 text-sm">
//                       Rs {item.price}
//                     </span>
//                   </>
//                 ) : (
//                   <span className="text-lg font-bold">Rs {item.price}</span>
//                 )}
//               </div>

//               {/* Stock + Warranty */}
//               <div className="flex justify-between text-sm text-gray-600">
//                 <span>Stock: {item.stock}</span>
//                 <span>Warranty: {item.warrantyDays}d</span>
//               </div>

//               {/* Availability */}
//               <div className="flex gap-2 flex-wrap">
//                 {item.isAvailable && (
//                   <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
//                     Available
//                   </span>
//                 )}
//                 {item.isFeatured && (
//                   <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
//                     Featured
//                   </span>
//                 )}
//               </div>

//               {/* Description */}
//               <p className="text-xs text-gray-500 line-clamp-2">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <AccessoriesFormModal isOpen={open} onClose={() => setOpen(false)} />

//       {selected && (
//         <EditAccessoryModal item={selected} onClose={() => setSelected(null)} />
//       )}
//     </div>
//   );
// }












import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, Package, Tag, DollarSign, Shield, Layers } from "lucide-react";
import { BASE_URL } from "@/Base_URL/Base_URL";
import EditAccessoryModal from "./EditAccessoryModal";
import AccessoriesFormModal from "@/components/AccessoriesFormModal";
import { Button } from "@/components/ui/button";
import { showErrorToast, showSuccessToast } from "@/lib/toast";

interface Accessory {
  _id: string;
  name: string;
  brand: string;
  category: string;
  condition: string;
  price: number;
  discountPrice: number;
  stock: number;
  warrantyDays: number;
  isAvailable: boolean;
  isFeatured: boolean;
  description: string;
  images: string[];
}

export default function UpdateAccessories() {
  const [items, setItems] = useState<Accessory[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Accessory | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    inStock: 0,
    featured: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/getAccessories`);
        const data = res.data.message;
        setItems(data);
        
        // Calculate stats
        setStats({
          total: data.length,
          inStock: data.filter((item: Accessory) => item.stock > 0).length,
          featured: data.filter((item: Accessory) => item.isFeatured).length
        });
      } catch (error) {
        showErrorToast("Failed to load accessories");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteAccessory = async (id: string) => {
    if (!confirm("Are you sure you want to delete this accessory?")) return;
    
    try {
      await axios.delete(`${BASE_URL}/deleteAccessory/${id}`);
      setItems(items.filter((item) => item._id !== id));
      showSuccessToast("Accessory deleted successfully");
    } catch (error) {
      showErrorToast("Error deleting accessory");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading accessories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Accessories Management</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your product inventory and accessories
            </p>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Package size={20} />
            Add New Accessory
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-red-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Accessories</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <Package className="text-red-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">In Stock</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.inStock}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Layers className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-purple-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Featured Items</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.featured}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Tag className="text-purple-600" size={24} />
              </div>
            </div>
          </div>

          {/* <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Value</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  Rs {items.reduce((acc, item) => acc + (item.discountPrice || item.price) * item.stock, 0).toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="text-blue-600" size={24} />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Accessories Grid */}
      {items.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gray-100">
                {item.images?.[0] ? (
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="text-gray-300" size={48} />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => setSelected(item)}
                    className="bg-white p-2 rounded-lg shadow-md hover:bg-red-50 transition text-gray-600 hover:text-red-600"
                    title="Edit accessory"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => deleteAccessory(item._id)}
                    className="bg-white p-2 rounded-lg shadow-md hover:bg-red-50 transition text-gray-600 hover:text-red-600"
                    title="Delete accessory"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {!item.isAvailable && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}
                  {item.isFeatured && (
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title & Brand */}
                <div className="mb-3">
                  <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Package size={14} />
                    {item.brand}
                  </p>
                </div>

                {/* Category & Condition Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-red-50 text-red-600 px-2.5 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                  <span className="text-xs bg-yellow-50 text-yellow-600 px-2.5 py-1 rounded-full font-medium">
                    {item.condition}
                  </span>
                </div>

                {/* Price Section */}
                <div className="mb-3">
                  {item.discountPrice > 0 ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-red-600">
                        Rs {item.discountPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        Rs {item.price.toLocaleString()}
                      </span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                        {Math.round(((item.price - item.discountPrice) / item.price) * 100)}% OFF
                      </span>
                    </div>
                  ) : (
                    <span className="text-xl font-bold text-gray-900">
                      Rs {item.price.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Stock & Warranty */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className={`w-2 h-2 rounded-full ${item.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-gray-600">Stock: {item.stock}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield size={14} className="text-gray-400" />
                    <span className="text-gray-600">Warranty: {item.warrantyDays}d</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-2 border-t border-gray-100 pt-3">
                  {item.description || "No description available"}
                </p>

                {/* Quick Actions */}
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => setSelected(item)}
                    className="text-xs text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                  >
                    View Details
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Empty State
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="flex flex-col items-center max-w-md mx-auto">
            <div className="bg-red-50 p-4 rounded-full mb-4">
              <Package className="text-red-600" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No accessories yet</h3>
            <p className="text-gray-500 mb-6">
              Start adding accessories to your inventory. They will appear here for management.
            </p>
            <Button
              onClick={() => setOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <Package size={20} />
              Add Your First Accessory
            </Button>
          </div>
        </div>
      )}

      {/* Modals */}
      <AccessoriesFormModal isOpen={open} onClose={() => setOpen(false)} />
      {selected && (
  <EditAccessoryModal 
    item={selected} 
    onClose={() => setSelected(null)}
    onUpdate={(updatedItem: any) => {
      setItems(items.map(item => 
        item._id === updatedItem._id ? updatedItem as Accessory : item
      ));
    }}
  />
)}
    </div>
  );
}