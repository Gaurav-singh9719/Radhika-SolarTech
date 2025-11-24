import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { setPageMeta } from "../utils/meta";
import { motion } from "framer-motion";

// Local images import karo
import shop1 from "../assets/image1.jpeg";
// import shop2 from "../assets/image2.jpeg";
import shop3 from "../assets/image3.jpg"
// import shop3 from "../assets/shop3.jpg";

const features = [
  { title: "6+ Years Experience", desc: "Delivered reliable solar solutions across multiple industries." },
  { title: "Quality Materials", desc: "We supply tier-1 panels, branded inverters & strong GI structures." },
  { title: "Trusted Support", desc: "Full after-sales service, inspection & maintenance support." }
];

const images = [shop1, shop3];

export default function About() {
  useEffect(() => {
    setPageMeta(
      "About",
      "Learn about Radhika SolarTech – Agra’s trusted solar company providing installation, maintenance, inverters, batteries, structures & industrial solar solutions."
    );
  }, []);

  return (
    <PageTransition>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
              About Radhika SolarTech
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We at <b>Radhika SolarTech</b> are dedicated to providing high-quality solar
              solutions for residential, commercial, industrial, and agriculture sectors.
              Based in Agra, we supply and install premium solar panels, inverters, batteries,
              mounting structures, and complete turnkey systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With our expertise and commitment to customer service, we ensure long-lasting,
              high-efficiency installations that reduce electricity bills and promote
              sustainable energy usage.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {features.map((f, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-blue-300">{f.title}</h3>
                  <p className="text-gray-300 mt-2">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Local Images */}
          <div className="grid grid-cols-1 gap-4">
            {images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`SolarTech ${idx + 1}`}
                className="rounded-xl object-cover w-full h-80 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
