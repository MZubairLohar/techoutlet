import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { Button } from "@/components/ui/button";

interface Model {
  name: string;
  image?: File;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrandsFormModal({ isOpen, onClose }: Props) {
  const [brand, setBrand] = useState("");
  const [numModels, setNumModels] = useState(0);
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) =>
    setBrand(e.target.value);

  const handleNumModelsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setNumModels(value);

    const newModels = [...models];
    while (newModels.length < value) newModels.push({ name: "" });
    while (newModels.length > value) newModels.pop();
    setModels(newModels);
  };

  const handleModelNameChange = (index: number, value: string) => {
    const updated = [...models];
    updated[index].name = value;
    setModels(updated);
  };

  const handleModelImageChange = (index: number, file: File | null) => {
    if (!file) return;
    const updated = [...models];
    updated[index].image = file;
    setModels(updated);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("brand", brand);

      formData.append(
        "models",
        JSON.stringify(models.map((m) => ({ name: m.name })))
      );

      models.forEach((m) => {
        if (m.image) formData.append("images", m.image);
      });

      await axios.post(`${BASE_URL}/create`, formData);

      alert("Brand created successfully ✅");

      setBrand("");
      setNumModels(0);
      setModels([]);
      onClose();
    } catch (error: any) {
      alert(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 relative overflow-y-auto mt-12 max-h-[85vh]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>

        <h1 className="text-3xl font-bold text-center mb-6">Create Brand</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Brand Name"
            value={brand}
            onChange={handleBrandChange}
            required
            className="input"
          />

          <input
            type="number"
            placeholder="Number of Models"
            value={numModels > 0 ? numModels : ""}
            onChange={handleNumModelsChange}
            min={0}
            className="input"
          />

          {models.map((m, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder={`Model ${i + 1} Name`}
                value={m.name}
                onChange={(e) =>
                  handleModelNameChange(i, e.target.value)
                }
                required
                className="input flex-1"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleModelImageChange(
                    i,
                    e.target.files ? e.target.files[0] : null
                  )
                }
                required
              />
            </div>
          ))}

          <Button
            type="submit"
            disabled={
              loading ||
              !brand ||
              models.some((m) => !m.name || !m.image)
            }
          >
            {loading ? "Creating..." : "Create Brand"}
          </Button>
        </form>

        <style>{`
          .input {
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #90cdf4;
            outline: none;
            width: 100%;
          }
          .input:focus {
            border-color: #0284c7;
            box-shadow: 0 0 0 2px rgba(2,132,199,0.2);
          }
        `}</style>
      </div>
    </div>
  );
}
