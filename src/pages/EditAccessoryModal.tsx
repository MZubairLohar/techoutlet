// import { showSuccessToast } from "@/lib/toast";
// import { useState } from "react";

// export default function EditAccessoryModal({ item, onClose }: any) {
//   const [form, setForm] = useState({ ...item });

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target;

//     setForm((prev: any) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = () => {
//     // console.log("Updated Data:", form);
//     showSuccessToast("Accessory updated successfully!");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//       <div className="bg-white w-[700px] max-h-[90vh] overflow-y-auto p-6 rounded-xl">
//         <h2 className="text-2xl font-bold mb-4">Edit Accessory</h2>

//         <div className="grid grid-cols-2 gap-4">
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Name"
//             className="border p-2 rounded"
//           />

//           <input
//             name="brand"
//             value={form.brand}
//             onChange={handleChange}
//             placeholder="Brand"
//             className="border p-2 rounded"
//           />

//           <select
//             name="category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           >
//             <option>charger</option>
//             <option>cable</option>
//             <option>earphones</option>
//             <option>airpods</option>
//             <option>cover</option>
//             <option>protector</option>
//             <option>battery</option>
//             <option>speaker</option>
//             <option>adapter</option>
//             <option>other</option>
//           </select>

//           <select
//             name="condition"
//             value={form.condition}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           >
//             <option>original</option>
//             <option>copy</option>
//             <option>refurbished</option>
//           </select>

//           <input
//             name="price"
//             value={form.price}
//             onChange={handleChange}
//             placeholder="Price"
//             className="border p-2 rounded"
//           />

//           <input
//             name="discountPrice"
//             value={form.discountPrice}
//             onChange={handleChange}
//             placeholder="Discount Price"
//             className="border p-2 rounded"
//           />

//           <input
//             name="stock"
//             value={form.stock}
//             onChange={handleChange}
//             placeholder="Stock"
//             className="border p-2 rounded"
//           />

//           <input
//             name="warrantyDays"
//             value={form.warrantyDays}
//             onChange={handleChange}
//             placeholder="Warranty Days"
//             className="border p-2 rounded"
//           />
//         </div>

//         <textarea
//           name="description"
//           value={form.description}
//           onChange={handleChange}
//           className="border p-2 rounded w-full mt-4"
//           placeholder="Description"
//         />

//         <div className="flex items-center gap-4 mt-4">
//           <label>
//             <input
//               type="checkbox"
//               name="isAvailable"
//               checked={form.isAvailable}
//               onChange={handleChange}
//             />{" "}
//             Available
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="isFeatured"
//               checked={form.isFeatured}
//               onChange={handleChange}
//             />{" "}
//             Featured
//           </label>
//         </div>

//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 rounded"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Update
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }









import { showSuccessToast } from "@/lib/toast";
import { useState, ChangeEvent } from "react";
import { 
  X, 
  Package, 
  Tag, 
  DollarSign, 
  Layers,
  Shield,
  CheckCircle,
  Smartphone,
  Save
} from "lucide-react";

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
  description: string;
  isAvailable: boolean;
  isFeatured: boolean;
  images?: string[];
}

interface Props {
  item: Accessory;
  onClose: () => void;
  onUpdate?: (updatedItem: Accessory) => void;
}

export default function EditAccessoryModal({ item, onClose, onUpdate }: Props) {
  const [form, setForm] = useState<Accessory>({ ...item });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      showSuccessToast("Accessory updated successfully!");
      if (onUpdate) {
        onUpdate(form);
      }
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl mt-14 rounded-xl shadow-2xl relative overflow-hidden">
        
        {/* Header with Red Theme */}
        <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Package className="text-white" size={20} />
            <h2 className="text-xl font-semibold text-white">Edit Accessory</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-red-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 max-h-[calc(90vh-80px)] overflow-y-auto">
          
          {/* Current Image Preview */}
          {form.images && form.images[0] && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Image
              </label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-lg border-2 border-gray-200 overflow-hidden bg-gray-50">
                  <img
                    src={form.images[0]}
                    alt={form.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Image cannot be edited in this demo
                </p>
              </div>
            </div>
          )}

          {/* Basic Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Accessory Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Accessory Name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand <span className="text-red-500">*</span>
              </label>
              <input
                name="brand"
                value={form.brand}
                onChange={handleChange}
                placeholder="Brand"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              />
            </div>
          </div>

          {/* Category & Condition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select 
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition bg-white"
              >
                <option value="charger">🔋 Charger</option>
                <option value="cable">🔌 Cable</option>
                <option value="earphones">🎧 Earphones</option>
                <option value="airpods">🎵 Airpods</option>
                <option value="cover">📱 Cover</option>
                <option value="protector">🛡️ Protector</option>
                <option value="battery">🔋 Battery</option>
                <option value="speaker">🔊 Speaker</option>
                <option value="adapter">⚡ Adapter</option>
                <option value="other">📦 Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Condition <span className="text-red-500">*</span>
              </label>
              <select 
                name="condition"
                value={form.condition}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition bg-white"
              >
                <option value="original">✨ Original</option>
                <option value="copy">📋 Copy</option>
                <option value="refurbished">🔄 Refurbished</option>
              </select>
            </div>
          </div>

          {/* Compatible Models (if exists) */}
          {/* {form.compatibleModels && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Compatible Models
              </label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  name="compatibleModels"
                  value={Array.isArray(form.compatibleModels) ? form.compatibleModels.join(', ') : form.compatibleModels}
                  onChange={handleChange}
                  placeholder="iPhone 12, Samsung S21, etc."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>
            </div>
          )} */}

          {/* Price Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (Rs) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Discount Price
              </label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="discountPrice"
                  value={form.discountPrice}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Layers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>
            </div>
          </div>

          {/* Warranty Days */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Warranty Days
            </label>
            <div className="relative">
              <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="number"
                name="warrantyDays"
                value={form.warrantyDays}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter detailed description..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition resize-none"
            />
          </div>

          {/* Status Checkboxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="isAvailable"
                    checked={form.isAvailable}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded transition ${
                    form.isAvailable 
                      ? 'bg-green-600 border-green-600' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {form.isAvailable && (
                      <CheckCircle className="text-white w-4 h-4" />
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700 flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${form.isAvailable ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  Available in Stock
                </span>
              </label>
            </div>

            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    checked={form.isFeatured}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded transition ${
                    form.isFeatured 
                      ? 'bg-red-600 border-red-600' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {form.isFeatured && (
                      <CheckCircle className="text-white w-4 h-4" />
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700 flex items-center gap-1">
                  <Tag size={16} className={form.isFeatured ? "text-red-600" : "text-gray-300"} />
                  Featured Product
                </span>
              </label>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg transition flex items-center gap-2 min-w-[120px] justify-center ${
                !loading
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Updating...
                </>
              ) : (
                <>
                  <Save size={16} />
                  Update
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}