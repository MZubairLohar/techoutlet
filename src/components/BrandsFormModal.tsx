import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { Button } from "@/components/ui/button";
import { showSuccessToast, showErrorToast } from "@/lib/toast";
import { X, Upload, Image as ImageIcon, Package, Plus } from "lucide-react";

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
  const [imagePreviews, setImagePreviews] = useState<{ [key: number]: string }>({});

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
    
    // Clear previews for removed models
    const newPreviews = { ...imagePreviews };
    Object.keys(newPreviews).forEach(key => {
      if (parseInt(key) >= value) {
        delete newPreviews[parseInt(key)];
      }
    });
    setImagePreviews(newPreviews);
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

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviews(prev => ({
        ...prev,
        [index]: reader.result as string
      }));
    };
    reader.readAsDataURL(file);
  };

  const removeModel = (index: number) => {
    const updated = models.filter((_, i) => i !== index);
    setModels(updated);
    setNumModels(updated.length);
    
    // Remove preview
    const newPreviews = { ...imagePreviews };
    delete newPreviews[index];
    // Reindex remaining previews
    const reindexedPreviews: { [key: number]: string } = {};
    Object.entries(newPreviews).forEach(([key, value]) => {
      const oldIndex = parseInt(key);
      if (oldIndex > index) {
        reindexedPreviews[oldIndex - 1] = value;
      } else {
        reindexedPreviews[oldIndex] = value;
      }
    });
    setImagePreviews(reindexedPreviews);
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

      showSuccessToast("Brand created successfully");

      setBrand("");
      setNumModels(0);
      setModels([]);
      setImagePreviews({});
      onClose();
    } catch (error: any) {
      showErrorToast("Failed to create brand!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative overflow-hidden">
        
        {/* Header with Red Theme */}
        <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Package className="text-white" size={20} />
            <h2 className="text-xl font-semibold text-white">Create New Brand</h2>
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
          
          {/* Brand Name Field */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Samsung, Apple, Xiaomi"
              value={brand}
              onChange={handleBrandChange}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            />
          </div>

          {/* Number of Models Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Models
            </label>
            <input
              type="number"
              placeholder="Enter number of models"
              value={numModels > 0 ? numModels : ""}
              onChange={handleNumModelsChange}
              min={0}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            />
            <p className="text-xs text-gray-500 mt-1">
              Specify how many models you want to add
            </p>
          </div>

          {/* Models Section */}
          {models.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Plus size={16} className="text-red-500" />
                Model Details
              </h3>
              
              <div className="space-y-4">
                {models.map((model, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 relative"
                  >
                    {/* Model Number Badge */}
                    <div className="absolute -top-2 -left-2 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-medium shadow-sm">
                      {index + 1}
                    </div>

                    {/* Remove Model Button */}
                    {models.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeModel(index)}
                        className="absolute -top-2 -right-2 bg-white text-red-600 hover:text-red-700 p-1 rounded-full shadow-md border border-gray-200 transition hover:shadow-lg"
                      >
                        <X size={14} />
                      </button>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      {/* Model Name */}
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Model Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={`Model ${index + 1} name`}
                          value={model.name}
                          onChange={(e) => handleModelNameChange(index, e.target.value)}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                        />
                      </div>

                      {/* Model Image Upload */}
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Model Image <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center gap-2">
                          <label className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-red-400 transition bg-white">
                              <Upload size={16} className="text-gray-400" />
                              <span className="text-sm text-gray-600 truncate">
                                {model.image ? model.image.name : "Choose image"}
                              </span>
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                handleModelImageChange(
                                  index,
                                  e.target.files ? e.target.files[0] : null
                                )
                              }
                              required={!model.image}
                              className="hidden"
                            />
                          </label>
                          
                          {/* Image Preview */}
                          <div className="w-10 h-10 rounded-lg border border-gray-200 overflow-hidden flex-shrink-0 bg-white">
                            {imagePreviews[index] ? (
                              <img
                                src={imagePreviews[index]}
                                alt={model.name || "Preview"}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon size={16} className="text-gray-300" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
            <Button
              type="submit"
              disabled={
                loading ||
                !brand ||
                models.length === 0 ||
                models.some((m) => !m.name || !m.image)
              }
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[120px] justify-center"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating...
                </>
              ) : (
                "Create Brand"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}