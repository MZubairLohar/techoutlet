"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import { BASE_URL } from "@/Base_URL/Base_URL";

// const BASE_URL = "http://localhost:5000/api"; // change if needed

export default function ClosedDaysPage() {
  const [closedDays, setClosedDays] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  // 🔹 Fetch Closed Days
  const fetchClosedDays = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getClosedDays`);
     console.log("closed days", res.data.message);
      setClosedDays(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchClosedDays();
  }, []);

  // 🔹 Add Closed Day
  const handleAddClosedDay = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${BASE_URL}/closeDay`, {
        date,
        reason,
      });

      setDate("");
      setReason("");
      setOpenModal(false);
      fetchClosedDays();
    } catch (error: any) {
      alert(error?.response?.data?.message || "Error adding closed day");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Closed Days</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full shadow hover:scale-105 transition"
        >
          <Plus size={18} />
          Add Closed Day
        </button>
      </div>

      {/* Closed Days List */}
      <div className="grid md:grid-cols-3 gap-6">
        {closedDays.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="text-primary" />
              <p className="font-semibold">
                {new Date(item.date).toDateString()}
              </p>
            </div>

            {item.reason && (
              <p className="text-muted-foreground text-sm">
                Reason: {item.reason}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card p-8 rounded-3xl w-full max-w-md shadow-2xl relative"
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-6">Add Closed Day</h2>

            <form onSubmit={handleAddClosedDay} className="space-y-4">
              <div>
                <label className="text-sm">Select Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full mt-1 border border-border rounded-xl p-3 bg-background"
                />
              </div>

              <div>
                <label className="text-sm">Reason (optional)</label>
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Holiday / Maintenance"
                  className="w-full mt-1 border border-border rounded-xl p-3 bg-background"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-full hover:scale-105 transition"
              >
                {loading ? "Adding..." : "Add Closed Day"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
