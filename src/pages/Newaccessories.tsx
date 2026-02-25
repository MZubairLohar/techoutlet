import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { Plus, Pencil, Trash2, X, Upload, Image as ImageIcon, Package } from "lucide-react";
import { showErrorToast,showSuccessToast } from "@/lib/toast";

interface BrandDetail {
  _id: string;
  brand: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export default function Newaccessories() {
  const [brands, setBrands] = useState<BrandDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editingBrand, setEditingBrand] = useState<BrandDetail | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    brand: "",
    description: "",
    image: null as File | null,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch all brand details
  const fetchBrandDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/getBrandDetails`);
      setBrands(res.data.message);
    } catch (error) {
      showErrorToast("Failed to fetch brand details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrandDetails();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (2MB limit)
      if (file.size > 2 * 1024 * 1024) {
        showErrorToast("Image size should be less than 2MB");
        return;
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        showErrorToast("Please upload an image file");
        return;
      }
      
      setFormData(prev => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  // Remove image
  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setPreview(null);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      brand: "",
      description: "",
      image: null,
    });
    setPreview(null);
    setEditingBrand(null);
  };

  // Open modal for create
  const handleOpenCreate = () => {
    resetForm();
    setOpenModal(true);
  };

  // Open modal for edit
  const handleOpenEdit = (brand: BrandDetail) => {
    setEditingBrand(brand);
    setFormData({
      brand: brand.brand,
      description: brand.description,
      image: null,
    });
    setPreview(brand.image);
    setOpenModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setOpenModal(false);
    resetForm();
  };

  // Handle submit (create or update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.brand.trim()) {
      showErrorToast("Brand name is required");
      return;
    }
    if (!formData.description.trim()) {
      showErrorToast("Description is required");
      return;
    }
    if (!editingBrand && !formData.image) {
      showErrorToast("Image is required");
      return;
    }

    setSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("brand", formData.brand);
      formDataToSend.append("description", formData.description);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      if (editingBrand) {
        // Update existing brand
        await axios.put(`${BASE_URL}/editBrandDetail/${editingBrand._id}`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        showSuccessToast("Brand updated successfully!");
      } else {
        // Create new brand
        await axios.post(`${BASE_URL}/brandDetail`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        showSuccessToast("Brand created successfully!");
      }

      // Refresh list
      fetchBrandDetails();
      handleCloseModal();
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Operation failed";
      showErrorToast(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle delete
  const handleDelete = async (id: string, brandName: string) => {
    // if (!confirm(`Are you sure you want to delete "${brandName}"?`)) return;

    try {
      await axios.delete(`${BASE_URL}/deleteBrandDetail/${id}`);
      showSuccessToast("Brand deleted successfully!");
      fetchBrandDetails();
    } catch (error) {
      showErrorToast("Failed to delete brand");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Brand Details</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your brand information and descriptions
            </p>
          </div>
          
          {/* Create Button */}
          <button
            onClick={handleOpenCreate}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-sm"
          >
            <Plus size={20} />
            Create New Brand
          </button>
        </div>

        {/* Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-red-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Brands</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{brands.length}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <Package className="text-red-600" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Brands Grid */}
      {!loading && (
        <>
          {brands.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand) => (
                <div
                  key={brand._id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={brand.image}
                      alt={brand.brand}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() => handleOpenEdit(brand)}
                        className="bg-white p-2 rounded-lg shadow-md hover:bg-red-50 transition text-gray-600 hover:text-red-600"
                        title="Edit brand"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(brand._id, brand.brand)}
                        className="bg-white p-2 rounded-lg shadow-md hover:bg-red-50 transition text-gray-600 hover:text-red-600"
                        title="Delete brand"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {brand.brand}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {brand.description}
                    </p>
                    
                    {/* Date */}
                    <p className="text-xs text-gray-400 mt-3">
                      Added: {new Date(brand.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <div className="flex flex-col items-center max-w-md mx-auto">
                <div className="bg-red-50 p-4 rounded-full mb-4">
                  <Package className="text-red-600" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No brands yet</h3>
                <p className="text-gray-500 mb-6">
                  Create your first brand to start managing your brand details.
                </p>
                <button
                  onClick={handleOpenCreate}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition shadow-sm"
                >
                  <Plus size={20} />
                  Create Your First Brand
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Create/Edit Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Package className="text-white" size={20} />
                <h2 className="text-xl font-semibold text-white">
                  {editingBrand ? "Edit Brand" : "Create New Brand"}
                </h2>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-red-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
              
              {/* Image Upload Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Image {!editingBrand && <span className="text-red-500">*</span>}
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
                        {formData.image ? formData.image.name : editingBrand ? "Click to change image" : "Click to upload image"}
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      hidden
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Max size: 2MB. Formats: JPG, PNG, GIF
                </p>
              </div>

              {/* Brand Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  placeholder="e.g., Apple, Samsung, Xiaomi"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  required
                />
              </div>

              {/* Description Field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter brand description..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition resize-none"
                  required
                />
              </div>

              {/* Preview Section */}
              {formData.brand && formData.description && (
                <div className="mb-6 bg-red-50 rounded-lg p-4 border border-red-100">
                  <p className="text-xs text-red-600 font-medium mb-2">Preview</p>
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 rounded-lg border border-red-200 overflow-hidden bg-white flex-shrink-0">
                      {preview && (
                        <img src={preview} alt={formData.brand} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{formData.brand}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">{formData.description}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg transition flex items-center gap-2 min-w-[140px] justify-center ${
                    !submitting
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {editingBrand ? "Updating..." : "Creating..."}
                    </>
                  ) : (
                    editingBrand ? "Update Brand" : "Create Brand"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}














