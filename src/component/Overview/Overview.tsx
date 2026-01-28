"use client";

import { motion } from "framer-motion";

const Overview = () => {
  return (
    <section id="overview" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* TOP TAB */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <span className="bg-[#E1C30F] text-black px-6 py-2 text-sm font-medium tracking-widest rounded-sm">
              OVERVIEW
            </span>
            <span className="absolute left-1/2 -bottom-2 w-full h-[2px] bg-[#E1C30F] -translate-x-1/2" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-medium font-serif  tracking-wide text-[#3E4C31] mb-10"
          style={{ letterSpacing: "1px" }}
        >
          SUNTECK SKYPARK OVERVIEW
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-6 text-[#3E4C31] md:text-md font-serif text-[#3E4C31] md:leading-loose text-center"
          style={{ letterSpacing: "0.5px" }}
        >
          <p>
            Sunteck Mira Road is a new launch by the famous Sunteck Realty at
            Mira Road, Mumbai. Luxury 2 BHK and 3 BHK residential apartments
            with all Modern Facilities. These are spaciously crafted homes with
            the best amenities and specifications. Sunteck Mira Road Mumbai is
            spread over 7.25 acres of land area. It is well connected to Western
            Express Highway and Mira Road Railway Station. Coming with so much
            in one place, this becomes heaven.
          </p>

          <p>
            Discover the Sea View Collection at Sunteck Sky Park where you get
            to relish the sea view from your very own abode. Nestled in the
            sprawling suburbs of Mira Road, Sunteck Sky Park is a next-gen
            project that aims to promote holistic community living amidst a
            bustling urban setup. The project envisions creating an iconic
            ultra-modern residential complex that provides comfort and luxury
            through a seamless design scheme. The Resident’s needs, choices, and
            aspirations have been the primary source of inspiration while
            developing the project.
          </p>

          <p>
            Sunteck Mira Road is filled with ultra-modern features. It has a
            spectacular elevation that makes it different from the other
            residential projects. It is a secured gated community with a
            vehicle-free zone that promotes a safe environment. Enriching the
            living experience with its world-class amenities that are spread
            across different zones. It is located thoughtfully at a very
            compelling location in Beverly Park locality of Mira Road which is
            one of a kind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
