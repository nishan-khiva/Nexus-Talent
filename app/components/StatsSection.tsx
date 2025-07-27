"use client";
import dynamic from "next/dynamic";

const StatsSection = () => {
  const { motion } = require("framer-motion");
  const stats = [
    { value: "500+", label: "Hires" },
    { value: "24hr", label: "Turnaround" },
    { value: "100%", label: "Compliance" },
    { value: "4.9/5", label: "Rating" },
  ];
  return (
    <section className="py-12 bg-white text-[#1a2235] flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(StatsSection), { ssr: false }); 