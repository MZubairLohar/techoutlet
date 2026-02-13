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
// import { showErrorToast } from "@/lib/toast";

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

      alert("Message sent successfully ✅");
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
        className="relative min-h-screen flex items-center pt-20"
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                {/* Book Your <br />
                <span className="text-gradient">Mobile Repair</span> <br />
                Today */}
                
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent">Your Phone Fixed</span> <br />
                Today<span className="text-red-600">!</span>

              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                From cracked screens to software glitches, we handle it all. Quick, affordable, and professional mobile repair — right when you need it.
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
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"
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
                    4.9/5 Rating
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
              <motion.div
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
              </motion.div>
            </motion.div>
          </div>
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
            <div className="absolute inset-0 bg-black" />
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
  </div>
</section>


      {/* Stats */}
      <section className="py-16">
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
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
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
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
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
                  { icon: Mail, text: "info@techout.uk" },
                  { icon: Phone, text: "020 8062 0553" },
                  { icon: MapPin, text: "260 Tottenham Ct Rd, London W1T 7 RF " },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden">
                {/* <img src={happyCustomer} alt="Happy customer" className="w-full h-64 object-cover rounded-2xl" /> */}
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
      </section>

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