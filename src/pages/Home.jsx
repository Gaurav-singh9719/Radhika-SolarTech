import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { setPageMeta } from "../utils/meta";

import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

export default function Home() {
  useEffect(() => {
    setPageMeta(
      "Home",
      "Radhika SolarTech provides solar installation, industrial solar systems, agriculture panels, inverters & batteries across Agra with premium quality."
    );
  }, []);

  return (
    <PageTransition>
      <Hero />
      <WhyUs />
      <Services />
      <Products />
      <Projects />
      <Testimonials />
      <ContactSection />
    </PageTransition>
  );
}
