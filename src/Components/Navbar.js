import React from "react";
import { Logo } from "./Icons";

export default function Navbar() {
  const navLinks = [
    { id: 1, name: "How It Works", link: "#how" },
    { id: 2, name: "Our Work", link: "#work" },
    { id: 3, name: "Pricing", link: "#pricing" },
    { id: 4, name: "About Us", link: "#about" },
  ];
  return (
    <div className="h-[8vh] min-h-[9vh] border">
      <div className="flex items-center justify-between h-full">
        {/* left */}
        <div className="flex items-center gap-20">
          {/* Logo */}
          <a href="/">
            <Logo />
          </a>
          {/* NavLinks */}
          <div className="flex gap-8 font-bold">
            {navLinks.map((val) => {
              return (
                <a
                  href={val.link}
                  key={val.id}
                  className="hover:text-blue-800 transition-all"
                >
                  {val.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div>
          <button className="px-6 py-4 bg-primary text-white rounded-full hover:bg-blue-900 transition-all">
            Try it Now
          </button>
        </div>
      </div>
    </div>
  );
}
