"use client";

import { motion } from "framer-motion";

const Brochure = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl"
        >
          <h2
            className="text-white text-2xl mb-4 font-medium font-serif"
            style={{ letterSpacing: "1px" }}
          >
            Receive a digital copy of our brochure and learn more about our
            spacious residences.
          </h2>

          <p
            className="text-white/90 text-base md:text-lg mb-8 font-medium font-serif"
            style={{ letterSpacing: "0.5px" }}
          >
            Request A Private Visit To Our Site Office / Sales Office
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#28261F] cursor-pointer font-medium font-serif text-white px-8 py-4 text-sm md:text-base rounded-md hover:bg-black transition duration-300"
            style={{ letterSpacing: "1px" }}
          >
            Download Brochure
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Brochure;
