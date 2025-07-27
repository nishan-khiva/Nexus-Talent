import React from "react";

export default function HireForm() {
  return (
    <form className="bg-white rounded-xl shadow-lg p-8 w-full border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Talent</h3>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
          required
        />
        <input
          type="text"
          placeholder="Company Name"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Role(s) Needed"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}
