"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Pencil, Trash2, X } from "lucide-react";
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
    // console.log("services",res.data.message);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // ================= CREATE / UPDATE =================
  const handleSubmit = async () => {
    // console.log(formData, "formData");

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
      // alert(error?.response?.data?.message);
      showErrorToast("An error occurred");
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    await axios.delete(`${BASE_URL}/deleteService/${id}`);
    fetchServices();
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
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Top Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Services</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          <Plus size={18} /> Create Service
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-2xl shadow-md p-6 relative"
          >
            <h2 className="text-xl font-semibold mb-2">
              {service.ServiceName}
            </h2>
            <p className="text-gray-600 text-lg">
              ${service.price}
            </p>

    
            <div className="absolute top-4 right-4 flex gap-3">
              <Pencil
                size={18}
                className="cursor-pointer text-blue-600 hover:scale-110 transition"
                onClick={() => handleEdit(service)}
              />
              <Trash2
                size={18}
                className="cursor-pointer text-red-600 hover:scale-110 transition"
                onClick={() => handleDelete(service._id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white w-[400px] rounded-2xl p-6 relative">

            {/* Close */}
            <X
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                setEditingId(null);
                setFormData({ ServiceName: "", price: "" });
              }}
            />

            <h2 className="text-2xl font-bold mb-6 text-center">
              {editingId ? "Update Service" : "Create Service"}
            </h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Service Name"
                value={formData.ServiceName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ServiceName: e.target.value,
                  })
                }
                className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  })
                }
                className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
              >
                {editingId ? "Update Service" : "Create Service"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
