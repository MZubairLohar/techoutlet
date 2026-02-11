import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";

interface RepairRequest {
  _id: string;
  name: string;
  email: string;
  phoneNumber: number;
  mobileType: string;
  problem: string;
  comment: string;
  AppointmentTime: string;
}

export default function RepairingRequests() {
  const [requests, setRequests] = useState<RepairRequest[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/getRepairingRequest`)
      .then((res) => {
        setRequests(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  // Check if appointment time is expired
  const isExpired = (time: string) => {
    return new Date(time) < new Date();
  };

  // Format date
  const formatDate = (time: string) => {
    return new Date(time).toLocaleDateString();
  };

  // Format time
  const formatTime = (time: string) => {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Split brand & model
  const getBrandModel = (mobileType: string) => {
    const parts = mobileType.split(" ");
    return {
      brand: parts[0],
      model: parts.slice(1).join(" "),
    };
  };

  return (
    <div className="p-8 min-h-screen bg-muted/30">
      <h1 className="text-3xl font-bold mb-6">Repairing Requests</h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Request ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Brand</th>
              <th className="px-6 py-4">Model</th>
              <th className="px-6 py-4">Problem</th>
              <th className="px-6 py-4">Comment</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Time</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => {
              const { brand, model } = getBrandModel(req.mobileType);
              const expired = isExpired(req.AppointmentTime);

              return (
                <tr
                  key={req._id}
                  className={`border-b transition ${
                    expired ? "bg-red-50" : "hover:bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 font-medium">{req._id}</td>
                  <td className="px-6 py-4">{req.name}</td>
                  <td className="px-6 py-4">{req.email}</td>
                  <td className="px-6 py-4">{req.phoneNumber}</td>
                  <td className="px-6 py-4 capitalize">{brand}</td>
                  <td className="px-6 py-4 capitalize">{model}</td>
                  <td className="px-6 py-4">{req.problem}</td>
                  <td className="px-6 py-4">{req.comment}</td>
                  <td className="px-6 py-4">
                    {formatDate(req.AppointmentTime)}
                  </td>
                  <td className="px-6 py-4">
                    {formatTime(req.AppointmentTime)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {requests.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No Repair Requests Found
          </div>
        )}
      </div>
    </div>
  );
}
