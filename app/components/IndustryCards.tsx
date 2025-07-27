"use client";

import dynamic from "next/dynamic";

const IndustryCards = () => {
  const { motion } = require("framer-motion");
  const industries = [
    {
      title: "IT & DevOps",
      desc: "Terraform, AWS, Jenkins, and more."
    },
    {
      title: "Cybersecurity & Cloud",
      desc: "SOC2, HIPAA, Security Analysts, Cloud Engineers."
    },
    {
      title: "Logistics (CDL Drivers)",
      desc: "CDL-A/B Drivers, FMCSA Compliant, Logistics Experts."
    },
    {
      title: "Healthcare",
      desc: "RNs, CNAs, Caregivers, Background-verified staff."
    }
  ];
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            className="bg-white rounded-lg shadow p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold mb-2">{ind.title}</h3>
            <p className="text-gray-700">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(IndustryCards), { ssr: false }); 