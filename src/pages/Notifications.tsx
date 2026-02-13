// import { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "@/Base_URL/Base_URL";
// import { Button } from "@/components/ui/button";
// import { Trash2 } from "lucide-react";
// import { showErrorToast,showSuccessToast } from "@/lib/toast";

// interface Notification {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
//   createdAt: string;
//   message: string;
// }

// export default function Notifications() {
//   const [notifications, setNotifications] = useState<Notification[]>([]);

//   // Fetch notifications from API
//   const fetchNotifications = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/getContacts`);
//       setNotifications(res.data.message);
//     } catch (err: any) {
//       // console.error("Failed to fetch notifications:", err.response?.data || err.message);
//       showErrorToast("Failed to fetch notifications");
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   // Delete notification
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this notification?")) return;

//     try {
//       await axios.delete(`${BASE_URL}/deleteContact/${id}`);
//       setNotifications((prev) => prev.filter((notif) => notif._id !== id));
//       showSuccessToast("Notification deleted successfully");
//     } catch (err: any) {
//       // console.error("Failed to delete notification:", err.response?.data || err.message);
//       showErrorToast("Failed to delete notification");
//     }
//   };

//   return (
//     <div className="p-8 min-h-screen bg-muted/30">
//       <h1 className="text-3xl font-bold mb-6">User Notifications</h1>

//       <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
//         <table className="min-w-full text-sm text-left">
//           <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
//             <tr>
//               <th className="px-6 py-4">ID</th>
//               <th className="px-6 py-4">First Name</th>
//               <th className="px-6 py-4">Last Name</th>
//               <th className="px-6 py-4">Email</th>
//               <th className="px-6 py-4">Phone</th>
//               <th className="px-6 py-4">Date</th>
//               <th className="px-6 py-4">Message</th>
//               <th className="px-6 py-4">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {notifications.map((notif, index) => (
//               <tr
//                 key={notif._id}
//                 className={`border-b hover:bg-gray-50 transition`}
//               >
//                 <td className="px-6 py-4 font-medium">{index + 1}</td>
//                 <td className="px-6 py-4">{notif.firstName}</td>
//                 <td className="px-6 py-4">{notif.lastName}</td>
//                 <td className="px-6 py-4">{notif.email}</td>
//                 <td className="px-6 py-4">{notif.phoneNumber}</td>
//                 <td className="px-6 py-4">{new Date(notif.createdAt).toLocaleString()}</td>
//                 <td className="px-6 py-4 max-w-xs line-clamp-2">{notif.message}</td>
//                 <td className="px-6 py-4 flex gap-2">
//                   <Button
//                     size="sm"
//                     variant="destructive"
//                     onClick={() => handleDelete(notif._id)}
//                     className="flex items-center gap-1"
//                   >
//                     <Trash2 className="w-4 h-4" /> Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {notifications.length === 0 && (
//           <div className="p-6 text-center text-gray-500">
//             No Notifications Found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }













import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { Button } from "@/components/ui/button";
import { Trash2, Mail, Phone, Calendar, User, MessageSquare, Bell, X, ChevronDown, ChevronUp } from "lucide-react";
import { showErrorToast, showSuccessToast } from "@/lib/toast";

interface Notification {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  message: string;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [expandedMessage, setExpandedMessage] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<{ id: string; message: string; name: string } | null>(null);

