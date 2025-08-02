"use client";
import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import { Linkedin, Globe } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <TfiEmail className="text-blue-600 text-lg" />,
      title: "Email Us",
      content: "contact@hireverseglobal.in",
      href: "mailto:contact@hireverseglobal.in",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: <BsWhatsapp className="text-green-600 text-lg" />,
      title: "WhatsApp",
      content: "+91 99979 36756",
      href: "https://wa.me/919997936756",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      icon: <Globe className="text-purple-600 text-lg" />,
      title: "Website",
      content: "hireverseglobal.in",
      href: "https://hireverseglobal.in",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      icon: <Linkedin className="text-blue-600 text-lg" />,
      title: "LinkedIn",
      content: "Hireverse Global",
      href: "https://www.linkedin.com/company/hireverse-global/",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left Section */}
        <motion.div
          className="flex flex-col h-full space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Info Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg mb-8">
              We'd love to hear from you. Whether you're a candidate looking for
              opportunities or a company seeking staffing solutions, our team is
              here to help you succeed.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 ${method.bgColor} rounded-full flex items-center justify-center`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {method.title}
                    </h3>
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${method.textColor} hover:underline text-lg`}
                    >
                      {method.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

            {/* Why Choose Us Card
            <motion.div
              className="bg-gradient-to-r w-[80vw] from-orange-500 to-orange-600 rounded-lg shadow-md p-6 text-white flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-orange-50">
                {[
                  "Expert staffing solutions",
                  "Quick response time",
                  "Industry expertise",
                  "Personalized approach",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div> */}
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.form
          className="bg-white shadow-lg rounded-lg p-8 space-y-6 flex flex-col justify-between h-[650px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! We'll get back to you soon.");
          }}
        >
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

          <div className="space-y-6 flex-1">
            {/* Name Field */}
            <div>
              <label className="block text-base font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full border-2 rounded-lg px-4 py-3 text-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-base font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full border-2 rounded-lg px-4 py-3 text-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-base font-semibold mb-2">Message</label>
              <textarea
                rows={6}
                required
                placeholder="Tell us how we can help you..."
                className="w-full border-2 rounded-lg px-4 py-3 text-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 px-8 rounded-lg hover:bg-orange-600 transition-all text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </main>
  );
}
