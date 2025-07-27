import React from "react";

export default function CandidateForm() {
  return (
    <form className="bg-white rounded-xl shadow-lg p-8 w-full border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Join as Candidate</h3>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
        />

        <select
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
          required
        >
          <option value="">Select Category</option>
          <option value="Tech">Tech</option>
          <option value="Driving">Driving</option>
          <option value="Healthcare">Healthcare</option>
        </select>

        <input
          type="file"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 file:text-gray-600 file:mr-4"
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
