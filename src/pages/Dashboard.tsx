import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {

  const [dashboardData, setDashboardData] = useState<any>(null);

useEffect(() => {
  const fetchDashboardData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getDashboardData`);
      setDashboardData(res.data.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  fetchDashboardData();
}, []);

// 🔥 State nahi — simple variable
const cards = [
  {
    title: "Total Orders",
    value: dashboardData?.totalAccessoriesOrders ?? 0,
    color: "bg-blue-500",
    icon: "📦",
  },
  {
    title: "Total Accessories",
    value: dashboardData?.totalAccessories ?? 0,
    color: "bg-green-500",
    icon: "🛒",
  },
  {
    title: "Repair Requests",
    value: dashboardData?.totalAppointments ?? 0, // 👈 yeh naam galat tha
    color: "bg-yellow-500",
    icon: "🔧",
  },
  {
    title: "Notifications",
    value: dashboardData?.totalNotifications ?? 0,
    color: "bg-purple-500",
    icon: "🔔",
  },
];

  // Dummy chart data
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales (Rs)",
        data: [12000, 15000, 13000, 18000, 20000, 22000],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79,70,229,0.2)",
        tension: 0.4,
      },
    ],
  };

  const ordersData = {
    labels: ["Accessories", "Chargers", "Cables", "Airpods", "Protector"],
    datasets: [
      {
        label: "Orders",
        data: [20, 35, 15, 25, 10],
        backgroundColor: [
          "#4f46e5",
          "#22c55e",
          "#eab308",
          "#8b5cf6",
          "#f97316",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "" },
    },
  };
  

  return (
    <div className="p-8 bg-muted/30 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-6 rounded-2xl shadow-md hover:shadow-xl transition ${card.color} text-white`}
          >
            <div>
              <h2 className="text-sm font-semibold">{card.title}</h2>
              <p className="text-2xl font-bold mt-2">{card.value}</p>
            </div>
            <div className="text-4xl">{card.icon}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <Line data={salesData} options={chartOptions} />
        </div>

        {/* Orders Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Orders by Category</h2>
          <Bar data={ordersData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
