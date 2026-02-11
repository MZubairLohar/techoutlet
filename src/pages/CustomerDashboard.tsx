import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Smartphone, Clock, CheckCircle2, XCircle, MapPin, Calendar,
  ArrowRight, RotateCcw, ChevronRight, Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bookings = [
  {
    id: "#FMP-2026-4821",
    device: "iPhone 15 Pro Max",
    issue: "Screen Repair",
    status: "In Progress",
    technician: "Alex Johnson",
    date: "Feb 8, 2026",
    time: "10:00 AM",
    price: "$49",
    progress: 60,
  },
  {
    id: "#FMP-2026-4799",
    device: "Samsung Galaxy S24",
    issue: "Battery Replacement",
    status: "Pending",
    technician: "Maria Garcia",
    date: "Feb 10, 2026",
    time: "2:00 PM",
    price: "$29",
    progress: 10,
  },
];

const history = [
  { id: "#FMP-2025-3201", device: "iPhone 14 Pro", issue: "Water Damage", status: "Completed", date: "Jan 15, 2026", price: "$59" },
  { id: "#FMP-2025-2980", device: "Xiaomi 13T Pro", issue: "Software Issue", status: "Completed", date: "Dec 20, 2025", price: "$19" },
  { id: "#FMP-2025-2811", device: "Samsung Galaxy S23", issue: "Charging Port", status: "Cancelled", date: "Nov 5, 2025", price: "$25" },
];

const statusColor: Record<string, string> = {
  "In Progress": "bg-amber-100 text-amber-700",
  "Pending": "bg-primary/10 text-primary",
  "Completed": "bg-accent/10 text-accent",
  "Cancelled": "bg-destructive/10 text-destructive",
};

const CustomerDashboard = () => (
  <div className="min-h-screen bg-card">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">My Dashboard</h1>
          <p className="text-muted-foreground mt-1">Track your repairs and manage bookings</p>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Package, label: "Active Repairs", value: "2", color: "text-primary bg-primary/10" },
            { icon: CheckCircle2, label: "Completed", value: "5", color: "text-accent bg-accent/10" },
            { icon: Clock, label: "Pending", value: "1", color: "text-amber-600 bg-amber-100" },
            { icon: XCircle, label: "Cancelled", value: "1", color: "text-destructive bg-destructive/10" },
          ].map(stat => (
            <div key={stat.label} className="bg-background rounded-xl p-5 shadow-card border border-border/50">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="bg-background border border-border/50 rounded-xl p-1">
            <TabsTrigger value="active" className="rounded-lg">Active Bookings</TabsTrigger>
            <TabsTrigger value="history" className="rounded-lg">History</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {bookings.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-card border border-border/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm text-muted-foreground">{b.id}</span>
                      <Badge className={`${statusColor[b.status]} border-0 text-xs`}>{b.status}</Badge>
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">{b.device}</h3>
                    <p className="text-sm text-muted-foreground">{b.issue} · {b.date} at {b.time}</p>
                    <p className="text-sm text-muted-foreground mt-1">Technician: <span className="font-medium text-foreground">{b.technician}</span></p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xl font-bold text-foreground">{b.price}</span>
                    <div className="w-40">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-primary">{b.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full gradient-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${b.progress}%` }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" className="rounded-lg text-xs">
                        <RotateCcw className="w-3 h-3 mr-1" /> Reschedule
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-lg text-xs text-destructive border-destructive/30">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="history" className="space-y-3">
            {history.map((h, i) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-xl p-5 shadow-card border border-border/50 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-sm text-muted-foreground">{h.id}</span>
                    <Badge className={`${statusColor[h.status]} border-0 text-xs`}>{h.status}</Badge>
                  </div>
                  <h4 className="font-medium text-foreground">{h.device} · {h.issue}</h4>
                  <p className="text-xs text-muted-foreground">{h.date}</p>
                </div>
                <span className="font-semibold text-foreground">{h.price}</span>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
    <Footer />
  </div>
);

export default CustomerDashboard;
