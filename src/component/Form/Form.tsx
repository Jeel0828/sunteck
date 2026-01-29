"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormPopupProps {
  onClose?: () => void;
}

const FormPopup = ({ onClose }: FormPopupProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md rounded-xl bg-white p-7 shadow-2xl">
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="absolute cursor-pointer right-4 top-4 flex h-8 w-8 items-center justify-center bg-black text-white text-xl font-semibold transition-colors hover:bg-gray-800"
                aria-label="Close"
              >
                ×
              </motion.button>

              <h2
                className="mb-6 text-[16px] font-medium font-serif text-[#3E4C31] leading-snug "
                style={{ letterSpacing: "1px" }}
              >
                Get explicit details about the pricing <br />
                and on spot offers
              </h2>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="w-full font-serif font-medium text-[#3E4C31] rounded-lg border border-gray-300 px-4 py-3.5 text-sm placeholder:text-gray-400 focus:border-[#c8b08a] focus:outline-none focus:ring-2 focus:ring-[#c8b08a]/30 transition-all"
                  style={{ letterSpacing: "0.5px" }}
                />

                <select
                  defaultValue="India (+91)"
                  className="w-full font-serif font-medium text-[#3E4C31] rounded-lg border border-gray-300 px-4 py-3.5 text-sm text-gray-700 focus:border-[#c8b08a] focus:outline-none focus:ring-2 focus:ring-[#c8b08a]/30 transition-all appearance-none"
                >
                  <option>India (+91)</option>
                  <option>USA (+1)</option>
                  <option>UK (+44)</option>
                  <option>UAE (+971)</option>
                  <option>Singapore (+65)</option>
                </select>

                <input
                  type="tel"
                  placeholder="Mobile No*"
                  required
                  className="w-full font-serif font-medium text-[#3E4C31] rounded-lg border border-gray-300 px-4 py-3.5 text-sm placeholder:text-gray-400 focus:border-[#c8b08a] focus:outline-none focus:ring-2 focus:ring-[#c8b08a]/30 transition-all"
                  style={{ letterSpacing: "0.5px" }}
                />

                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{ letterSpacing: "0.5px" }}
                  className="mt-2 w-full cursor-pointer font-serif font-medium text-[#3E4C31] rounded-lg bg-gradient-to-r from-[#1f1f18] to-[#2a2a22] py-3.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-xl active:opacity-90"
                >
                  SUBMIT
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FormPopup;
