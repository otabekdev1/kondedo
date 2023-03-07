import React from "react";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./navbar.css";
export default function Navbar({ toogle, sidebar }) {

  return (
    <>
      <div className="bg-white ">
        <div className="container max-w-[1440px] m-auto  ">
          <div className={` relative  `}>
            <div className="flex justify-around h-[80px] items-center relative">
              <div className="logo">
                <img
                  src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/logo/logo.svg"
                  alt="Logo img"
                  className="w-[186px] h-[50px]"
                />
              </div>
              <div
                className={
                  sidebar
                    ? "absolute -right-full xl:flex-col w-[500px] h-[100vh]"
                    : "flex justify-around items-center gap-20       "
                }
              >
                <ul className="flex gap-5 xl:flex-col xl:mt-[100%]  z-10  ">
                  <li className="">
                    <a
                      href="#!"
                      className="flex items-center text-[18px] drop-dover"
                    >
                      Home <MdKeyboardArrowDown />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#!"
                      className="text-[18px] hover:text-[#ff9b24] duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#!"
                      className="flex items-center text-[18px] hover:text-[#ff9b24] duration-300  drop-dover"
                    >
                      Programs
                      <MdKeyboardArrowDown />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#!"
                      className="flex items-center text-[18px] hover:text-[#ff9b24] duration-300 drop-dover"
                    >
                      Shop
                      <MdKeyboardArrowDown />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#!"
                      className="flex items-center text-[18px] hover:text-[#ff9b24] duration-300 drop-dover"
                    >
                      Pages
                      <MdKeyboardArrowDown />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#!"
                      className="flex items-center text-[18px] hover:text-[#ff9b24] duration-300 drop-dover "
                    >
                      News
                      <MdKeyboardArrowDown />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#!"
                      className="text-[18px hover:text-[#ff9b24] duration-300]"
                    >
                      Contact
                    </a>
                  </li>
                  <AiOutlineSearch className="w-[18px] h-[18px]" />
                </ul>
                <div className="flex items-center gap-3 xl:flex-col z-10  ">
                  <AiOutlineUser className="text-[20px] text-[#01bbae]" />
                  <AiOutlineHeart className="text-[20px] text-[#01bbae]" />
                  <AiOutlineShoppingCart className="text-[20px] text-[#01bbae]" />
                  <button className="p-[0px_48px] bg-[#FF9B24] h-[50px] rounded-3xl text-[16px] text-white   font-medium btn-navbar">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
          <BiCategoryAlt
            className={
              sidebar
                ? ""
                : "text-[30px] text-[#01bbae] cursor-pointer hidden xl:flex"
            }
            onClick={toogle}
          />
        </div>
      </div>
    </>
  );
}
