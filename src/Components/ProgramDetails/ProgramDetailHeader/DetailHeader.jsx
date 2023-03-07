import React from "react";
import "./detailheader.css";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Wave from "react-wavify";
export default function DetailHeader({ container, nameOfComp }) {
  return (
    <>
      <header className="detailHeader mb-[50px] relative bg-[#15bfb4] text-white h-[400px]">
        <img
          src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shape/curved-line-2.png"
          alt=""
          className="absolute top-[50%] left-[50px] animate-img-header"
        />
        <img
          src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shape/white-curved-line.png"
          alt=""
          className="absolute top-[50%] right-[50px] animate-img-header"
        />
        <img
          src="	https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/bg/breadcrumb-bg.jpg"
          alt=""
          className="w-full  z-[1] h-[320px] absolute top-0   left-0  object-cover   opacity-[0.1] "
        />
        <div className={container}>
          <h1 className="text-[80px] z-[3] relative  pt-[70px] text-white font-semibold text-center  xl:text-[55px] md:text-[47px] ">
            {nameOfComp}
          </h1>

          <div className="flex pb-[120px] relative z-[3] top-[50%]   items-center gap-3 justify-center  sm:top-[55%]">
            <NavLink to={"/"} className="">
              <div className="flex  gap-2 items-center text-[18px] group  hover:text-[#ff9b24] cursor-pointer">
                <AiOutlineHome className="group-hover:text-[#ff9b24] duration-700  text-[23px]" />
                <span className="group-hover:text-[#ff9b24] duration-300">
                  Kindedo
                </span>
              </div>
            </NavLink>
            <p className="gap-9 left-[50%]">- {nameOfComp}</p>
          </div>
        </div>
        <div className="absolute top-[70%] w-full">
          <Wave
            className="opacity-[1]"
            fill="#fff"
            paused={false}
            options={{
              height: 20,
              amplitude: 40,
              speed: 0.2,
              points: 2,
            }}
          />
        </div>
      </header>
    </>
  );
}
//
// Programs Details
