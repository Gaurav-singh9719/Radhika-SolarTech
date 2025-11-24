import { motion } from "framer-motion";
import { 
  Sun, 
  BatteryCharging, 
  Factory, 
  Home, 
  Boxes, 
  Wrench 
} from "lucide-react";

const services = [
  {
    icon: <Sun size={40} className="text-solarBlue" />,
    title: "Solar Panel Installation",
    desc: "High-quality residential, industrial & agriculture solar panel installation with premium efficiency.",
  },
  {
    icon: <Factory size={40} className="text-solarBlue" />,
    title: "Industrial Solar Solutions",
    desc: "50kW to 500kW+ industrial solar plants setup with durable mounting structures & high output.",
  },
  {
    icon: <Home size={40} className="text-solarBlue" />,
    title: "Commercial & Home Rooftop Systems",
    desc: "Shops, homes, complexes & societies — fully optimized rooftop solar installation.",
  },
  {
    icon: <BatteryCharging size={40} className="text-solarBlue" />,
    title: "Batteries & Inverters",
    desc: "Premium high-capacity solar batteries & inverters — best performance & long backup.",
  },
  {
    icon: <Wrench size={40} className="text-solarBlue" />,
    title: "Maintenance & Support",
    desc: "Regular cleaning, performance check & long-term support for all solar systems.",
  },
  {
    icon: <Boxes size={40} className="text-solarBlue" />,
    title: "Bulk Supply for Vendors",
    desc: "Solar structures, mounts, panels & accessories — bulk quantity vendor supply at best prices.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#0A0F1A] py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold text-center text-white"
        >
          Our <span className="text-solarBlue">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.3 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mt-4"
        >
          We provide fully customized solar solutions for every sector — from homes to industries.
        </motion.p>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-solarBlue/50 shadow-lg transition cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6">{s.icon}</div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold">{s.title}</h3>

              {/* Desc */}
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">{s.desc}</p>

              {/* Learn More CTA */}
              <a
                href="#contact"
                className="inline-block mt-6 text-solarBlue font-semibold hover:underline"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
