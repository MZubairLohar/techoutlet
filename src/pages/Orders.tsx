import { useEffect, useState } from "react";

interface Order {
  id: string;
  name: string;
  email: string;
  date: string;
  product: string;
  quantity: number;
  total: number;
  status: "Pending" | "Shipped" | "Delivered";
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  // Dummy data (replace with API later)
  useEffect(() => {
    const dummyOrders: Order[] = [
      {
        id: "ORD-1001",
        name: "Ali Khan",
        email: "ali@gmail.com",
        date: "2026-02-08",
        product: "20W Fast Charger",
        quantity: 2,
        total: 5998,
        status: "Pending",
      },
      {
        id: "ORD-1002",
        name: "Ahmed Raza",
        email: "ahmed@gmail.com",
        date: "2026-02-07",
        product: "AirPods Pro",
        quantity: 1,
        total: 15000,
        status: "Shipped",
      },
      {
        id: "ORD-1003",
        name: "Sara Malik",
        email: "sara@gmail.com",
        date: "2026-02-06",
        product: "Tempered Glass",
        quantity: 3,
        total: 1050,
        status: "Delivered",
      },
    ];

    setOrders(dummyOrders);
  }, []);

  const statusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      default:
        return "";
    }
  };

  return (
    <div className="p-8 min-h-screen bg-muted/30">
      <h1 className="text-3xl font-bold mb-6">User Orders</h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Qty</th>
              <th className="px-6 py-4">Total (Rs)</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4">{order.name}</td>
                <td className="px-6 py-4">{order.email}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">{order.product}</td>
                <td className="px-6 py-4">{order.quantity}</td>
                <td className="px-6 py-4 font-semibold">{order.total}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <div className="p-6 text-center text-gray-500">No Orders Found</div>
        )}
      </div>
    </div>
  );
}
