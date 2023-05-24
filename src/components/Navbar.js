import React from "react";
import logo from "../assets/logo2.png";
import { BiWorld, BiUser } from "react-icons/bi";
import { FiMenu, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="border-b sticky top-2 z-50 bg-white/[95%]  ">
      <div className="flex justify-between items-center sm:mx-15 md:mx-10 lg:mx-12 ">
        {/* Left */}
         {/* airbnb logo */}
        <div className="  h-12  flex">
          <img src={logo} className=" object-cover -my-0" />
        </div>
        {/* Middle */}
        {/* search bar */}
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full ">
          <input
            type="search"
            placeholder=""
            className="px-3 py-1 w-[25rem] rounded-full outline-0"
          />
          <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
            <button className="w-full">Anywhere</button>
            <button className="w-full border-l border-x px-6">Any week</button>
            <button className="w-full text-gray-600/60 pl-2">Add guests</button>
          </div>
          <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
            <FiSearch className="text-white w-full" />
          </div>
        </div>
        {/* Right */}
        {/* user sign in */}
        <div className="flex items-center pr-3  font-semibold text-gray-600">
          <p className="text-[17px]">Airbnb your home</p>
          <div className="flex items-center mx-8 gap-1">
            <BiWorld className="" />
          </div>

          <div className="flex items-center border px-3 py-1 rounded-full gap-2  text-gray font-bold shadow-lg shadow-gray-300  duration-100 ease-out">
            <FiMenu /> 
            <BiUser className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
