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
    img: "https://5.imimg.com/data5/OH/BY/MY-40441151/rooftop-solar-panel-500x500.png",
  },
  {
    title: "15kW Agriculture Water Pump System",
    location: "Fatehabad, Agra",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8H1SUwN8L7E01DuGqlXk-NwFmItEoMhpQg&s",
  },
  {
    title: "5kW Home Solar Kit Installation",
    location: "Dayal Bagh, Agra",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcW18ww8XLbHEu6cLuSR-NOGPEolK57wIMA&s",
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-[#0B0F17] py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white"
        >
          Recent <span className="text-solarBlue">Installations</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mt-4"
        >
          A glimpse of our high-quality work across residential, industrial and agricultural sectors.
        </motion.p>

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-800 hover:border-solarBlue/50 transition"
            >
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
