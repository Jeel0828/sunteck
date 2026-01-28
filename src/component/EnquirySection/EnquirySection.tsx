"use client";

import { motion } from "framer-motion";
import enquiryImg from "../../assest/undraw_calling_kpbp.svg";

const EnquirySection = () => {
  return (
    <section className="bg-[#F7F6F4] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={enquiryImg.src}
            alt="Enquiry Illustration"
            className="w-[220px] sm:w-[260px] md:w-[380px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <p
            className="text-[#3E4C31] text-lg md:text-xl font-serif tracking-wide mb-6"
            style={{ lineHeight: 1.6, letterSpacing: "0.5px" }}
          >
            REQUEST OFFICE / HOME / VIDEO PRESENTATION{" "}
            <span className="font-medium">Sunteck SkyPark</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1E1E1A] cursor-pointer font-serif text-white px-10 py-4 text-sm md:text-base tracking-widest rounded-md transition"
          >
            ENQUIRE NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnquirySection;
