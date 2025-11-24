// src/components/ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const services = [
    "Residential",
    "Commercial",
    "Industrial",
    "Agriculture",
    "Bulk Supply",
    "Other",
  ];

  return (
    <section className="w-full bg-[#071023] py-24 px-6" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 rounded-2xl shadow-xl backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-white">Request a Free Quote</h2>
          <p className="text-gray-300 mt-2">
            Fill the form and our team will contact you for a free site survey and quote.
          </p>

          {/* ⭐ FormSubmit Form with alert + reset */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.target);

              await fetch("https://formsubmit.co/radhikasolartech@gmail.com", {
                method: "POST",
                body: formData,
              });

              alert("Form submitted successfully!");
              e.target.reset();
            }}
            className="mt-6 grid grid-cols-1 gap-4"
          >
            {/* Hidden config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Solar Inquiry Received" />

            {/* Remove _next because no redirect needed */}

            <input
              name="name"
              placeholder="Full Name *"
              required
              className="w-full p-3 rounded-lg bg-[#081226] border border-gray-800 text-white"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                placeholder="Email *"
                required
                className="w-full p-3 rounded-lg bg-[#081226] border border-gray-800 text-white"
              />
              <input
                name="mobile"
                placeholder="Mobile *"
                required
                className="w-full p-3 rounded-lg bg-[#081226] border border-gray-800 text-white"
              />
            </div>

            <select
              name="serviceType"
              className="w-full p-3 rounded-lg bg-[#081226] border border-gray-800 text-white"
            >
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Message *"
              required
              className="w-full p-3 rounded-lg bg-[#081226] border border-gray-800 text-white resize-none"
            />

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-semibold text-black bg-solarBlue hover:opacity-95"
              >
                Submit Inquiry
              </button>

              <a href="tel:7300948037" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                Call: +91 7300948037
              </a>

              <a href="mailto:radhikasolartech@gmail.com" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                Email Us
              </a>
            </div>
          </form>
        </motion.div>

        {/* Contact Details + Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col gap-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <p className="text-gray-300 mt-2">
              Contact us for quotes, bulk supply inquiries or site visits.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-[#071428]">
              <Phone className="w-6 h-6 text-solarBlue" />
            </div>
            <div>
              <h4 className="text-white font-medium">Phone</h4>
              <p className="text-gray-300">+91 7300948037 • +91 9897834225</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-[#071428]">
              <Mail className="w-6 h-6 text-solarBlue" />
            </div>
            <div>
              <h4 className="text-white font-medium">Email</h4>
              <p className="text-gray-300">radhikasolartech@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-[#071428]">
              <MapPin className="w-6 h-6 text-solarBlue" />
            </div>
            <div>
              <h4 className="text-white font-medium">Address</h4>
              <p className="text-gray-300">
                Radhika SolarTech, Nagla Makrol, Sindhu Dharam Kanta, Itora, Gwalior Road, Agra - 282009
              </p>
            </div>
          </div>

          <div className="mt-2 w-full h-48 rounded-lg overflow-hidden border border-gray-800">
            <iframe
              title="Radhika SolarTech Location"
              src="https://www.google.com/maps?q=Radhika+SolarTech,+Nagla+Makrol,+Sindhu+Dharam+Kanta,+Itora,+Gwalior+Road,+Agra+282009&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
