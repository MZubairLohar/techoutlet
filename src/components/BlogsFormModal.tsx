import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { BASE_URL } from "@/Base_URL/Base_URL";

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

  // Handle input change
  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value, type, checked } = e.target as any;
  //   setForm({
  //     ...form,
  //     [name]: type === "checkbox" ? checked : value,
  //   });
  // };

  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  // Handle image upload
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    }
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
     console.log(Object.fromEntries(formData.entries()));

      if (form.image) formData.append("image", form.image);

      const response = await axios.post(`${BASE_URL}/blogs`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Blog Created:", response.data);
      alert("Blog created successfully!");

      setForm({ category: "", title: "", content: "", author: "", image: null, verified: false });
      setPreview(null);
      onClose();

    } catch (error: any) {
      console.error("Error creating blog:", error.response?.data || error.message);
      alert("Failed to create blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl mt-12 shadow-2xl relative p-8 overflow-y-auto max-h-[85vh]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Add New Blog
          </h2>

          {/* Image Upload */}
          <div className="flex flex-col items-center gap-4">
            <label className="w-40 h-40 border-2 border-dashed rounded-xl flex items-center justify-center cursor-pointer overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm text-gray-500">Upload Image</span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                hidden
              />
            </label>
          </div>

          {/* Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="title"
              placeholder="Blog Title"
              className="input"
              value={form.title}
              onChange={handleChange}
            />
            <input
              name="author"
              placeholder="Author Name"
              className="input"
              value={form.author}
              onChange={handleChange}
            />
            
          </div>

<div>
  <select
    name="category"
    value={form.category}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
  >
    <option value="">Select Category</option>
    <option value="Repair Guides">Repair Guides</option>
    <option value="Troubleshooting">Troubleshooting</option>
    <option value="Maintenance Tips">Maintenance Tips</option>
    <option value="Accessories">Accessories</option>
    <option value="Tech News">Tech News</option>
  </select>
</div>

          {/* Verified */}
          {/* <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="verified"
              checked={form.verified}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label>Verified</label>
          </div> */}


          {/* Content */}
          <textarea
            name="content"
            placeholder="Enter Blog Content"
            rows={6}
            className="input w-full"
            value={form.content}
            onChange={handleChange}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded-xl text-white font-semibold transition ${
              isFormValid
                ? "bg-primary hover:opacity-90"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? "Creating..." : "Create Blog"}
          </button>
        </form>

        <style>{`
          .input {
            padding: 12px;
            border-radius: 10px;
            border: 1px solid #ddd;
            outline: none;
            width: 100%;
            transition: 0.2s;
          }
          .input:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99,102,241,0.2);
          }
        `}</style>
      </div>
    </div>
  );
}
