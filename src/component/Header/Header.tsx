"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-[70px] flex items-center justify-between">
          <div className="text-xl font-serif leading-tight">
            <span className="block text-black font-semibold">Sunteck</span>
            <span className="block text-[#C9AE4E] -mt-1">Sky Park</span>
          </div>

          <nav
            className="hidden lg:flex items-center font-serif gap-8 text-sm text-gray-700 font-medium"
            style={{ letterSpacing: "0.5px" }}
          >
            {[
              "Overview",
              "Amenities",
              "Price Plan",
              "Floor Plan",
              "Gallery",
              "Location",
            ].map((item) => (
              <a key={item} href="#" className="hover:text-black transition">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="tel:+910000000000"
              className="border text-black font-serif border-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition"
              style={{ letterSpacing: "0.5px" }}
            >
              +910000000000
            </a>
          </div>

          <button
            className="lg:hidden text-black cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-white z-[999] transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[70px] border-b">
          <div className="text-lg font-serif text-black font-medium">
            Sunteck <span className="text-[#C9AE4E]"> Sky Park</span>
          </div>
          <button
            className="text-black cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 py-8 text-lg">
          {[
            "Overview",
            "Amenities",
            "Price Plan",
            "Floor Plan",
            "Gallery",
            "Location",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="border-b pb-2 border-gray-300 text-black font-medium font-serif"
              style={{ letterSpacing: "0.5px" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            href="tel:+910000000000"
            className="mt-3 bg-black text-white font-serif font-medium text-center py-3 rounded-md"
            style={{ letterSpacing: "0.5px" }}
          >
            Call Now
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
