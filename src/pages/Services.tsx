// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Plus, Pencil, Trash2, X } from "lucide-react";
// import { BASE_URL } from "@/Base_URL/Base_URL";
// import { showErrorToast, showSuccessToast } from "@/lib/toast";


// interface Service {
//   _id: string;
//   ServiceName: string;
//   price: string;
// }

// export default function ServicesPage() {
//   const [services, setServices] = useState<Service[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     ServiceName: "",
//     price: "",
//   });

//   // ================= GET ALL =================
//   const fetchServices = async () => {
//     const res = await axios.get(`${BASE_URL}/getAllServices`);
//     setServices(res.data.message);
//     // console.log("services",res.data.message);
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   // ================= CREATE / UPDATE =================
//   const handleSubmit = async () => {
//     // console.log(formData, "formData");

//     try {
//       if (editingId) {
//         await axios.put(
//           `${BASE_URL}/updateService/${editingId}`,
//           formData
//         );
//         showSuccessToast("Service updated successfully");
//       } else {
//         await axios.post(
//           `${BASE_URL}/createService`,
//           formData
//         );
//         showSuccessToast("Service created successfully");
//       }

//       setIsOpen(false);
//       setEditingId(null);
//       setFormData({ ServiceName: "", price: "" });
//       fetchServices();
//     } catch (error: any) {
//       // alert(error?.response?.data?.message);
//       showErrorToast("An error occurred");
//     }
//   };

//   // ================= DELETE =================
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure?")) return;
//     await axios.delete(`${BASE_URL}/deleteService/${id}`);
//     fetchServices();
//   };

//   // ================= EDIT =================
//   const handleEdit = (service: Service) => {
//     setEditingId(service._id);
//     setFormData({
//       ServiceName: service.ServiceName,
//       price: service.price,
//     });
//     setIsOpen(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">

//       {/* Top Section */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Services</h1>
//         <button
//           onClick={() => setIsOpen(true)}
//           className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
//         >
//           <Plus size={18} /> Create Service
//         </button>
//       </div>

//       {/* Cards */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {services.map((service) => (
//           <div
//             key={service._id}
//             className="bg-white rounded-2xl shadow-md p-6 relative"
//           >
//             <h2 className="text-xl font-semibold mb-2">
//               {service.ServiceName}
//             </h2>
//             <p className="text-gray-600 text-lg">
//               ${service.price}
//             </p>

    
//             <div className="absolute top-4 right-4 flex gap-3">
//               <Pencil
//                 size={18}
//                 className="cursor-pointer text-blue-600 hover:scale-110 transition"
//                 onClick={() => handleEdit(service)}
//               />
//               <Trash2
//                 size={18}
//                 className="cursor-pointer text-red-600 hover:scale-110 transition"
//                 onClick={() => handleDelete(service._id)}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= MODAL ================= */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
//           <div className="bg-white w-[400px] rounded-2xl p-6 relative">

//             {/* Close */}
//             <X
//               className="absolute right-4 top-4 cursor-pointer"
//               onClick={() => {
//                 setIsOpen(false);
//                 setEditingId(null);
//                 setFormData({ ServiceName: "", price: "" });
//               }}
//             />

//             <h2 className="text-2xl font-bold mb-6 text-center">
//               {editingId ? "Update Service" : "Create Service"}
//             </h2>

//             <div className="flex flex-col gap-4">
//               <input
//                 type="text"
//                 placeholder="Service Name"
//                 value={formData.ServiceName}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     ServiceName: e.target.value,
//                   })
//                 }
//                 className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <input
//                 type="text"
//                 placeholder="Price"
//                 value={formData.price}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     price: e.target.value,
//                   })
//                 }
//                 className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <button
//                 onClick={handleSubmit}
//                 className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
//               >
//                 {editingId ? "Update Service" : "Create Service"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }















"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Pencil, Trash2, X, DollarSign, Wrench } from "lucide-react";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { showErrorToast, showSuccessToast } from "@/lib/toast";

