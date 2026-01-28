"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const amenities = [
  "Gymnasium",
  "Walking & Cycling Tracks",
  "Outdoor Lap Swimming Pool",
  "Skating Rink",
  "Multi-Purpose Court",
  "Children’s Play Area",
  "Table Tennis",
  "Indoor Games Area",
  "Snooker & Billiards",
  "Yoga / Dance Room",
  "Business Centre",
  "Creche",
  "Amphitheatre",
  "Library / Reading Lounge",
  "Swimming Pool",
  "Open Green Vista",
  "Aqua Gym",
  "Landscaped Gardens",
];

const Amenities = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className="bg-white py-20 px-4" id="amenities">
      <div className="text-center mb-12">
        <div
          className="inline-block bg-[#E1C21B] px-6 py-2 text-sm font-medium font-serif text-black tracking-widest mb-3"
          style={{ letterSpacing: "1px" }}
        >
          AMENITIES
        </div>
        <h2
          className="text-2xl font-medium font-serif text-[#3E4C31] tracking-wide"
          style={{ letterSpacing: "1px" }}
        >
          SUNTECK SKYPARK
        </h2>
      </div>

      <div className="max-w-6xl mx-auto border rounded-lg">
        <button
          onClick={() => setOpen(!open)}
          className="w-full cursor-pointer flex justify-between items-center px-6 py-5 text-left"
        >
          <h3
            className="text-lg font-medium font-serif text-[#3E4C31]"
            style={{ letterSpacing: "1px" }}
          >
            Sunteck SkyPark Amenities
          </h3>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronUp className="cursor-pointer text-[#3E4C31]" />
          </motion.span>
        </button>

        {/* CONTENT */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden px-6 pb-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {amenities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    whileHover={{ y: -4 }}
                    className="h-[60px] flex items-center justify-center bg-[#F3F2F0] text-[#3E4C31] font-medium font-serif rounded-md text-sm text-center shadow-sm hover:shadow-md transition"
                    style={{ lineHeight: 1.4, letterSpacing: "0.5px" }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Amenities;
