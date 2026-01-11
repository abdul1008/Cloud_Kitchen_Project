import React from "react";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full h-[64px] bg-[#FA5C5C] text-white flex items-center justify-between px-6 md:px-12 sticky top-0 z-50 shadow-md">
      
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide cursor-pointer">
        LOGO
      </div>

      {/* Menu */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-10 font-medium">
          <li className="cursor-pointer hover:text-[#FBEF76] transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-[#FBEF76] transition">
            About
          </li>
          <li className="cursor-pointer hover:text-[#FBEF76] transition">
            Contact
          </li>
        </ul>

        {/* User Icon */}
        <div className="bg-white text-[#FA5C5C] p-2 rounded-full cursor-pointer hover:bg-[#FBEF76] transition">
          <FaRegUser size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
