import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { setPageMeta } from "../utils/meta";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  useEffect(() => {
    setPageMeta(
      "Contact",
      "Contact Radhika SolarTech for solar installation, enquiries, pricing & bulk supply of solar materials across Agra."
    );
  }, []);

  return (
    <PageTransition>
      <ContactSection />

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold text-blue-400">Office Location</h2>
        <p className="text-gray-300 mt-2">Radhika SolarTech, Nagla Makrol, Sindhu Dharam Kanta, Itora, Gwalior Road, Agra - 282009</p>

        <iframe
          className="w-full h-80 mt-6 rounded-xl border border-white/10"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=Radhika+SolarTech,+Nagla+Makrol,+Sindhu+Dharam+Kanta,+Itora,+Gwalior+Road,+Agra+282009&output=embed"
        ></iframe>
      </section>
    </PageTransition>
  );
}
