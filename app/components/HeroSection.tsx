"use client";
import dynamic from "next/dynamic";

const HeroSection = () => {
  const { motion } = require("framer-motion");
  return (
    <section className="bg-[#1a2235] text-white py-16 px-4 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Elite Staffing for DevOps, Cybersecurity, <span className="text-orange-400">CDL Drivers</span> & Healthcare in the US
      </motion.h1>
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      >
        Fast. Vetted. Reliable.
      </motion.p>
      <motion.div
        className="flex flex-col md:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
      >
        <a
          href="/hire-talent"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded shadow transition"
        >
          Request Talent
        </a>
        <a
          href="/find-job"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded shadow transition"
        >
          Join as Candidate
        </a>
      </motion.div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false }); 