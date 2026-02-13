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
import { Pencil, Trash2, Plus, Smartphone, Package } from "lucide-react";
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
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const openEditModal = (model: Model) => {
    setCurrentModel(model.name);
    setEditModelName(model.name);
    setPreviewImage(model.image);
    setEditModal(true);
  };

  const updateModel = async () => {
    const formData = new FormData();
    formData.append("newModelName", editModelName);
    if (editImage) formData.append("image", editImage);

    await axios.patch(
      `${BASE_URL}/edit/${selectedBrand}/${currentModel}`,
      formData
    );

    // Refresh models
    const res = await axios.get(`${BASE_URL}/models/${selectedBrand}`);
    setModels(res.data.message);
    showSuccessToast("Model updated successfully!");
    setEditModal(false);
    setEditImage(null);
    setPreviewImage(null);
  };

  // ✅ Get all brands
  useEffect(() => {
    axios.get(`${BASE_URL}/brands`).then((res) => {
      setBrands(res.data.message);
    });
  }, []);

  // ✅ Get models of selected brand
  useEffect(() => {
    if (!selectedBrand) return;
    axios.get(`${BASE_URL}/models/${selectedBrand}`).then((res) => {
      setModels(res.data.message);
    });
  }, [selectedBrand]);

  const deleteModel = async (brand: string, modelName: string) => {
    try {
      await axios.delete(`${BASE_URL}/delete/${brand}/${modelName}`);
      setModels((prev) => prev.filter((m) => m.name !== modelName));
      showSuccessToast("Model deleted successfully!");
    } catch (error) {
      showErrorToast("Failed to delete model!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header with Red Theme */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Brands Management</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your brands and their models
            </p>
          </div>
          <button
            onClick={() => setOpenBrand(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-sm"
          >
            <Plus size={20} />
            Add New Brand
          </button>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
          <Package size={16} className="text-red-600" />
          SELECT BRAND
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {brands.map((brand, index) => (
            <button
              key={index}
              onClick={() => setSelectedBrand(brand.brand)}
              className={`
                px-4 py-3 rounded-lg font-medium text-sm transition-all
                ${
                  selectedBrand === brand.brand
                    ? "bg-red-600 text-white shadow-md shadow-red-200"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:shadow-sm"
                }
              `}
            >
              {brand.brand.toUpperCase()}
            </button>
          ))}
          {brands.length === 0 && (
            <div className="col-span-full text-center py-8 text-gray-500 bg-white rounded-lg border border-gray-200">
              No brands found. Click "Add New Brand" to create one.
            </div>
          )}
        </div>
      </div>

      {/* Models Section */}
      {selectedBrand ? (
        <div>
          {/* Brand Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-red-600 rounded-full"></div>
              <h2 className="text-xl font-semibold text-gray-800">
                {selectedBrand.toUpperCase()} Models
              </h2>
              <span className="text-sm bg-red-50 text-red-600 px-2 py-1 rounded-full">
                {models.length} {models.length === 1 ? "model" : "models"}
              </span>
            </div>
          </div>

          {/* Models Grid */}
          {models.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {models.map((model) => (
                <div
                  key={model.name}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition group"
                >
                  {/* Image Container */}
                  <div className="relative h-40 bg-gray-50 p-4">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="h-full w-full object-contain"
                    />
                    {/* Availability Badge */}
                    <span
                      className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                        model.isAvailable ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                  </div>

                  {/* Content */}
                  <div className="p-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {model.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {model.isAvailable ? "In Stock" : "Out of Stock"}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openEditModal(model)}
                          className="p-2 text-gray-400 hover:text-red-600 transition rounded-lg hover:bg-red-50"
                          title="Edit model"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => deleteModel(selectedBrand, model.name)}
                          className="p-2 text-gray-400 hover:text-red-600 transition rounded-lg hover:bg-red-50"
                          title="Delete model"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <Smartphone size={48} className="mx-auto text-gray-300 mb-3" />
              <h3 className="text-gray-700 font-medium mb-1">No models found</h3>
              <p className="text-sm text-gray-500 mb-4">
                Add models to {selectedBrand} using the Add New Brand button above
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Package size={48} className="mx-auto text-gray-300 mb-3" />
          <h3 className="text-gray-700 font-medium mb-1">Select a brand</h3>
          <p className="text-sm text-gray-500">
            Choose a brand from above to view its models
          </p>
        </div>
      )}

      {/* Edit Modal with Red Theme */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md shadow-xl">
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Edit Model</h2>
              <p className="text-sm text-gray-500 mt-1">
                Update model information
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              {/* Current Image Preview */}
              {previewImage && !editImage && (
                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-500 mb-2">
                    Current Image
                  </label>
                  <div className="h-32 w-full bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              )}

              {/* New Image Preview */}
              {editImage && (
                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-500 mb-2">
                    New Image
                  </label>
                  <div className="h-32 w-full bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <img
                      src={URL.createObjectURL(editImage)}
                      alt="New Preview"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Model Name
                  </label>
                  <input
                    type="text"
                    value={editModelName}
                    onChange={(e) => setEditModelName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter model name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Model Image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setEditImage(e.target.files?.[0] || null)}
                    accept="image/*"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 flex justify-end gap-2">
              <button
                onClick={() => {
                  setEditModal(false);
                  setEditImage(null);
                  setPreviewImage(null);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={updateModel}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition shadow-sm"
              >
                Update Model
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Brand Modal */}
      <BrandsFormModal isOpen={openBrand} onClose={() => setOpenBrand(false)} />
    </div>
  );
}