// import { useState, ChangeEvent, FormEvent } from "react";
// import axios from "axios";
// import { BASE_URL } from "@/Base_URL/Base_URL";
// import { showErrorToast, showSuccessToast } from "@/lib/toast";

// interface FormDataType {
//   name: string;
//   category: string;
//   brand: string;
//   compatibleModels: string;
//   condition: string;
//   price: number;
//   discountPrice: number;
//   stock: number;
//   description: string;
//   warrantyDays: number;
//   isFeatured: boolean;
//   image: File | null;
// }

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function AccessoriesFormModal({ isOpen, onClose }: Props) {
//   const [form, setForm] = useState<FormDataType>({
//     name: "",
//     category: "",
//     brand: "",
//     compatibleModels: "",
//     condition: "original",
//     price: 0,
//     discountPrice: 0,
//     stock: 0,
//     description: "",
//     warrantyDays: 0,
//     isFeatured: false,
//     image: null,
//   });

//   const [preview, setPreview] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   if (!isOpen) return null;

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;

//     setForm({
//       ...form,
//       [name]:
//         type === "number"
//           ? Number(value)
//           : type === "checkbox"
//           ? (e.target as HTMLInputElement).checked
//           : value,
//     });
//   };

//   const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setForm({ ...form, image: file });
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const formData = new FormData();

//       formData.append("name", form.name);
//       formData.append("category", form.category);
//       formData.append("brand", form.brand);
//       formData.append(
//         "compatibleModels",
//         JSON.stringify(form.compatibleModels.split(","))
//       );
//       formData.append("condition", form.condition);
//       formData.append("price", form.price.toString());
//       formData.append("discountPrice", form.discountPrice.toString());
//       formData.append("stock", form.stock.toString());
//       formData.append("description", form.description);
//       formData.append("warrantyDays", form.warrantyDays.toString());
//       formData.append("isFeatured", String(form.isFeatured));

//       if (form.image) formData.append("image", form.image);

//       const response = await axios.post(
//         `${BASE_URL}/accessories`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       // console.log("Accessory Created:", response.data);
//       showSuccessToast("Accessory created successfully!");

//       onClose();
//     } catch (error: any) {
//       // console.log("Error:", error.response?.data || error.message);
//       showErrorToast("Failed to create accessory!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl relative p-8 overflow-y-auto mt-12 max-h-[85vh]">

//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black"
//         >
//           ×
//         </button>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             Add New Accessory
//           </h2>

//           {/* Image Upload */}
//           <div className="flex flex-col items-center gap-4">
//             <label className="w-40 h-40 border-2 border-dashed rounded-xl flex items-center justify-center cursor-pointer overflow-hidden">
//               {preview ? (
//                 <img src={preview} alt="preview" className="w-full h-full object-cover" />
//               ) : (
//                 <span className="text-sm text-gray-500">Upload Image</span>
//               )}
//               <input type="file" accept="image/*" onChange={handleImage} hidden />
//             </label>
//           </div>

//           {/* Fields */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <input name="name" placeholder="Accessory Name" className="input" onChange={handleChange} />
//             <input name="brand" placeholder="Brand" className="input" onChange={handleChange} />

//             <select name="category" className="input" onChange={handleChange}>
//               <option value="">Select Category</option>
//               <option value="charger">Charger</option>
//               <option value="cable">Cable</option>
//               <option value="earphones">Earphones</option>
//               <option value="airpods">Airpods</option>
//               <option value="cover">Cover</option>
//               <option value="protector">Protector</option>
//               <option value="battery">Battery</option>
//               <option value="speaker">Speaker</option>
//               <option value="adapter">Adapter</option>
//               <option value="other">Other</option>
//             </select>

//             <input
//               name="compatibleModels"
//               placeholder="Compatible Models (iPhone 11, Samsung A12)"
//               className="input"
//               onChange={handleChange}
//             />

//             <select name="condition" className="input" onChange={handleChange}>
//               <option value="original">Original</option>
//               <option value="copy">Copy</option>
//               <option value="refurbished">Refurbished</option>
//             </select>

//             <input type="number" name="stock" placeholder="Stock" className="input" onChange={handleChange} />
//             <input type="number" name="price" placeholder="Price" className="input" onChange={handleChange} />
//             <input type="number" name="discountPrice" placeholder="Discount Price" className="input" onChange={handleChange} />
//             <input type="number" name="warrantyDays" placeholder="Warranty Days" className="input" onChange={handleChange} />
//           </div>

//           <textarea
//             name="description"
//             placeholder="Description"
//             rows={4}
//             className="input w-full"
//             onChange={handleChange}
//           />

//           <label className="flex items-center gap-2">
//             <input type="checkbox" name="isFeatured" onChange={handleChange} />
//             Mark as Featured
//           </label>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 rounded-xl text-white font-semibold bg-primary hover:opacity-90"
//           >
//             {loading ? "Creating..." : "Create Accessory"}
//           </button>
//         </form>

//         <style>{`
//           .input {
//             padding: 12px;
//             border-radius: 10px;
//             border: 1px solid #ddd;
//             outline: none;
//             width: 100%;
//             transition: 0.2s;
//           }
//           .input:focus {
//             border-color: #6366f1;
//             box-shadow: 0 0 0 2px rgba(99,102,241,0.2);
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }











