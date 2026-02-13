// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Calendar, Plus, X } from "lucide-react";
// import { motion } from "framer-motion";
// import { BASE_URL } from "@/Base_URL/Base_URL";
// import { showErrorToast, showSuccessToast } from "@/lib/toast";

// // const BASE_URL = "http://localhost:5000/api"; // change if needed

// export default function ClosedDaysPage() {
//   const [closedDays, setClosedDays] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [openModal, setOpenModal] = useState(false);
//   const [date, setDate] = useState("");
//   const [reason, setReason] = useState("");

//   // 🔹 Fetch Closed Days
//   const fetchClosedDays = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/getClosedDays`);
//     //  console.log("closed days", res.data.message);
//       setClosedDays(res.data.message);
//     } catch (err) {
//       // console.error(err);
//       showErrorToast("Error fetching closed days");
//     }
//   };

//   useEffect(() => {
//     fetchClosedDays();
//   }, []);

//   // 🔹 Add Closed Day
//   const handleAddClosedDay = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await axios.post(`${BASE_URL}/closeDay`, {
//         date,
//         reason,
//       });

//       setDate("");
//       setReason("");
//       setOpenModal(false);
//       fetchClosedDays();
//       showSuccessToast("Closed day added successfully!");
//     } catch (error: any) {
//       // alert(error?.response?.data?.message || "Error adding closed day");
//       showErrorToast("Error adding closed day");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Closed Days</h1>

//         <button
//           onClick={() => setOpenModal(true)}
//           className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full shadow hover:scale-105 transition"
//         >
//           <Plus size={18} />
//           Add Closed Day
//         </button>
//       </div>

//       {/* Closed Days List */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {closedDays.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-card border border-border rounded-2xl p-6 shadow hover:shadow-lg transition"
//           >
//             <div className="flex items-center gap-3 mb-3">
//               <Calendar className="text-primary" />
//               <p className="font-semibold">
//                 {new Date(item.date).toDateString()}
//               </p>
//             </div>

//             {item.reason && (
//               <p className="text-muted-foreground text-sm">
//                 Reason: {item.reason}
//               </p>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       {openModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="bg-card p-8 rounded-3xl w-full max-w-md shadow-2xl relative"
//           >
//             <button
//               onClick={() => setOpenModal(false)}
//               className="absolute right-4 top-4"
//             >
//               <X size={20} />
//             </button>

//             <h2 className="text-xl font-bold mb-6">Add Closed Day</h2>

//             <form onSubmit={handleAddClosedDay} className="space-y-4">
//               <div>
//                 <label className="text-sm">Select Date</label>
//                 <input
//                   type="date"
//                   required
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                   className="w-full mt-1 border border-border rounded-xl p-3 bg-background"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm">Reason (optional)</label>
//                 <input
//                   type="text"
//                   value={reason}
//                   onChange={(e) => setReason(e.target.value)}
//                   placeholder="Holiday / Maintenance"
//                   className="w-full mt-1 border border-border rounded-xl p-3 bg-background"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-primary text-white py-3 rounded-full hover:scale-105 transition"
//               >
//                 {loading ? "Adding..." : "Add Closed Day"}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }











"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, Plus, X, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { showErrorToast, showSuccessToast } from "@/lib/toast";

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
      setClosedDays(res.data.message);
    } catch (err) {
      showErrorToast("Error fetching closed days");
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
      showSuccessToast("Closed day added successfully!");
    } catch (error: any) {
      showErrorToast("Error adding closed day");
    } finally {
      setLoading(false);
    }
  };

  // Helper to check if date is in the past
  const isPastDate = (dateString: string) => {
    return new Date(dateString) < new Date(new Date().setHours(0, 0, 0, 0));
  };

  // Helper to format date nicely
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Closed Days Management</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage holidays and non-working days
            </p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 transition shadow-sm"
          >
            <Plus size={18} />
            Add Closed Day
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-red-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Closed Days</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{closedDays.length}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <Calendar className="text-red-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-yellow-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Upcoming</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {closedDays.filter((item) => !isPastDate(item.date)).length}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Clock className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-gray-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Past</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {closedDays.filter((item) => isPastDate(item.date)).length}
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <AlertCircle className="text-gray-600" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closed Days Grid */}
      {closedDays.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {closedDays.map((item, index) => {
            const past = isPastDate(item.date);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-xl shadow-sm hover:shadow-md transition border ${
                  past ? 'border-gray-200 bg-gray-50' : 'border-gray-200'
                } overflow-hidden`}
              >
                {/* Colored top bar */}
                <div className={`h-2 w-full ${
                  past ? 'bg-gray-400' : 'bg-red-600'
                }`}></div>
                
                <div className="p-5">
                  {/* Date Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg ${
                        past ? 'bg-gray-100' : 'bg-red-50'
                      }`}>
                        <Calendar className={past ? 'text-gray-500' : 'text-red-600'} size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {formatDate(item.date)}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {past ? 'Past' : 'Upcoming'}
                        </p>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    {past ? (
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        Passed
                      </span>
                    ) : (
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        Active
                      </span>
                    )}
                  </div>

                  {/* Reason (if exists) */}
                  {item.reason && (
                    <div className={`mt-3 pt-3 border-t ${
                      past ? 'border-gray-200' : 'border-gray-100'
                    }`}>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-gray-700">Reason:</span>{" "}
                        {item.reason}
                      </p>
                    </div>
                  )}

                  {/* If no reason */}
                  {!item.reason && (
                    <div className={`mt-3 pt-3 border-t ${
                      past ? 'border-gray-200' : 'border-gray-100'
                    }`}>
                      <p className="text-sm text-gray-400 italic">
                        No reason provided
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        // Empty State
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center"
        >
          <div className="flex flex-col items-center max-w-md mx-auto">
            <div className="bg-red-50 p-4 rounded-full mb-4">
              <Calendar className="text-red-600" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No closed days</h3>
            <p className="text-gray-500 mb-6">
              There are no closed days scheduled. Add holidays or maintenance days to manage your business hours.
            </p>
            <button
              onClick={() => setOpenModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition shadow-sm"
            >
              <Plus size={20} />
              Add Your First Closed Day
            </button>
          </div>
        </motion.div>
      )}

      {/* Modal with Red Theme */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden"
          >
            {/* Modal Header with Red Theme */}
            <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Calendar className="text-white" size={20} />
                <h2 className="text-xl font-semibold text-white">Add Closed Day</h2>
              </div>
              <button
                onClick={() => setOpenModal(false)}
                className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-red-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleAddClosedDay} className="p-6">
              <div className="space-y-5">
                {/* Date Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition bg-white"
                  />
                </div>

                {/* Reason Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reason (optional)
                  </label>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="e.g., Public Holiday, Maintenance, etc."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  />
                </div>

                {/* Preview Section */}
                {date && (
                  <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                    <p className="text-xs text-red-600 font-medium mb-1">Preview</p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Date:</span> {new Date(date).toDateString()}
                    </p>
                    {reason && (
                      <p className="text-sm text-gray-700 mt-1">
                        <span className="font-medium">Reason:</span> {reason}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg transition flex items-center gap-2 min-w-[140px] justify-center ${
                    !loading
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Adding...
                    </>
                  ) : (
                    "Add Closed Day"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}