  // Fetch notifications from API
  const fetchNotifications = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getContacts`);
      setNotifications(res.data.message);
    } catch (err: any) {
      showErrorToast("Failed to fetch notifications");
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Delete notification
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this notification?")) return;

    try {
      await axios.delete(`${BASE_URL}/deleteContact/${id}`);
      setNotifications((prev) => prev.filter((notif) => notif._id !== id));
      showSuccessToast("Notification deleted successfully");
    } catch (err: any) {
      showErrorToast("Failed to delete notification");
    }
  };

  // Toggle message expansion in table
  const toggleMessageExpand = (id: string) => {
    setExpandedMessage(expandedMessage === id ? null : id);
  };

  // Open modal with full message
  const openMessageModal = (notif: Notification) => {
    setSelectedMessage({
      id: notif._id,
      message: notif.message,
      name: `${notif.firstName} ${notif.lastName}`
    });
  };

  // Close message modal
  const closeMessageModal = () => {
    setSelectedMessage(null);
  };

  // Format date nicely
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Check if message is long
  const isLongMessage = (message: string) => {
    return message.length > 100;
  };

  // Truncate message
  const truncateMessage = (message: string, maxLength: number = 100) => {
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">User Notifications</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and view all contact form submissions
            </p>
          </div>
          
          {/* Stats Badge */}
          <div className="bg-white rounded-lg shadow-sm px-4 py-2 flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <Bell className="text-red-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-lg font-bold text-gray-900">{notifications.length}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-red-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Messages</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{notifications.length}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <MessageSquare className="text-red-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Unique Emails</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {new Set(notifications.map(n => n.email)).size}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Unique Phones</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {new Set(notifications.map(n => n.phoneNumber)).size}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Phone className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-purple-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Latest</p>
                <p className="text-lg font-bold text-gray-900 mt-1 truncate">
                  {notifications.length > 0 
                    ? formatDate(notifications[0].createdAt).split(',')[0]
                    : 'No data'}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Calendar className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {notifications.length > 0 ? (
                notifications.map((notif, index) => (
                  <tr 
                    key={notif._id} 
                    className="hover:bg-gray-50 transition group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">{index + 1}</span>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 bg-red-50 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-red-600" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {notif.firstName} {notif.lastName}
                          </div>
                          <div className="text-xs text-gray-500">
                            {notif.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-3.5 w-3.5 mr-1 text-gray-400" />
                          <span className="truncate max-w-[150px]">{notif.email}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Phone className="h-3.5 w-3.5 mr-1 text-gray-400" />
                          <span>{notif.phoneNumber}</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-3.5 w-3.5 mr-1 text-gray-400" />
                        <div className="flex flex-col">
                          <span>{formatDate(notif.createdAt).split(',')[0]}</span>
                          <span className="text-xs text-gray-400">
                            {formatDate(notif.createdAt).split(',')[1]}
                          </span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 max-w-xs">
                      <div className="text-sm text-gray-600">
                        <div className="flex items-start gap-1">
                          <MessageSquare className="h-3.5 w-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                          <div className="flex flex-col">
                            {/* Message content with expand/collapse */}
                            <p className={expandedMessage === notif._id ? "" : "line-clamp-2"}>
                              {notif.message || "No message"}
                            </p>
                            
                            {/* Read more / Read less button for long messages */}
                            {/* {isLongMessage(notif.message) && (
                              <button
                                onClick={() => toggleMessageExpand(notif._id)}
                                className="text-xs text-red-600 hover:text-red-700 font-medium mt-1 flex items-center gap-1 self-start"
                              >
                                {expandedMessage === notif._id ? (
                                  <>Read less <ChevronUp size={12} /></>
                                ) : (
                                  <>Read more <ChevronDown size={12} /></>
                                )}
                              </button>
                            )} */}
                            
                            {/* View full message button */}
                            <button
                              onClick={() => openMessageModal(notif)}
                              className="text-xs text-red-600 hover:text-red-700 font-medium mt-1 flex items-center gap-1 self-start"
                            >
                              <MessageSquare size={12} />
                              View full message
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(notif._id)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition text-sm font-medium"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center">
                      <Bell className="h-12 w-12 text-gray-300 mb-3" />
                      <p className="text-lg font-medium text-gray-600 mb-1">No notifications found</p>
                      <p className="text-sm text-gray-400">When users contact you, they will appear here</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        {notifications.length > 0 && (
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">
                Showing {notifications.length} of {notifications.length} notifications
              </p>
              <p className="text-xs text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Full Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative overflow-hidden">
            
            {/* Modal Header with Red Theme */}
            <div className="bg-red-600 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageSquare className="text-white" size={20} />
                <h2 className="text-xl font-semibold text-white">Message from {selectedMessage.name}</h2>
              </div>
              <button
                onClick={closeMessageModal}
                className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-red-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {selectedMessage.message}
                </p>
              </div>
              
              {/* Message Info */}
              {/* <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <MessageSquare size={16} className="text-gray-400" />
                <span>Message ID: {selectedMessage.id}</span>
              </div> */}

              {/* Actions */}
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={closeMessageModal}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const notif = notifications.find(n => n._id === selectedMessage.id);
                    if (notif) {
                      handleDelete(notif._id);
                      closeMessageModal();
                    }
                  }}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Delete Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}