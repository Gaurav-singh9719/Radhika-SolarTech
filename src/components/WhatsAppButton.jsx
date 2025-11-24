import WhatsApp from "../assets/whatsapp.svg";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7300948037?text=Hello%20Radhika%20SolarTech%20I%20need%20a%20quote"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[1500] transform transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
        <img src={WhatsApp} alt="WhatsApp" className="w-7 h-7" />
      </div>
    </a>
  );
}
