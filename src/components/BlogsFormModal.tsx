// import axios from "axios";
// import { useState, ChangeEvent, FormEvent } from "react";
// import { BASE_URL } from "@/Base_URL/Base_URL";
// import { showErrorToast, showSuccessToast } from "@/lib/toast";

// interface FormData {
//   category: string;
//   title: string;
//   content: string;
//   author: string;
//   image: File | null;
//   verified: boolean;
// }

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function BlogsFormModal({ isOpen, onClose }: Props) {
//   const [form, setForm] = useState<FormData>({
//     category: "",
//     title: "",
//     content: "",
//     author: "",
//     image: null,
//     verified: false,
//   });

//   const [preview, setPreview] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   if (!isOpen) return null;

//   // Handle input change
//   // const handleChange = (
//   //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   // ) => {
//   //   const { name, value, type, checked } = e.target as any;
//   //   setForm({
//   //     ...form,
//   //     [name]: type === "checkbox" ? checked : value,
//   //   });
//   // };

//   const handleChange = (
//   e: React.ChangeEvent<
//     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//   >
// ) => {
//   const { name, value } = e.target;

//   setForm((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

//   // Handle image upload
//   const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setForm({ ...form, image: file });
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const isFormValid =
//     form.title && form.content && form.author && form.image;

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!isFormValid) return;

//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("category", form.category);
//       formData.append("title", form.title);
//       formData.append("content", form.content);
//       formData.append("author", form.author);
//       formData.append("verified", String(form.verified));
//     //  console.log(Object.fromEntries(formData.entries()));

//       if (form.image) formData.append("image", form.image);

//       const response = await axios.post(`${BASE_URL}/blogs`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       // console.log("Blog Created:", response.data);
//       showSuccessToast("Blog created successfully!");

//       setForm({ category: "", title: "", content: "", author: "", image: null, verified: false });
//       setPreview(null);
//       onClose();

//     } catch (error: any) {
//       // console.error("Error creating blog:", error.response?.data || error.message);
//       showErrorToast("Failed to create blog.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white w-full max-w-xl rounded-2xl mt-12 shadow-2xl relative p-8 overflow-y-auto max-h-[85vh]">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black"
//         >
//           ×
//         </button>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             Add New Blog
//           </h2>

//           {/* Image Upload */}
//           <div className="flex flex-col items-center gap-4">
//             <label className="w-40 h-40 border-2 border-dashed rounded-xl flex items-center justify-center cursor-pointer overflow-hidden">
//               {preview ? (
//                 <img
//                   src={preview}
//                   alt="preview"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <span className="text-sm text-gray-500">Upload Image</span>
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImage}
//                 hidden
//               />
//             </label>
//           </div>

//           {/* Fields */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               name="title"
//               placeholder="Blog Title"
//               className="input"
//               value={form.title}
//               onChange={handleChange}
//             />
//             <input
//               name="author"
//               placeholder="Author Name"
//               className="input"
//               value={form.author}
//               onChange={handleChange}
//             />
            
//           </div>

// <div>
//   <select
//     name="category"
//     value={form.category}
//     onChange={handleChange}
//     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//   >
//     <option value="">Select Category</option>
//     <option value="Repair Guides">Repair Guides</option>
//     <option value="Troubleshooting">Troubleshooting</option>
//     <option value="Maintenance Tips">Maintenance Tips</option>
//     <option value="Accessories">Accessories</option>
//     <option value="Tech News">Tech News</option>
//   </select>
// </div>

//           {/* Verified */}
//           {/* <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               name="verified"
//               checked={form.verified}
//               onChange={handleChange}
//               className="w-4 h-4"
//             />
//             <label>Verified</label>
//           </div> */}


//           {/* Content */}
//           <textarea
//             name="content"
//             placeholder="Enter Blog Content"
//             rows={6}
//             className="input w-full"
//             value={form.content}
//             onChange={handleChange}
//           />

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={!isFormValid || loading}
//             className={`w-full py-3 rounded-xl text-white font-semibold transition ${
//               isFormValid
//                 ? "bg-primary hover:opacity-90"
//                 : "bg-gray-400 cursor-not-allowed"
//             }`}
//           >
//             {loading ? "Creating..." : "Create Blog"}
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











import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { showErrorToast, showSuccessToast } from "@/lib/toast";
import { X, Upload, Image as ImageIcon, FileText, User, CheckCircle } from "lucide-react";

interface FormData {
  category: string;
  title: string;
  content: string;
  author: string;
  image: File | null;
  verified: boolean;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogsFormModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormData>({
    category: "",
    title: "",
    content: "",
    author: "",
    image: null,
    verified: false,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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

  // Handle image upload
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

  const isFormValid =
    form.title && form.content && form.author && form.image;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("category", form.category);
      formData.append("title", form.title);
      formData.append("content", form.content);
      formData.append("author", form.author);
      formData.append("verified", String(form.verified));

      if (form.image) formData.append("image", form.image);

      await axios.post(`${BASE_URL}/blogs`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      showSuccessToast("Blog created successfully!");

      setForm({ category: "", title: "", content: "", author: "", image: null, verified: false });
      setPreview(null);
      onClose();

    } catch (error: any) {
      showErrorToast("Failed to create blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 mt-10 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative overflow-hidden">
        
        {/* Header with Red Theme */}
        <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileText className="text-white" size={20} />
            <h2 className="text-xl font-semibold text-white">Create New Blog</h2>
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
              Featured Image <span className="text-red-500">*</span>
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
                />
              </label>
            </div>
          </div>

          {/* Title & Author Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blog Title <span className="text-red-500">*</span>
              </label>
              <input
                name="title"
                placeholder="e.g., How to Fix iPhone Screen"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                value={form.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  name="author"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  value={form.author}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Category & Verified Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition bg-white"
              >
                <option value="">Select Category</option>
                <option value="Repair Guides">🔧 Repair Guides</option>
                <option value="Troubleshooting">⚡ Troubleshooting</option>
                <option value="Maintenance Tips">🛠️ Maintenance Tips</option>
                <option value="Accessories">📱 Accessories</option>
                <option value="Tech News">📰 Tech News</option>
              </select>
            </div>
            
            {/* Verified Checkbox */}
            <div className="flex items-center h-full pt-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="verified"
                    checked={form.verified}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded transition ${
                    form.verified 
                      ? 'bg-red-600 border-red-600' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {form.verified && (
                      <CheckCircle className="text-white w-4 h-4" />
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700 flex items-center gap-1">
                  <CheckCircle size={16} className={form.verified ? "text-red-600" : "text-gray-300"} />
                  Verified Blog
                </span>
              </label>
            </div>
          </div>

          {/* Content */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blog Content <span className="text-red-500">*</span>
            </label>
            <textarea
              name="content"
              placeholder="Write your blog content here..."
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition resize-none"
              value={form.content}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1">
              {form.content.length} characters
            </p>
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
              className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg transition flex items-center gap-2 min-w-[140px] justify-center ${
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
                "Create Blog"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}