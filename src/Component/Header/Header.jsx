import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import{ HiOutlineShoppingCart} from 'react-icons/hi'
import {BiMessageRounded} from 'react-icons/bi'

const Header = () => {
  const [Nav, Navigation] = useState([]);

  const Clickand = () => {
    Navigation(!Nav);
  };
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 bg-white text-black w-full fixed shadow-md z-30">
      <p className="text-4xl">prince.com</p>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4 text-2xl"><HiOutlineShoppingCart /><BiMessageRounded className="absolute text-2xl top-4 right-4"/></li>
      </ul>
      <div onClick={Clickand} className="block md:hidden">
        {!Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !Nav
            ? "fixed right-0 top-0 w-[60%] h-[320px] bg-slate-50 mt-[120px] mx-2 ease-in-out duration-500 rounded-md" 
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>

        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 ">
          PRINCE.
        </h1>
        <ul className="pt-24 uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Header;
