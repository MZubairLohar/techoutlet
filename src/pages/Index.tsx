import { motion, Variants } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Monitor,
  Battery,
  Droplets,
  ArrowRight,
  Shield,
  Award,
  Users,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  UserCog,
  Zap,
  Wrench,
  CheckCircle,
} from "lucide-react";
// import {
//   Smile,
//   ShieldCheck,
//   BadgeDollarSign,
//   Clock,
//   Star,
// } from "lucide-react";
// import { Smartphone, Apple, BadgeCheck, Cpu, Radio } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import heroImage from "@/assets/hero-repair.jpg";
// import repairProcess from "@/assets/repair-process.jpg";
// import happyCustomer from "@/assets/happy-customer.jpg";
// import { BASE_URL } from "@/Base_URL/Base_URL";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { showErrorToast } from "@/lib/toast";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.6,
//       ease: [0.25, 0.46, 0.45, 0.94] as const,
//     },
//   }),
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08 } },
// };

// const brands = [
//   { name: "iPhone", icon: Apple },        // Apple brand
//   { name: "Samsung", icon: Smartphone }, // Android phone
//   { name: "Xiaomi", icon: Cpu },         // tech / hardware brand
//   { name: "Oppo", icon: Radio },         // communication device feel
//   { name: "Vivo", icon: BadgeCheck },    // premium / trusted feel
// ];

// const stats = [
//   { icon: Shield, value: "50K+", label: "Repairs Done" },
//   { icon: Clock, value: "30min", label: "Avg Repair Time" },
//   { icon: Award, value: "99%", label: "Satisfaction" },
//   { icon: Users, value: "200+", label: "Technicians" },
// ];

// const testimonials = [
//   {
//     name: "Sarah M.",
//     role: "iPhone User",
//     rating: 5,
//     text: "Incredible service! My screen was replaced in under an hour. The technician was professional and friendly.",
//   },
//   {
//     name: "David K.",
//     role: "Samsung User",
//     rating: 5,
//     text: "Best repair service I've ever used. Fair pricing and excellent quality. My phone looks brand new!",
//   },
//   {
//     name: "Priya S.",
//     role: "Xiaomi User",
//     rating: 5,
//     text: "The booking process was so easy and the technician came right to my office. Highly recommend!",
//   },
//   {
//     name: "James L.",
//     role: "Oppo User",
//     rating: 4,
//     text: "Quick turnaround and great communication throughout the process. Will definitely use again.",
//   },
// ];

// const howItWorks = [
//   {
//     step: "01",
//     title: "Book Online",
//     desc: "Book your repair appointment online and ensure fast, reliable service for your mobile device",
//   },
//   {
//     step: "02",
//     title: "A confirmation email has been sent to you",
//     desc: "We’ve sent a confirmation email to you. Check your gmail to see the details of your booking.",
//   },
//   {
//     step: "03",
//     title: "You have come to us",
//     desc: "We’re glad you’re here! Let’s get your device repaired quickly and safely",
//   },
//   {
//     step: "04",
//     title: "Good as New",
//     desc: "Get your phone back to perfect condition — good as new",
//   },
// ];

// const Index = () => {
//   const navigate = useNavigate();
//   const navigtion = () => {
//     navigate("/book");
//   };

