import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";

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
        JSON.stringify(form.compatibleModels.split(","))
      );
      formData.append("condition", form.condition);
      formData.append("price", form.price.toString());
      formData.append("discountPrice", form.discountPrice.toString());
      formData.append("stock", form.stock.toString());
      formData.append("description", form.description);
      formData.append("warrantyDays", form.warrantyDays.toString());
      formData.append("isFeatured", String(form.isFeatured));

      if (form.image) formData.append("image", form.image);

      const response = await axios.post(
        `${BASE_URL}/accessories`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Accessory Created:", response.data);

      onClose();
    } catch (error: any) {
      console.log("Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl relative p-8 overflow-y-auto mt-12 max-h-[85vh]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Add New Accessory
          </h2>

          {/* Image Upload */}
          <div className="flex flex-col items-center gap-4">
            <label className="w-40 h-40 border-2 border-dashed rounded-xl flex items-center justify-center cursor-pointer overflow-hidden">
              {preview ? (
                <img src={preview} alt="preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm text-gray-500">Upload Image</span>
              )}
              <input type="file" accept="image/*" onChange={handleImage} hidden />
            </label>
          </div>

          {/* Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <input name="name" placeholder="Accessory Name" className="input" onChange={handleChange} />
            <input name="brand" placeholder="Brand" className="input" onChange={handleChange} />

            <select name="category" className="input" onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="charger">Charger</option>
              <option value="cable">Cable</option>
              <option value="earphones">Earphones</option>
              <option value="airpods">Airpods</option>
              <option value="cover">Cover</option>
              <option value="protector">Protector</option>
              <option value="battery">Battery</option>
              <option value="speaker">Speaker</option>
              <option value="adapter">Adapter</option>
              <option value="other">Other</option>
            </select>

            <input
              name="compatibleModels"
              placeholder="Compatible Models (iPhone 11, Samsung A12)"
              className="input"
              onChange={handleChange}
            />

            <select name="condition" className="input" onChange={handleChange}>
              <option value="original">Original</option>
              <option value="copy">Copy</option>
              <option value="refurbished">Refurbished</option>
            </select>

            <input type="number" name="stock" placeholder="Stock" className="input" onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" className="input" onChange={handleChange} />
            <input type="number" name="discountPrice" placeholder="Discount Price" className="input" onChange={handleChange} />
            <input type="number" name="warrantyDays" placeholder="Warranty Days" className="input" onChange={handleChange} />
          </div>

          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            className="input w-full"
            onChange={handleChange}
          />

          <label className="flex items-center gap-2">
            <input type="checkbox" name="isFeatured" onChange={handleChange} />
            Mark as Featured
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold bg-primary hover:opacity-90"
          >
            {loading ? "Creating..." : "Create Accessory"}
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
