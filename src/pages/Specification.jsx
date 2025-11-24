import React from "react";
import { motion } from "framer-motion";

export default function Specification() {
  return (
    <section className="min-h-screen bg-[#071023] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Solar Specifications & Pricing
        </motion.h1>

        {/* ---- Block 1 : Solar Structure Image ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-xl p-6 mb-14"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Solar Mounting Structure
          </h2>

          <div className="w-full rounded-lg overflow-hidden border border-gray-700">
            <img
              src="/Structure.jpeg"     // <-- yaha apni image ka path daalna
              alt="Solar Structure"
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        {/* ---- Block 2 : PM Surya Ghar Yojna Rate List ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-xl p-6 mb-14"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            PM Surya Ghar Subsidy Rate List
          </h2>

          <div className="w-full rounded-lg overflow-hidden border border-gray-700">
            <img
              src="/solar-rateList.jpeg"         // <-- yaha apni rate-list image ka path daalna
              alt="Solar Rate List"
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        {/* ---- Block 3 : Product Listing & Accessories ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-xl p-6"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Solar Products & Accessories
          </h2>

          <div className="w-full rounded-lg overflow-hidden border border-gray-700">
            <img
              src="/product_listing.jpg"           // <-- yaha product-list wali image
              alt="Products"
              className="w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
