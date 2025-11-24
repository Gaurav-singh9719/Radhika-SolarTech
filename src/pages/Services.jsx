import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { setPageMeta } from "../utils/meta";
import ServicesComponent from "../components/Services";

export default function Services() {
  useEffect(() => {
    setPageMeta(
      "Services",
      "Radhika SolarTech offers solar installation for residential, commercial, industrial & agriculture, along with bulk supply of structures, inverters & batteries."
    );
  }, []);

  return (
    <PageTransition>
      <div className="pt-10">
        <ServicesComponent />
      </div>
    </PageTransition>
  );
}
