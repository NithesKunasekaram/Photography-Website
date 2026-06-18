"use client";

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-5 border-b-4 rounded-2xl border-orange-500 relative">
        
       
        <div className="text-orange-400 text-4xl font-bold">
          Grand<span className="text-orange-200">P</span>ic
        </div>

        
        <div className="hidden md:flex gap-7 items-center">
          <div className="flex gap-7 text-gray-300">
            <a href="#portfolio" className="hover:text-orange-500">
              PORTFOLIO
            </a>
            <a href="#about" className="hover:text-orange-500">
              ABOUT
            </a>
            <a href="#albums" className="hover:text-orange-500">
              ALBUMS
            </a>
          </div>

          <a
            href="#bookNow"
            className="border rounded-xl py-2 px-5 bg-orange-500 hover:bg-orange-600"
          >
            Book Now
          </a>
        </div>

        
        <button
          className="md:hidden text-orange-400 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-gray-900 border border-orange-500 rounded-xl p-5 md:hidden">
            <div className="flex flex-col gap-4 text-gray-300 text-center">
              <a
                href="#portfolio"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                PORTFOLIO
              </a>

              <a
                href="#about"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </a>

              <a
                href="#albums"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                ALBUMS
              </a>

              <a
                href="#bookNow"
                className="border rounded-xl py-2 px-5 bg-orange-500 text-center hover:bg-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;