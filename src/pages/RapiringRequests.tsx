// import { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "@/Base_URL/Base_URL";

// interface RepairRequest {
//   _id: string;
//   name: string;
//   email: string;
//   phoneNumber: number;
//   mobileType: string;
//   problem: string;
//   comment: string;
//   AppointmentTime: string;
// }

// export default function RepairingRequests() {
//   const [requests, setRequests] = useState<RepairRequest[]>([]);

//   // ✅ Check if expired
//   const isExpired = (time: string) => {
//     return new Date(time).getTime() < Date.now();
//   };

//   // ✅ Check if today
//   const isToday = (time: string) => {
//     const today = new Date();
//     const date = new Date(time);

//     return (
//       date.getDate() === today.getDate() &&
//       date.getMonth() === today.getMonth() &&
//       date.getFullYear() === today.getFullYear()
//     );
//   };

//   // ✅ Check if future
//   const isFuture = (time: string) => {
//     return (
//       new Date(time).getTime() > Date.now() &&
//       !isToday(time)
//     );
//   };

//   // ✅ Format date
//   const formatDate = (time: string) => {
//     return new Date(time).toLocaleDateString();
//   };

//   // ✅ Format time
//   const formatTime = (time: string) => {
//     return new Date(time).toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   // ✅ Split brand & model
//   const getBrandModel = (mobileType: string) => {
//     const parts = mobileType.split(" ");
//     return {
//       brand: parts[0],
//       model: parts.slice(1).join(" "),
//     };
//   };

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}/getRepairingRequest`)
//       .then((res) => {
//         const data: RepairRequest[] = res.data.message;

//         // ✅ Sorting: Today → Future → Passed
//         const sorted = data.sort((a, b) => {
//           const aTime = a.AppointmentTime;
//           const bTime = b.AppointmentTime;

//           if (isToday(aTime) && !isToday(bTime)) return -1;
//           if (!isToday(aTime) && isToday(bTime)) return 1;

//           if (isFuture(aTime) && isExpired(bTime)) return -1;
//           if (isExpired(aTime) && isFuture(bTime)) return 1;

//           if (isFuture(aTime) && !isFuture(bTime)) return -1;
//           if (!isFuture(aTime) && isFuture(bTime)) return 1;

//           return new Date(aTime).getTime() - new Date(bTime).getTime();
//         });

//         setRequests(sorted);
//       })
//       // .catch((err) => console.log(err));
//       // showErrorToast("Failed to fetch repair requests");
//   }, []);

//   return (
//     <div className="p-8 min-h-screen bg-muted/30">
//       <h1 className="text-3xl font-bold mb-6">Repairing Requests</h1>

//       <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
//         <table className="min-w-full text-sm text-left">
//           <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
//             <tr>
//               <th className="px-6 py-4">Name</th>
//               <th className="px-6 py-4">Email</th>
//               <th className="px-6 py-4">Phone</th>
//               <th className="px-6 py-4">Brand</th>
//               <th className="px-6 py-4">Model</th>
//               <th className="px-6 py-4">Problem</th>
//               <th className="px-6 py-4">Comment</th>
//               <th className="px-6 py-4">Date</th>
//               <th className="px-6 py-4">Time</th>
//             </tr>
//           </thead>

//           <tbody>
//             {requests.map((req) => {
//               const { brand, model } = getBrandModel(req.mobileType);
//               const expired = isExpired(req.AppointmentTime);
//               const today = isToday(req.AppointmentTime);
//               const future = isFuture(req.AppointmentTime);

//               return (
//                 <tr
//                   key={req._id}
//                   className={`border-b transition ${
//                     expired
//                       ? "bg-gray-100 text-gray-400 opacity-60"
//                       : today
//                       ? "bg-green-50"
//                       : future
//                       ? "bg-blue-50"
//                       : "hover:bg-gray-50"
//                   }`}
//                 >
//                   <td className="px-6 py-4 font-medium">{req.name}</td>
//                   <td className="px-6 py-4">{req.email}</td>
//                   <td className="px-6 py-4">{req.phoneNumber}</td>
//                   <td className="px-6 py-4 capitalize">{brand}</td>
//                   <td className="px-6 py-4 capitalize">{model}</td>
//                   <td className="px-6 py-4">{req.problem}</td>
//                   <td className="px-6 py-4">{req.comment}</td>

//                   {/* Date + Badge */}
//                   <td className="px-6 py-4">
//                     {formatDate(req.AppointmentTime)}

//                     {today && (
//                       <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
//                         Today
//                       </span>
//                     )}

//                     {future && (
//                       <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
//                         Future
//                       </span>
//                     )}

//                     {expired && (
//                       <span className="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded-full">
//                         Passed
//                       </span>
//                     )}
//                   </td>

//                   <td className="px-6 py-4">
//                     {formatTime(req.AppointmentTime)}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//         {requests.length === 0 && (
//           <div className="p-6 text-center text-gray-500">
//             No Repair Requests Found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

















import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function RepairingRequests() {
  const [requests, setRequests] = useState<RepairRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<RepairRequest[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);

  // ✅ Check if expired
  const isExpired = (time: string) => {
    return new Date(time).getTime() < Date.now();
  };

  // ✅ Check if specific date
  const isSelectedDate = (time: string, date: Date) => {
    const appointmentDate = new Date(time);
    return (
      appointmentDate.getDate() === date.getDate() &&
      appointmentDate.getMonth() === date.getMonth() &&
      appointmentDate.getFullYear() === date.getFullYear()
    );
  };

  // ✅ Check if today
  const isToday = (time: string) => {
    const today = new Date();
    const date = new Date(time);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // ✅ Check if future
  const isFuture = (time: string) => {
    return new Date(time).getTime() > Date.now() && !isToday(time);
  };

  // ✅ Format date
  const formatDate = (time: string) => {
    return new Date(time).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // ✅ Format time
  const formatTime = (time: string) => {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // ✅ Split brand & model
  const getBrandModel = (mobileType: string) => {
    const parts = mobileType.split(" ");
    return {
      brand: parts[0] || "N/A",
      model: parts.slice(1).join(" ") || "N/A",
    };
  };

  // ✅ Sort by time (nearest first)
  const sortByTime = (data: RepairRequest[]) => {
    return [...data].sort((a, b) => {
      const timeA = new Date(a.AppointmentTime).getTime();
      const timeB = new Date(b.AppointmentTime).getTime();
      return timeA - timeB;
    });
  };

  // ✅ Filter by selected date and sort by time
  const filterAndSortByDate = (date: Date) => {
    const filtered = requests.filter((req) =>
      isSelectedDate(req.AppointmentTime, date)
    );
    setFilteredRequests(sortByTime(filtered));
  };

  // ✅ Handle calendar date change
  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      filterAndSortByDate(value);
      setCalendarOpen(false);
    }
  };

  // ✅ Load all requests
  useEffect(() => {
    axios
      .get(`${BASE_URL}/getRepairingRequest`)
      .then((res) => {
        const data: RepairRequest[] = res.data.message;
        setRequests(data);
        // Initially show today's requests
        filterAndSortByDate(new Date());
      })
      .catch((err) => console.error("Failed to fetch repair requests", err));
  }, []);

  // ✅ Get appointment stats
  const getStats = () => {
    const today = requests.filter((req) => isToday(req.AppointmentTime)).length;
    const upcoming = requests.filter((req) => isFuture(req.AppointmentTime))
      .length;
    const passed = requests.filter((req) => isExpired(req.AppointmentTime))
      .length;
    return { today, upcoming, passed };
  };

  const stats = getStats();

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Appointments
        </h1>
        <div className="text-sm text-gray-500">
          Total: {requests.length} requests
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
          <p className="text-sm text-gray-500">Selected Date</p>
          <p className="text-lg font-semibold">
            {formatDate(selectedDate.toISOString())}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {filteredRequests.length} appointments
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-lg font-semibold text-green-600">{stats.today}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-400">
          <p className="text-sm text-gray-500">Upcoming</p>
          <p className="text-lg font-semibold text-blue-600">
            {stats.upcoming}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-red-400">
          <p className="text-sm text-gray-500">Passed</p>
          <p className="text-lg font-semibold text-red-600">{stats.passed}</p>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-700">
              Select Date to View Appointments
            </h2>
            <button
              onClick={() => setCalendarOpen(!calendarOpen)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {formatDate(selectedDate.toISOString())}
            </button>
          </div>
        </div>

        {/* Calendar Dropdown */}
        {calendarOpen && (
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="max-w-md mx-auto">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                className="rounded-lg border-0 shadow-lg w-full"
                tileClassName={({ date }) => {
                  const hasAppointment = requests.some((req) =>
                    isSelectedDate(req.AppointmentTime, date)
                  );
                  return hasAppointment
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "";
                }}
              />
            </div>
          </div>
        )}

        {/* Selected Date Info */}
        <div className="px-4 py-3 bg-blue-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              Showing appointments for:
            </span>
            <span className="text-sm font-semibold text-red-700">
              {formatDate(selectedDate.toISOString())}
            </span>
          </div>
          <span className="text-sm text-gray-600">
            {filteredRequests.length}{" "}
            {filteredRequests.length === 1 ? "appointment" : "appointments"}{" "}
            found
          </span>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Device
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Problem
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req, index) => {
                  const { brand, model } = getBrandModel(req.mobileType);
                  const expired = isExpired(req.AppointmentTime);
                  const today = isToday(req.AppointmentTime);
                  const future = isFuture(req.AppointmentTime);
                  const appointmentTime = new Date(req.AppointmentTime);
                  const isPastAppointment = appointmentTime.getTime() < Date.now();

                  return (
                    <tr
                      key={req._id}
                      className={`hover:bg-gray-50 transition ${
                        isPastAppointment ? "bg-gray-50" : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {req.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {formatDate(req.AppointmentTime)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {req.email}
                        </div>
                        <div className="text-xs text-gray-500">
                          {req.phoneNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {brand}
                        </div>
                        <div className="text-xs text-gray-500">{model}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {req.problem}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {req.comment || "No comment"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {formatTime(req.AppointmentTime)}
                        </div>
                        <div className="text-xs text-gray-500">
                          {appointmentTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {expired ? (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                            Passed
                          </span>
                        ) : today ? (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Today
                          </span>
                        ) : future ? (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                            Future
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                            Scheduled
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <div className="flex flex-col items-center">
                      <svg
                        className="w-12 h-12 text-gray-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-lg font-medium text-gray-600 mb-1">
                        No appointments for this date
                      </p>
                      <p className="text-sm text-gray-500">
                        Select another date from the calendar
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        {filteredRequests.length > 0 && (
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">
                Showing {filteredRequests.length} of {requests.length} total
                appointments
              </p>
              <p className="text-xs text-gray-500">
                Sorted by: Time (earliest first)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}