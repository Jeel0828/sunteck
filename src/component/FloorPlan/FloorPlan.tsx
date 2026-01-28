"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "1 BHK",
    image:
      "https://sunteckmiraroad.ondevwebs.com/wp-content/uploads/2022/08/1-unit-1024x724.webp",
  },
  {
    title: "2 BHK",
    image:
      "https://sunteckmiraroad.ondevwebs.com/wp-content/uploads/2024/01/3-bhk-unit-3-1024x724.webp",
  },
  {
    title: "3 BHK",
    image:
      "https://sunteckmiraroad.ondevwebs.com/wp-content/uploads/2022/08/2-bhk-2-unit-plan-1024x723.webp",
  },
];

export default function FloorPlanSection() {
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
              className="px-6 py-2 rounded-md bg-yellow-500 text-black font-medium"
              style={{ letterSpacing: "1px" }}
            >
              FLOOR PLAN
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-medium font-serif text-[#3E4C31] tracking-wide">
            SUNTECK SKYPARK PLANS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border shadow-md bg-white"
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-[220px] md:h-[260px] object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span
                  className="px-8 py-3 cursor-pointer rounded-md bg-yellow-400 text-black font-medium font-serif text-lg shadow-lg"
                  style={{ letterSpacing: "1px" }}
                >
                  {plan.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
