import { BsWhatsapp } from "react-icons/bs";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919997936756"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition"
      title="Chat with us on WhatsApp"
    >
      <BsWhatsapp size={32}  />
    </a>
  );
} 