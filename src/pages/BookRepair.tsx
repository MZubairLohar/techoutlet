import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Monitor,
  Battery,
  Zap,
  Droplets,
  Cpu,
  ArrowRight,
  ArrowLeft,
  Calendar as CheckCircle2,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { showErrorToast, showSuccessToast } from "@/lib/toast";

const issues = [
  { name: "Screen Repair", icon: Monitor, price: 49 },
  { name: "Battery Replacement", icon: Battery, price: 29 },
  { name: "Charging Port", icon: Zap, price: 25 },
  { name: "Water Damage", icon: Droplets, price: 59 },
  { name: "Software Issue", icon: Cpu, price: 19 },
  { name: "Other Issues", icon: Wrench, price: 19 },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const TOTAL_STEPS = 6;

const BookRepair = () => {
  const [step, setStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const totalPrice = selectedIssues.reduce((sum, issueName) => {
    const issue = issues.find((i) => i.name === issueName);
    return sum + (issue?.price || 0);
  }, 0);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const toggleIssue = (name: string) => {
    setSelectedIssues((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name],
    );
  };

  const slideVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };
  const [data, setData] = useState<{ brand: string; models: string[] }[]>([]);
  const [models, setModels] = useState<
    { name: string; image: string; isAvailable: Boolean }[]
  >([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/brands`)
      .then((res) => {
        // console.log("brands data", res.data.message);
        setData(res.data.message);
      })
      .catch((err) => {
        // console.log("error", err);
        return showErrorToast("Failed to load brands! Please refresh the page.");
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/models/${selectedBrand}`)
      .then((res) => {
        // console.log("models data", res.data.message);
        setModels(res.data.message);
      })
      .catch((err) => {
        // console.log("error", err);
        return showErrorToast("Failed to load models! Please refresh the page.");
      });
  }, [selectedBrand]);
  const [closedDays, setClosedDays] = useState<Date[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/getClosedDays`)
      .then((res) => {
        const formattedDates = res.data.message.map((item: any) => {
          const d = new Date(item.date);
          d.setHours(0, 0, 0, 0); // normalize
          return d;
        });

        setClosedDays(formattedDates);
      })
      .catch((err) => {
        // console.log("error", err);
        return showErrorToast("Failed to load closed days! Please refresh the page.");
      });
  }, []);

  const [dataBooking, setDataBooking] = useState([]);
  const handleConfirmBooking = () => {
    // if () return;
    if (
      !selectedDate ||
      !selectedTime ||
      !customerInfo.name ||
      !customerInfo.email ||
      !customerInfo.phone ||
      !selectedBrand ||
      !selectedModel
    )
      return showErrorToast("Please fill all required fields");
    // 1️⃣ Date ko YYYY-MM-DD me convert karo
    const datePart = selectedDate.toISOString().split("T")[0];

    // 2️⃣ Time ko split karo (10:00 AM)
    const [time, modifier] = selectedTime.split(" ");
    const [hourStr, minutes] = time.split(":");

    let hourNumber = Number(hourStr); // string → number

    // 3️⃣ 12 hour → 24 hour conversion
    if (modifier === "PM" && hourNumber !== 12) {
      hourNumber += 12;
    }

    if (modifier === "AM" && hourNumber === 12) {
      hourNumber = 0;
    }

    // 4️⃣ 2 digit format me convert karo
    const formattedTime = `${hourNumber
      .toString()
      .padStart(2, "0")}:${minutes}:00`;

    // 5️⃣ Final ISO DateTime
    const finalDateTime = new Date(`${datePart}T${formattedTime}`);

    const bookingData = {
      brand: selectedBrand,
      model: selectedModel,
      issues: selectedIssues,
      description,
      bookingDate: finalDateTime, // ✅ MongoDB Date type
      customerInfo,
      totalPrice,
    };

    // console.log("✅ Booking Data:", bookingData);
    // showSuccessToast("Booking successful! We will contact you soon.");
    axios
      .post(`${BASE_URL}/sendRepairingRequest`, {
        name: customerInfo.name,
        email: customerInfo.email,
        phoneNumber: customerInfo.phone,
        mobileType: `${selectedBrand} ${selectedModel}`,
        problem: selectedIssues.join(", "),
        comment: description,
        AppointmentTime: finalDateTime,
      })
      .then((res) => {
        // console.log("Booking successful", res.data.message);
        showSuccessToast("Booking successful! We will contact you soon.");
        setDataBooking(res.data.message);
      })
      .catch(() => {
        // console.log("Booking error", err);
        showErrorToast("Booking failed! Please try again.");
      });

    // console.log("Booking response", data);
    next();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-muted-foreground">
                Step {step} of {TOTAL_STEPS}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round((step / TOTAL_STEPS) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="bg-background rounded-2xl border border-border/50 shadow-card p-6 lg:p-10"
            >
              {/* Step 1: Brand & Model */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Select Your Device
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Choose your device brand and model
                  </p>

                  <div className="mb-6">
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Brand
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {data.map((b) => (
                        <button
                          key={b.brand}
                          onClick={() => {
                            setSelectedBrand(b.brand);
                            setSelectedModel("");
                            // console.log("selected brand", b.brand);
                          }}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            selectedBrand === b.brand
                              ? "border-primary bg-primary/5 shadow-soft"
                              : "border-border hover:border-primary/30 hover:bg-muted"
                          }`}
                        >
                          <Smartphone
                            className={`w-6 h-6 mx-auto mb-2 ${selectedBrand === b.brand ? "text-primary" : "text-muted-foreground"}`}
                          />
                          <span className="text-xs font-medium">{b.brand}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {models && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Model
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {models.map((m) => (
                          <button
                            key={m.name}
                            onClick={() => setSelectedModel(m.name)}
                            className={`p-3 w-28 rounded-xl border text-left text-sm transition-all ${
                              selectedModel === m.name
                                ? "border-primary bg-primary/5 text-primary font-medium"
                                : "border-border hover:border-primary/30 text-foreground"
                            } ${!m.isAvailable && "line-through text-red-500 cursor-not-allowed hover:border-border"}`}
                          >
                            <img
                              src={m.image}
                              alt={m.name}
                              className="w-20 h-10 object-contain mb-2"
                            />
                            <div className="ml-3">{m.name} </div>
                            {m.isAvailable ? (
                              <span className="text-xs text-green-500 ml-2">
                                Available
                              </span>
                            ) : (
                              <span className="text-xs text-red-500 ml-2">
                                Unavailable
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Step 2: Issues */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    What's Wrong?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Select the issue(s) with your device
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {issues.map((issue) => (
                      <button
                        key={issue.name}
                        onClick={() => toggleIssue(issue.name)}
                        className={`p-4 rounded-xl border-2 text-left flex items-center gap-3 transition-all ${
                          selectedIssues.includes(issue.name)
                            ? "border-primary bg-primary/5 shadow-soft"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            selectedIssues.includes(issue.name)
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <issue.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-foreground">
                            {issue.name}
                          </div>
                          {/* <div className="text-xs text-muted-foreground">From ${issue.price}</div> */}
                        </div>
                        {selectedIssues.includes(issue.name) && (
                          <CheckCircle2 className="w-5 h-5 text-primary ml-auto" />
                        )}
                      </button>
                    ))}
                  </div>
                  <Textarea
                    placeholder="Describe the issue in detail (optional)..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
              )}

              {/* Step 4: Date & Time */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Pick Date & Time
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Select your preferred appointment slot
                  </p>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="border border-border rounded-xl p-4">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        // disabled={(date) => date < new Date()}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);

                          const checkDate = new Date(date);
                          checkDate.setHours(0, 0, 0, 0);

                          return (
                            checkDate < today ||
                            closedDays.some(
                              (closed) =>
                                closed.getTime() === checkDate.getTime(),
                            )
                          );
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Available Slots
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                              selectedTime === t
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-primary/30 text-foreground"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Customer Info */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Your Information
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Enter your contact details
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Full Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        className="rounded-xl h-12"
                        value={customerInfo.name}
                        onChange={(e) =>
                          setCustomerInfo((p) => ({
                            ...p,
                            name: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">
                          Phone
                        </label>
                        <Input
                          placeholder="+1 (555) 000-0000"
                          className="rounded-xl h-12"
                          value={customerInfo.phone}
                          onChange={(e) =>
                            setCustomerInfo((p) => ({
                              ...p,
                              phone: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">
                          Email
                        </label>
                        <Input
                          placeholder="john@example.com"
                          type="email"
                          className="rounded-xl h-12"
                          value={customerInfo.email}
                          onChange={(e) =>
                            setCustomerInfo((p) => ({
                              ...p,
                              email: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Address
                      </label>
                      <Textarea
                        placeholder="Enter your address"
                        className="rounded-xl"
                        value={customerInfo.address}
                        onChange={(e) =>
                          setCustomerInfo((p) => ({
                            ...p,
                            address: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Summary */}
              {step === 5 && (
                <div className="max-w-xl mx-auto">
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    Booking Summary
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Review your details before confirmation
                  </p>

                  <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                    <div className="grid gap-3 text-sm">
                      {[
                        {
                          label: "Device",
                          value: `${selectedBrand} ${selectedModel}`,
                        },
                        { label: "Issues", value: selectedIssues.join(", ") },
                        // { label: "Service", value: serviceType },
                        {
                          label: "Date & Time",
                          value: `${selectedDate?.toLocaleDateString()} • ${selectedTime}`,
                        },
                        { label: "Name", value: customerInfo.name },
                        {
                          label: "Contact",
                          value: `${customerInfo.phone}`,
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex justify-between gap-4"
                        >
                          <span className="text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="font-medium text-foreground text-right truncate">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 8: Confirmation */}
              {step === 6 && dataBooking && (
                <div className="min-h-[60vh] flex items-center justify-center px-2">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-lg bg-card/80 backdrop-blur-xl border border-border 
                 rounded-3xl shadow-2xl p-4 text-center relative overflow-hidden"
                  >
                    {/* Soft Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 pointer-events-none" />

                    {/* Success Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                      }}
                      className="relative w-24 h-24 rounded-full gradient-accent 
                   flex items-center justify-center mx-auto mb-8 shadow-lg"
                    >
                      <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
                    </motion.div>

                    {/* Heading */}
                    <h2 className="relative text-3xl font-bold text-foreground mb-4">
                      Booking Confirmed
                    </h2>

                    {/* Message */}
                    <p className="relative text-muted-foreground mb-4">
                      Your repair has been scheduled successfully.
                    </p>

                    <p className="relative text-muted-foreground mb-10">
                      You will receive confirmation details via email shortly.
                    </p>

                    {/* Button */}
                    <Link to="/">
                      <Button
                        className="relative rounded-full px-10 py-6 text-base 
                     gradient-accent text-primary-foreground 
                     shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Back to Home
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {step < TOTAL_STEPS && (
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={prev}
                disabled={step === 1}
                className="rounded-full px-6"
              >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              {/* <Button
                onClick={next}

                className="gradient-primary text-primary-foreground rounded-full px-6 shadow-soft"
              >
                {step === TOTAL_STEPS - 1 ? "Confirm Booking" : "Continue"}{" "}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button> */}
              <Button
                onClick={step === TOTAL_STEPS - 1 ? handleConfirmBooking : next}
                className="gradient-primary text-primary-foreground rounded-full px-6 shadow-soft"
              >
                {step === TOTAL_STEPS - 1 ? "Confirm Booking" : "Continue"}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookRepair;
