import React from "react";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="flex justify-between items-center mx-auto px-4 py-8">
      <div className="flex">
        <div className="flex px-4 py-8 items-center">
          <div className="w-5 h-5 rounded-full bg-purpleColor flex justify-center items-center">
            <IoIosCall className="text-xs text-white" />
          </div>
          Call us : + 84 908 02 58
        </div>
        <div className="flex px-4 py-8 items-center">
          <div className="w-5 h-5 rounded-full bg-purpleColor flex justify-center items-center">
            <HiOutlineMail className="text-xs text-white" />
          </div>
          Email : chucino@gmail.com
        </div>
      </div>
      <div className="flex px-4 py-8 items-center">
        <span>Follow us</span>
        <div className="border-b border-black mx-2 w-10"></div>
        <div className="w-5 h-5 rounded-full bg-purpleColor flex justify-center items-center">
          <BsFacebook className="text-xs text-white" />
        </div>
        <div className="w-5 h-5 rounded-full bg-purpleColor flex justify-center items-center">
          <BsInstagram className="text-xs text-white" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
