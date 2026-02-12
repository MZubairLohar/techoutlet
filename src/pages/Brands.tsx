// import { useState, ChangeEvent, FormEvent } from "react";
// import axios from "axios";
// import { BASE_URL } from "@/Base_URL/Base_URL";
// import { Button } from "@/components/ui/button";
// import BrandsFormModal from "@/components/BrandsFormModal";

// interface Model {
//   name: string;
//   image?: File;
// }

// export default function Brands() {
//   const [brand, setBrand] = useState("");
//   const [numModels, setNumModels] = useState(0);
//   const [models, setModels] = useState<Model[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => setBrand(e.target.value);

//   const handleNumModelsChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value) || 0;
//     setNumModels(value);

//     const newModels = [...models];
//     while (newModels.length < value) newModels.push({ name: "" });
//     while (newModels.length > value) newModels.pop();
//     setModels(newModels);
//   };

//   const handleModelNameChange = (index: number, value: string) => {
//     const updated = [...models];
//     updated[index].name = value;
//     setModels(updated);
//   };

//   const handleModelImageChange = (index: number, file: File | null) => {
//     if (!file) return;
//     const updated = [...models];
//     updated[index].image = file;
//     setModels(updated);
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("brand", brand);

//       // models as JSON
//       formData.append("models", JSON.stringify(models.map(m => ({ name: m.name }))));

//       // images
//       models.forEach((m) => {
//         if (m.image) formData.append("images", m.image); // key = "images"
//       });

//       const res = await axios.post(`${BASE_URL}/create`, formData);

//       alert("Brand created successfully ✅");
//       setBrand("");
//       setNumModels(0);
//       setModels([]);
//     } catch (error: any) {
//       alert(error?.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white p-8">
//       <h1 className="text-3xl font-bold text-center mb-6 text-black">Create Brand</h1>

//       <div className="flex justify-center">
//       <form onSubmit={handleSubmit} className="bg-gray-50 w-[60%] shadow-md rounded-xl p-6 flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Brand Name"
//           value={brand}
//           onChange={handleBrandChange}
//           required
//           className="input"
//         />

//         <input
//           type="number"
//           placeholder="Number of Models"
//           value={numModels > 0 ? numModels : ""}
//           onChange={handleNumModelsChange}
//           min={0}
//           className="input"
//         />

//         {models.map((m, i) => (
//           <div key={i} className="flex gap-2 items-center">
//             <input
//               type="text"
//               placeholder={`Model ${i + 1} Name`}
//               value={m.name}
//               onChange={(e) => handleModelNameChange(i, e.target.value)}
//               required
//               className="input flex-1"
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleModelImageChange(i, e.target.files ? e.target.files[0] : null)}
//               required
//             />
//           </div>
//         ))}

//         <Button type="submit" disabled={loading || !brand || models.some(m => !m.name || !m.image)}>
//           {loading ? "Creating..." : "Create Brand"}
//         </Button>
//       </form>
//       </div>

//       <style>{`
//         .input {
//           padding: 10px;
//           border-radius: 8px;
//           border: 1px solid #90cdf4;
//           outline: none;
//           width: 100%;
//         }
//         .input:focus {
//           border-color: #0284c7;
//           box-shadow: 0 0 0 2px rgba(2,132,199,0.2);
//         }
//       `}</style>
//     </div>
//   );
// }

import BrandsFormModal from "@/components/BrandsFormModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { Pencil } from "lucide-react";
import { showErrorToast, showSuccessToast } from "@/lib/toast";

interface Model {
  name: string;
  image: string;
  isAvailable: boolean;
}

export default function Brands() {
  const [openBrand, setOpenBrand] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [brands, setBrands] = useState<any[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [editModal, setEditModal] = useState(false);
  const [editModelName, setEditModelName] = useState("");
  const [editImage, setEditImage] = useState<File | null>(null);
  const [currentModel, setCurrentModel] = useState("");

  const openEditModal = (modelName: string) => {
    setCurrentModel(modelName);
    setEditModelName(modelName);
    setEditModal(true);
  };

  const updateModel = async () => {
    const formData = new FormData();
    formData.append("newModelName", editModelName);
    if (editImage) formData.append("image", editImage);

    await axios.patch(
      `${BASE_URL}/edit/${selectedBrand}/${currentModel}`,
      formData,
    );

    // Refresh models
    const res = await axios.get(`${BASE_URL}/models/${selectedBrand}`);
    setModels(res.data.message);
    showSuccessToast("Model updated successfully!");
    setEditModal(false);
  };

  // ✅ Get all brands
  useEffect(() => {
    axios
      .get(`${BASE_URL}/brands`)
      .then((res) => {
        setBrands(res.data.message); // ["samsung","apple"]
      })
      // .catch((err) => console.log(err));
  }, []);

  // ✅ Get models of selected brand
  useEffect(() => {
    if (!selectedBrand) return;

    axios
      .get(`${BASE_URL}/models/${selectedBrand}`)
      .then((res) => {
        setModels(res.data.message);
      })
      // .catch((err) => console.log(err));
  }, [selectedBrand]);

  const deleteModel = async (brand: string, modelName: string) => {
    try {
      await axios.delete(`${BASE_URL}/delete/${brand}/${modelName}`);

      // UI se bhi remove karo without refresh
      setModels((prev) => prev.filter((m) => m.name !== modelName));
      showSuccessToast("Model deleted successfully!");
    } catch (error) {
      // console.error("Delete error", error);
      showErrorToast("Failed to delete model!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Brands Management</h1>
        <button
          onClick={() => setOpenBrand(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md"
        >
          Create Brand
        </button>
      </div>

      {/* Brands List */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {brands.map((brand, index) => (
          <div
            key={index}
            onClick={() => setSelectedBrand(brand.brand)}
            className={`cursor-pointer border rounded-lg p-4 text-center font-semibold shadow-sm transition 
      ${
        selectedBrand === brand.brand
          ? "bg-blue-500 text-white"
          : "bg-white hover:bg-blue-100"
      }`}
          >
            {brand.brand.toUpperCase()}
          </div>
        ))}
      </div>

      {/* Models Section */}
      {selectedBrand && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Models of {selectedBrand.toUpperCase()}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {models.map((model) => (
              <div
                key={model.name}
                className="border rounded-xl p-4 shadow-md relative bg-white"
              >
                <img
                  src={model.image}
                  alt={model.name}
                  className="h-28 w-full object-contain mb-3"
                />

                <h3 className="text-center font-semibold">{model.name}</h3>

                {/* Delete Icon */}
                <button
                  onClick={() => openEditModal(model.name)}
                  className="absolute top-2 left-2 text-blue-500"
                >
                  <Pencil size={18} />
                </button>

                <button
                  onClick={() => deleteModel(selectedBrand, model.name)}
                  className="absolute top-2 right-2 text-red-500"
                >
                  🗑️
                </button>

                {editModal && (
                  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-[400px]">
                      <h2 className="text-xl font-bold mb-4">Edit Model</h2>

                      <input
                        type="text"
                        value={editModelName}
                        onChange={(e) => setEditModelName(e.target.value)}
                        className="w-full border p-2 rounded mb-3"
                        placeholder="Model Name"
                      />

                      <input
                        type="file"
                        onChange={(e) =>
                          setEditImage(e.target.files?.[0] || null)
                        }
                        className="mb-4"
                      />

                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => setEditModal(false)}
                          className="px-4 py-2 bg-gray-300 rounded"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={updateModel}
                          className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      <BrandsFormModal isOpen={openBrand} onClose={() => setOpenBrand(false)} />
    </div>
  );
}