//   const [services, setServices] = useState<any[]>([]);
//   const fetchServices = async () => {
//     const res = await axios.get(`${BASE_URL}/getAllServices`);
//     setServices(res.data.message);
//     // console.log("services", res.data.message);
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setForm({
//       ...form,
//       [e.target.placeholder.includes("First")
//         ? "firstName"
//         : e.target.placeholder.includes("Last")
//           ? "lastName"
//           : e.target.placeholder.includes("Email")
//             ? "email"
//             : e.target.placeholder.includes("Phone")
//               ? "phoneNumber"
//               : "message"]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await axios.post(`${BASE_URL}/contact`, {
//         firstName: form.firstName,
//         lastName: form.lastName,
//         email: form.email,
//         phoneNumber: Number(form.phoneNumber),
//         message: form.message,
//       });

//       alert("Message sent successfully ✅");
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//         message: "",
//       });
//     } catch (err: any) {
//       // console.error(err.response?.data || err.message);
//       showErrorToast("Failed to send message");
//     }
//   };

//   const repairTypes = [
//   {
//     name: "Stay Happy",
//     icon: Smile,              // happiness / satisfaction
//     price: "From $49",
//     color: "bg-primary/10 text-primary",
//   },
//   {
//     name: "Certified Grade-A Parts",
//     icon: ShieldCheck,        // certified / trusted / quality
//     price: "From $29",
//     color: "bg-accent/10 text-accent",
//   },
//   {
//     name: "Best Price Guaranteed",
//     icon: BadgeDollarSign,    // best price / money value
//     price: "From $25",
//     color: "bg-amber-100 text-amber-600",
//   },
//   {
//     name: "Same-Day Repair",
//     icon: Clock,              // speed / same day
//     price: "From $59",
//     color: "bg-sky-100 text-sky-600",
//   },
//   {
//     name: "Excellent Rated On Trustpilot",
//     icon: Star,               // rating / reviews
//     price: "From $19",
//     color: "bg-purple-100 text-purple-600",
//   },
// ];
//   return (
//     <div className="min-h-screen bg-background overflow-hidden">
//       <Navbar />
//       {/* Hero Section */}
//       <section
//         id="hero"
//         className="relative min-h-screen flex items-center pt-20"
//       >
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
//           <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
//           <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
//         </div>

//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={staggerContainer}
//             >
//               {/* <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
//                 <CheckCircle2 className="w-4 h-4" />
//                 Trusted by 50,000+ customers
//               </motion.div> */}
//               <motion.h1
//                 variants={fadeUp}
//                 custom={1}
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
//               >
//                 {/* Book Your <br />
//                 <span className="text-gradient">Mobile Repair</span> <br />
//                 Today */}

//                 <span className="text-gradient">Your Phone Fixed</span> <br />
//                 Today!

//               </motion.h1>
//               <motion.p
//                 variants={fadeUp}
//                 custom={2}
//                 className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
//               >
//                 From cracked screens to software glitches, we handle it all. Quick, affordable, and professional mobile repair — right when you need it.
//               </motion.p>
//               <motion.div
//                 variants={fadeUp}
//                 custom={3}
//                 className="mt-8 flex flex-wrap gap-4"
//               >
//                 <Link to="/book">
//                   <Button
//                     size="lg"
//                     className="gradient-primary text-primary-foreground rounded-full px-8 shadow-soft hover:shadow-lg transition-all text-base h-14"
//                   >
//                     Book Now <ArrowRight className="w-5 h-5 ml-1" />
//                   </Button>
//                 </Link>
//                 {/* <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base">
//                   View Pricing
//                 </Button> */}
//               </motion.div>
//               {/* <motion.div
//                 variants={fadeUp}
//                 custom={4}
//                 className="mt-10 flex items-center gap-6"
//               >
//                 {stats.slice(0, 3).map((stat) => (
//                   <div key={stat.label} className="text-center">
//                     <div className="text-2xl font-bold text-foreground">
//                       {stat.value}
//                     </div>
//                     <div className="text-xs text-muted-foreground">
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}
//               </motion.div> */}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, x: 50 }}
//               animate={{ opacity: 1, scale: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="relative hidden lg:block"
//             >
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src="/hero-pic.jpg"
//                   alt="Mobile phone repair"
//                   className="w-full h-[500px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
//               </div>
//               {/* <motion.div
//                 animate={{ y: [-5, 5, -5] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-card flex items-center gap-3"
//               >
//                 <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
//                   <Shield className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-sm">1-Month Warranty</div>
//                   <div className="text-xs text-muted-foreground">
//                     On all repairs
//                   </div>
//                 </div>
//               </motion.div> */}
//               <motion.div
//                 animate={{ y: [5, -5, 5] }}
//                 transition={{ duration: 3, repeat: Infinity, delay: 1 }}
//                 className="absolute -top-4 -right-4 bg-background rounded-2xl p-4 shadow-card flex items-center gap-3"
//               >
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3].map((i) => (
//                     <div
//                       key={i}
//                       className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"
//                     />
//                   ))}
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-1">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star
//                         key={i}
//                         className="w-3 h-3 fill-amber-400 text-amber-400"
//                       />
//                     ))}
//                   </div>
//                   <div className="text-xs text-muted-foreground">
//                     4.9/5 Rating
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Brands */}
//       <section className="py-16 bg-card">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="text-center mb-10"
//           >
//             <motion.p
//               variants={fadeUp}
//               className="text-sm text-muted-foreground font-medium uppercase tracking-wider"
//             >
//               We repair all major brands
//             </motion.p>
//           </motion.div>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="flex flex-wrap justify-center gap-6"
//           >
//            {brands.map((brand, i) => {
//   const Icon = brand.icon;

//   return (
//     <motion.div
//       key={brand.name}
//       onClick={() => navigate("/book")}
//       variants={fadeUp}
//       custom={i}
//       whileHover={{ scale: 1.05, y: -4 }}
//       className="flex flex-col items-center gap-2 px-8 py-6 bg-background rounded-2xl shadow-card hover:shadow-soft transition-all cursor-pointer min-w-[140px]"
//     >
//       <Icon size={32} />
//       <span className="text-sm font-medium text-foreground">
//         {brand.name}
//       </span>
//     </motion.div>
//   );
// })}

//           </motion.div>
//         </div>
//       </section>
//       {/* Repair Types */}
//       <section className="py-20 lg:py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="text-center mb-14"
//           >
//             <motion.span
//               variants={fadeUp}
//               className="text-sm font-medium text-primary uppercase tracking-wider"
//             >
//               Our Services
//             </motion.span>
//             <motion.h2
//               variants={fadeUp}
//               custom={1}
//               className="text-3xl lg:text-4xl font-bold mt-3 text-foreground"
//             >
//               Why Choose Tech-Outlet Repairs?
//             </motion.h2>
//             <motion.p
//               variants={fadeUp}
//               custom={2}
//               className="mt-4 text-muted-foreground max-w-6xl mx-auto"
//             >
//               Phones, tablets, or laptops giving you trouble? We'll repair it. Send us your phone from anywhere in the UK or visit us our shop, and we'll fix it fast. Book online for free, whether you've got a broken iPad, laptop, or mobile phone, our expert team fixes it all and post it back to you on the same day. Free send-back delivery across London, Essex, and the entire UK! We don't just repair – we rescue your tech, providing lightning-fast service with a smile. From screen repair, battery replacements to software issues we've got you covered with guaranteed quality and friendly support.
//             </motion.p>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6"
//           >
//             {repairTypes.map((type, i) => (
//               <motion.div
//                 key={type.name}
//                 variants={fadeUp}
//                 custom={i}
//                 whileHover={{ scale: 1.03, y: -6 }}
//                 className="bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all cursor-pointer group border border-border/50"
//               >
//                 <div
//                   className={`w-14 h-14 rounded-xl ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
//                 >
//                   <type.icon className="w-7 h-7" />
//                 </div>
//                 <h3 className="font-semibold text-foreground text-sm">
//                   {type.name}
//                 </h3>
//                 {/* <p className="text-xs text-muted-foreground mt-1">{type.price}</p> */}
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 lg:py-28 bg-card">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <span className="text-sm font-medium text-primary uppercase tracking-wider">
//                 We Fix, Any Device
//               </span>
//               <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-foreground">
//                 Expert Mobile Phone & IPad Repair Services in London & UK
//               </h2>
//               {/* <div className="mt-8 space-y-6">
//                 {howItWorks.map((item, i) => (
//                   <motion.div
//                     key={item.step}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.15 }}
//                     className="flex gap-4 items-start group"
//                   >
//                     <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
//                       {item.step}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-foreground">
//                         {item.title}
//                       </h4>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div> */}
//                <div className="mt-8 space-y-6">

//                   <motion.div

//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 1 * 0.15 }}
//                     className="flex gap-4 items-start group"
//                   >
//                     <div>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         At Tech Outlet Repairs, we specialise in fast and reliable phone repair for all smartphone models, including iPhone screen replacements (all models), battery replacements, back glass repairs, software updates, and more. We also provide expert repairs for MacBooks, HP and Dell laptops, samsung tablet repairs, and all iPad models across generations.
//                       </p>
//                        <p className="text-sm text-muted-foreground mt-1">
//                         Explore our website for affordable, high-quality repairs, sales of refurbished devices, and premium accessories. Trust us for all your device needs, keeping your tech in top shape in one convenient location!
//                       </p>
//                     </div>
//                   </motion.div>

//               </div>
//               <Link to="/book">
//                 <Button className="mt-8 gradient-primary text-primary-foreground rounded-full px-8 shadow-soft">
//                   Book Now <ArrowRight className="w-4 h-4 ml-1" />
//                 </Button>
//               </Link>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="relative"
//             >
//               <div className="rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src="/outlet-pic.jpeg"
//                   alt="Repair process"
//                   className="w-full h-[450px] object-cover"
//                 />
//               </div>
//               <motion.div
//                 animate={{ y: [-8, 8, -8] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute -bottom-6 right-6 bg-background rounded-2xl p-5 shadow-card"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
//                     <Clock className="w-5 h-5 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <div className="font-bold text-2xl text-foreground">
//                       30 min
//                     </div>
//                     <div className="text-xs text-muted-foreground">
//                       Average repair time
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="gradient-primary rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
//             <div className="relative z-10">
//               <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
//                 Need a Repair? We've Got You Covered
//               </h2>
//               <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
//                 Explore our website for affordable, high-quality repairs, sales of refurbished devices, and premium accessories.
//               </p>
//               <Link to="/book">
//                 <Button
//                   size="lg"
//                   className="mt-8 bg-background text-foreground hover:bg-background/90 rounded-full px-10 h-14 text-base font-semibold shadow-lg"
//                 >
//                   Book Your Repair Now <ArrowRight className="w-5 h-5 ml-2" />
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       {/* <section className="py-20 lg:py-28 bg-card">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="text-center mb-14"
//           >
//             <motion.span
//               variants={fadeUp}
//               className="text-sm font-medium text-primary uppercase tracking-wider"
//             >
//               Testimonials
//             </motion.span>
//             <motion.h2
//               variants={fadeUp}
//               custom={1}
//               className="text-3xl lg:text-4xl font-bold mt-3 text-foreground"
//             >
//               What Our Customers Say
//             </motion.h2>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {testimonials.map((t, i) => (
//               <motion.div
//                 key={t.name}
//                 variants={fadeUp}
//                 custom={i}
//                 whileHover={{ y: -6 }}
//                 className="bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all border border-border/50"
//               >
//                 <div className="flex gap-1 mb-3">
//                   {Array.from({ length: t.rating }).map((_, j) => (
//                     <Star
//                       key={j}
//                       className="w-4 h-4 fill-amber-400 text-amber-400"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-sm text-muted-foreground leading-relaxed mb-4">
//                   {t.text}
//                 </p>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
//                     {t.name[0]}
//                   </div>
//                   <div>
//                     <div className="font-medium text-sm text-foreground">
//                       {t.name}
//                     </div>
//                     <div className="text-xs text-muted-foreground">
//                       {t.role}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section> */}
//       {/* Testimonials */}

// <section className="py-20 lg:py-28 bg-card">
//   <div className="container mx-auto px-4 lg:px-8">
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={staggerContainer}
//       className="text-center mb-14"
//     >
//       <motion.span
//         variants={fadeUp}
//         className="text-sm font-medium text-primary uppercase tracking-wider"
//       >
//         Testimonials
//       </motion.span>

//       <motion.h2
//         variants={fadeUp}
//         custom={1}
//         className="text-3xl lg:text-4xl font-bold mt-3 text-foreground"
//       >
//         What Our Customers Say
//       </motion.h2>
//     </motion.div>

//     {/* Scrolling Container */}
//     <div className="overflow-hidden relative">
//       <motion.div
//         variants={marquee}
//         animate="animate"
//         whileHover={{ animationPlayState: "paused" }}
//         className="flex gap-6 "
//       >
//         {[...testimonials, ...testimonials].map((t, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ y: -6 }}
//             className="bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all border border-border/50 min-w-[320px]"
//           >
//             {/* Stars */}
//             <div className="flex gap-1 mb-3">
//               {Array.from({ length: t.rating }).map((_, j) => (
//                 <Star
//                   key={j}
//                   className="w-4 h-4 fill-amber-400 text-amber-400"
//                 />
//               ))}
//             </div>

//             {/* Text */}
//             <p className="text-sm text-muted-foreground leading-relaxed mb-4">
//               {t.text}
//             </p>

//             {/* User */}
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
//                 {t.name[0]}
//               </div>
//               <div>
//                 <div className="font-medium text-sm text-foreground">
//                   {t.name}
//                 </div>
//                 <div className="text-xs text-muted-foreground">
//                   {t.role}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </div>
// </section>

//       {/* Stats */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="grid grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={stat.label}
//                 variants={fadeUp}
//                 custom={i}
//                 className="text-center p-8 rounded-2xl bg-card shadow-card border border-border/50"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
//                   <stat.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <div className="text-3xl font-bold text-foreground">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-muted-foreground mt-1">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 lg:py-28 bg-card">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <span className="text-sm font-medium text-primary uppercase tracking-wider">
//                 Get In Touch
//               </span>
//               <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-foreground">
//                 Contact Us
//               </h2>
//               <p className="mt-4 text-muted-foreground">
//                 Have questions? Reach out to us and we'll get back to you as
//                 soon as possible.
//               </p>
//               <div className="mt-8 space-y-1">
//                 {[
//                   { icon: Mail, text: "info@techout.uk" },
//                   { icon: Phone, text: "020 8062 0553" },
//                   { icon: MapPin, text: "260 Tottenham Ct Rd, London W1T 7 RF " },
//                 ].map(({ icon: Icon, text }) => (
//                   <div
//                     key={text}
//                     className="flex items-center gap-3 text-muted-foreground"
//                   >
//                     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
//                       <Icon className="w-5 h-5 text-primary" />
//                     </div>
//                     <span className="text-sm">{text}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-8 rounded-2xl overflow-hidden">
//                 {/* <img src={happyCustomer} alt="Happy customer" className="w-full h-64 object-cover rounded-2xl" /> */}
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6742975501626!2d-0.13135629999999998!3d51.517439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad8cc23e4a7%3A0x6f9bcd0432a8f965!2s260%20Tottenham%20Court%20Road%2C%20London%20W1T%207RF%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
//                   className="h-64 w-full"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="bg-background rounded-2xl p-8 shadow-card border border-border/50 h-full"
//             >
//               <h3 className="text-xl font-semibold text-foreground mb-6">
//                 Send us a message
//               </h3>
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 <div className="grid grid-cols-2 gap-4">
//                   <input
//                     placeholder="First Name"
//                     value={form.firstName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
//                   />
//                   <input
//                     placeholder="Last Name"
//                     value={form.lastName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
//                   />
//                 </div>
//                 <input
//                   placeholder="Email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
//                 />
//                 <input
//                   placeholder="Phone"
//                   type="tel"
//                   value={form.phoneNumber}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
//                 />
//                 <textarea
//                   placeholder="Your message..."
//                   rows={4}
//                   value={form.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
//                 />
//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full gradient-primary text-primary-foreground rounded-full h-12 shadow-soft"
//                 >
//                   {loading ? "Sending..." : "Send Message"}
//                   <ArrowRight className="w-4 h-4 ml-1" />
//                 </Button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Index;
// const marquee: Variants = {
//   animate: {
//     x: ["0%", "-50%"],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 10,
//         ease: "linear",
//       },
//     },
//   },
// };

// Duplicate import block removed – imports are defined at the top of the file.
import { Smile, ShieldCheck, BadgeDollarSign, Clock, Star } from "lucide-react";
import {
  Smartphone,
  Apple,
  Laptop,
  HardDrive,
  BadgeCheck,
  Cpu,
  Radio,
} from "lucide-react";
import { SiDell, SiHp, SiLenovo, SiAsus, SiAcer } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-repair.jpg";
import repairProcess from "@/assets/repair-process.jpg";
import happyCustomer from "@/assets/happy-customer.jpg";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { useEffect, useState } from "react";
import axios from "axios";
import { showSuccessToast } from "@/lib/toast";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const brands = [
  // { name: "iPhone", icon: Apple }, // Apple brand
  // { name: "Samsung", icon: Smartphone }, // Android phone
  // { name: "Xiaomi", icon: Cpu }, // tech / hardware brand
  // { name: "Oppo", icon: Radio }, // communication device feel
  // { name: "Vivo", icon: BadgeCheck }, // premium / trusted feel

  //  { icon: Laptop, name: "Dell" },
  //   { icon: Monitor, name: "HP" },
  //   { icon: Laptop, name: "Lenovo" },
  //   { icon: Cpu, name: "ASUS" },
  //   { icon: HardDrive, name: "Acer" },

  // { icon: SiDell, name: "Dell" },
  // { icon: SiHp, name: "HP" },
  // { icon: SiLenovo, name: "Lenovo" },
  // { icon: SiAsus, name: "ASUS" },
  // { icon: SiAcer, name: "Acer" },
];

const stats = [
  { icon: Shield, value: "50K+", label: "Repairs Done" },
  { icon: Clock, value: "30min", label: "Avg Repair Time" },
  { icon: Award, value: "99%", label: "Satisfaction" },
  { icon: Users, value: "200+", label: "Technicians" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "iPhone User",
    rating: 5,
    text: "Incredible service! My screen was replaced in under an hour. The technician was professional and friendly.",
  },
  {
    name: "David K.",
    role: "Samsung User",
    rating: 5,
    text: "Best repair service I've ever used. Fair pricing and excellent quality. My phone looks brand new!",
  },
  {
    name: "Priya S.",
    role: "Xiaomi User",
    rating: 5,
    text: "The booking process was so easy and the technician came right to my office. Highly recommend!",
  },
  {
    name: "James L.",
    role: "Oppo User",
    rating: 4,
    text: "Quick turnaround and great communication throughout the process. Will definitely use again.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Book Online",
    desc: "Book your repair appointment online and ensure fast, reliable service for your mobile device",
  },
  {
    step: "02",
    title: "A confirmation email has been sent to you",
    desc: "We’ve sent a confirmation email to you. Check your gmail to see the details of your booking.",
  },
  {
    step: "03",
    title: "You have come to us",
    desc: "We’re glad you’re here! Let’s get your device repaired quickly and safely",
  },
  {
    step: "04",
    title: "Good as New",
    desc: "Get your phone back to perfect condition — good as new",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const navigtion = () => {
    navigate("/book");
  };

  const [services, setServices] = useState<any[]>([]);
  const fetchServices = async () => {
    const res = await axios.get(`${BASE_URL}/getAllServices`);
    setServices(res.data.message);
    // console.log("services", res.data.message);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.placeholder.includes("First")
        ? "firstName"
        : e.target.placeholder.includes("Last")
          ? "lastName"
          : e.target.placeholder.includes("Email")
            ? "email"
            : e.target.placeholder.includes("Phone")
              ? "phoneNumber"
              : "message"]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_URL}/contact`, {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phoneNumber: Number(form.phoneNumber),
        message: form.message,
      });

      showSuccessToast("Message sent successfully");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (err: any) {
      // console.error(err.response?.data || err.message);
      // showErrorToast("Failed to send message");
    }
  };

  const repairTypes = [
    {
      name: "5-Star Google Rating",
      icon: Star, // happiness / satisfaction
      price: "From $49",
      color: "bg-primary/10 text-primary",
    },
    {
      name: "Same-Day Repairs",
      icon: Zap, // certified / trusted / quality
      price: "From $29",
      color: "bg-accent/10 text-accent",
    },
    {
      name: "Repair + Accessories",
      icon: Wrench, // best price / money value
      price: "From $25",
      color: "bg-amber-100 text-amber-600",
    },
    {
      name: "100% Satisfied Customers",
      icon: Smile, // speed / same day
      price: "From $59",
      color: "bg-sky-100 text-sky-600",
    },
    {
      name: "Experienced Technicians",
      icon: UserCog, // rating / reviews
      price: "From $19",
      color: "bg-purple-100 text-purple-600",
    },
  ];
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-40 pb-10 lg:pt-50 lg:pb-15 flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Trusted by 50,000+ customers
              </motion.div> */}
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-2xl md:text-2xl lg:text-5xl font-bold text-foreground leading-tight"
              >
                {/* Book Your <br />
                <span className="text-gradient">Mobile Repair</span> <br />
                Today */}
                {/* <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent">Laptop Repair Tottenham Court Road | </span> <br />
                Electronics Store Tottenham Court Road
                <span className="text-red-500">!</span> */}
                <h1 className="bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent">
                  100% Guaranteed Laptop Repair
                  Central London & Trusted Electronics
                  Store
                </h1>
                {/* <br /> */}
                { } & Premier Electronics Store
                <span className="text-red-500">!</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg text-muted-foreground xl:max-w-lg leading-relaxed"
              >
                {/* Need a fast fix or a new gadget? Find reliable laptop repair on tottenham court road and premium gear all under one roof at our tottenham court road electronics store. */}
                TechOutlet is your trusted electronics store and laptop repair Tottenham Court Road
                specialist, offering everything from MacBook repairs,battery issues,  screen replacement,
                data recovery, and slow computer fixes to quality chargers, adapters, cables, and everyday
                tech accessories. Our experienced local technicians provide fast assessment , honest
                advice, affordable prices, and reliable solutions so you can repair, replace, and upgrade your
                devices all in one place.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-6 text-lg text-muted-foreground xl:max-w-lg leading-relaxed"
                >
                  {/* TechOutlet is your trusted electronics store and laptop repair Tottenham Court Road specialist, offering everything from MacBook repairs, screen replacement, battery issues, data recovery, and slow computer fixes to quality chargers, cables, adapters, and everyday tech accessories. Our experienced local technicians provide fast diagnosis, honest advice, affordable prices, and reliable solutions so you can repair, replace, and upgrade your devices all in one place. */}
                </motion.p>

                {/* New USPs Section */}
                {/* <motion.ul
                  variants={fadeUp}
                  custom={2.5}
                  className="mt-6 grid grid-cols-2 gap-4 text-sm font-semibold text-gray-700"
                >
                  <li>⭐ 5-Star Google Rating</li>
                  <li>⚡ Same-Day Repairs</li>
                  <li>🛠️ Repair + Accessories</li>
                  <li>😊 100% Satisfied customers</li>
                  <li>👨‍🔧 Experienced Technicians</li>
                </motion.ul> */}

                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  {/* Buttons here */}
                  <Link to="/book">
                    <button className="px-6 py-2 bg-red-600 text-white rounded-lg">
                      Book a Repair
                    </button>
                  </Link>

                  <button className="px-6 py-2 border border-red-600 text-red-600 rounded-lg">
                    Get a Call
                  </button>

                  <button className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg">
                    Accessories
                  </button>
                </motion.div>

                {/* <Link to="/book">
                  <Button
                    size="lg"
                    className="border-[2px] border-red-600 bg-transparent text-red-600 rounded-full px-8 shadow-soft hover:shadow-lg hover:bg-red-600 hover:text-white transition-all text-base h-14"
                  >
                    Book Now <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link> */}
                {/* <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base">
                  View Pricing
                </Button> */}
              </motion.div>
              {/* <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-10 flex items-center gap-6"
              >
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:block md:block sm:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-pic.jpg"
                  alt="Mobile phone repair"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>





              {/* <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-card flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">1-Month Warranty</div>
                  <div className="text-xs text-muted-foreground">
                    On all repairs
                  </div>
                </div>
              </motion.div> */}
              {/* <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -right-4 bg-background rounded-2xl p-4 shadow-card flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-red-200 border-2 border-background"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    4.8/5 Rating
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>

      </section>


      <a
        href="https://maps.app.goo.gl/wsqrkFgK28MZh6eP9"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-24 right-12 z-40 cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3"
        >
          {/* <div className="flex -space-x-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-8 h-8 rounded-full bg-red-500 border-2 border-white" />
      ))}
    </div> */}
          <div className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-sm">
            {/* Google SVG Logo */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.19 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.6 0 3.04.55 4.18 1.64l3.14-3.14C17.46 1.4 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <div className="text-xs font-bold text-gray-700">4.8/5 Rating</div>
          </div>
        </motion.div>
      </a>

      {/* Repair Types */}
      <section className="pt-10 lg:pt-18 pb-10 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-medium text-red-600 uppercase tracking-wider"
            >
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl lg:text-4xl font-bold mt-3 text-foreground"
            >
              Why Choose Tech<span className="text-red-600">-</span>Outlet
              Repairs<span className="text-red-600">?</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-muted-foreground max-w-6xl mx-auto"
            >
              Phones, tablets, or laptops giving you trouble? We'll repair it.
              Send us your phone from anywhere in the UK or visit us our shop,
              and we'll fix it fast. Book online for free, whether you've got a
              broken iPad, laptop, or mobile phone, our expert team fixes it all
              and post it back to you on the same day. Free send-back delivery
              across London, Essex, and the entire UK! We don't just repair – we
              rescue your tech, providing lightning-fast service with a smile.
              From screen repair, battery replacements to software issues we've
              got you covered with guaranteed quality and friendly support.
            </motion.p>
          </motion.div> */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6"
          >
            {repairTypes.map((type, i) => (
              <motion.div
                key={type.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.03, y: -6 }}
                className="bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all cursor-pointer group border border-border/50"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <type.icon className="w-7 h-7 " />
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {type.name}
                </h3>
                {/* <p className="text-xs text-muted-foreground mt-1">
                  {type.price}
                </p> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brainds */}
      <section className="py-16 bg-card bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            {/* <motion.p
              variants={fadeUp}
              className="text-sm text-red-600 font-medium uppercase tracking-wider"
            >
              We repair all major brands
            </motion.p> */}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            {brands.map((brand, i) => {
              const Icon = brand.icon;

              return (
                <motion.div
                  key={brand.name}
                  onClick={() => navigate("/book")}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex flex-col items-center gap-2 px-8 py-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer min-w-[140px]"
                >
                  <Icon size={32} />
                  <span className="text-sm font-medium">{brand.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium text-red-600 uppercase tracking-wider">
                We Fix, Any Device
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-foreground">
                Your Local Laptop Repair Technicians on
                Tottenham Court Road
                {/* <span className="text-red-600">&</span> IPad
                Repair Services in London{" "}
                <span className="text-red-600">&</span> UK */}
              </h2>
              {/* <div className="mt-8 space-y-6">
                {howItWorks.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div> */}
              <h3 className="text-2xl lg:text-3xl font-bold mt-3 text-foreground">
                Two Minutes from Tottenham Court Road Station
              </h3>
              <div className="mt-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 * 0.15 }}
                  className="flex gap-4 items-start group"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Located directly on Tottenham Court Road near Tottenham Court Road Station (Elizabeth
                      Line + Northern Line), we're one of Central London's most accessible repair shops. If you're
                      coming from Goodge Street (5 min), Warren Street (14 mins ), Oxford Circus (10 mins ),
                      Bloomsbury, Fitzrovia, Soho, Covent Garden, or Holborn, —you're close enough to walk
                      over.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Most people walk in without an appointment. Drop us a WhatsApp or call to check part
                      availability first if you prefer. Either way: no diagnostic fee, no pressure, no hidden
                      charges.
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold mt-3 text-foreground">
                      People Trust Us With Their Work, Studies, and Memories
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      A laptop isn't just a laptop. It's the dissertation that's three weeks late. The wedding photos
                      that aren't backed up. The client presentation is due tomorrow morning.
                    </p>
                    <p className="text-sm">
                      We get that. Most of our customers come back to us not because we're the cheapest in
                      London we are fair , but because we tell them the truth about their device, fix it properly, and
                      stand behind the work.
                      Have a look at our Google reviews., and check out our before-and-after photos further down
                      the page. These are  proof of our work which is professionally done by our technicians.
                    </p>

                  </div>
                </motion.div>
              </div>
              <Link to="/book">
                <Button className="border-[2px] border-red-600 bg-transparent hover:bg-red-600 hover:text-white text-red-600 mt-8 rounded-full px-8 shadow-soft">
                  Book Now <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/outlet-pic.jpeg"
                  alt="Repair process"
                  className="w-full h-[650px] object-cover"
                />
              </div>
              {/* <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 right-6 bg-background rounded-2xl p-5 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-foreground">
                      30 min
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Average repair time
                    </div>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US (FIXED & NORMAL SIZE) START ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose Our Reliable Laptop Repair Service?
          </h2>

          {/* Grid layout for first 6 items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* 1. Free Diagnosis */}
            <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Free Diagnosis — No Fix, No Fee
              </h3>
              <p className="text-muted-foreground">
                Bring it in. We'll diagnose for free and tell you the exact
                cost. If you decide not to repair it, you don't need to pay anything.
              </p>
            </div>

            {/* 2. Same-Day Repair */}
            <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Same-Day Repair (70% of jobs)               </h3>
              <p className="text-muted-foreground">
                Screen replacement, battery, keyboard, charging port,
                SSD upgrade, RAM upgrade, virus removal, macOS reinstall—usually done same day if
                parts are in stock. motherboard work,data recovery and  Liquid damage 1– 2  days. We give
                realistic timelines, not sales pitches.
              </p>
            </div>

            {/* 3. Honest Pricing */}
            <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Honest Pricing. Upfront. In Writing              </h3>
              <p className="text-muted-foreground">
                Before opening a single screw, you get a written
                quote. No surprise charges halfway through. We're not the cheapest—genuine parts and
                skilled labour cost more. But we're fair.
              </p>
            </div>

            {/* 4. Warranty */}
            <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Warranty on Every Repair              </h3>
              <p className="text-muted-foreground">
                we are providing warranty on parts and labour. If something
                fails during warranty, we fix it for free.
              </p>
            </div>

            {/* 5. Skilled Technicians */}
            <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Skilled Technicians — Not Trainees
              </h3>
              <p className="text-muted-foreground">
                Our team has years of hands-on experience with
                MacBook logic boards (Intel, M1, M2, M3, M4), Windows motherboards, liquid damage
                cleanup, data recovery, and gaming laptop repair. We diagnose at component level
                instead of selling full board replacements.
              </p>
            </div>

            {/* 6. Honest Guidance */}
            <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Repair or Replace? Honest Guidance
              </h3>
              <p className="text-muted-foreground">
                e Sometimes the answer is don't repair it. If an
                8-year-old laptop has a failed motherboard, we'll tell you straight and help you find a sensible
                replacement. That honesty costs us repair jobs—it's also why people send friends.
              </p>
            </div>
          </div>

          {/* Center aligned wrapper for the last 2 items */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow w-full md:w-[350px]">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Genuine Parts Only
              </h3>
              <p className="text-muted-foreground">
                OEM or high-grade compatible parts. Not the £15 screens off
                AliExpress that fail in six months. Your laptop, your choice.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow w-full md:w-[350px]">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Your Data Stays Private
              </h3>
              <p className="text-muted-foreground">
                We never access personal files unless data recovery is the job. No
                login credentials needed for most repairs. For corporate clients, we sign NDAs. Old drives
                are wiped to secure standards before disposal.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== WHY CHOOSE US END ==================== */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading Section */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why We're the Electronics shop Locals Actually
              Recommend            </h2>
            <p className="text-lg text-muted-foreground">
              Repairs are 60% of what we do. The other 40% is the shop itself — and it's not just there to
              fill the space.
            </p>
          </div>

          {/* Items Section */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-red-600">
              Delivering genuine utility, not just aesthetic appeal             </h3>
            <p className="text-gray-600 mb-8 italic">
              You won't find Useless devices and gadgets on our shelves.You will find your tech solution
              on our store:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {[
                "Laptop chargers:All major brands and models (Apple, Dell, HP, Lenovo, ASUS, Acer)",
                "HDMI, USB-C,VGA cables and  DisplayPort",
                "UK travel adapters (huge for tourists getting off the Elizabeth Line)",
                "Power banks with proper mAh ratings, not the inflated ones",
                "Keyboards and mice — wired, wireless, mechanical ",
                "Back-up hardware and SSDs",
                "Headphones, earbuds, and gaming headsets",
                "Chargers , Phone cases & screen protectors",
                "Networking gear — routers, Wi-Fi extenders, Ethernet cables",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="text-red-500 font-bold text-lg">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* yhn sa headind 3 ha */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Price Section */}
            <div className="p-12 border border-red-200 rounded-3xl bg-white shadow-sm hover:shadow-lg transition-all min-h-[280px] flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold mb-6 text-red-600 leading-tight">
                Reasonable Prices that fit your actual budget
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Students, commuters, and tourists shouldn't pay airport prices in Central London. Our
                adapters, cables, and chargers are priced to be reasonable — not to catch out someone in a
                hurry.
              </p>
            </div>

            {/* Quick Needs Section */}
            <div className="p-12 border border-red-200 rounded-3xl bg-white shadow-sm hover:shadow-lg transition-all min-h-[280px] flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold mb-6 text-red-600 leading-tight">
                Quick Visits for Quick Needs              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Left your charger at home and have a meeting in 20 minutes? Visit our store, grab your
                charger, and attend your meeting. No waiting around. That's what a local electronics store
                on Tottenham Court Road, London,, is meant to be
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* new content */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Laptop and Computer Repair tottenham court road
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. All Brands & Models */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Laptop Repair — All Brands & Models

              </h3>
              <p className="text-gray-700 mb-4">
                We handle every kind of laptop issue, no matter the make or model. Here is what we can
                help with: failed batteries, dead keyboards, snapped hinges,cracked screens, broken
                charging ports, liquid damage, motherboard faults, overheating, random shutdowns, slow
                performance from SSD failure. Battery swaps, keyboard repair, Screen
                replacement,charging port repair, RAM upgrades, SSD upgrades, thermal servicing, HDD to
                SSD upgrades.
                We repair all makes and models such as , Dell, Acer, MSI, Razer,HP, Lenovo, ASUS,
                Chromebooks, Huawei, Samsung, Microsoft Surface. Whether it's a student's Inspiron from
                UCL, a designer's XPS from Fitzrovia, a business ThinkPad, or a gaming ROG from
                Bloomsbury, we diagnose the actual fault instead of guessing.
              </p>

            </div>

            {/* 2. MacBook Repair */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                MacBook Repair on Tottenham Court Road
              </h3>
              <p className="text-gray-700 mb-4">
                Whether it’s an Air or a Pro, Intel-powered or the newest M1 to M4 chip, we know MacBooks
                inside out. Bring your device to us for precise screen swaps, fresh batteries (including
                swollen ones), or loose USB-C port repairs. We’re also highly experienced in complex logic
                board fixes, SSD storage upgrades, and reviving Macs after liquid spills. No appointment
                needed—just bring it in.
              </p>
              <p className="text-red-600 font-bold mb-2">
                MacBook Swollen Battery — Fire Risk.
              </p>
              <p className="text-sm text-gray-600">
                Signs: trackpad lifting, case bulging, laptop won't close flat, excessive heat, shortened
                battery life. Bring it in immediately. We replace them safely, usually on the same day.
              </p>
              <p className="text-red-600 font-bold mb-2">
                Apple Mac Desktop Repair tottenham court road
              </p>
              <p className="text-sm text-gray-600">
                iMac, Mac mini, Mac Studio—macOS problems, storage upgrades, system migration,
                performance issues.
              </p>
              <p className="text-red-600 font-bold mb-2">
                PC & Desktop Computer Repair tottenham court road
              </p>
              <p className="text-sm text-gray-600">
                No power, boot loops, Windows corruption, hardware faults, thermal issues, RAM upgrades.

              </p>
            </div>

            {/* 3. Gaming & PC Repair */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Gaming Laptop & PC Repair Repair tottenham court road
              </h3>
              <p className="text-gray-700">
                Our technicians also have hands-on experience with gaming PCs such as  Alienware, TUF ,
                Legion, Predator, Razer Blade,  ROG, MSI. GPU reflow, fan replacement,  thermal paste
                replacement, panel swaps, overclocking issues,& RAM upgrades.
              </p>
            </div>

            {/* 4. Data & Software */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Data Recovery Services
              </h3>
              <p className="text-gray-700">
                Failed HDDs, dead SSDs, corrupted file systems, accidental deletions, formatted drives,
                water damage, external drives. We diagnose first and tell you what's realistically
                recoverable. Success depends on failure type—mechanical drives that clicked for weeks are
                harder than SSDs that just died. Emergency data recovery available for urgent business
                situations.
              </p>

              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Bug & virus clean
                  </strong>
                  Say goodbye to annoying ads , browser redirects, slow system performance,
                  ransomware,fake antivirus warnings. We remove Completely , not just quick scans that miss
                  infections. Includes Windows Defender, Malwarebytes, and manual removal if needed.
                </li>
                <li>
                  <strong>Windows & macOS Reinstallation
                  </strong> Boot errors,
                  Boot errors, blue screen of death (BSOD), Windows update loops, corrupted OS. Files
                  backed up first. Clean install restores performance.
                </li>
                {/* <li>
                  <strong>OS Reinstall:</strong> Clean Windows/macOS install to
                  fix BSOD or update loops.
                </li> */}
              </ul>
            </div>

            {/* 5. Upgrades */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                SSD Upgrade — Best Laptop Investment
              </h3>
              <p className="text-gray-700 mb-2">
                Swap old HDD for SSD. Old laptop feels new again. 90-second boot becomes 12 seconds.
                Improves responsiveness across the board. Hundreds completed.
              </p>
              <p className="text-gray-700">
                <strong>RAM Memory Upgrade
                </strong> 8GB minimum for modern multitasking. 16GB comfortable place. 32GB for designers, video
                editors, gamers. Same-day installation.
              </p>
            </div>

            {/* 6. Corporate */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Business & Corporate Laptop Repair tottenham court road
              </h3>
              <p className="text-gray-700">
                Bulk repair pricing, priority turnaround for business clients,
                account invoicing, NDAs for sensitive industries, secure data
                handling, on-site assessment for larger jobs. Many Fitzrovia and
                Soho-based agencies, architecture firms, and media companies
                partner with us. Ask about service agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROFESSIONAL BRAND ECOSYSTEM START ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Laptop Brands We Repair on Tottenham Court Road
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From high-end MacBooks to gaming powerhouses and reliable office
              laptops, our technicians have the expertise to repair them all.
            </p> */}
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                brand: "Apple",
                models:
                  "MacBook Pro MacBook Air, (Intel, M1, M2, M3, M4), iMac, Mac Studio, Mac mini. ",
              },
              {
                brand: "Dell",
                models: "Inspiron, XPS, Latitude, Vostro, Alienware",
              },
              {
                brand: "Lenovo",
                models: "ThinkPad, IdeaPad, Yoga, Legion, LOQ",
              },
              {
                brand: "HP",
                models: "Pavilion, Envy, Spectre, EliteBook, Omen, Victus ",
              },
              {
                brand: "Acer",
                models: "Aspire, Swift, Nitro, Predator, TravelMate",
              },
              {
                brand: "ASUS",
                models: "ZenBook, VivoBook, ROG, TUF, ExpertBook ",
              },
              { brand: "Samsung", models: "Galaxy & Chromebook" },
              {
                brand: "Microsoft",
                models:
                  "Surface Pro, Surface Book, Surface Laptop & Surface Go ",
              },
              {
                brand: "MSI",
                models: "Stealth, Raider, Katana, Cyborg & Modern, Prestige ",
              },
              { brand: "Razer", models: "Razer Blade (all generations)" },
              { brand: "Google", models: "Pixelbook , Chromebook" },
              { brand: "Huawei", models: "MateBook Series" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-red-50 hover:border-red-200 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600">
                  {item.brand}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.models}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center p-8 bg-gray-900 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-2">Don't see your brand?</h3>
            <p className="text-gray-400 mb-6">
              Don't see your brand? Walk in or call. We work on almost everything
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* ==================== REPAIR PROCESS SLIDER SECTION START ==================== */}

      {/* <section className="py-24 bg-background relative overflow-hidden border-b border-border/50">
        
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-500/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-50 dark:bg-red-950/30 px-3 py-1 rounded-md">
                Workflow Pipeline
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mt-4 tracking-tight">
                Our 6-Step Laptop Repair
                <br />
                <span className="text-red-500">
                  Tottenham Court Road <br /> Process Works
                </span>
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById("process-slider");
                  if (el) el.scrollBy({ left: -360, behavior: "smooth" });
                }}
                className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-foreground hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-500 hover:border-red-500/20 transition-all active:scale-95 cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("process-slider");
                  if (el) el.scrollBy({ left: 360, behavior: "smooth" });
                }}
                className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-foreground hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-500 hover:border-red-500/20 transition-all active:scale-95 cursor-pointer"
              >
                →
              </button>
            </div>
          </div>

         
          <div
            id="process-slider"
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory scroll-smooth relative"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[
              {
                step: "01",
                title:
                  "Tell us the problem (walk in, call, WhatsApp, or form).",
                // desc: "Reach out via walk-in, phone call, WhatsApp, or our online form to let us know exactly what's wrong with your machine.",
              },
              {
                step: "02",
                title: "Free Diagnosis. We test and explain",
                // desc: "We perform comprehensive hardware testing to uncover the root failure and explain the technical path to you clearly.",
              },
              {
                step: "03",
                title: "Clear Written Quote. No hidden costs",
                // desc: "You receive an exact, itemized transparent quote upfront before any repair begins. Absolutely zero hidden costs.",
              },
              {
                step: "04",
                title:
                  "Repair by a real technician (same person who diagnosed).",
                // desc: "Your laptop is actively serviced by a skilled lab technician—the exact same engineer who handled your diagnostic test.",
              },
              {
                step: "05",
                title:
                  "Full testing (charging, display, USB ports, Wi-Fi, Bluetooth, camera, speakers, keyboard, trackpad, battery health, temperature).",
                // desc: "We verify everything: power delivery, displays, ports, Wi-Fi bands, cameras, keyboards, battery cycles, and thermals.",
              },
              {
                step: "06",
                title: "Collection with warranty paperwork and aftercare tips.",
                // desc: "Pick up your certified working device along with official parts warranty paperwork and professional tech aftercare tips.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="min-w-[290px] sm:min-w-[340px] max-w-[350px] h-[250px] snap-start p-6 rounded-2xl bg-card border border-border/70 shadow-sm relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-red-500/20 hover:shadow-md shrink-0"
              >
                
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl font-black text-red-500/10 dark:text-red-500/[0.04] group-hover:text-red-500/25 transition-colors tracking-tighter font-mono select-none">
                      {item.step}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-muted-foreground/30 group-hover:text-red-500/50 transition-colors">
                        Stage
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-red-500 transition-colors" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-foreground text-base md:text-lg mb-2.5 group-hover:text-red-500 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                 
                 
                </div>

                
                <div className="flex justify-end pt-2 border-t border-border/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-red-500/70">
                    NEXT_STEP_DATA // →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground"
            >
              Our 6 Repair laptop repair <br />
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Tottenham Court Road
                Process Works                             </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6 mb-10"
            />

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Step 1", description: "Tell us the problem (walk in, call, WhatsApp, or form)." },
                { icon: Wrench, title: "Step 2", description: "Free diagnosis. We test and explain." },
                { icon: CheckCircle, title: "Step 3", description: "Clear written quote. No hidden costs." },
                { icon: Zap, title: "Step 4", description: "Talk directly to the expert repairing your laptop—from the first check‑up to the final fix." },
                { icon: Wrench, title: "Step 5", description: "Our technicians will be testing (camera, speakers, keyboard, trackpad, USB ports, charging, display, Wi‑Fi, Bluetooth, battery health, temperature of your device)." },
                { icon: CheckCircle, title: "Step 6", description: "Collection with warranty paperwork and aftercare tips." },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm ">
                    <div className="bg-red-600/10 rounded-full p-4 mb-3">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="text-sm font-medium text-red-600 mb-2">{step.title}</h4>
                    <p className="text-base text-foreground mb-4">{step.description}</p>
                    <div className="w-full h-1 bg-red-600/5 rounded-full">
                      <div className="h-full bg-red-600" style={{ width: `${((index + 1) / 6) * 100}%` }} />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* ==================== REPAIR PROCESS SLIDER SECTION END ==================== */}

      {/* common prblems  */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-foreground mb-4">
              Common Problems We Fix Weekly
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Screen */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Laptop Screen Replacement               </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Cracked glass, lines across display, half black, flickering, dim image. Most screens £80–£200 fitted (MacBooks higher because assembly is bonded). Same-day if in stock.

              </p>
            </div>

            {/* 2. Battery */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Battery & Power Problems
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Won't charge, drains in minutes, only works plugged in, won't charge past 80%. Usually battery wear, faulty charger, or charging circuit fault. Battery replacement £60–£150.

              </p>
            </div>

            {/* 3. Charging Port */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Charging Port / DC Jack Repair
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Can only charge at odd angles, charger falls out, USB-C wobbles. We desolder and fit new. Prevents further motherboard damage.

              </p>
            </div>

            {/* 4. Keyboard */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Keyboard & Trackpad issues
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We can usually fix most of these issues on the same day . Dead keys, sticky keyboard after spill, trackpad won't click. Includes MacBook butterfly and scissor switch replacements.

              </p>
            </div>

            {/* 5. Liquid Damage */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Liquid Damage (Water, Coffee, Tea)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Spilled something? like (Water, Coffee, Tea) Turn your laptop off right away, do not charge it, and bring it to us as fast as you can. Corrosion doesn't happen instantly—it slowly spreads over days and weeks, so getting it cleaned early saves your motherboard

              </p>
            </div>

            {/* 6. Motherboard */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Motherboard / Logic Board Repair
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No power, random shutdowns, USB port faults, won't charge. We diagnose component-level faults under microscope instead of selling full board replacement (saves £300–£800).

              </p>
            </div>

            {/* 7. Overheating */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Fan Issues & Overheating              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                shuts down under load & Sounds like hairdryer, Extreme heat.Dust buildup blocking the air , thermal paste dries out. Cleaning + repaste drops temps 15–25°C. Usually same-day.

              </p>
            </div>
            {/* 7. slow laptop */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Slow Laptop Repair Tottenham Court Road
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Usually multiple causes: full storage, low RAM, malware, outdated OS, dust-clogged fans causing thermal throttling. We diagnose the actual bottleneck instead of guessing.

              </p>
            </div>

            {/* 8. Performance/HDD */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Hard Drive Failure / SSD Failure
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Clicking drive, SSD not detected, won't boot. Back up data immediately. HDD to SSD upgrade is the best upgrade—90-second boot becomes 12 seconds.

              </p>
            </div>

            {/* 9. Hinge */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">
                Hinge & Chassis Damage
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Cracked hinge spreads fast, screen separates from base. A small crack becomes £300 repair if ignored. Urgent to fix it early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* what causes a laptop to fail */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading Section */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-extrabold text-foreground mb-6">
              What Causes a Laptop to Stop Working?
            </h2>
            <p className="text-xl text-muted-foreground">
              After years of opening these things up, here's the truth about why laptops fail:

            </p>
          </div>

          {/* Causes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Heat",
                desc: "dust clogs the fans, thermal paste dries out, the CPU and GPU run too hot, and components degrade faster",
              },
              {
                title: "Old Batteries",
                desc: "  lithium-ion cells lose capacity over 3–4 years, then swell",
              },
              {
                title: "Liquid Spills",
                desc: " even a small splash corrodes the board over weeks",
              },
              {
                title: "Damaged charging Ports",
                desc: " repeatedly yanking the cable out at an angle",
              },
              {
                title: "Failing Storage",
                desc: " HDDs wear mechanically, SSDs wear electrically",
              },
              {
                title: "Hinge Damage",
                desc: "usually starts as a small crack and spreads",
              },
              {
                title: "Malware and bad Software",
                desc: " slows things down and sometimes corrupts the OS",
              },
              {
                title: "Power Surges",
                desc: "cheap chargers can kill a board.",
              },
              {
                title: "Drops and Impacts",
                desc: "even a small fall can crack solder joints",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-red-500 transition-all group"
              >
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why you need professional repair */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-foreground mb-6">
              When You Need Professional Repair vs DIY
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* DIY Section */}
            <div className="p-8 border border-green-200 bg-green-50 rounded-3xl">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                ✅ Safe to Do Yourself
              </h3>
              <p className="text-gray-700">
                Restart your device or try a different charger, free up storage, back up files, update OS,malware scan, test on external monitor and gentle keyboard cleaning.

              </p>
            </div>

            {/* Pro Section */}
            <div className="p-8 border border-red-200 bg-red-50 rounded-3xl">
              <h3 className="text-xl font-bold text-red-700 mb-4">
                🛠️ Leave to Technicians
              </h3>
              <p className="text-gray-700">
                if laptop needs Opening, motherboard work, data recovery. battery/screen replacement & liquid damage.

              </p>
              <p className="mt-6 text-sm text-red-800 font-medium italic">
                Professional Saves Money: If someone gets the problem wrong, they buy the wrong part. That wastes your money and can ruin your laptop even more. A real expert check and  tells you the exact problem and saves your money.
              </p>
            </div>
          </div>

          {/* Decision Table */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Repair or Buy a New Laptop?
            </h3>
            <div className="overflow-hidden rounded-3xl border border-gray-200">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-5 font-bold">Situation</th>
                    <th className="p-5 font-bold">Our Honest Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      s: "Broken screen on a good laptop",
                      r: "Repair — usually £80–£200",
                    },
                    {
                      s: "Slow laptop with old HDD",
                      r: "SSD Upgrade — best value upgrade going",
                    },
                    {
                      s: "Battery no longer holds charge",
                      r: "Battery replacement — £60–£150",
                    },
                    {
                      s: "Severe motherboard damage on a 7+ year old laptop",
                      r: "Replace — repair often costs more than the laptop's worth",
                    },
                    {
                      s: "Important data on failing drive",
                      r: "Diagnose first — data first, decision second",
                    },
                    {
                      s: "Laptop under 4 years old",
                      r: "Almost always worth repairing",
                    },
                    {
                      s: "Repair cost over 60–70% of replacement",
                      r: "Consider replacement",
                    },
                    {
                      s: "Liquid damage on a high-spec laptop",
                      r: "Free diagnosis — often saveable, sometimes not",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 text-gray-700">{row.s}</td>
                      <td className="p-5 fonfeat t-bold text-red-600">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center mt-8 text-gray-500 font-medium">
              We'll never push a repair that doesn't make sense. If buying new
              is the better call, we'll say so
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CYBER LAB TOOLS & RETAIL HUB START ==================== */}
      <section className="py-24 bg-background relative overflow-hidden border-b border-border/50">
        {/* Cyberpunk Style Ambient Glow Backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/[0.02] dark:bg-red-500/[0.01] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* ==================== PART 1: THE TECH LAB TERMINAL (TOOLS) - FULL WIDTH ==================== */}
          <section className="py-20 bg-background w-full">
            {/* Container hata diya, aur max-width/padding khud control ki */}
            <div className="w-full px-2 md:px-6 lg:px-12">
              {/* Header */}
              <div className="mb-12 px-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-red-500 uppercase">
                    Hardware Diagnostic Lab
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
                  Tools We <span className="text-red-500">Actually Use</span>
                </h2>
              </div>

              {/* Grid System - Full Width */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    num: "01",
                    title: "Diagnostic Software",
                    desc: "Battery health, SSD SMART data, memory tests, temperature monitoring.",
                  },
                  {
                    num: "02",
                    title: "Precision Tools",
                    desc: "Torx, Phillips, anti-static mats, plastic spudgers, suction cups.",
                  },
                  {
                    num: "03",
                    title: "Microscopes",
                    desc: "Board-level component diagnosis.",
                  },
                  {
                    num: "04",
                    title: "Hot Air & Soldering",
                    desc: "Chip removal, component repair, reflow work.",
                  },
                  {
                    num: "05",
                    title: "Data Recovery Hardware",
                    desc: "Drive readers, disk cloning, cleanroom-grade tools.",
                  },
                  // {
                  //   num: "06",
                  //   title: "Customer Portal",
                  //   desc: "Access your repair status and live updates 24/7.",
                  // },
                ].map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-8 rounded-[24px] bg-card border border-border/60 hover:border-red-500/50 transition-all duration-300 shadow-sm"
                  >
                    <div className="text-[10px] font-mono font-bold text-muted-foreground/50 uppercase tracking-widest mb-4">
                      SYSTEM_CORE_// {tool.num}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== PART 2: THE MODERN RETAIL HUB ==================== */}
          <div>
            {/* Main Title Head */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-md">
                Pop In Anytime
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mt-4 tracking-tight">
                Electronics Accessories <br />
                <span className="text-red-500">& Gadgets</span>
              </h2>

            </div>

            {/* Clean Split Showcase Grid */}
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {[
                {
                  category: "Laptop & PC Accessories",
                  icon: "💻",
                  items:
                    "USB hubs, cooling pads, laptop stands, external SSDs, webcams, docking stations for hybrid working.",
                },
                {
                  category: "Keyboards & Mice",
                  icon: "⌨️",
                  items:
                    "Logitech, Keychron, Apple, basic wired options for everyday use, gaming mechanical keyboards for serious typists.",
                },
                {
                  category: "Audio, Video & Cables",
                  icon: "🔌",
                  items:
                    "USB-C to HDMI,HDMI 2.1,VGA adapters for older monitors,DisplayPort, USB-C hubs with everything you need",
                },
                {
                  category: "Headphones & Earphones",
                  icon: "🎧",
                  items:
                    "Whether you need basic £10 earbuds, pro gaming headsets, or noise-cancelling for your noisy daily travel, we’ve got the perfect fit.",
                },
                {
                  category: "Power Banks & UK Adapters",
                  icon: "🇬🇧",
                  items:
                    "This is where tourists save themselves. UK plug adapters from the moment you step off the Elizabeth Line —We also stock power banks with real, honest capacities—none of those cheap, fake '50,000mAh' bricks that die on your first day out",
                },
                {
                  category: "Mobile Phone & Camera Accessories",
                  icon: "📸",
                  items:
                    "Cases, screen protectors, fast chargers,  MagSafe options, Lightning and USB-C cables..SD cards, microSD with adapters, USB-C card",
                },
              ].map((shop, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 md:p-6 rounded-2xl bg-card border border-border/75 hover:border-emerald-500/20 dark:hover:border-emerald-500/10 transition-all duration-300 flex gap-4 group relative overflow-hidden"
                >
                  {/* Hover Background Accent Card Slide */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Left Mini Column: Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-lg shrink-0 group-hover:bg-background group-hover:border-emerald-500/20 transition-all duration-200">
                    {shop.icon}
                  </div>

                  {/* Right Column: Content Body */}
                  <div className="space-y-1">
                    <h4 className="text-sm md:text-base font-extrabold text-foreground group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {shop.category}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {shop.items}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Informative Bottom Bar */}
            <div className="mt-12 text-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/50 border border-border px-4 py-2 rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Need something specific? Walk in directly—we are fully stocked
                weekly.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CYBER LAB TOOLS & RETAIL HUB END ==================== */}

      {/* ==================== REAL REPAIR CASES ==================== */}
      <section className="py-24 bg-background relative overflow-hidden border-b border-border/50">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/[0.02] dark:bg-red-500/[0.01] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-red-500 uppercase">
                Real Repair Cases
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              Real Repair <span className="text-red-500">Cases</span>
            </h2>
            <p className="mt-6 text-sm text-red-800 font-medium italic">
              Note: these are attached for an example add real case studies from GMB/GBP
            </p>
          </div>

          {/* Cases */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "MacBook Pro Swollen Battery",
                location: "Bloomsbury",
                content:
                  "UCL postdoc, 2019 MacBook Pro wouldn't close flat. Trackpad lifted. Battery replaced same day. Recalibrated. Delivered before the evening meeting.",
              },
              {
                num: "02",
                title: "Business Data Recovery",
                location: "Holborn Law Firm",
                content:
                  "Failed external drive, client case files, mechanical failure. Recovered 96% data using cleanroom tools. Returned on encrypted drive. NDA on file",
              },
              {
                num: "03",
                title: "Coffee Spill MacBook Air",
                location: "Soho",
                content:
                  "Spanish tourist spilled oat latte on MacBook outside café. Brought in 30 min later. Powered down, ultrasonically cleaned board, replaced affected keys. Ready before flight. All files intact.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-[24px] bg-card border border-border/60 hover:border-red-500/50 transition-all duration-300 shadow-sm group relative overflow-hidden"
              >
                {/* Hover Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="text-[10px] font-mono font-bold text-muted-foreground/50 uppercase tracking-widest mb-4">
                    CASE {item.num}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-500 mb-5">
                    {item.location}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL BOOK YOUR REPAIR CTA (UNIFIED UI) ==================== */}
      <section className="py-14 bg-background w-full">
        <div className="w-full px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em]">
              Instant Device Check-In
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2 tracking-tight">
              Book Your Repair{" "}
              {/* <span className="text-red-500">Laptop Repair?</span> */}
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Walk in, call, or WhatsApp for a free comprehensive diagnosis and
              honest pricing.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                icon: "📍",
                title: "Walk-In",
                desc: "[Your Address], Tottenham Court Road, London, [Postcode] Open [Days] · [Hours]",
                tag: "TCR, London · Mon-Sat",
              },
              {
                icon: "📞",
                title: "Call or WhatsApp",
                desc: (
                  <>
                    📞 [Phone]
                    <br />
                    💬 [WhatsApp]
                  </>
                ),
                tag: "Call / WhatsApp",
              },
              {
                icon: "⚡",
                title: "Online Quote",
                desc: "Name, device model, fault description, contact info. Reply the same day.",
                tag: "Fixed Time Slots Available",
              },
              {
                icon: "📋",
                title: "Or Book Appointment",
                desc: "Message for a fixed time slot.",
                tag: "Fixed Time Slots Available",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-card border border-border/60 hover:border-red-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-lg mb-2">{item.icon}</div>
                  <h3 className="font-bold text-sm text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[10px] font-bold text-foreground opacity-70">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Stamp */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold text-foreground bg-card border border-border px-4 py-2 rounded-full shadow-sm">
              🛡️ <strong>Need repair on Tottenham Court Road today?</strong>{" "}
              Walk in. Call. WhatsApp. Free diagnosis, honest quote, fast
              repair.
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              Emergency Laptop Repair Tottenham Court Road
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              Some repairs can't wait.
            </p>
          </div>

          {/* Emergency Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student Priority */}
            <div className="border border-black p-8 bg-black text-white rounded-2xl">
              <h3 className="text-xl font-bold mb-4">
                Same-Day Student Repair in <small>Tottenham Court Roady</small>
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                We know how stressful university deadlines are. If your laptop breaks at the worst possible time, just walk in. We always help students from UCL, SOAS, Birkbeck, UAL, LSE, and King's first. Bring your student ID and we’ll give you a friendly discount.
              </p>
              <div className="text-xs font-bold uppercase tracking-widest border border-white px-4 py-2 inline-block">
                Walk-in Ready
              </div>
            </div>

            {/* Business Priority */}
            <div className="border border-gray-200 p-8 hover:border-black transition-colors rounded-2xl">
              <h3 className="text-xl font-bold mb-4">
                Emergency Business Repair in <small>Tottenham Court Road</small>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Pitch us at 4pm and laptop dead? Call us first thing — we'll keep a slot open. Most local agencies and consultancies have our number saved.

              </p>
              <button className="text-sm font-bold border-b border-black">
                CALL FOR SLOT →
              </button>
            </div>

            {/* Tourist Priority */}
            <div className="border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">
                Tourist Repair While in central London
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Spilled coffee on your laptop in Covent Garden? Charger lost on
                the Eurostar? We're a 4-minute walk from Tottenham Court Road
                station. We sort tourists out quickly because we know you've got
                a flight to catch.
              </p>
              <p className="text-xs font-medium text-black">
                4-Min Walk from TCR Station
              </p>
            </div>
          </div>

          {/* CTA Bar */}
          <div className="mt-12 p-8 bg-gray-50 flex flex-col md:flex-row justify-between items-center border border-gray-100">
            <div className="mb-4 md:mb-0">
              <h4 className="font-bold text-lg">
                Call or WhatsApp Before You Travel
              </h4>
              <p className="text-sm text-gray-600">
                Save the trip. Send us the model and the fault — we'll check
                parts before you set off.
              </p>
            </div>
            <button className="px-8 py-3 bg-black text-white font-bold text-sm hover:bg-gray-800 transition-all">
              WHATSAPP US NOW
            </button>
          </div>
        </div>
      </section>

      {/* ==================== PASTE RED THEME LOCATION SECTION START ==================== */}
      <section className="py-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Location & Accessibility (Red Accents) */}
            {/* <motion.div
              className="lg:col-span-6 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div>
                <motion.span
                  variants={fadeUp}
                  className="text-sm font-semibold text-red-600 uppercase tracking-wider"
                >
                  Our Location
                </motion.span>
                <motion.h3
                  variants={fadeUp}
                  className="text-2xl md:text-3xl font-bold text-foreground mt-2 leading-tight"
                >
                  Your Local Laptop Repair Experts on <br />
                  <span className="text-red-600">Tottenham Court Road</span>
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  className="text-red-600 font-medium mt-2 text-sm flex items-center gap-2"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  Two Minutes from Tottenham Court Road Station
                </motion.p>
              </div>

              <motion.p
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed text-sm md:text-base"
              >
                Located directly on Tottenham Court Road near Tottenham Court
                Road Station (Elizabeth Line + Northern Line), we're one of
                Central London's most accessible repair shops. If you're coming
                from{" "}
                <strong className="text-foreground border-b border-red-600/30">
                  Goodge Street (5 min)
                </strong>
                ,{" "}
                <strong className="text-foreground border-b border-red-600/30">
                  Warren Street (14 mins)
                </strong>
                ,{" "}
                <strong className="text-foreground border-b border-red-600/30">
                  Oxford Circus (10 mins)
                </strong>
                , Bloomsbury, Fitzrovia, Soho, Covent Garden, or Holborn—you're
                close enough to walk over.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="p-5 rounded-2xl bg-card border-l-4 border-l-red-600 border-y border-r border-border/60 shadow-sm"
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most people walk in without an appointment. Drop us a{" "}
                  <span className="text-green-500 font-bold hover:underline cursor-pointer">
                    WhatsApp
                  </span>{" "}
                  or call to check part availability first if you prefer. Either
                  way:{" "}
                  <strong className="text-foreground font-semibold">
                    no diagnostic fee, no pressure, no hidden charges.
                  </strong>
                </p>
              </motion.div>
            </motion.div> */}

            {/* Right Column: Trust Card (Red Gradient Button & Borders) */}
            <motion.div
              className="lg:col-span-6 space-y-6 bg-card p-6 md:p-8 rounded-2xl border border-border/60 shadow-card relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Subtle top edge red accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

              {/* <div>
                <motion.span
                  variants={fadeUp}
                  className="text-sm font-semibold text-red-600 uppercase tracking-wider"
                >
                  Why Trust Us
                </motion.span>
                <motion.h3
                  variants={fadeUp}
                  className="text-2xl font-bold text-foreground mt-2"
                >
                  People Trust Us With Their <br />
                  <span className="text-red-600">
                    Work, Studies, and Memories
                  </span>
                </motion.h3>
              </div> */}

              {/* <motion.p
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed text-sm md:text-base"
              >
                A laptop isn't just a laptop. It's the dissertation that's three
                weeks late. The wedding photos that aren't backed up. The client
                presentation is due tomorrow morning.
              </motion.p> */}

              {/* <motion.p
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed text-sm md:text-base"
              >
                We get that. Most of our customers come back to us not because
                we're the cheapest in London (we are fair), but because we tell
                them the truth about their device, fix it properly, and stand
                behind the work.
              </motion.p> */}

              {/* <motion.div
                variants={fadeUp}
                className="pt-5 border-t border-border/80 flex flex-wrap gap-4 items-center justify-between"
              >
                <div>
                  <p className="font-bold text-foreground text-sm">
                    The proof is in the work
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Not the marketing
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="#reviews"
                    className="text-xs font-semibold px-4 py-2.5 bg-background hover:bg-red-600/5 border border-border rounded-xl transition-all text-foreground"
                  >
                    Google Reviews ⭐
                  </a>
                  <a
                    href="#gallery"
                    className="text-xs font-semibold px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all shadow-md shadow-red-600/10"
                  >
                    Before & After Photos
                  </a>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>
      {/* ==================== PASTE RED THEME LOCATION SECTION END ==================== */}
      {/* Stats */}

      {/* ==================== EMERGENCY SERVICES START ==================== */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              Need Help <span className="text-red-500">Right Now?</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Fast-track repair services in the heart of Tottenham Court Road.
            </p>
          </div>

          {/* Emergency Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Student Priority */}
            <div className="group p-8 rounded-3xl bg-card border border-border hover:border-red-500 transition-all shadow-sm">
              <div className="text-red-500 mb-6 text-3xl">🎓</div>
              <h3 className="text-xl font-bold mb-3">Student SOS</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Deadline tomorrow? Laptop broken? Walk in. We prioritize
                students from UCL, SOAS, Birkbeck, UAL, LSE, and King's. Bring
                your ID for a student discount.
              </p>
            </div>

            {/* Business Priority */}
            <div className="group p-8 rounded-3xl bg-card border border-border hover:border-red-500 transition-all shadow-sm">
              <div className="text-red-500 mb-6 text-3xl">💼</div>
              <h3 className="text-xl font-bold mb-3">Business Emergency</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Pitch at 4pm and laptop dead? Call us first thing—we'll keep a
                slot open. Most local agencies and consultancies have our number
                saved.
              </p>
            </div>

            {/* Tourist/Visitor Priority */}
            <div className="group p-8 rounded-3xl bg-card border border-border hover:border-red-500 transition-all shadow-sm">
              <div className="text-red-500 mb-6 text-3xl">✈️</div>
              <h3 className="text-xl font-bold mb-3">Tourist Express</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Spilled coffee in Covent Garden? Charger lost on the Eurostar?
                We’re a 4-minute walk from Tottenham Court Road station. We fix
                it fast before your flight.
              </p>
            </div>
          </div>

          {/* CTA Bar */}
          <div className="mt-12 p-8 rounded-3xl bg-red-500 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h4 className="text-2xl font-black">
                Call or WhatsApp Before You Travel
              </h4>
              <p className="opacity-90">
                Save the trip. Send us the model and the fault—we'll check parts
                before you set off.
              </p>
            </div>
            <a
              href="https://wa.me/YOUR_NUMBER"
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:scale-105 transition-transform whitespace-nowrap"
            >
              Message Us Now
            </a>
          </div>
        </div>
      </section>
      {/* ==================== EMERGENCY SERVICES END ==================== */}

      {/* ==================== AREAS WE SERVE SECTION START ==================== */}
      <section className="py-20 bg-background relative overflow-hidden border-b border-border/50">
        {/* Background Micro Dot Mesh or Grid lines for engineering aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,119,119,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,119,119,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-500/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column: Catchment Context (Spans 5 Columns) */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                  Central London Catchment
                </span>
              </div>
              <h2 className="text-3xl font-black text-foreground tracking-tight leading-none">
                Areas We Serve Around <br />
                <span className="text-red-500">Tottenham Court Road</span>
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                Our diagnostic lab is strategically positioned to provide
                ultra-fast tech support and same-day laptop repair turnarounds
                for residents, students, and businesses across West End and
                Central London districts.
              </p>
              <div className="pt-2 hidden lg:block">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground/40">
                  // Transit Accessible via Elizabeth Line & Northern Line
                </span>
              </div>
            </div>

            {/* Right Column: High-End Location Map-Grid (Spans 7 Columns) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  {
                    location: "Fitzrovia",
                    postal: "W1 / WIT Zones",
                    distance: "Walking Distance",
                  },
                  {
                    location: "Soho",
                    postal: "W1D / W1F Districts",
                    distance: "5 Mins Away",
                  },
                  {
                    location: "Bloomsbury",
                    postal: "WC1 Area",
                    distance: "Immediate Access",
                  },
                  {
                    location: "Covent Garden",
                    postal: "WC2 District",
                    distance: "Short Transit",
                  },
                  {
                    location: "Holborn",
                    postal: "WC1V / WC2A",
                    distance: "Direct Line Route",
                  },
                  {
                    location: "West End",
                    postal: "Central Hub",
                    distance: "In-Store Drop off",
                  },
                ].map((zone, zIdx) => (
                  <div
                    key={zIdx}
                    className="p-4 rounded-xl bg-card border border-border/80 shadow-sm relative overflow-hidden group transition-all duration-300 hover:border-red-500/30 hover:shadow-md hover:-translate-y-0.5"
                  >
                    {/* Subtle Left Border Slide Indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />

                    <div className="space-y-1">
                      <h3 className="text-sm font-extrabold text-foreground group-hover:text-red-500 transition-colors">
                        {zone.location}
                      </h3>
                      <p className="text-[11px] font-mono text-muted-foreground/70">
                        {zone.postal}
                      </p>
                      <div className="pt-1.5 flex items-center justify-between">
                        <span className="text-[9px] font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-1.5 py-0.5 rounded">
                          {zone.distance}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Micro Quick Note for Mobile Sync */}
              <p className="text-center text-[11px] text-muted-foreground mt-6 block sm:hidden">
                📍 Walk in from any surrounding station for a zero-liability
                free diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== AREAS WE SERVE SECTION END ==================== */}

      {/* ==================== EMERGENCY & FAQ SECTION START ==================== */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Emergency Section */}
          <div className="mb-32">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-6">
                Emergency Response
              </h2>
              <p className="text-lg text-gray-500">
                Some repairs can't wait. We operate a high-priority triage
                system for immediate needs in Central London.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Student Priority",
                  desc: "UCL, SOAS, Birkbeck, UAL, LSE, King's. Priority turn-around for students.",
                  tag: "Walk-in Priority",
                  dark: true,
                },
                {
                  title: "Business Critical",
                  desc: "Pitch at 4pm? Laptop dead? We maintain emergency slots for local agencies.",
                  tag: "Call for Slot",
                  dark: false,
                },
                {
                  title: "Tourist Support",
                  desc: "4-minute walk from TCR station. Fast repairs for travelers before flight.",
                  tag: "Fast Track",
                  dark: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-10 border transition-all duration-300 hover:shadow-2xl rounded-2xl ${item.dark ? "bg-black text-white border-black" : "bg-white border-gray-200"}`}
                >
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p
                    className={`text-sm mb-8 leading-relaxed ${item.dark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {item.desc}
                  </p>
                  <div
                    className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 inline-block border ${item.dark ? "border-white" : "border-black"}`}
                  >
                    {item.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section - Bento Style */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Do you offer laptop repair on Tottenham Court Road?",
                  a: "Yes. Windows laptops, MacBooks, Chromebooks, gaming laptops, business devices. Walk in anytime.",
                },
                {
                  q: "Is it safe to give my laptop in for repair?",
                  a: "Yes, your data privacy is our top priority at Tech Outlet Ltd, and we only access what is necessary to complete the fix. For peace of mind, we simply recommend backing up your files before dropping it off if the machine still powers on.",
                },
                {
                  q: "Is it worth fixing a broken laptop?",
                  a: "It is usually worth it if the repair costs less than half the price of a new machine, especially for laptops under four years old. A quick component swap or SSD upgrade at Tech Outlet Ltd can easily make your current device feel brand new again.",
                },
                {
                  q: "How long does a laptop repair typically take?",
                  a: "At Tech Outlet Ltd, we specialize in same-day laptop repairs, meaning if you drop it off in the morning, it's usually ready by the afternoon. If a complex issue requires us to order a rare specialty part, we will let you know and provide an exact timeline upfront.",
                },
                {
                  q: "How much does it normally cost to repair a laptop?",
                  a: "It depends entirely on the issue. Basic fixes like battery replacements or software cleanups usually run between £40 and £90. Major repairs, like fixing a cracked screen or motherboard issue, typically range from £150 to £300+. We always give you a clear, upfront quote before starting any work.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-gray-50 border border-gray-100 hover:border-black transition-all rounded-2xl"
                >
                  <h4 className="font-bold text-lg mb-3">{item.q}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROFESSIONAL BRAND ECOSYSTEM END ==================== */}

      {/* Testimonials */}
      {/* <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-medium text-primary uppercase tracking-wider"
            >
              Testimonials
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl lg:text-4xl font-bold mt-3 text-foreground"
            >
              What Our Customers Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all border border-border/50"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      {/* Testimonials */}

      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-medium text-red-600 uppercase tracking-wider"
            >
              Testimonials
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl lg:text-4xl font-bold mt-3 text-foreground"
            >
              What Our Customers Say
            </motion.h2>
          </motion.div>
        </div>
        {/* Scrolling Container */}
        <div className="overflow-hidden relative">
          <motion.div
            variants={marquee}
            animate="animate"
            whileHover={{ animationPlayState: "paused" }}
            className="flex gap-6 "
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all border border-border/50 min-w-[320px]"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-primary rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#262626]" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                Need a Repair<span className="text-red-600">?</span> We
                <span className="text-red-600">'</span>ve Got You Covered
              </h2>
              <p className="mt-4 text-red-600 text-lg max-w-2xl mx-auto">
                Explore our website for affordable, high-quality repairs, sales
                of refurbished devices, and premium accessories.
              </p>
              <Link to="/book">
                <Button
                  size="lg"
                  className="mt-8 bg-white border-red-600 text-red-600 hover:text-white hover:bg-red-700 rounded-full px-10 h-14 text-base font-semibold shadow-lg"
                >
                  Book Your Repair Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== EMERGENCY & FAQ SECTION END ==================== */}

      {/* <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="text-center p-8 rounded-2xl bg-card shadow-card border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Contact */}
      {/* <section id="contact" className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-red-600 uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-foreground">
                Contact Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                Have questions? Reach out to us and we'll get back to you as
                soon as possible.
              </p>
              <div className="mt-8 space-y-1">
                {[
                  { icon: Mail, text: "info@techoutlet.uk" },
                  { icon: Phone, text: "020 8062 0553" },
                  { icon: MapPin, text: "260 Tottenham Ct Rd, London W1T 7 RF " },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden">
                {/* <img src={happyCustomer} alt="Happy customer" className="w-full h-64 object-cover rounded-2xl" /> 
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6742975501626!2d-0.13135629999999998!3d51.517439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad8cc23e4a7%3A0x6f9bcd0432a8f965!2s260%20Tottenham%20Court%20Road%2C%20London%20W1T%207RF%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  className="h-64 w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border/50 h-full"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                  <input
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <input
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="border-[2px] border-red-600 w-full bg-white text-red-600 rounded-full h-12 shadow-soft hover:bg-red-600 hover:text-white transition-all font-semibold"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;
const marquee: Variants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};
