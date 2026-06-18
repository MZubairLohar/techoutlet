// import { motion, Variants } from "framer-motion";
// import { Link, Router, useNavigate } from "react-router-dom";
// import {
//   Monitor,
//   Battery,
//   Zap,
//   Droplets,
//   ArrowRight,
//   Shield,
//   Award,
//   Users,
//   ChevronRight,
//   Mail,
//   Phone,
//   MapPin,
//   CheckCircle2,
// } from "lucide-react";
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
















import { motion, Variants } from "framer-motion";
import { Link, Router, useNavigate } from "react-router-dom";
import {
  Monitor,
  Battery,
  Zap,
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
} from "lucide-react";
import {
  Smile,
  ShieldCheck,
  BadgeDollarSign,
  Clock,
  Star,
} from "lucide-react";
import { Smartphone, Apple, BadgeCheck, Cpu, Radio } from "lucide-react";
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

const fadeUp = {
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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const brands = [
  { name: "iPhone", icon: Apple },        // Apple brand
  { name: "Samsung", icon: Smartphone }, // Android phone
  { name: "Xiaomi", icon: Cpu },         // tech / hardware brand
  { name: "Oppo", icon: Radio },         // communication device feel
  { name: "Vivo", icon: BadgeCheck },    // premium / trusted feel
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
      name: "Stay Happy",
      icon: Smile,              // happiness / satisfaction
      price: "From $49",
      color: "bg-primary/10 text-primary",
    },
    {
      name: "Certified Grade-A Parts",
      icon: ShieldCheck,        // certified / trusted / quality
      price: "From $29",
      color: "bg-accent/10 text-accent",
    },
    {
      name: "Best Price Guaranteed",
      icon: BadgeDollarSign,    // best price / money value
      price: "From $25",
      color: "bg-amber-100 text-amber-600",
    },
    {
      name: "Same-Day Repair",
      icon: Clock,              // speed / same day
      price: "From $59",
      color: "bg-sky-100 text-sky-600",
    },
    {
      name: "Excellent Rated On Trustpilot",
      icon: Star,               // rating / reviews
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
        className="relative xl:min-h-screen flex items-center pt-20"
      >

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              >
                {/* Book Your <br />
                <span className="text-gradient">Mobile Repair</span> <br />
                Today */}

                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent">Laptop Repair Tottenham Court Road | </span> <br />
                Electronics Store Tottenham Court Road<span className="text-red-500">!</span>

              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg text-muted-foreground xl:max-w-lg leading-relaxed"
              >
                Need a fast fix or a new gadget? Find reliable laptop repair on tottenham court road and premium gear all under one roof at our tottenham court road electronics store.


              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link to="/book">
                  <Button
                    size="lg"
                    className="border-[2px] border-red-600 bg-transparent text-red-600 rounded-full px-8 shadow-soft hover:shadow-lg hover:bg-red-600 hover:text-white transition-all text-base h-14"
                  >
                    Book Now <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
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
              <motion.div
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm text-red-600 font-medium uppercase tracking-wider"
            >
              We repair all major brands
            </motion.p>
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
                  <span className="text-sm font-medium">
                    {brand.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>



      {/* Repair Types */}
      <section className="py-20 lg:py-28">
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
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl lg:text-4xl font-bold mt-3 text-foreground"
            >
              Why Choose Tech<span className="text-red-600">-</span>Outlet Repairs<span className="text-red-600">?</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-muted-foreground max-w-6xl mx-auto"
            >
              Phones, tablets, or laptops giving you trouble? We'll repair it. Send us your phone from anywhere in the UK or visit us our shop, and we'll fix it fast. Book online for free, whether you've got a broken iPad, laptop, or mobile phone, our expert team fixes it all and post it back to you on the same day. Free send-back delivery across London, Essex, and the entire UK! We don't just repair – we rescue your tech, providing lightning-fast service with a smile. From screen repair, battery replacements to software issues we've got you covered with guaranteed quality and friendly support.
            </motion.p>
          </motion.div>

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
                {/* <p className="text-xs text-muted-foreground mt-1">{type.price}</p> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ==================== NEW SECTION START ==================== */}
      <section className="py-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Content & Introduction */}
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight"
              >
                100% Guaranteed Laptop Repair <br />
                <span className="text-red-500">Central London & Premier Electronics Store</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={1}
                className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl"
              >
                <strong className="text-foreground font-semibold">TechOutlet</strong> is your trusted electronics store and laptop repair Tottenham Court Road specialist, offering everything from MacBook repairs, screen replacement, battery issues, data recovery, and slow computer fixes to quality chargers, cables, adapters, and everyday tech accessories. Our experienced local technicians provide fast diagnosis, honest advice, affordable prices, and reliable solutions so you can repair, replace, and upgrade your devices all in one place.
              </motion.p>

              {/* Call to Actions Buttons */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link to="/book">
                  <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 h-12 font-medium shadow-soft hover:shadow-lg transition-all">
                    Book a Repair
                  </Button>
                </Link>
                <a href="#contact">
                  <Button variant="outline" className="rounded-full px-6 h-12 font-medium border-red-500/30 text-foreground hover:bg-red-505 transition-all">
                    Get a Free Quote
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="ghost" className="rounded-full px-6 h-12 font-medium text-muted-foreground hover:text-foreground transition-all">
                    Visit Our Store
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* USP Feature Cards Grid */}
            <motion.div
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { title: "5-Star Google Rating", desc: "Top-rated tech support & premium trust", badge: "⭐" },
                { title: "Same-Day Repairs", desc: "Fast diagnosis & lightning-fast turnaround", badge: "⚡" },
                { title: "Repair + Accessories", desc: "One-stop shop for parts, cables & premium gear", badge: "🔌" },
                { title: "100% Satisfied Customers", desc: "Guaranteed quality and friendly support", badge: "🤝" },
                { title: "Experienced Technicians", desc: "Certified local experts for Apple & Windows", badge: "🛠️" }
              ].map((usp, idx) => (
                <motion.div
                  key={usp.title}
                  variants={fadeUp}
                  custom={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-5 rounded-2xl bg-card border border-border/60 shadow-card transition-all ${idx === 4 ? "sm:col-span-2" : ""
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{usp.badge}</span>
                    <h4 className="font-bold text-foreground text-sm sm:text-base">{usp.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{usp.desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
      {/* ==================== NEW SECTION END ==================== */}

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
                Expert Mobile Phone <span className="text-red-600">&</span> IPad Repair Services in London <span className="text-red-600">&</span> UK
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
                      At Tech Outlet Repairs, we specialise in fast and reliable phone repair for all smartphone models, including iPhone screen replacements (all models), battery replacements, back glass repairs, software updates, and more. We also provide expert repairs for MacBooks, HP and Dell laptops, samsung tablet repairs, and all iPad models across generations.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Explore our website for affordable, high-quality repairs, sales of refurbished devices, and premium accessories. Trust us for all your device needs, keeping your tech in top shape in one convenient location!
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
                  className="w-full h-[450px] object-cover"
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
      <section className="py-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-red-500 uppercase tracking-wider bg-red-50 dark:bg-red-950/30 px-4 py-1.5 rounded-full"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground mt-4 tracking-tight"
            >
              Our Reliable Laptop Repair Service
            </motion.h2>
          </div>

          {/* Features Grid - Normal Size (No Variable Error) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Free Diagnosis", desc: "No fix, no fee. We diagnose for free and tell you the exact cost upfront.", icon: "🔍" },
              { title: "Same-Day Repair", desc: "70% of jobs completed within 24 hours. Fast, reliable, local service.", icon: "⚡" },
              { title: "Honest Pricing", desc: "Written quotes before opening a single screw. No surprise charges ever.", icon: "📝" },
              { title: "Warranty Included", desc: "5-day warranty on all parts and labour. Complete peace of mind.", icon: "🛡️" },
              { title: "Skilled Techs", desc: "Expert component-level repairs on all major laptop brands.", icon: "🛠️" },
              { title: "Honest Guidance", desc: "If it's not worth fixing, we'll tell you straight instead of wasting money.", icon: "🤝" },
              { title: "Genuine Parts", desc: "We use high-grade compatible or OEM parts for long-term durability.", icon: "💎" },
              { title: "Data Private", desc: "Your data stays private. We don't access files unless it's a recovery job.", icon: "🔒" }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm relative overflow-hidden flex flex-col group min-h-[200px]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-xl mb-4 border border-red-100 dark:border-red-900/30">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ==================== WHY CHOOSE US END ==================== */}


      {/* ==================== PROFESSIONAL BRAND ECOSYSTEM START ==================== */}
      <section className="py-24 bg-white text-gray-900 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Header with US-Style Minimalist Typography */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Authorized Service for <br className="hidden md:block" />
              <span className="text-gray-400">Major Device Ecosystems</span>
            </h2>
            <div className="w-20 h-1 bg-black"></div>
          </div>

          {/* Clean Symmetry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {[
              { name: "Apple", models: "MacBook, iMac, Mac" },
              { name: "Dell", models: "XPS, Latitude, Alienware" },
              { name: "Lenovo", models: "ThinkPad, Legion, Yoga" },
              { name: "HP", models: "Spectre, EliteBook, Omen" },
              { name: "ASUS", models: "ZenBook, ROG, TUF" },
              { name: "Microsoft", models: "Surface Pro, Laptop" },
              { name: "MSI", models: "Stealth, Raider, Katana" },
              { name: "Razer", models: "Blade Series (All Gen)" }
            ].map((brand, i) => (
              <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-lg font-bold uppercase tracking-widest text-black mb-2">{brand.name}</h3>
                <p className="text-sm text-gray-500 font-medium">{brand.models}</p>
              </div>
            ))}
          </div>

          {/* Bottom Trust Line */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-600 italic">
              "We maintain the highest standards of hardware integrity, using only 100% genuine components."
            </p>
          </div>
        </div>
      </section>


      {/* ==================== REPAIR PROCESS SLIDER SECTION START ==================== */}
      <section className="py-24 bg-background relative overflow-hidden border-b border-border/50">

        {/* Soft Background Lab Radials */}
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-500/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          {/* Section Title with Desktop Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-50 dark:bg-red-950/30 px-3 py-1 rounded-md">
                Workflow Pipeline
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mt-4 tracking-tight">
                Our 6-Step Laptop Repair Process <br />
                <span className="text-red-500">Tottenham Court Road</span>
              </h2>
            </div>

            {/* Carousel Trigger Paddles */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById('process-slider');
                  if (el) el.scrollBy({ left: -360, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-foreground hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-500 hover:border-red-500/20 transition-all active:scale-95 cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('process-slider');
                  if (el) el.scrollBy({ left: 360, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-foreground hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-500 hover:border-red-500/20 transition-all active:scale-95 cursor-pointer"
              >
                →
              </button>
            </div>
          </div>

          {/* Native Horizontal Pipeline Scroll Wrapper */}
          <div
            id="process-slider"
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory scroll-smooth relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              {
                step: "01",
                title: "Tell Us the Problem",
                desc: "Reach out via walk-in, phone call, WhatsApp, or our online form to let us know exactly what's wrong with your machine."
              },
              {
                step: "02",
                title: "Free Diagnosis",
                desc: "We perform comprehensive hardware testing to uncover the root failure and explain the technical path to you clearly."
              },
              {
                step: "03",
                title: "Clear Written Quote",
                desc: "You receive an exact, itemized transparent quote upfront before any repair begins. Absolutely zero hidden costs."
              },
              {
                step: "04",
                title: "Expert Lab Repair",
                desc: "Your laptop is actively serviced by a skilled lab technician—the exact same engineer who handled your diagnostic test."
              },
              {
                step: "05",
                title: "Rigorous Testing",
                desc: "We verify everything: power delivery, displays, ports, Wi-Fi bands, cameras, keyboards, battery cycles, and thermals."
              },
              {
                step: "06",
                title: "Collection & Warranty",
                desc: "Pick up your certified working device along with official parts warranty paperwork and professional tech aftercare tips."
              }
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="min-w-[290px] sm:min-w-[340px] max-w-[350px] h-[250px] snap-start p-6 rounded-2xl bg-card border border-border/70 shadow-sm relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-red-500/20 hover:shadow-md shrink-0"
              >
                {/* Top Linear Laser Accent Layer */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Header Block: Light Minimal Step Tracker */}
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

                  {/* Content Stream */}
                  <h3 className="font-extrabold text-foreground text-base md:text-lg mb-2.5 group-hover:text-red-500 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Interactive Tail */}
                <div className="flex justify-end pt-2 border-t border-border/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-red-500/70">
                    NEXT_STEP_DATA // →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* ==================== REPAIR PROCESS SLIDER SECTION END ==================== */}



      {/* ==================== LAPTOP & COMPUTER SERVICES SECTION (BOLD & OPTIMIZED) ==================== */}
<section className="py-12 bg-white border-b border-gray-100 w-full">
  <div className="w-full px-4 md:px-8 lg:px-16">

    {/* Header Content - Heading Bari Kar Di */}
    <div className="max-w-3xl mb-12">
      <span className="text-[11px] font-bold text-red-600 uppercase tracking-[0.2em] bg-red-50 px-4 py-1.5 rounded-full">
        Our Specialist Services
      </span>
      <h2 className="text-3xl md:text-4xl font-black text-gray-950 mt-4 leading-[1.1]">
        Laptop & Computer Repair <br />
        <span className="text-red-600">Tottenham Court Road</span>
      </h2>
    </div>

    {/* Services Grid - Font size barha diya */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Laptop Repair", icon: "💻", desc: "Cracked screens, battery swaps, hinges & liquid damage." },
        { title: "MacBook Specialist", icon: "🍎", desc: "M-Series & Intel logic boards, screen & storage upgrades." },
        { title: "PC & Desktop", icon: "🖥️", desc: "Troubleshooting, no-power, boot loops & hardware faults." },
        { title: "Gaming Systems", icon: "🎮", desc: "GPU reflow, high-grade thermal paste & cooling fans." },
        { title: "SSD & RAM", icon: "🚀", desc: "Fast upgrades: 90s boot times down to 12 seconds." },
        { title: "Data Recovery", icon: "🔒", desc: "Failed drives, malware removal & secure file recovery." }
      ].map((item, idx) => (
        <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-400 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-xl mb-5 border border-gray-100 shadow-sm">
            {item.icon}
          </div>
          <h3 className="font-extrabold text-base text-gray-950 mb-2">{item.title}</h3>
          <p className="text-xs font-medium text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Footer Info Bar */}
    <div className="mt-10 p-6 rounded-2xl border border-red-100 bg-red-50/50 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-xs font-semibold text-gray-800">
        <strong className="text-gray-950">Business Services:</strong> Bulk repair, priority turnaround & direct invoicing for agencies.
      </p>
      <a href="#contact" className="text-[11px] font-bold px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all shadow-md shadow-red-200 whitespace-nowrap">
        Ask About Agreements
      </a>
    </div>

  </div>
</section>


      {/* ==================== WHY LAPTOPS FAIL - GRID SECTION ==================== */}
      <section className="py-20 bg-muted/30 border-y border-border/50">

        <div className="container mx-auto px-4 mb-12 text-center">
          <span className="text-xs font-black text-red-500 uppercase tracking-[0.2em] bg-red-500/10 px-4 py-1 rounded-full">
            The Engineering Reality
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-6 tracking-tight">Why Laptops Actually Fail</h2>
        </div>

        {/* Clean Grid Layout - No Slider, No Duplicates */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
            {[
              { icon: "🔥", title: "Excessive Heat", desc: "Dust clogs cooling, thermal paste dries out, causing critical degradation." },
              { icon: "🔋", title: "Aging Batteries", desc: "Cells lose capacity over 3-4 years, risking internal gas buildup." },
              { icon: "💧", title: "Liquid Spills", desc: "Even a tiny splash silently corrodes motherboard traces over weeks." },
              { icon: "🔌", title: "Damaged Ports", desc: "Yanking cables breaks delicate internal solder pads. We fit new jacks." },
              { icon: "💾", title: "Failing Drive", desc: "Mechanical HDDs wear down; SSDs wear out electrically. Backup now." },
              { icon: "🗜️", title: "Hinge Damage", desc: "Minor structural cracks spread, ripping screens from the base." },
              { icon: "🦠", title: "Malware/Bloat", desc: "Background processes mimic hardware failure and bloat system OS." },
              { icon: "⚡", title: "Power Surges", desc: "Non-certified chargers send unstable ripples, killing board rails." },
              // { icon: "🛠️", title: "Structural Impact", desc: "Small falls crack micro-solder joints beneath the main chips." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-full p-6 rounded-2xl bg-card border border-border hover:border-red-500/50 transition-all shadow-sm flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==================== WHY LAPTOPS FAIL - END ==================== */}

      {/* ==================== DIY VS REPAIR & DECISION MATRIX (UPDATED FONT) ==================== */}
      <section className="py-10 bg-card/30 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-[11px] font-black text-red-500 uppercase tracking-[0.2em] bg-red-500/10 px-4 py-1 rounded-full">
              Decision Matrix
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 tracking-tight">
              DIY or Professional? <span className="text-red-500">Decide Smartly.</span>
            </h2>
          </div>

          {/* Split Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">

            {/* Safe to DIY */}
            <div className="p-6 rounded-2xl bg-background border border-emerald-500/20 shadow-sm">
              <h3 className="text-base font-bold mb-2">Safe to DIY</h3>
              <p className="text-xs text-muted-foreground mb-4">Start with these steps before visiting the lab.</p>
              <div className="flex flex-wrap gap-2">
                {["Restart", "Change Charger", "Scan Malware", "Clear Cache", "Check Updates"].map((item) => (
                  <span key={item} className="px-3 py-1 text-[11px] font-bold bg-emerald-500/10 text-emerald-600 rounded-full">{item}</span>
                ))}
              </div>
            </div>

            {/* Leave to Pros */}
            <div className="p-6 rounded-2xl bg-background border border-red-500/20 shadow-sm">
              <h3 className="text-base font-bold mb-2">Leave to Pros</h3>
              <p className="text-xs text-muted-foreground mb-4">Don't risk your hardware with trial-and-error.</p>
              <div className="flex flex-wrap gap-2">
                {["Micro-soldering", "Liquid Damage", "Hinge Repair", "Data Recovery"].map((item) => (
                  <span key={item} className="px-3 py-1 text-[11px] font-bold bg-red-500/10 text-red-500 rounded-full">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg font-bold mb-4">Repair vs Replace: The Logic</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { sit: "Screen Break", action: "Repair", desc: "Worth it if <5 yrs old." },
                { sit: "Slow System", action: "SSD Upgrade", desc: "Instant performance boost." },
                { sit: "Motherboard", action: "Replace", desc: "If repair > 60% value." },
                { sit: "Liquid Spill", action: "Urgent Fix", desc: "Stop! Flush now." }
              ].map((item, i) => (
                // Line 2009: Card wrapper
                <div key={i} className="p-8 rounded-2xl bg-card border border-border flex flex-col justify-center">

                  {/* Line 2010: Label */}
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{item.sit}</p>

                  {/* Line 2011: Main Action */}
                  <h4 className="font-black text-lg my-2">{item.action}</h4>

                  {/* Line 2012: Description */}
                  <p className="text-sm text-muted-foreground leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
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
                  { num: "01", title: "Diagnostic Software", desc: "Real-time battery health, SSD SMART data analysis, stress tests." },
                  { num: "02", title: "Precision Toolkits", desc: "Heavy drivers, ESD grounding mats, non-marring spudgers." },
                  { num: "03", title: "Optical Microscopes", desc: "High-magnification for trace diagnostics and jumper repairs." },
                  { num: "04", title: "Hot Air & Soldering", desc: "Micro-soldering reflow stations for delicate IC chip extractions." },
                  { num: "05", title: "Data Recovery Blocks", desc: "Deep-level drive readers and hardware disk cloning tools." },
                  { num: "06", title: "Customer Portal", desc: "Access your repair status and live updates 24/7." }
                ].map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-8 rounded-[24px] bg-card border border-border/60 hover:border-red-500/50 transition-all duration-300 shadow-sm"
                  >
                    <div className="text-[10px] font-mono font-bold text-muted-foreground/50 uppercase tracking-widest mb-4">
                      SYSTEM_CORE_// {tool.num}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

         {/* ==================== COMMON ISSUES & SERVICES SECTION (ENLARGED) ==================== */}
<section className="py-24 bg-background w-full">
  <div className="container mx-auto px-6 max-w-7xl">

    {/* Section 1: Common Issues We Master */}
    <div className="mb-20">
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-red-500 uppercase tracking-[0.2em] bg-red-50 px-6 py-2 rounded-full">
          Diagnostic Lab Services
        </span>
        <h2 className="text-5xl font-black text-foreground mt-6">Common Issues We Master</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Screen Replacement", price: "From £80", desc: "Cracked glass, lines, or flickering." },
          { title: "Battery Replacement", price: "From £60", desc: "Fast drainage or won't hold charge." },
          { title: "Charging Port Fix", price: "Expert Level", desc: "Loose DC jacks or USB-C ports." },
          { title: "Keyboard/Trackpad", price: "OEM Parts", desc: "Spill damage or unresponsive keys." },
          { title: "Liquid Recovery", price: "Urgent", desc: "Professional ultrasonic cleaning." },
          { title: "Motherboard Repair", price: "Logic Board", desc: "Micro-soldering and no-power." },
          { title: "Overheating/Fans", price: "15-25°C Drop", desc: "Deep cleaning/repasting." },
          { title: "SSD Upgrades", price: "Speed Boost", desc: "Faster boot and data recovery." },
          { title: "Hinge Repair", price: "Structural", desc: "Fixing chassis and hinge cracks." }
        ].map((item, idx) => (
          <button key={idx} className="border border-border p-8 flex flex-col items-center text-center hover:border-red-500 hover:bg-red-50/50 transition-all w-full rounded-2xl shadow-sm">
            <span className="text-xs font-bold uppercase text-red-500 mb-2 tracking-wider">{item.price}</span>
            <h3 className="text-lg font-black text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>

    {/* Section 2: Expert Technical Services */}
    <div className="border-t border-border pt-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black text-foreground">Expert Technical Services</h2>
        <p className="text-muted-foreground text-lg mt-4">Professional diagnostics for your laptop, desktop & gaming rig.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Laptop & MacBook", items: ["All Brands (Apple, Dell, HP, etc.)", "Logic Board Repair (M1-M4)", "Swollen Battery Swap", "Screen & Hinge Fix"] },
          { title: "Gaming & PC", items: ["Thermal/Fan Servicing", "GPU Reflow & Overclocking", "Boot Loops & Power Faults", "ROG, Alienware, MSI Expert"] },
          { title: "Data & Software", items: ["Emergency Data Recovery", "Malware & Virus Cleanup", "Clean OS Install", "System Migration"] },
          { title: "Upgrades & B2B", items: ["HDD to SSD Upgrades", "RAM Expansion", "Bulk Business Repair", "Account Invoicing"] }
        ].map((category, idx) => (
          <div key={idx} className="p-8 rounded-3xl border border-border bg-card">
            <h3 className="font-black text-xs text-red-500 mb-6 uppercase tracking-[0.2em]">{category.title}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {category.items.map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <span className="text-emerald-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

          {/* ==================== PART 2: THE MODERN RETAIL HUB ==================== */}
          <div>
            {/* Main Title Head */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-md">
                Walk In Anytime
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mt-4 tracking-tight">
                Electronics Accessories <br />
                <span className="text-red-500">& Peripherals Shop</span>
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 max-w-md mx-auto">
                Drop by our storefront for premium tech upgrades, hybrid office setups, and fast travel fixes.
              </p>
            </div>

            {/* Clean Split Showcase Grid */}
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {[
                {
                  category: "Laptop & PC Accessories",
                  icon: "💻",
                  items: "USB-C multi-hubs, ergonomic laptop stands, active cooling pads, high-res webcams, and comprehensive docking stations for hybrid home-office working setups."
                },
                {
                  category: "Keyboards & Mice",
                  icon: "⌨️",
                  items: "Official Logitech, Keychron, and Apple peripherals. Reliable budget options for daily tasks alongside gaming mechanical setups for heavy typists."
                },
                {
                  category: "Audio, Video & Cables",
                  icon: "🔌",
                  items: "High-speed HDMI 2.1, DisplayPort cables, multi-protocol USB-C to HDMI adapters, legacy VGA conversions, and robust multi-port converter adapters."
                },
                {
                  category: "Headphones & Earphones",
                  icon: "🎧",
                  items: "Budget wired earphones for £10, premium wireless Bluetooth earbuds, studio headsets, and active noise-cancelling tech built for the noisy Tube commute."
                },
                {
                  category: "Power Banks & UK Adapters",
                  icon: "🇬🇧",
                  items: "Perfect for tourists! Verified UK plug adapters straight off the Elizabeth Line. Honest, strictly rated power capacities (no fake 50,000mAh claims)."
                },
                {
                  category: "Mobile & Storage Media",
                  icon: "📸",
                  items: "Drop-proof cases, tempered glass, fast chargers, MagSafe gear, premium Lightning lines, and ultra-speed SD/microSD cards with multi-adapters."
                }
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
                Need something specific? Walk in directly—we are fully stocked weekly.
              </span>
            </div>

          </div>
        </div>
      </section>
      {/* ==================== CYBER LAB TOOLS & RETAIL HUB END ==================== */}

    {/* ==================== WHY LOCALS RECOMMEND US (BALANCED & RESPONSIVE) ==================== */}
<section className="py-16 bg-background w-full overflow-hidden">
  <div className="w-full px-6 md:px-12 max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-10">
      <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
        Why We're the Electronics Shop <br />
        <span className="text-red-500">Locals Actually Recommend</span>
      </h2>
      <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl">
        Repairs are 60% of what we do. The other 40% is the shop itself.
      </p>
    </div>

    {/* Grid Items */}
    <div className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          "Laptop Chargers", "Cables", "UK Adapters",
          "Power Banks", "Keyboards & Mice", "SSDs/HDDs",
          "Headphones", "Cases & Glass", "Networking Gear"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/60 hover:border-red-500/30 transition-all">
            <span className="text-emerald-500 text-[10px]">✓</span>
            <span className="text-xs md:text-sm font-semibold text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-6 rounded-2xl bg-foreground text-background">
        <h3 className="font-bold text-base mb-1">Prices That Make Sense</h3>
        <p className="text-xs text-gray-400">Reasonable pricing for locals & students.</p>
      </div>
      <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
        <h3 className="font-bold text-base text-foreground mb-1">Quick Visits</h3>
        <p className="text-xs text-muted-foreground">Meeting in 20 mins? Walk in & walk out.</p>
      </div>
    </div>

  </div>
</section>

      {/* ==================== WHAT CAUSES A LAPTOP TO STOP WORKING? (CLEAN & SIMPLE) ==================== */}
<section className="py-14 bg-background w-full overflow-hidden border-t border-border/90">
  <div className="w-full px-6 max-w-6xl mx-auto">

    {/* Header */}
    <div className="mb-10 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-black text-foreground">What Causes a Laptop to Stop Working?</h2>
      <p className="text-sm text-muted-foreground mt-3">After years of opening these things up, here's the truth about why laptops fail:</p>
    </div>

    {/* Issues Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      {[
        { t: "Heat Issues", d: "Dust, dry thermal paste, hot CPU/GPU." },
        { t: "Old Batteries", d: "Lithium cells lose capacity and swell." },
        { t: "Liquid Spills", d: "Small splashes corrode the board." },
        { t: "Charging Ports", d: "Yanking cables cracks the port." },
        { t: "Failing Storage", d: "HDDs wear out; SSDs fail." },
        { t: "Hinge Damage", d: "Small cracks spread to frame." },
        { t: "Malware/Software", d: "System bloat and corruption." },
        { t: "Power Surges", d: "Cheap chargers fry the board." },
        { t: "Drops & Impacts", d: "Cracks internal solder joints." }
      ].map((fail, i) => (
        <div key={i} className="p-5 rounded-2xl bg-card border border-border/60 hover:border-red-500/50 transition-all flex items-start gap-4">
          <div className="text-lg mt-0.5">⚠️</div>
          <div>
            <h4 className="font-bold text-sm text-foreground">{fail.t}</h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{fail.d}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Footer CTA */}
    <div className="p-8 bg-foreground text-background rounded-2xl text-center">
      <h4 className="text-lg font-bold">Seeing these signs?</h4>
      <p className="text-sm opacity-90 mt-2 max-w-lg mx-auto">Don't wait for failure. A quick professional service prevents a costly motherboard repair.</p>
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
              Ready to Book Your <span className="text-red-500">Laptop Repair?</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Walk in, call, or WhatsApp for a free comprehensive diagnosis and honest pricing.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: "📍", title: "Immediate Walk-In", desc: "No appointment needed. Drop by our lab directly.", tag: "TCR, London · Mon-Sat" },
              { icon: "📞", title: "Call or WhatsApp", desc: "Speak with our engineers for live troubleshooting.", tag: "Call / WhatsApp" },
              { icon: "⚡", title: "Online Quote", desc: "Send your model & fault. Reply same business day.", tag: "Fixed Time Slots Available" }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-card border border-border/60 hover:border-red-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-lg mb-2">{item.icon}</div>
                  <h3 className="font-bold text-sm text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
              🛡️ No-Fix, No-Fee Guarantee: Free diagnostic tests.
            </div>
          </div>

        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              Emergency Repair Support
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              Some repairs can't wait. We operate a fast-track triage system for urgent situations in the heart of London.
            </p>
          </div>

          {/* Emergency Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Student Priority */}
            <div className="border border-black p-8 bg-black text-white rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Same-Day Student Repair</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Deadline tomorrow? Laptop broken? We prioritize students from UCL, SOAS, Birkbeck, UAL, LSE, and King's. Bring your student ID for a discount.
              </p>
              <div className="text-xs font-bold uppercase tracking-widest border border-white px-4 py-2 inline-block">Walk-in Ready</div>
            </div>

            {/* Business Priority */}
            <div className="border border-gray-200 p-8 hover:border-black transition-colors rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Emergency Business</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Pitch at 4pm and laptop dead? Call us first thing—we'll keep a slot open. Local agencies and consultancies rely on our fast turnaround.
              </p>
              <button className="text-sm font-bold border-b border-black">CALL FOR SLOT →</button>
            </div>

            {/* Tourist Priority */}
            <div className="border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Tourist & Visitor Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Spilled coffee in Covent Garden? Charger lost on the Eurostar? We're a 4-minute walk from Tottenham Court Road station. We get you fixed before your flight.
              </p>
              <p className="text-xs font-medium text-black">4-Min Walk from TCR Station</p>
            </div>
          </div>

          {/* CTA Bar */}
          <div className="mt-12 p-8 bg-gray-50 flex flex-col md:flex-row justify-between items-center border border-gray-100">
            <div className="mb-4 md:mb-0">
              <h4 className="font-bold text-lg">Call or WhatsApp Before You Travel</h4>
              <p className="text-sm text-gray-600">Send your model and fault—we'll check parts before you set off.</p>
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
            <motion.div
              className="lg:col-span-6 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div>
                <motion.span variants={fadeUp} className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                  Our Location
                </motion.span>
                <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-foreground mt-2 leading-tight">
                  Your Local Laptop Repair Experts on <br />
                  <span className="text-red-600">Tottenham Court Road</span>
                </motion.h3>
                <motion.p variants={fadeUp} className="text-red-600 font-medium mt-2 text-sm flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  Two Minutes from Tottenham Court Road Station
                </motion.p>
              </div>

              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Located directly on Tottenham Court Road near Tottenham Court Road Station (Elizabeth Line + Northern Line), we're one of Central London's most accessible repair shops. If you're coming from <strong className="text-foreground border-b border-red-600/30">Goodge Street (5 min)</strong>, <strong className="text-foreground border-b border-red-600/30">Warren Street (14 mins)</strong>, <strong className="text-foreground border-b border-red-600/30">Oxford Circus (10 mins)</strong>, Bloomsbury, Fitzrovia, Soho, Covent Garden, or Holborn—you're close enough to walk over.
              </motion.p>

              <motion.div variants={fadeUp} className="p-5 rounded-2xl bg-card border-l-4 border-l-red-600 border-y border-r border-border/60 shadow-sm">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most people walk in without an appointment. Drop us a <span className="text-green-500 font-bold hover:underline cursor-pointer">WhatsApp</span> or call to check part availability first if you prefer. Either way: <strong className="text-foreground font-semibold">no diagnostic fee, no pressure, no hidden charges.</strong>
                </p>
              </motion.div>
            </motion.div>

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

              <div>
                <motion.span variants={fadeUp} className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                  Why Trust Us
                </motion.span>
                <motion.h3 variants={fadeUp} className="text-2xl font-bold text-foreground mt-2">
                  People Trust Us With Their <br />
                  <span className="text-red-600">Work, Studies, and Memories</span>
                </motion.h3>
              </div>

              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                A laptop isn't just a laptop. It's the dissertation that's three weeks late. The wedding photos that aren't backed up. The client presentation is due tomorrow morning.
              </motion.p>

              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                We get that. Most of our customers come back to us not because we're the cheapest in London (we are fair), but because we tell them the truth about their device, fix it properly, and stand behind the work.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-5 border-t border-border/80 flex flex-wrap gap-4 items-center justify-between">
                <div>
                  <p className="font-bold text-foreground text-sm">The proof is in the work</p>
                  <p className="text-xs text-muted-foreground">Not the marketing</p>
                </div>
                <div className="flex gap-3">
                  <a href="#reviews" className="text-xs font-semibold px-4 py-2.5 bg-background hover:bg-red-600/5 border border-border rounded-xl transition-all text-foreground">
                    Google Reviews ⭐
                  </a>
                  <a href="#gallery" className="text-xs font-semibold px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all shadow-md shadow-red-600/10">
                    Before & After Photos
                  </a>
                </div>
              </motion.div>
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
                Deadline tomorrow? Laptop broken? Walk in. We prioritize students from UCL, SOAS, Birkbeck, UAL, LSE, and King's. Bring your ID for a student discount.
              </p>
            </div>

            {/* Business Priority */}
            <div className="group p-8 rounded-3xl bg-card border border-border hover:border-red-500 transition-all shadow-sm">
              <div className="text-red-500 mb-6 text-3xl">💼</div>
              <h3 className="text-xl font-bold mb-3">Business Emergency</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Pitch at 4pm and laptop dead? Call us first thing—we'll keep a slot open. Most local agencies and consultancies have our number saved.
              </p>
            </div>

            {/* Tourist/Visitor Priority */}
            <div className="group p-8 rounded-3xl bg-card border border-border hover:border-red-500 transition-all shadow-sm">
              <div className="text-red-500 mb-6 text-3xl">✈️</div>
              <h3 className="text-xl font-bold mb-3">Tourist Express</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Spilled coffee in Covent Garden? Charger lost on the Eurostar? We’re a 4-minute walk from Tottenham Court Road station. We fix it fast before your flight.
              </p>
            </div>
          </div>

          {/* CTA Bar */}
          <div className="mt-12 p-8 rounded-3xl bg-red-500 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h4 className="text-2xl font-black">Call or WhatsApp Before You Travel</h4>
              <p className="opacity-90">Save the trip. Send us the model and the fault—we'll check parts before you set off.</p>
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
                Our diagnostic lab is strategically positioned to provide ultra-fast tech support and same-day laptop repair turnarounds for residents, students, and businesses across West End and Central London districts.
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
                  { location: "Fitzrovia", postal: "W1 / WIT Zones", distance: "Walking Distance" },
                  { location: "Soho", postal: "W1D / W1F Districts", distance: "5 Mins Away" },
                  { location: "Bloomsbury", postal: "WC1 Area", distance: "Immediate Access" },
                  { location: "Covent Garden", postal: "WC2 District", distance: "Short Transit" },
                  { location: "Holborn", postal: "WC1V / WC2A", distance: "Direct Line Route" },
                  { location: "West End", postal: "Central Hub", distance: "In-Store Drop off" }
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
                📍 Walk in from any surrounding station for a zero-liability free diagnosis.
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
                Some repairs can't wait. We operate a high-priority triage system for immediate needs in Central London.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Student Priority", desc: "UCL, SOAS, Birkbeck, UAL, LSE, King's. Priority turn-around for students.", tag: "Walk-in Priority", dark: true },
                { title: "Business Critical", desc: "Pitch at 4pm? Laptop dead? We maintain emergency slots for local agencies.", tag: "Call for Slot", dark: false },
                { title: "Tourist Support", desc: "4-minute walk from TCR station. Fast repairs for travelers before flight.", tag: "Fast Track", dark: false }
              ].map((item, i) => (
                <div key={i} className={`p-10 border transition-all duration-300 hover:shadow-2xl rounded-2xl ${item.dark ? 'bg-black text-white border-black' : 'bg-white border-gray-200'}`}>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className={`text-sm mb-8 leading-relaxed ${item.dark ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
                  <div className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 inline-block border ${item.dark ? 'border-white' : 'border-black'}`}>
                    {item.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section - Bento Style */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "Do you offer repair on Tottenham Court Road?", a: "Yes. Windows, MacBooks, Chromebooks, gaming & business devices. Walk in anytime." },
                { q: "Is it safe to give my laptop in for repair?", a: "Privacy is our priority. We only access what is necessary to complete the fix." },
                { q: "How long does a repair take?", a: "Specialized in same-day repairs. Drop in morning, collect in afternoon." },
                { q: "What are your pricing brackets?", a: "Basic fixes £40-£90. Major repairs (screen/motherboard) £150-£300+." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 border border-gray-100 hover:border-black transition-all rounded-2xl">
    <h4 className="font-bold text-lg mb-3">{item.q}</h4>
    <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
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
                Need a Repair<span className="text-red-600">?</span> We<span className="text-red-600">'</span>ve Got You Covered
              </h2>
              <p className="mt-4 text-red-600 text-lg max-w-2xl mx-auto">
                Explore our website for affordable, high-quality repairs, sales of refurbished devices, and premium accessories.
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