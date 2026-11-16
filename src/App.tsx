import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SeoManager from "./components/SeoManager";

import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

// Public, prerendered pages are bundled eagerly so they hydrate without a
// Suspense fallback mismatch.
import Index from "./pages/Index";
import BookRepair from "./pages/BookRepair";
import NotFound from "./pages/NotFound";
import AccessoriesPage from "./pages/Accessories";
import BlogPage from "./pages/Blogs";
import Newbrands from "./pages/Newbrands";
import Newservices from "./pages/Newservices";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Phone from "./pages/Phone-repair";
import Laptop from "./pages/Laptop";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoaderWrapper from "./components/Loader/wrapper";
import { LoaderProvider } from "./components/Loader/useLoader";

// Private / transactional pages are code-split out of the public bundle.
const AdminDashboard = lazy(() => import("./dashboard/AdminDashboard"));
const TechnicianDashboard = lazy(() => import("./pages/TechnicianDashboard"));
const BlogData = lazy(() => import("./pages/Blogsdata"));
const Login = lazy(() => import("./pages/login"));
const Checkout = lazy(() => import("./pages/Checkout"));

const queryClient = new QueryClient();

/** Everything below the router. Rendered by BrowserRouter on the client and StaticRouter at build time. */
export const AppShell = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <ToastContainer />
      <Sonner />

      <LoaderProvider>
        <LoaderWrapper>
          {/* Title, meta, canonical, Open Graph and JSON-LD per route */}
          <SeoManager />

          <Suspense fallback={null}>
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
              <Route path="/phone-repair" element={<Phone />} />
              <Route path="/about" element={<About />} />
              <Route path="/laptop" element={<Laptop />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/technician" element={<TechnicianDashboard />} />
              <Route path="*" element={<NotFound />} />

              <Route element={<AuthProtection />}>
                <Route path="/admin/*" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </Suspense>
        </LoaderWrapper>
      </LoaderProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

// Auth Protection
const AuthProtection = () => {
  return <>{localStorage.getItem("techOutlet") ? <Outlet /> : <Navigate to="/login" />}</>;
};

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
