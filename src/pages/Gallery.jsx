import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { setPageMeta } from "../utils/meta";
import { motion } from "framer-motion";

const projects = [
  {
    title: "50kW Industrial Solar Plant",
    location: "Agra, Uttar Pradesh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDk7LK-lr0NRnVGREmNt9dDohR4bA5Wloumg&s",
  },
  {
    title: "10kW Residential Rooftop",
    location: "Gwalior Road, Agra",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/11/462839554/TE/RF/DQ/127093160/residential-rooftop-solar-system-installation.jpg",
  },
  {
    title: "25kW Commercial Shop Solar",
    location: "Shahganj, Agra",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/5/513767493/MF/ID/RQ/2025337/commercial-solar-power-plant-500x500.jpg",
  },
  {
    title: "100kW Industrial Shed Installation",
    location: "UPSIDC, Agra",
    img: "https://www.solarpowermanufacturer.com/uploadfile/2024/10/18/img_350_350_20241018104752Ym43ar.jpg",
  },
  {
    title: "15kW Agriculture Water Pump System",
    location: "Fatehabad, Agra",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzVKd7-ZuTkVKp9S7WNGKgQE-dd5VTwyCtYQ&s",
  },
  {
    title: "5kW Home Solar Kit Installation",
    location: "Dayal Bagh, Agra",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcW18ww8XLbHEu6cLuSR-NOGPEolK57wIMA&s",
  },

];

export default function Gallery() {
  useEffect(() => {
    setPageMeta(
      "Gallery",
      "View completed solar installation projects by Radhika SolarTech across Agra including rooftop, industrial and agriculture solar systems."
    );
  }, []);

  return (
    <PageTransition>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-4"
        >
          Our Solar Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-10"
        >
          Explore our completed installations across residential, commercial, industrial, and agricultural sectors.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-800 hover:border-blue-400 transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
