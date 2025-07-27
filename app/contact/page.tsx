export default function ContactPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <ul className="mb-6">
        <li>Email: <a href="mailto:contact@hireverseglobal.in" className="text-blue-600 underline">contact@hireverseglobal.in</a></li>
        <li>WhatsApp: <a href="https://wa.me/919997936756" className="text-green-600 underline">+91 99979 36756</a></li>
        <li>Website: <a href="https://hireverseglobal.in" className="text-blue-600 underline">hireverseglobal.in</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/company/hireverse-global/" className="text-blue-600 underline">Hireverse Global</a></li>
      </ul>
      {/* Contact form can be added here if needed */}
    </main>
  );
} 