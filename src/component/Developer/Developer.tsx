"use client";

import { motion } from "framer-motion";

const DeveloperSection = () => {
  return (
    <section id="overview" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <span
              className="bg-[#E1C30F] uppercase text-black px-6 py-2 text-sm font-medium rounded-sm"
              style={{ letterSpacing: "0.5px" }}
            >
              About Developers
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-blod font-serif tracking-wide text-[#3E4C31] mb-8"
          style={{ letterSpacing: "1px" }}
        >
          SUNTECK SKYPARK
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-6 text-[#3E4C31] md:text-[15px] font-serif text-[#3E4C31] md:leading-loose text-center"
          style={{ letterSpacing: "0.5px" }}
        >
          <p>
            Sunteck Realty Limited (SRL) is the fastest growing Mumbai-based
            real estate development company. Sunteck's presence across the
            spectrum is differentiated by Uber Luxury, Ultra-Luxury. Premium
            Luxury & Aspirational Luxury segments. SRL focuses on a city-centric
            development portfolio of about 30 million square feet spread across
            25 projects at various stages of development. The company is listed
            on BSE & NSE and enjoys one of the strongest balance sheets with
            almost negligible debt levels and visible cash flows.SRL's flagship
            project Signature Island in Bandra-Kurla Complex (BKC) is home to
            some of the most renowned head honchos of leading financial
            institutions, corporates, global conglomerates and reowned
            celebrities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperSection;
