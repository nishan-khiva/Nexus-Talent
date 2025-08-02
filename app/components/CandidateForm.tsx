"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CandidateForm() {
  return (
    <motion.form
      className="bg-white rounded-xl shadow-lg p-8 w-full border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Join as Candidate
      </h3>

      <div className="flex flex-col gap-4">
        <motion.input
          type="text"
          placeholder="Your Name"
          required
          whileFocus={{ scale: 1.02 }}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
        />
        <motion.input
          type="email"
          placeholder="Email"
          required
          whileFocus={{ scale: 1.02 }}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
        />
        <motion.input
          type="tel"
          placeholder="Phone"
          whileFocus={{ scale: 1.02 }}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
        />

        <motion.select
          required
          whileFocus={{ scale: 1.02 }}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
        >
          <option value="">Select Category</option>
          <option value="Tech">Tech</option>
          <option value="Driving">Driving</option>
          <option value="Healthcare">Healthcare</option>
        </motion.select>

        <motion.input
          type="file"
          whileHover={{ scale: 1.01 }}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 file:text-gray-600 file:mr-4"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          Submit
        </motion.button>
      </div>
    </motion.form>
  );
}
