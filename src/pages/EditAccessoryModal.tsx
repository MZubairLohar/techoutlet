import { showSuccessToast } from "@/lib/toast";
import { useState } from "react";

export default function EditAccessoryModal({ item, onClose }: any) {
  const [form, setForm] = useState({ ...item });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setForm((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    // console.log("Updated Data:", form);
    showSuccessToast("Accessory updated successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[700px] max-h-[90vh] overflow-y-auto p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Edit Accessory</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 rounded"
          />

          <input
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="border p-2 rounded"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option>charger</option>
            <option>cable</option>
            <option>earphones</option>
            <option>airpods</option>
            <option>cover</option>
            <option>protector</option>
            <option>battery</option>
            <option>speaker</option>
            <option>adapter</option>
            <option>other</option>
          </select>

          <select
            name="condition"
            value={form.condition}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option>original</option>
            <option>copy</option>
            <option>refurbished</option>
          </select>

          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2 rounded"
          />

          <input
            name="discountPrice"
            value={form.discountPrice}
            onChange={handleChange}
            placeholder="Discount Price"
            className="border p-2 rounded"
          />

          <input
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border p-2 rounded"
          />

          <input
            name="warrantyDays"
            value={form.warrantyDays}
            onChange={handleChange}
            placeholder="Warranty Days"
            className="border p-2 rounded"
          />
        </div>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-4"
          placeholder="Description"
        />

        <div className="flex items-center gap-4 mt-4">
          <label>
            <input
              type="checkbox"
              name="isAvailable"
              checked={form.isAvailable}
              onChange={handleChange}
            />{" "}
            Available
          </label>

          <label>
            <input
              type="checkbox"
              name="isFeatured"
              checked={form.isFeatured}
              onChange={handleChange}
            />{" "}
            Featured
          </label>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
