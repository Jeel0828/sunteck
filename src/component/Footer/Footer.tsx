"use client";

import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#F3F3F3]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-8 text-center"
      >
        <div
          className="text-sm md:text-base font-medium mb-4 font-serif text-[#3E4C31]"
          style={{ letterSpacing: "1px" }}
        >
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>

        <div className="w-full h-px bg-gray-400 mb-6" />

        <p
          className="text-xs md:text-sm text-center text-gray-700 leading-relaxed max-w-6xl mx-auto font-serif"
          style={{ letterSpacing: "0.5px" }}
        >
          <span className="font-medium">Disclaimer :</span> The content is for
          information purposes only and does not constitute an offer to avail of
          any service. Prices mentioned are subject to change without notice and
          properties mentioned are subject to availability. Images for
          representation purpose only. This is not the official website. Website
          maintained by our online marketing agency pact partners. We may share
          data with RERA registered brokers/companies for further processing. We
          may also send updates to the mobile number/email id registered with
          us.
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
