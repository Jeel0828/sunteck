"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    title: "Neighborhood",
    content: [
      "Jogeshwari - 6 min",
      "Malad - 18 min",
      "Goregaon - 10 min",
      "Andheri - 17 min",
      "Ram mandir - 2 min",
    ],
  },
  {
    title: "Infrastructure",
    content: [
      "Schools & Colleges nearby",
      "Hospitals within 10 mins",
      "Shopping malls nearby",
    ],
  },
  {
    title: "Road Connectivity",
    content: [
      "Western Express Highway",
      "Link Road access",
      "Metro connectivity",
    ],
  },
];

export default function LocationSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className="px-6 py-2 rounded-md bg-yellow-500 font-medium font-serif text-black tracking-wide"
              style={{ letterSpacing: "1px" }}
            >
              LOCATION
            </span>
          </div>

          <h2
            className="text-2xl font-medium text-[#3E4C31] font-serif"
            style={{ letterSpacing: "1px" }}
          >
            SUNTECK SKYPARK LOCATION SITE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-md lg:sticky lg:top-24"
          >
            <iframe
              src="https://www.google.com/maps?q=Mira%20Road%20Mumbai&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {accordionData.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full cursor-pointer flex justify-between items-center px-5 py-4 font-medium font-serif text-[#3E4C31] text-left"
                  style={{ letterSpacing: "1px" }}
                >
                  {item.title}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-4 text-sm font-serif text-[#3E4C31] space-y-2"
                      style={{ letterSpacing: "0.5px" }}
                    >
                      {item.content.map((text, i) => (
                        <p key={i}>• {text}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="pt-3">
              <button
                className="px-8 text-[13px] cursor-pointer font-medium font-serif py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
                style={{ letterSpacing: "1px" }}
              >
                GET SITE VISIT
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