import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { showErrorToast, showSuccessToast } from "@/lib/toast";
import { 
  X, 
  Upload, 
  Image as ImageIcon, 
  Package, 
  Tag, 
  DollarSign, 
  Layers,
  Shield,
  CheckCircle,
  Smartphone
} from "lucide-react";

interface FormDataType {
  name: string;
  category: string;
  brand: string;
  compatibleModels: string;
  condition: string;
  price: number;
  discountPrice: number;
  stock: number;
  description: string;
  warrantyDays: number;
  isFeatured: boolean;
  image: File | null;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessoriesFormModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormDataType>({
    name: "",
    category: "",
    brand: "",
    compatibleModels: "",
    condition: "original",
    price: 0,
    discountPrice: 0,
    stock: 0,
    description: "",
    warrantyDays: 0,
    isFeatured: false,
    image: null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setForm({
      ...form,
      [name]:
        type === "number"
          ? Number(value)
          : type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setForm({ ...form, image: null });
    setPreview(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("category", form.category);
      formData.append("brand", form.brand);
      formData.append(
        "compatibleModels",
        JSON.stringify(form.compatibleModels.split(",").map(m => m.trim()))
      );
      formData.append("condition", form.condition);
      formData.append("price", form.price.toString());
      formData.append("discountPrice", form.discountPrice.toString());
      formData.append("stock", form.stock.toString());
      formData.append("description", form.description);
      formData.append("warrantyDays", form.warrantyDays.toString());
      formData.append("isFeatured", String(form.isFeatured));

      if (form.image) formData.append("image", form.image);

      await axios.post(`${BASE_URL}/accessories`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      showSuccessToast("Accessory created successfully!");
      
      // Reset form
      setForm({
        name: "",
        category: "",
        brand: "",
        compatibleModels: "",
        condition: "original",
        price: 0,
        discountPrice: 0,
        stock: 0,
        description: "",
        warrantyDays: 0,
        isFeatured: false,
        image: null,
      });
      setPreview(null);
      onClose();
    } catch (error: any) {
      showErrorToast("Failed to create accessory!");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = 
    form.name && 
    form.category && 
    form.brand && 
    form.price > 0 && 
    form.image;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center mt-10 z-50 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative overflow-hidden">
        
        {/* Header with Red Theme */}
        <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Package className="text-white" size={20} />
            <h2 className="text-xl font-semibold text-white">Add New Accessory</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-red-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 max-h-[calc(85vh-80px)] overflow-y-auto">
          
          {/* Image Upload Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              {/* Image Preview */}
              <div className="relative">
                <div className="w-32 h-32 rounded-lg border-2 border-gray-200 overflow-hidden bg-gray-50">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <ImageIcon className="text-gray-300" size={32} />
                      <span className="text-xs text-gray-400 mt-1">No image</span>
                    </div>
                  )}
                </div>
                {preview && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-sm"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Upload Button */}
              <label className="flex-1 cursor-pointer">
                <div className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-red-400 transition bg-gray-50">
                  <Upload size={20} className="text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {form.image ? form.image.name : "Click to upload image"}
                  </span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  hidden
                  required
                />
              </label>
            </div>
          </div>

          {/* Basic Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Accessory Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                placeholder="e.g., Original iPhone Charger"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                onChange={handleChange}
                value={form.name}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand <span className="text-red-500">*</span>
              </label>
              <input
                name="brand"
                placeholder="e.g., Apple, Samsung"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                onChange={handleChange}
                value={form.brand}
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition bg-white"
                onChange={handleChange}
                value={form.category}
              >
                <option value="">Select Category</option>
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition bg-white"
                onChange={handleChange}
                value={form.condition}
              >
                <option value="original">✨ Original</option>
                <option value="copy">📋 Copy</option>
                <option value="refurbished">🔄 Refurbished</option>
              </select>
            </div>
          </div>

          {/* Compatible Models */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Compatible Models
            </label>
            <div className="relative">
              <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                name="compatibleModels"
                placeholder="iPhone 12, Samsung S21, etc. (comma separated)"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                onChange={handleChange}
                value={form.compatibleModels}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Separate multiple models with commas</p>
          </div>

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
                  placeholder="0"
                  min="0"
                  className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  onChange={handleChange}
                  value={form.price || ""}
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
                  placeholder="0"
                  min="0"
                  className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  onChange={handleChange}
                  value={form.discountPrice || ""}
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
                  placeholder="0"
                  min="0"
                  className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  onChange={handleChange}
                  value={form.stock || ""}
                />
              </div>
            </div>
          </div>

          {/* Warranty & Featured */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Warranty Days
              </label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  name="warrantyDays"
                  placeholder="0"
                  min="0"
                  className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  onChange={handleChange}
                  value={form.warrantyDays || ""}
                />
              </div>
            </div>

            <div className="flex items-center h-full pt-6">
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
                  Mark as Featured
                </span>
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter detailed description of the accessory..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition resize-none"
              onChange={handleChange}
              value={form.description}
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg transition flex items-center gap-2 min-w-[160px] justify-center ${
                isFormValid && !loading
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating...
                </>
              ) : (
                "Create Accessory"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}