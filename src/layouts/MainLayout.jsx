// src/layouts/MainLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

// Correct import for your schema function
import { injectSchema } from "../utils/schema";

const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Inject SEO JSON-LD schema
  useEffect(() => {
    injectSchema();
  }, []);

  return (
    <div className="bg-[#0A0F1F] text-white min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-20 pb-10">
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={pathname} />
        </AnimatePresence>
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
