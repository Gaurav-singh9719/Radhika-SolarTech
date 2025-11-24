// src/components/Preloader.jsx
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-[#0A0F1F] flex flex-col items-center justify-center z-[2000]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
        className="w-20 h-20 border-4 border-solarBlue border-t-transparent rounded-full"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
        className="mt-6 text-gray-300 text-sm"
      >
        Loading Radhika SolarTech…
      </motion.p>
    </div>
  );
}
