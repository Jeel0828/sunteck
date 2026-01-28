"use client";

import { motion } from "framer-motion";

const pricePlans = [
  {
    title: "4 BHK WITH DECK",
    size: "Size On Request",
    price: "₹ 2.50 CR*",
  },
  {
    title: "3 BHK WITH DECK",
    size: "960 / 1011 / 1050 Sq.ft",
    price: "₹ 1.64 CR*",
  },
  {
    title: "2 BHK WITH DECK",
    size: "665 & 702 Sq.ft",
    price: "₹ 1.14 CR*",
  },
];

const PricePlan = () => {
  return (
    <section className="bg-white py-20 px-4" id="price-plan">
      <div className="text-center mb-10">
        <div
          className="inline-block bg-[#E1C21B] text-black font-normal font-serif px-6 py-2 text-sm mb-3"
          style={{ letterSpacing: "1px" }}
        >
          PRICE PLAN
        </div>
        <h2 className="text-2xl font-medium font-serif text-[#3E4C31] tracking-wide">
          SUNTECK SKYPARK PRICE PLAN
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricePlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition flex flex-col items-center text-center p-10"
          >
            <h3
              className="text-[#F5B800] font-serif text-xl font-medium mb-4"
              style={{ letterSpacing: "1px" }}
            >
              {plan.title}
            </h3>

            <p
              className="text-[#3E4C31] font-serif text-lg mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              {plan.size}
            </p>

            <p
              className="text-[#3E4C31] font-serif text-lg mb-8"
              style={{ letterSpacing: "0.5px" }}
            >
              Price <span className="font-medium">{plan.price}</span>
            </p>

            <button
              className="bg-[#1E1E1A] cursor-pointer font-serif text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-black transition"
              style={{ letterSpacing: "1px" }}
            >
              VIEW
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricePlan;
