// src/components/Process.jsx
import React from "react";
import { motion } from "framer-motion";
import { Search, FileText, Box, Tool, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Site Survey",
    text: "On-site assessment, shading analysis & feasibility study.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Design & Proposal",
    text: "Tailored system design, ROI estimate & detailed proposal.",
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Procurement",
    text: "Quality components (panels, inverters, batteries & structures).",
  },
  {
    icon: <Tool className="w-8 h-8" />,
    title: "Installation",
    text: "Professional mounting, wiring & electrical commissioning.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Commissioning",
    text: "Testing, net-metering support & performance verification.",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Aftercare & AMC",
    text: "Maintenance, monitoring & long-term support contracts.",
  },
];

export default function Process() {
  return (
    <section className="w-full bg-[#071024] py-24 px-6" id="process">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white"
        >
          Our <span className="text-solarBlue">Process</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mt-4"
        >
          A clear, step-by-step approach — from survey to long-term support.
        </motion.p>

        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card flex flex-col gap-4 p-6"
            >
              <div className="w-14 h-14 rounded-md bg-gradient-to-tr from-solarBlue/20 to-solarBlue/10 flex items-center justify-center">
                <div className="text-solarBlue">{s.icon}</div>
              </div>

              <h3 className="text-white text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{s.text}</p>

              <div className="mt-auto">
                <span className="text-sm font-medium text-solarBlue">Step {i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