interface Service {
  _id: string;
  ServiceName: string;
  price: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    ServiceName: "",
    price: "",
  });

  // ================= GET ALL =================
  const fetchServices = async () => {
    const res = await axios.get(`${BASE_URL}/getAllServices`);
    setServices(res.data.message);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // ================= CREATE / UPDATE =================
  const handleSubmit = async () => {
    try {
      if (editingId) {
        await axios.put(
          `${BASE_URL}/updateService/${editingId}`,
          formData
        );
        showSuccessToast("Service updated successfully");
      } else {
        await axios.post(
          `${BASE_URL}/createService`,
          formData
        );
        showSuccessToast("Service created successfully");
      }

      setIsOpen(false);
      setEditingId(null);
      setFormData({ ServiceName: "", price: "" });
      fetchServices();
    } catch (error: any) {
      showErrorToast("An error occurred");
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    await axios.delete(`${BASE_URL}/deleteService/${id}`);
    fetchServices();
    showSuccessToast("Service deleted successfully");
  };

  // ================= EDIT =================
  const handleEdit = (service: Service) => {
    setEditingId(service._id);
    setFormData({
      ServiceName: service.ServiceName,
      price: service.price,
    });
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Services Management</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your repair services and pricing
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 transition shadow-sm"
          >
            <Plus size={18} /> 
            Create Service
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-red-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Services</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{services.length}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <Wrench className="text-red-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Average Price</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ${services.length > 0 
                    ? (services.reduce((acc, s) => acc + parseFloat(s.price || "0"), 0) / services.length).toFixed(2)
                    : "0.00"}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-purple-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Price Range</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {services.length > 0 
                    ? `$${Math.min(...services.map(s => parseFloat(s.price || "0")))} - $${Math.max(...services.map(s => parseFloat(s.price || "0")))}`
                    : "$0 - $0"}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <DollarSign className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      {services.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => {
            // Parse price for formatting
            const priceNum = parseFloat(service.price) || 0;
            
            return (
              <div
                key={service._id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden group"
              >
                {/* Colored top bar */}
                <div className="h-2 w-full bg-red-600"></div>
                
                <div className="p-5">
                  {/* Service Icon and Actions */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2.5 bg-red-50 rounded-lg">
                      <Wrench className="text-red-600" size={20} />
                    </div>
                    
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() => handleEdit(service)}
                        className="p-1.5 bg-gray-100 hover:bg-red-50 rounded-lg text-gray-600 hover:text-red-600 transition"
                        title="Edit service"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="p-1.5 bg-gray-100 hover:bg-red-50 rounded-lg text-gray-600 hover:text-red-600 transition"
                        title="Delete service"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Service Details */}
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                    {service.ServiceName}
                  </h3>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-red-600">
                      ${priceNum.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      / service
                    </span>
                  </div>

                  {/* Quick Action */}
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => handleEdit(service)}
                      className="text-xs text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                    >
                      Edit Details
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Empty State
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="flex flex-col items-center max-w-md mx-auto">
            <div className="bg-red-50 p-4 rounded-full mb-4">
              <Wrench className="text-red-600" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services yet</h3>
            <p className="text-gray-500 mb-6">
              Create your first service to start offering repair services to your customers.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition shadow-sm"
            >
              <Plus size={20} />
              Create Your First Service
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL with Red Theme ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-xl shadow-2xl relative overflow-hidden">

            {/* Modal Header with Red Theme */}
            <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Wrench className="text-white" size={20} />
                <h2 className="text-xl font-semibold text-white">
                  {editingId ? "Update Service" : "Create Service"}
                </h2>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setEditingId(null);
                  setFormData({ ServiceName: "", price: "" });
                }}
                className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-red-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="p-6">
              <div className="space-y-5">
                {/* Service Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Wrench className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="e.g., Screen Replacement"
                      value={formData.ServiceName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ServiceName: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      required
                    />
                  </div>
                </div>

                {/* Price Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="99.99"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          price: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      required
                    />
                  </div>
                </div>

                {/* Preview Section */}
                {formData.ServiceName && formData.price && (
                  <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                    <p className="text-xs text-red-600 font-medium mb-2">Preview</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{formData.ServiceName}</span>
                      <span className="text-lg font-bold text-red-600">${parseFloat(formData.price || "0").toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setEditingId(null);
                    setFormData({ ServiceName: "", price: "" });
                  }}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition flex items-center gap-2 min-w-[140px] justify-center"
                >
                  {editingId ? "Update Service" : "Create Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}