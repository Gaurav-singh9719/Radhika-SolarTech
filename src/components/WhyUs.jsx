import { motion } from "framer-motion";
import { ShieldCheck, Sun, BatteryCharging, Cpu, Zap, Award } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-solarBlue" />,
    title: "25+ Years Warranty",
    desc: "Long-term protection ensuring complete reliability.",
  },
  {
    icon: <Sun className="w-10 h-10 text-solarBlue" />,
    title: "High Efficiency Panels",
    desc: "Premium grade solar panels with maximum sun absorption.",
  },
  {
    icon: <BatteryCharging className="w-10 h-10 text-solarBlue" />,
    title: "Smart Battery Storage",
    desc: "Efficient power storage solutions for 24x7 energy.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-solarBlue" />,
    title: "Advanced Technology",
    desc: "AI-powered energy optimization for better output.",
  },
  {
    icon: <Zap className="w-10 h-10 text-solarBlue" />,
    title: "Fast Installation",
    desc: "Highly trained team with quick & seamless setup.",
  },
  {
    icon: <Award className="w-10 h-10 text-solarBlue" />,
    title: "Government Approved",
    desc: "Certified products with subsidy & compliance support.",
  },
];

export default function WhyUs() {
  return (
    <section className="w-full bg-[#0c0f17] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white"
        >
          Why Choose <span className="text-solarBlue">Radhika SolarTech?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mt-4"
        >
          Delivering cutting-edge solar solutions backed with unmatched quality and trust.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-14">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="bg-[#151a23] border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-solarBlue/30 hover:border-solarBlue transition-all"
            >
              <div className="flex justify-center">{item.icon}</div>

              <h3 className="text-white text-xl font-semibold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
