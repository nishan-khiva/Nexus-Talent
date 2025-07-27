import CandidateForm from "../components/CandidateForm";

export default function FindJobPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Find a Job</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Categories</h2>
        <ul className="list-disc ml-6">
          <li>Tech (DevOps, Cybersecurity, Cloud)</li>
          <li>Driving (CDL-A/B, Logistics)</li>
          <li>Healthcare (Nurses, Caregivers)</li>
        </ul>
      </div>
      <CandidateForm />
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc ml-6">
          <li>Fast placement and support</li>
          <li>Background-verified employers</li>
          <li>Career growth opportunities</li>
        </ul>
      </section>
    </main>
  );
} 