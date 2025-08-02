"use client";
import HireForm from "@/app/components/HireForm";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CloudLightning,
  BadgeCheck,
  Brain,
} from "lucide-react";

export default function HireTalentPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Heading */}
      <motion.div
        className="max-w-5xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          Looking to Hire?{" "}
          <span className="text-orange-500">We’ve Got You Covered.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Speed. Screening. Compliance. Let us find the right talent for your success.
        </p>
      </motion.div>

      {/* Content & Form Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Vetting Content */}
        <motion.section
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Our Vetting Process
          </h2>
          <ul className="space-y-5 text-gray-700 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-orange-500 w-6 h-6 mt-1" />
              <span>Thorough screening and comprehensive background checks</span>
            </li>
            <li className="flex items-start gap-3">
              <Brain className="text-orange-500 w-6 h-6 mt-1" />
              <span>Technical assessments & compliance interviews</span>
            </li>
            <li className="flex items-start gap-3">
              <CloudLightning className="text-orange-500 w-6 h-6 mt-1" />
              <span>Quick turnaround time with transparent communication</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="text-orange-500 w-6 h-6 mt-1" />
              <span>Only pre-verified, reliable professionals</span>
            </li>
          </ul>
        </motion.section>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white/90 backdrop-blur-md border-t-4 border-orange-500 rounded-xl shadow-xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Share Your Hiring Needs
            </h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
              Fill out the form below and we’ll get in touch within 24 hours.
            </p>
            <HireForm />
          </div>
        </motion.div>

      </div>
    </main>
  );
}
