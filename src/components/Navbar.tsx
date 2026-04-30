// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Smartphone } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "Accessories", path: "/dashboard" },
//   // { label: "Book Repair", path: "/book" },
//   { label: "Contact", path: "/#contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "glass shadow-soft" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           <Link to="/" className="flex items-center gap-2 group">
//             <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
//               <Smartphone className="w-5 h-5 text-primary-foreground" />
//             </div>
//             <span className="text-xl font-bold text-foreground">
//               Fix<span className="text-primary">My</span>Phone
//             </span>
//           </Link>

//           <nav className="hidden md:flex items-center gap-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   location.pathname === item.path
//                     ? "text-primary bg-primary/10"
//                     : "text-muted-foreground hover:text-foreground hover:bg-muted"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="hidden md:flex items-center gap-3">
//             {/* <Link to="/admin">
//               <Button variant="ghost" size="sm" className="text-muted-foreground">
//                 Admin
//               </Button>
//             </Link> */}
//             <Link to="/book">
//               <Button size="sm" className="gradient-primary text-primary-foreground rounded-full px-6 shadow-soft hover:shadow-lg transition-shadow">
//                 Book Now
//               </Button>
//             </Link>
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
//           >
//             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden glass border-t border-border"
//           >
//             <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
//                     location.pathname === item.path
//                       ? "text-primary bg-primary/10"
//                       : "text-muted-foreground hover:text-foreground hover:bg-muted"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <Link to="/book" onClick={() => setIsOpen(false)}>
//                 <Button className="w-full gradient-primary text-primary-foreground rounded-full mt-2">
//                   Book Now
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Smartphone, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/#hero" },
  { label: "Phone Repair", path: "/phone" },
  { label: "Laptop Repair", path: "/laptop" },
  //  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 HASH SCROLL FIX (IMPORTANT PART)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          const navbarHeight = 80; // adjust according to your navbar height
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-soft" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* <Box sx={{ display: "flex", justifyContent: "center", width: "100%", py: 2 }}> */}
            <img
              src="/logo.gif"
              alt="Logo"
              style={{ width: 60, height: 60, borderRadius: "50%" }}
            />
            {/* </Box> */}

            {/* //text-foreground removed  */}
            {/* <span className="text-xl font-bold text-red-600"> 
              <span className="text-primary text-white">TECHOUTLET </span>LTD
            </span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-lg text-white font-medium transition-all duration-200 ${
                  location.pathname + location.hash === item.path
                    ? "text-primary"
                    : "text-muted-foreground border-transparent hover:text-white hover:border-b-[3px] hover:border-red-600"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* MORE DROPDOWN */}
            <div className="relative group">
              <button className="px-4 py-2 text-lg text-white font-medium hover:text-white border-transparent hover:border-b-[3px] hover:border-red-600">
                More ▾
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-44 bg-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/blogs"
                  className="block px-4 py-2 text-white hover:bg-red-600 rounded-b-lg"
                >
                  Blogs
                </Link>
                <Link
                  to="/aboutus"
                  className="block px-4 py-2 text-white hover:bg-red-600 rounded-t-lg"
                >
                  About Us
                </Link>
                <Link
                  to="/brands"
                  className="block px-4 py-2 text-white hover:bg-red-600 rounded-b-lg"
                >
                  Brands
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className={`px-4 py-2 text-lg text-white font-medium transition-all duration-200 ${
                location.pathname === "/contact"
                  ? "text-primary"
                  : "text-muted-foreground border-transparent hover:text-white hover:border-b-[3px] hover:border-red-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/book">
              <Button className="bg-red-600 hover:bg-red-600 text-primary-foreground rounded-full px-6 shadow-soft hover:shadow-lg transition-shadow">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-white hover:border-b-[3px] hover:border-red-600 w-28"
                >
                  {item.label}
                </Link>
              ))}

              {/* MORE SECTION */}
              <div className="mt-2 border-t border-gray-700 pt-2">
                <p className="px-4 text-xs text-gray-400 mb-2">More</p>
                <Link
                  to="/blogs"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-red-600 rounded-md"
                >
                  Blogs
                </Link>
                <Link
                  to="/aboutus"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-red-600 rounded-md"
                >
                  About Us
                </Link>

                <Link
                  to="/brands"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-red-600 rounded-md"
                >
                  Brands
                </Link>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-white hover:bg-red-600 rounded-md"
              >
                Contact
              </Link>

              <Link to="/book" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-red-600 rounded-full mt-2">
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
