export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919997936756"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition"
      title="Chat with us on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0 4.556-3.694 8.25-8.25 8.25A8.207 8.207 0 0 1 4.5 18.75L3 21l2.25-.75A8.25 8.25 0 1 1 20.25 12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 10.125c.375 1.125 1.5 2.25 2.625 2.625m0 0c.375.125.75.25 1.125.25.375 0 .75-.125 1.125-.25m-2.25 0c.375.125.75.25 1.125.25.375 0 .75-.125 1.125-.25" />
      </svg>
    </a>
  );
} 