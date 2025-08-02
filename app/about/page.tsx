"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800">
      {/* Hero */}
      <motion.section
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Your Workforce, Our Mission — Welcome to Hireverse Global
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Empowering businesses with exceptional talent across the United States — from technology to transportation to healthcare.
        </p>
        <hr className="mt-6 border-t border-gray-300 w-20 mx-auto" />
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-3">Connecting Ambition with Opportunity — That’s Our Mission</h2>
        <p className="mb-4">
          At Hireverse Global, our mission is to bridge the gap between skilled professionals and companies in need of high-performing talent.
          We focus on speed, reliability, and compliance to ensure quality placements that drive success.
        </p>
        <div className="h-px bg-gray-300 my-6" />

        <h2 className="text-2xl font-semibold mt-6 mb-3">Shaping the Future of Hiring, One Placement at a Time</h2>
        <p>
          To become the go-to staffing partner in the US by delivering consistent, scalable, and client-focused hiring solutions.
        </p>
        <hr className="mt-4 border-t border-gray-300 w-20" />
      </motion.section>

      {/* Industries */}
      <motion.section
        className="mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-3">Specialized Staffing for Today’s Fastest-Growing Fields</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Tech:</strong> DevOps Engineers, Cybersecurity Experts, Cloud Architects</li>
          <li><strong>Driving:</strong> CDL-A & CDL-B Drivers, Logistics Coordinators</li>
          <li><strong>Healthcare:</strong> Registered Nurses (RN), Certified Nursing Assistants (CNA), Caregivers</li>
        </ul>
        <hr className="mt-6 border-t border-gray-300 w-20" />
      </motion.section>

      {/* Process */}
      <motion.section
        className="mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-3">A Proven Hiring Process Built for Speed and Precision</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Understand client needs and job requirements</li>
          <li>Source top candidates from verified databases and networks</li>
          <li>Screen, interview, and validate certifications/background</li>
          <li>Coordinate interviews and onboarding with speed</li>
          <li>Provide ongoing support post-placement</li>
        </ol>
        <hr className="mt-6 border-t border-gray-300 w-20" />
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-3">What Sets Us Apart in the World of Staffing</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>✔️ Fast placement within days, not weeks</li>
          <li>✔️ Vetted talent pool with verified credentials</li>
          <li>✔️ Deep industry specialization</li>
          <li>✔️ Transparent communication & support</li>
          <li>✔️ Compliance with all federal & state hiring regulations</li>
        </ul>
        <hr className="mt-6 border-t border-gray-300 w-20" />
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg font-medium mb-2">Let’s Build Your Dream Team — Or Join One</p>
        <a
          href="/find-job"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg transition duration-200"
        >
          Get Started
        </a>
        <hr className="mt-6 border-t border-gray-300 w-20 mx-auto" />
      </motion.section>

      {/* LinkedIn */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <a
          href="https://www.linkedin.com/company/hireverse-global/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-base"
        >
          Grow With Us — Follow Hireverse Global on LinkedIn
        </a>
      </motion.section>
    </main>
  );
}
