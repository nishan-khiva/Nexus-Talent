"use client";
import { motion } from "framer-motion";
import CandidateForm from "../components/CandidateForm";
import { Briefcase, Truck, Stethoscope, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";

export default function FindJobPage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-gray-50">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold mb-12 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Find a Job
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE - CONTENT */}
        <motion.div
          className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
              Categories We Serve
            </h2>
            <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <Briefcase className="text-orange-500 w-5 h-5 mt-1" />
                <span>Tech – DevOps, Cybersecurity, Cloud Professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <Truck className="text-orange-500 w-5 h-5 mt-1" />
                <span>Driving – CDL-A/B Drivers, Logistics & Delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <Stethoscope className="text-orange-500 w-5 h-5 mt-1" />
                <span>Healthcare – Certified Nurses, Caregivers, Assistants</span>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
              Why Choose Hireverse?
            </h2>
            <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <Sparkles className="text-orange-500 w-5 h-5 mt-1" />
                <span>Lightning-fast placement with dedicated guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-orange-500 w-5 h-5 mt-1" />
                <span>Work only with background-verified employers</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="text-orange-500 w-5 h-5 mt-1" />
                <span>Unlock better roles & real career growth</span>
              </li>
            </ul>
          </section>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white/90 backdrop-blur-md border-t-4 border-orange-500 rounded-xl shadow-xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Ready to Get Hired?
            </h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
              Submit your profile and we'll match you with the right opportunity.
            </p>
            <CandidateForm />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
