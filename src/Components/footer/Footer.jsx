import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import "./footer.css";
export default function Footer() {
  const container = "max-w-[1440px] m-auto container";
  return (
    <>
      <footer
        className=" relative top-[80%]"
        style={{
          background:
            " linear-gradient(90.87deg, #ffecd6 0.69%, #09b9ad 530.75%)",
        }}
      >
        <div className='container'>
          <div className=" xl:p-[30px] p-[280px_0px_45px] grid grid-cols-4 xl:grid-cols-2 lg:grid-cols-1 ">
            <div className="flex flex-col  mb-[40px]">
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/logo/logo.svg"
                className="w-[186px] h-[50px] object-cover mb-[50px]"
                alt=""
              />
              <p className="text-[18px] font-normal text-[#424242] mb-[40px]">
                In our Adult Participation programs, <br /> for most students,
                it is their first <br /> program in Kindedo.
              </p>
              <div className="flex gap-3">
                <FaFacebookF className="text-[#fff] bg-[#00bbae] duration-300 rounded-full p-2 text-[40px] hover:bg-[#ff9b24]" />
                <FaTwitter className="text-[#fff] bg-[#00bbae] duration-300 rounded-full p-2 text-[40px] hover:bg-[#ff9b24]" />
                <FaYoutube className="text-[#fff] bg-[#00bbae] duration-300 rounded-full p-2 text-[40px] hover:bg-[#ff9b24]" />
              </div>
            </div>
            <div className="flex flex-col mb-[40px]">
              <h3 className="mb-[30px] text-[#1b1b1b] text-[23px] font-medium">
                Quick links
              </h3>
              <ul className="flex flex-col ul-box-footer relative ">
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer ">
                    About
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Courses
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Shop
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Blog
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Pages
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col mb-[40px]">
              <h3 className="mb-[30px] text-[#1b1b1b] text-[23px] font-medium">
                Programs
              </h3>
              <ul className="flex flex-col ul-box-footer relative">
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Play School
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Nursery
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Junior Kg
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Senior Kg
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Holiday Camp
                  </a>
                </li>
                <li className="mb-[11px]">
                  <a href="#!" className="hover-footer">
                    Day Care
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col  mb-[40px]">
              <h3 className="mb-[30px] text-[#1b1b1b] text-[23px] font-medium">
                Contact Us
              </h3>
              <div className="flex gap-2  items-center mb-[10px]">
                <GoLocation className="w-[18px] h-6  text-[#01bbae] hover:text-[#ff9b24] duration-500" />
                <a
                  href="#!"
                  className="text-[18px] font-normal text-[#424242] duration-500 hover:text-[#ff9b24]"
                >
                  14/A, Kilix Home Tower,
                </a>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <BsTelephoneFill className="w-6 h-6 text-[#01bbae] hover:text-[#ff9b24] duration-500" />
                <a
                  href="#!"
                  className="text-[18px] font-normal text-[#424242] duration-500 hover:text-[#ff9b24]"
                >
                  NYC 907-200-3462
                </a>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <AiOutlineMail className="w-6 h-6 text-[#01bbae] hover:text-[#ff9b24] duration-500" />
                <a
                  href="#!"
                  className="text-[18px] font-normal text-[#424242] duration-500 hover:text-[#ff9b24]"
                >
                  Support@kindedo.com
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shape/wave-line.png"
              alt=""
              className="w-full h-[10px]  mb-[30px]"
            />
            <div className="">
              <h2 className="text-[18px] text-[#424242] text-center pb-[40px]">
                Copyrighted by ©2023 BDevs
              </h2>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
