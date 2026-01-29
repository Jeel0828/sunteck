"use client";

import React, { useEffect, useState } from "react";
import bannerImg from "../../assest/banner.webp";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bannerImg.src}
          alt="Project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-10 lg:py-16 flex flex-col lg:flex-row gap-8 justify-between gap-6 lg:items-start">
        <div
          className={`lg:col-span-3 bg-white rounded-lg shadow-xl p-6 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h3
            className="text-lg font-serif text-[#3E4C31] font-medium mb-4"
            style={{ letterSpacing: "1px" }}
          >
            Sunteck SkyPark
          </h3>

          <div
            className="border rounded-md font-serif text-[#3E4C31] p-3 text-sm mb-4"
            style={{ letterSpacing: "0.5px" }}
          >
            <p>2 BHK BOOKING AMOUNT ₹ 2.10 LACS</p>
            <p>3 BHK BOOKING AMOUNT ₹ 3.10 LACS</p>
          </div>

          <p
            className="font-medium text-[#3E4C31] font-serif mb-4"
            style={{ letterSpacing: "1px" }}
          >
            FLEXIPAY FOR FIRST 100 CUSTOMERS
          </p>

          <p
            className="text-sm font-serif text-[#3E4C31] text-gray-700 mb-6"
            style={{ letterSpacing: "0.5px" }}
          >
            Rera No: <br />
            <span className="font-medium">#P51700050167 | P51700050166</span>
          </p>

          <button
            className="w-full cursor-pointer font-serif bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
            style={{ letterSpacing: "1px" }}
          >
            BOOK NOW
          </button>
        </div>

        <div className="hidden lg:block lg:col-span-6" />

        <div
          className={`lg:col-span-3 bg-white border-[6px] border-yellow-400 rounded-lg shadow-2xl p-6 transition-all duration-700 delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h3
            className="text-lg font-medium font-serif text-[#3E4C31] bg-yellow-400 text-center py-2 mb-4"
            style={{ letterSpacing: "1px" }}
          >
            Sunteck SkyPark
          </h3>

          <p
            className="text-center font-serif text-[#3E4C31] text-sm mb-6 leading-relaxed"
            style={{ letterSpacing: "0.5px" }}
          >
            Spacious 2, 3 & 4 Bed Homes With Deck
            <br />
            <span className="font-medium">Starts ₹ 1.14 CR*</span>
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full font-serif text-[#3E4C31] border px-4 py-3 rounded-md focus:outline-none focus:border-black"
            />

            <div className="flex gap-2">
              <select
                className="w-auto border text-[#3E4C31] font-serif px-3 py-3 rounded-md text-sm"
                style={{ letterSpacing: "0.5px" }}
              >
                <option>India (+91)</option>
              </select>

              <input
                type="tel"
                placeholder="Mobile No*"
                className="w-2/3 border text-[#3E4C31] font-serif px-4 py-3 rounded-md focus:outline-none focus:border-black"
                style={{ letterSpacing: "0.5px" }}
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer font-serif text-sm  bg-[#2A2A1E] text-white py-3 rounded-md font-medium hover:bg-black transition"
              style={{ letterSpacing: "1px" }}
            >
              SUBMIT
            </button>
          </form>

          <div
            className="mt-4 font-serif text-[#3E4C31] bg-gray-200 text-center py-3 text-sm rounded-md"
            style={{ letterSpacing: "0.5px" }}
          >
            Rera No: <br />
            <span className="font-medium">#P51700050167 | P51700050166</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
