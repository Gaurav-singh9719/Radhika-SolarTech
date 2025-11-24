// src/components/Hero.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-[#0B1120] text-white flex items-center">

      {/* Background Image */}
      <img
        src="/hero-bg.jpg"
        alt="Solar Panels Background"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Floating Highlight Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-48 h-48 bg-yellow-400/30 rounded-full blur-3xl"
      ></motion.div>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-24">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow"
        >
          Complete Solar Solutions for <br />
          <span className="text-blue-400">
            Residential, Industrial & Agriculture
          </span>
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-5 text-lg md:text-xl text-gray-200 max-w-3xl"
        >
          Smart Solar Solutions for Homes, Shops & Businesses — We design, supply
          and install high-efficiency solar systems across Uttar Pradesh.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-semibold shadow-lg flex items-center gap-2"
          >
            Get Free Quote <ArrowRight size={18} />
          </Link>

          <a
            href="tel:+91 7300948037"
            className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition rounded-lg font-semibold flex items-center gap-2"
          >
            <Phone size={18} /> Call Now
          </a>
        </motion.div>

        {/* Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 w-fit px-6 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-sm shadow-lg"
        >
          📞 +91 7300948037 • +91 9897834225 &nbsp; | &nbsp; 🕒 Open: 9AM – 7PM (All 7 days)
        </motion.div>
      </div>
    </section>
  );
}

