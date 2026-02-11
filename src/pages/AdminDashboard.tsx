import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users, Smartphone, Wrench, Package, BarChart3, Bell,
  Plus, Search, Filter, MoreVertical, TrendingUp, DollarSign,
  Calendar, ChevronDown, CheckCircle2, Clock, XCircle, Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";

const allBookings = [
  { id: "#FMP-4821", customer: "John Smith", device: "iPhone 15 Pro", issue: "Screen Repair", status: "In Progress", tech: "Alex J.", date: "Feb 8", price: "$49" },
  { id: "#FMP-4820", customer: "Sarah Lee", device: "Galaxy S24", issue: "Battery", status: "Pending", tech: "Unassigned", date: "Feb 8", price: "$29" },
  { id: "#FMP-4819", customer: "Mike Chen", device: "Xiaomi 14", issue: "Water Damage", status: "Completed", tech: "Maria G.", date: "Feb 7", price: "$59" },
  { id: "#FMP-4818", customer: "Lisa Wang", device: "Oppo Reno 11", issue: "Charging Port", status: "Pending", tech: "Unassigned", date: "Feb 7", price: "$25" },
  { id: "#FMP-4817", customer: "David Kim", device: "iPhone 14", issue: "Software Issue", status: "Completed", tech: "Alex J.", date: "Feb 6", price: "$19" },
];

const technicians = [
  { name: "Alex Johnson", specialty: "iPhone, Samsung", status: "Active", jobs: 12, rating: 4.9 },
  { name: "Maria Garcia", specialty: "All Brands", status: "Active", jobs: 18, rating: 4.8 },
  { name: "James Wilson", specialty: "Samsung, Xiaomi", status: "On Leave", jobs: 8, rating: 4.7 },
  { name: "Emily Brown", specialty: "iPhone, Oppo", status: "Active", jobs: 15, rating: 4.9 },
];

const statusColor: Record<string, string> = {
  "In Progress": "bg-amber-100 text-amber-700",
  "Pending": "bg-primary/10 text-primary",
  "Completed": "bg-accent/10 text-accent",
  "Active": "bg-accent/10 text-accent",
  "On Leave": "bg-muted text-muted-foreground",
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const sidebarItems = [
    { icon: Package, label: "Bookings", key: "bookings" },
    { icon: Users, label: "Technicians", key: "technicians" },
    { icon: Smartphone, label: "Devices", key: "devices" },
    { icon: Wrench, label: "Repairs & Pricing", key: "pricing" },
    { icon: BarChart3, label: "Reports", key: "reports" },
    { icon: Bell, label: "Notifications", key: "notifications" },
  ];

  return (
    <div className="min-h-screen bg-card">
      <Navbar />
      <div className="pt-20 flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden lg:block w-64 min-h-[calc(100vh-5rem)] bg-background border-r border-border/50 p-4"
        >
          <div className="space-y-1">
            {sidebarItems.map(item => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === item.key
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </motion.aside>

        {/* Main */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Package, label: "Total Bookings", value: "1,247", trend: "+12%", color: "text-primary bg-primary/10" },
              { icon: DollarSign, label: "Revenue", value: "$42,580", trend: "+8%", color: "text-accent bg-accent/10" },
              { icon: Users, label: "Active Techs", value: "18", trend: "+2", color: "text-amber-600 bg-amber-100" },
              { icon: TrendingUp, label: "Completion Rate", value: "96%", trend: "+3%", color: "text-purple-600 bg-purple-100" },
            ].map(stat => (
              <div key={stat.label} className="bg-background rounded-xl p-5 shadow-card border border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-accent">{stat.trend}</span>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Content based on active tab */}
          {activeTab === "bookings" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">All Bookings</h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search bookings..." className="pl-9 rounded-xl w-64" />
                  </div>
                  <Button variant="outline" className="rounded-xl"><Filter className="w-4 h-4 mr-1" /> Filter</Button>
                </div>
              </div>

              <div className="bg-background rounded-xl shadow-card border border-border/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        {["Booking ID", "Customer", "Device", "Issue", "Status", "Technician", "Date", "Price", ""].map(h => (
                          <th key={h} className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-4">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {allBookings.map((b, i) => (
                        <motion.tr
                          key={b.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                        >
                          <td className="px-5 py-4 font-mono text-sm text-foreground">{b.id}</td>
                          <td className="px-5 py-4 text-sm font-medium text-foreground">{b.customer}</td>
                          <td className="px-5 py-4 text-sm text-muted-foreground">{b.device}</td>
                          <td className="px-5 py-4 text-sm text-muted-foreground">{b.issue}</td>
                          <td className="px-5 py-4"><Badge className={`${statusColor[b.status]} border-0 text-xs`}>{b.status}</Badge></td>
                          <td className="px-5 py-4 text-sm text-muted-foreground">{b.tech}</td>
                          <td className="px-5 py-4 text-sm text-muted-foreground">{b.date}</td>
                          <td className="px-5 py-4 text-sm font-semibold text-foreground">{b.price}</td>
                          <td className="px-5 py-4"><Button size="sm" variant="ghost" className="rounded-lg"><Eye className="w-4 h-4" /></Button></td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "technicians" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Technicians</h2>
                <Button className="gradient-primary text-primary-foreground rounded-xl"><Plus className="w-4 h-4 mr-1" /> Add Technician</Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {technicians.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background rounded-xl p-5 shadow-card border border-border/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{t.name}</h4>
                          <Badge className={`${statusColor[t.status]} border-0 text-xs`}>{t.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{t.specialty}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-foreground">{t.jobs} jobs</div>
                        <div className="text-xs text-muted-foreground">⭐ {t.rating}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "reports" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-xl font-bold text-foreground mb-6">Reports</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {["Daily Report", "Weekly Report", "Monthly Report"].map(label => (
                  <div key={label} className="bg-background rounded-xl p-6 shadow-card border border-border/50 text-center">
                    <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">{label}</h4>
                    <p className="text-sm text-muted-foreground mb-4">Generate {label.toLowerCase()}</p>
                    <Button variant="outline" className="rounded-xl w-full">Generate</Button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {(activeTab === "devices" || activeTab === "pricing" || activeTab === "notifications") && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-background rounded-xl p-12 shadow-card border border-border/50 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {activeTab === "devices" && <Smartphone className="w-8 h-8 text-primary" />}
                {activeTab === "pricing" && <Wrench className="w-8 h-8 text-primary" />}
                {activeTab === "notifications" && <Bell className="w-8 h-8 text-primary" />}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 capitalize">{activeTab} Management</h3>
              <p className="text-muted-foreground">This section allows you to manage {activeTab}. Connect a backend to enable full functionality.</p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
