import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Index from "./pages/Index";
import BookRepair from "./pages/BookRepair";
import CustomerDashboard from "./pages/CustomerDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
import TechnicianDashboard from "./pages/TechnicianDashboard";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./dashboard/AdminDashboard";
import AccessoriesPage from "./pages/Accessories";
import BlogPage from "./pages/Blogs";
import BlogData from "./pages/Blogsdata";
import Login from "./pages/login";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderWrapper from "./components/Loader/wrapper";
import { LoaderProvider } from "./components/Loader/useLoader";
import Newbrands from "./pages/Newbrands";
import Newservices from "./pages/Newservices";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Phone from "./pages/Phone";
import Laptop from "./pages/Laptop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <ToastContainer />
      <Sonner />
      <BrowserRouter>
        <LoaderProvider>
          <LoaderWrapper>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/book" element={<BookRepair />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/blogsdata" element={<BlogData />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/brands" element={<Newbrands />} />
              <Route path="/services" element={<Newservices />} />
               <Route path="/contact" element={<Contact />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/phone" element={<Phone />} />
                <Route path="/laptop" element={<Laptop />} />
              {/* <Route path="/admin" element={<AdminDashboard />} /> */}
              <Route path="/technician" element={<TechnicianDashboard />} />
              <Route path="*" element={<NotFound />} />
              <Route element={<AuthProtection />}>
                <Route path="/admin/*" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </LoaderWrapper>
        </LoaderProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
// Auth Protection
const AuthProtection = () => {
  return (
    <>
      {localStorage.getItem("techOutlet") ? (
        <Outlet />
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default App;