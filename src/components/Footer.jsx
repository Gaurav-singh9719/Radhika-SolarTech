export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-gray-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* LOGO + ABOUT */}
        <div>
          <img
            src="/logo.jpeg"
            alt="Radhika SolarTech"
            className="h-16 mb-4"
          />

          <p className="text-gray-400 leading-relaxed">
            Radhika SolarTech — Agra’s trusted solar company providing  
            Residential, Industrial & Agricultural solar solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#services" className="hover:text-blue-300">Services</a></li>
            <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
            <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            Contact Info
          </h3>

          <ul className="space-y-3">
            <li>
              📍Radhika SolarTech, Nagla Makrol, Sindhu Dharam Kanta,<br />
              Itora, Gwalior Road, Agra – 282009
            </li>

            <li>📞 <a href="tel:+91 7300948037" className="hover:text-blue-300">+91 7300948037</a></li>
            <li>📞 <a href="tel:+91 9897834225" className="hover:text-blue-300">+91 9897834225</a></li>

            <li>
              ✉️  
              <a
                href="mailto:radhikasolartech@gmail.com"
                className="hover:text-blue-300 ml-1"
              >
                radhikasolartech@gmail.com
              </a>
            </li>

            <li>🕒 Open: 9:00 AM – 7:00 PM (All 7 Days)</li>
          </ul>
        </div>

        {/* GOOGLE MAP EMBED */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            Location
          </h3>

          <div className="w-full h-48 rounded-lg overflow-hidden border border-white/20">
            <iframe
              title="Radhika SolarTech Location"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Radhika+SolarTech,+Nagla+Makrol,+Sindhu+Dharam+Kanta,+Itora,+Gwalior+Road,+Agra+282009&output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center text-gray-500 mt-12 border-t border-white/5 pt-6 text-sm">
        © {new Date().getFullYear()} Radhika SolarTech — All Rights Reserved.
      </div>
    </footer>
  );
}
