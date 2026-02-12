import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { showErrorToast,showSuccessToast } from "@/lib/toast";

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

  // Fetch notifications from API
  const fetchNotifications = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getContacts`);
      setNotifications(res.data.message);
    } catch (err: any) {
      // console.error("Failed to fetch notifications:", err.response?.data || err.message);
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
      // console.error("Failed to delete notification:", err.response?.data || err.message);
      showErrorToast("Failed to delete notification");
    }
  };

  return (
    <div className="p-8 min-h-screen bg-muted/30">
      <h1 className="text-3xl font-bold mb-6">User Notifications</h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">First Name</th>
              <th className="px-6 py-4">Last Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Message</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {notifications.map((notif, index) => (
              <tr
                key={notif._id}
                className={`border-b hover:bg-gray-50 transition`}
              >
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">{notif.firstName}</td>
                <td className="px-6 py-4">{notif.lastName}</td>
                <td className="px-6 py-4">{notif.email}</td>
                <td className="px-6 py-4">{notif.phoneNumber}</td>
                <td className="px-6 py-4">{new Date(notif.createdAt).toLocaleString()}</td>
                <td className="px-6 py-4 max-w-xs line-clamp-2">{notif.message}</td>
                <td className="px-6 py-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(notif._id)}
                    className="flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {notifications.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No Notifications Found
          </div>
        )}
      </div>
    </div>
  );
}
