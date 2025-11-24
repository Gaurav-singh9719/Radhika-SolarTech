// src/utils/schema.js
export const injectSchema = () => {
  try {
    // Remove existing if any
    const old = document.getElementById("rs-schema");
    if (old) old.remove();

    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Radhika SolarTech",
      image: "https://images.unsplash.com/photo-1592833159340-ea0f6b6adf8e",
      "@id": "https://radhikasolartech.example",
      url: "https://radhikasolartech.example",
      telephone: ["+917300948037", "+919897834225"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nagla Makrol, Sindhu Dharam Kanta, Itora, Gwalior Road",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282009",
        addressCountry: "IN"
      },
      openingHours: "Mo-Su 09:00-19:00",
      priceRange: "₹₹"
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "rs-schema";
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);
  } catch (e) {
    // ignore
    console.warn("Schema inject failed", e);
  }
};
