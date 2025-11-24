import { motion } from "framer-motion";
import { 
  Battery, 
  Cpu,
  Sun, 
  Zap, 
  Factory, 
  Home 
} from "lucide-react";

const products = [
  {
    title: "Rooftop Solar Panels",
    icon: Cpu,
    desc: "High-efficiency rooftop solar systems for homes, shops & industries.",
    img: "https://solex.in/wp-content/uploads/2025/02/Solar-Residential-Rooftops-re-img.webp",
  },
  {
    title: "On-Grid Solar Systems",
    icon: Zap,
    desc: "Cost-effective solutions with net-metering to reduce electricity bills.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Off-Grid Solar Systems",
    icon: Battery,
    desc: "Perfect for remote areas with battery backup & 24×7 power supply.",
    img: "https://alpexsolar.com/resources/wp-content/uploads/2024/08/Untitleddesign-2024-08-28T181555.00-1.jpeg",
  },
  {
    title: "Hybrid Solar Systems",
    icon: Sun,
    desc: "Best of both worlds — grid + battery + smart power optimization.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJi-U3-_10q_LXGtGSFAyExHbaStqQ4NedQ&s",
  },
  {
    title: "Industrial Solar Plants",
    icon: Factory,
    desc: "Custom industrial solutions for large-scale power generation.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YWuhebDwDs33Yy7MvqqhBscEX6PkeSonuQ&s",
  },
  {
    title: "Residential Solar Kits",
    icon: Home,
    desc: "Budget-friendly home solar kits designed for quick installation.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Qf7qKk66yeLZ3bk6qF5-cCg_ETOIQk1Z1w&s",
  },
];

export default function Products() {
  return (
    <section className="w-full bg-[#0B0F17] py-24 px-6" id="products">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white"
        >
          Our <span className="text-solarBlue">Solar Solutions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mt-4"
        >
          High-performance solar products for every energy need — from homes to industries.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-16">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="group relative border border-gray-800 bg-[#151a23] rounded-2xl overflow-hidden shadow-lg transition-all hover:border-solarBlue/50 hover:shadow-solarBlue/20"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 object-cover opacity-80 group-hover:opacity-100 transition"
              />

              <div className="p-6">
                {/* Icon */}
                <item.icon className="w-10 h-10 text-solarBlue" />

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mt-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
