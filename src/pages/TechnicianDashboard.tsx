import { motion } from "framer-motion";
import {
  Package, CheckCircle2, Clock, MessageSquare, Wrench,
  MapPin, Phone, ChevronRight, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const assignedJobs = [
  {
    id: "#FMP-4821",
    customer: "John Smith",
    phone: "+1 555-1234",
    device: "iPhone 15 Pro Max",
    issue: "Screen Repair",
    status: "In Progress",
    address: "123 Main St, Apt 4B",
    time: "10:00 AM",
    date: "Feb 8, 2026",
    notes: "Cracked screen from drop, front camera working fine",
  },
  {
    id: "#FMP-4822",
    customer: "Sarah Lee",
    phone: "+1 555-5678",
    device: "Samsung Galaxy S24 Ultra",
    issue: "Battery Replacement",
    status: "Pending",
    address: "456 Oak Ave, Suite 12",
    time: "2:00 PM",
    date: "Feb 8, 2026",
    notes: "Battery draining fast, phone gets hot",
  },
  {
    id: "#FMP-4823",
    customer: "Mike Chen",
    phone: "+1 555-9012",
    device: "Xiaomi 14 Pro",
    issue: "Water Damage",
    status: "Pending",
    address: "789 Pine Rd",
    time: "4:00 PM",
    date: "Feb 8, 2026",
    notes: "Dropped in water, speaker not working",
  },
];

const statusColor: Record<string, string> = {
  "In Progress": "bg-amber-100 text-amber-700",
  "Pending": "bg-primary/10 text-primary",
  "Completed": "bg-accent/10 text-accent",
};

const TechnicianDashboard = () => (
  <div className="min-h-screen bg-card">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xl font-bold">AJ</div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome, Alex Johnson</h1>
              <p className="text-muted-foreground">Certified Mobile Technician · 4.9 ⭐</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: Package, label: "Today's Jobs", value: "3", color: "text-primary bg-primary/10" },
            { icon: Clock, label: "In Progress", value: "1", color: "text-amber-600 bg-amber-100" },
            { icon: CheckCircle2, label: "Completed Today", value: "2", color: "text-accent bg-accent/10" },
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

        {/* Jobs */}
        <h2 className="text-xl font-bold text-foreground mb-4">Assigned Jobs</h2>
        <div className="space-y-4">
          {assignedJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-card border border-border/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-sm text-muted-foreground">{job.id}</span>
                    <Badge className={`${statusColor[job.status]} border-0 text-xs`}>{job.status}</Badge>
                    <span className="text-sm text-muted-foreground ml-auto">{job.time} · {job.date}</span>
                  </div>

                  <h3 className="font-semibold text-foreground text-lg mb-1">{job.device} — {job.issue}</h3>

                  <div className="space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" /> {job.customer}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" /> {job.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" /> {job.address}
                    </div>
                  </div>

                  <div className="mt-3 p-3 bg-card rounded-lg">
                    <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Notes:</span> {job.notes}</p>
                  </div>
                </div>

                <div className="flex flex-row lg:flex-col gap-2">
                  {job.status === "Pending" && (
                    <Button size="sm" className="gradient-primary text-primary-foreground rounded-lg">
                      <Wrench className="w-4 h-4 mr-1" /> Start Repair
                    </Button>
                  )}
                  {job.status === "In Progress" && (
                    <Button size="sm" className="gradient-accent text-primary-foreground rounded-lg">
                      <CheckCircle2 className="w-4 h-4 mr-1" /> Mark Complete
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="rounded-lg">
                    <MessageSquare className="w-4 h-4 mr-1" /> Chat
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-lg">
                    <Phone className="w-4 h-4 mr-1" /> Call
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default TechnicianDashboard;
