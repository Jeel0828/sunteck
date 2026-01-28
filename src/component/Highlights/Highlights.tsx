"use client";

import { motion } from "framer-motion";

const highlights = [
  "Sunteck Sky Park is bringing new meaning to the term ‘luxury living’.",
  "Iconic 4 Towers of 45 Habitable floors offering Sea View in Mira Road.",
  "Premium 2 BHK & 3 BHK Residences with all Modern Living Experiences.",
  "Sunteck Sky Park brings a space that redefines the meaning of luxury.",
  "50 Feet above ground infinity swimming pool Surrounded By Scenic Views.",
  "Sky Lounge with Panoramic Views of the City Skyline and Sea.",
  "Rooftop Sky Garden with Lush Greenery and Relaxation Zones.",
  "Jain Temple Ganesh and Shiv Temple within Complex.",
];

const Highlights = () => {
  return (
    <section id="highlights" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <span className="bg-[#E1C30F] text-black px-6 py-2 text-sm font-medium tracking-widest">
              HIGHLIGHTS
            </span>
            <span className="absolute left-1/2 -bottom-2 w-28 h-[2px] bg-[#E1C30F] -translate-x-1/2" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-medium tracking-wide mb-10 text-[#3E4C31] font-serif"
        >
          SUNTECK SKYPARK HIGHLIGHTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 items-center rounded-lg overflow-hidden">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center p-6 md:p-6 text-center text-[#3E4C31] font-serif text-[14px] leading-relaxed border border-gray-300 min-h-[100px]"
              style={{ letterSpacing: "0.5px" }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
