import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="font-poppins flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="text-[#00df9a] w-full text-3xl font-bold">REACT</h1>

      {/* List items in the middle */}
      <ul className="hidden md:flex space-x-4">
        <li className="p-4 whitespace-nowrap">Home</li>
        <li className="p-4 whitespace-nowrap">Company</li>
        <li className="p-4 whitespace-nowrap">About</li>
        <li className="p-4 whitespace-nowrap">Contact Us</li>
      </ul>

      {/* Button on the right */}
      <button className="bg-white hidden md:flex space-x-4 hover:bg-gray-100 text-black py-2 px-4 ml-2 rounded inline-flex items-center whitespace-nowrap">
        Get Started
      </button>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] transition-all ease-in duration-500"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="text-[#00df9a] w-full text-3xl font-bold m-4">REACT</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600 whitespace-nowrap">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 whitespace-nowrap">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 whitespace-nowrap">
            About
          </li>
          <li className="p-4 whitespace-nowrap">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
