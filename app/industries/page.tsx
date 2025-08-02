"use client";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Logistics & Transportation (CDL Drivers)",
    description:
      "We serve the logistics industry by providing reliable and FMCSA-compliant CDL-A and CDL-B drivers for long-haul, regional, and last-mile delivery. Our staffing ensures safe, timely, and efficient transportation through verified drivers and logistics professionals.",
    image: "/truck.png"
  },

  {
    title: "Cybersecurity & Cloud",
    description:
      "Our cybersecurity staffing solutions connect companies with certified professionals skilled in SOC 2, HIPAA compliance, vulnerability management, cloud security, and penetration testing. We provide Security Analysts, Cloud Security Architects, and GRC experts.",
    image: "/Cloud.png",
  },

  {
    title: "IT & DevOps",
    description:
      "We specialize in sourcing top-tier IT professionals including DevOps Engineers, Site Reliability Engineers (SREs), and Cloud Infrastructure Experts. Our talent pool is proficient in Terraform, AWS, Docker, Kubernetes, Jenkins, CI/CD pipelines, and Infrastructure as Code (IaC).",
    image: "/devops.png",
  },
  {
    title: "Healthcare & Medical Staffing",
    description:
      "We deliver trusted healthcare staffing solutions for hospitals, clinics, nursing homes, and private care facilities. Our vetted pool includes RNs, CNAs, LPNs, medical admin staff, and caregivers. All undergo background checks and licensing verification.",
    image: "/health.png",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen px-4 md:px-12 py-16 bg-gray-50">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
      >
        <span className="text-orange-500">Industries</span> We Serve
      </motion.h1>

      <div className="space-y-20">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Content */}
            <motion.div
              className="md:w-1/2 space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {industry.title}
              </h2>
              <p className="text-gray-600 text-lg">{industry.description}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
              >
                Hire Talent
              </motion.button>
            </motion.div>

            {/* Image with hover animation */}
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-[300px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
