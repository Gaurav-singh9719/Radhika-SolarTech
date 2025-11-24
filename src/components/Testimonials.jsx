import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Thakur",
    location: "Mathura, Uttar Pradesh",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Radhika SolarTech ne mere ghar par 5kW system install kiya. Installation fast tha and monthly bill 80% tak kam ho gaya!",
    rating: 5,
  },
  {
    name: "Pooja Verma",
    location: "DayalBagh, Agra ",
    image: "https://i.pravatar.cc/150?img=20",
    review:
      "Service quality superb! Unki team ne proper guidance di and subsidy process bhi handle kar diya.",
    rating: 5,
  },
  {
    name: "Siya Malhotra",
    location: "Fatehabad, Agra",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "High quality panels, smart battery storage aur professional installation. Highly recommended!",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#0c0f17] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white"
        >
          What Our <span className="text-solarBlue">Customers Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mt-4"
        >
          Genuine experiences from real clients who trusted Radhika SolarTech.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-16">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#151a23] border border-gray-800 rounded-2xl p-8 shadow-lg hover:border-solarBlue/50 hover:shadow-solarBlue/20 transition-all"
            >
              {/* Image */}
              <img
                src={item.image}
                className="w-20 h-20 rounded-full mx-auto object-cover"
                alt={item.name}
              />

              {/* Name */}
              <h3 className="text-white text-xl font-semibold mt-4">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.location}</p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mt-3">
                {Array(item.rating)
                  .fill()
                  .map((_, idx) => (
                    <span key={idx} className="text-solarBlue text-xl">★</span>
                  ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                “{item.review}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
