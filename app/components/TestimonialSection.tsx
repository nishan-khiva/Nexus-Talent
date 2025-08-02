"use client";
import dynamic from "next/dynamic";

const TestimonialSection = () => {
  const { motion } = require("framer-motion");

  const testimonials = [
    {
      name: "Sarah K.",
      role: "HR Manager, TechCorp",
      text: "Hireverse Global delivered top DevOps talent in record time. Highly recommend!",
    },
    {
      name: "James D.",
      role: "Logistics Lead, FreightX",
      text: "Their CDL driver screening is the best we've seen. Reliable and fast!",
    },
    {
      name: "Priya S.",
      role: "Registered Nurse",
      text: "Found my dream job in healthcare thanks to Hireverse. Smooth process!",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10 text-[#1a2235]">
          What Our Clients & Candidates Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-gray-50 rounded-xl shadow-md p-6 border border-transparent hover:border-orange-500 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <p className="mb-4 italic text-gray-800 leading-relaxed">
                "{t.text}"
              </p>
              <div className="font-semibold text-[#1a2235]">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(TestimonialSection), { ssr: false });
