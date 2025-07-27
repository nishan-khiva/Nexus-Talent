import HireForm from "@/app/components/HireForm";

export default function HireTalentPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Looking to Hire? We’ve Got You Covered.
        </h1>
        <p className="text-lg text-gray-600">
          Speed. Screening. Compliance. Let us find the right talent for you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Content */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vetting Process</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>✅ Thorough screening and background checks</li>
            <li>🧠 Technical and compliance interviews</li>
            <li>⚡ Fast turnaround and transparent communication</li>
            <li>🛡️ Pre-verified, reliable candidates only</li>
          </ul>
        </section>

        {/* Right Side: Form */}
        <HireForm />
      </div>
    </main>
  );
}
