import React from "react";
import "./newsession.css";
import ClassesofNew from "../../ClassesNew/ClassesofNew";
import { NavLink } from "react-router-dom";
export default function NewSession() {
  return (
    <div className="container max-w-[1440px] m-auto">
      <div className="relative bg-[#00BBAE] rounded-3xl mb-[40px]">
        <div className="">
          <img
            src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/bg/joining-area.png"
            alt=""
            className={
              "w-full   absolute top-0   left-0  h-full   opacity-[0.1] bg-center  bg-auto"
            }
          />
          <div className="container max-w-[1440px] m-auto"  >
            <div className="flex flex-col  ">
              <h3
                className=" text-[55px] xl:text-[45px]
            lg:text-[40px] md:text-[45px] sm:text-[30px] text-[#fff]  text-center font-semibold mt-[60px]"
              >
                Join Our New Session
              </h3>

              <p className="mt-[20px]   mb-[30px] text-[15px] font-medium text-center text-[#fff] ">
                Kindedo believes that good questions drive good answers. Whether
                it's a query <br /> about the world around us or a challenge.
              </p>
              <div className="flex justify-center pb-32">
                <NavLink
                  className="w-[149px]    h-[50px] text-[16px] bg-[#ff9b24] rounded-3xl text-[white] btn-sessoin-hover flex justify-center items-center"
                  to={"/ClassesofNew"}
                >
                  Apply Now
                </NavLink>
              </div>
            </div>
            <div className="w-full  bg-[#ff9b24] h-2 rounded-full absolute top-[98%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
