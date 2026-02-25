// import { useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "@/Base_URL/Base_URL";
// import { showErrorToast,showSuccessToast } from "@/lib/toast";
// import { X, Upload, Image as ImageIcon, Package } from "lucide-react";

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
//   brand: string;
//   onModelAdded: () => void;
// }

// export default function AddModelModal({ isOpen, onClose, brand, onModelAdded }: Props) {
//   const [modelName, setModelName] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   if (!isOpen) return null;

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const removeImage = () => {
//     setImage(null);
//     setPreview(null);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!modelName.trim()) {
//       showErrorToast("Model name is required");
//       return;
//     }

//     if (!image) {
//       showErrorToast("Model image is required");
//       return;
//     }

//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("modelName", modelName);
//       formData.append("image", image);

//       await axios.post(`${BASE_URL}/add-model/${brand}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       showSuccessToast("Model added successfully!");
      
//       // Reset form
//       setModelName("");
//       setImage(null);
//       setPreview(null);
      
//       // Refresh models list
//       onModelAdded();
      
//       // Close modal
//       onClose();
//     } catch (error: any) {
//       const errorMessage = error.response?.data?.message || "Failed to add model";
//       showErrorToast(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white w-full max-w-md rounded-xl shadow-2xl relative overflow-hidden">
        
//         {/* Modal Header with Red Theme */}
//         <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <Package className="text-white" size={20} />
//             <h2 className="text-xl font-semibold text-white">
//               Add Model to {brand.toUpperCase()}
//             </h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-red-700"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         {/* Modal Body */}
//         <form onSubmit={handleSubmit} className="p-6">
          
//           {/* Image Upload Section */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Model Image <span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center gap-4">
//               {/* Image Preview */}
//               <div className="relative">
//                 <div className="w-24 h-24 rounded-lg border-2 border-gray-200 overflow-hidden bg-gray-50">
//                   {preview ? (
//                     <img
//                       src={preview}
//                       alt="Preview"
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex flex-col items-center justify-center">
//                       <ImageIcon className="text-gray-300" size={32} />
//                       <span className="text-xs text-gray-400 mt-1">No image</span>
//                     </div>
//                   )}
//                 </div>
//                 {preview && (
//                   <button
//                     type="button"
//                     onClick={removeImage}
//                     className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-sm"
//                   >
//                     <X size={14} />
//                   </button>
//                 )}
//               </div>

//               {/* Upload Button */}
//               <label className="flex-1 cursor-pointer">
//                 <div className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-red-400 transition bg-gray-50">
//                   <Upload size={20} className="text-gray-400" />
//                   <span className="text-sm text-gray-600">
//                     {image ? image.name : "Click to upload"}
//                   </span>
//                 </div>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   hidden
//                   required
//                 />
//               </label>
//             </div>
//           </div>

//           {/* Model Name Field */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Model Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               value={modelName}
//               onChange={(e) => setModelName(e.target.value)}
//               placeholder="e.g., iPhone 14 Pro Max"
//               className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
//               required
//             />
//           </div>

//           {/* Preview Section */}
//           {modelName && preview && (
//             <div className="mb-6 bg-red-50 rounded-lg p-4 border border-red-100">
//               <p className="text-xs text-red-600 font-medium mb-2">Preview</p>
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 rounded-lg border border-red-200 overflow-hidden bg-white">
//                   <img src={preview} alt={modelName} className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-900">{modelName}</p>
//                   <p className="text-xs text-gray-500">Brand: {brand}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Form Actions */}
//           <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={loading}
//               className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg transition flex items-center gap-2 min-w-[120px] justify-center ${
//                 !loading
//                   ? "bg-red-600 hover:bg-red-700"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//             >
//               {loading ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   Adding...
//                 </>
//               ) : (
//                 "Add Model"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { showErrorToast,showSuccessToast } from "@/lib/toast";
import { X, Upload, Image as ImageIcon, Package } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  brand: string;
  onModelAdded: () => void;
}

export default function AddModelModal({ isOpen, onClose, brand, onModelAdded }: Props) {
  const [modelName, setModelName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (optional - 5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        showErrorToast("Image size should be less than 5MB");
        return;
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        showErrorToast("Please upload an image file");
        return;
      }
      
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!modelName.trim()) {
      showErrorToast("Model name is required");
      return;
    }

    if (!image) {
      showErrorToast("Model image is required");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      
      // Make sure the field name matches what backend expects
      formData.append("modelName", modelName.trim());
      formData.append("image", image);

      // Log what we're sending (for debugging)
      console.log("Sending to:", `${BASE_URL}/add-model/${brand}`);
      console.log("Model name:", modelName);
      console.log("Image:", image.name, image.type, image.size);

      const response = await axios.post(`${BASE_URL}/add-model/${brand}`, formData, {
        headers: { 
          "Content-Type": "multipart/form-data" 
        }
      });

      console.log("Response:", response.data);
      showSuccessToast("Model added successfully!");
      
      // Reset form
      setModelName("");
      setImage(null);
      setPreview(null);
      
      // Refresh models list
      onModelAdded();
      
      // Close modal
      onClose();
      
    } catch (error: any) {
      // Better error logging
      console.error("Full error:", error);
      console.error("Error response:", error.response?.data);
      console.error("Error status:", error.response?.status);
      
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          "Failed to add model";
      showErrorToast(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl relative overflow-hidden">
        
        {/* Modal Header with Red Theme */}
        <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Package className="text-white" size={20} />
            <h2 className="text-xl font-semibold text-white">
              Add Model to {brand.toUpperCase()}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-red-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6">
          
          {/* Image Upload Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Model Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              {/* Image Preview */}
              <div className="relative">
                <div className="w-24 h-24 rounded-lg border-2 border-gray-200 overflow-hidden bg-gray-50">
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
                  <span className="text-sm text-gray-600 truncate">
                    {image ? image.name : "Click to upload"}
                  </span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                  required
                />
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Supported formats: JPG, PNG, GIF (max 5MB)
            </p>
          </div>

          {/* Model Name Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              placeholder="e.g., iPhone 14 Pro Max"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              required
            />
          </div>

          {/* Preview Section */}
          {modelName && preview && (
            <div className="mb-6 bg-red-50 rounded-lg p-4 border border-red-100">
              <p className="text-xs text-red-600 font-medium mb-2">Preview</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg border border-red-200 overflow-hidden bg-white">
                  <img src={preview} alt={modelName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{modelName}</p>
                  <p className="text-xs text-gray-500">Brand: {brand}</p>
                </div>
              </div>
            </div>
          )}

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
                  Adding...
                </>
              ) : (
                "Add Model"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}