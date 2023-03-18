import React from "react";
import { BiMedal } from "react-icons/bi";
import { GiWhiteBook } from "react-icons/gi";
export default function AboutofContent() {
  return (
    <div className="p-[90px_0px_40px] xl:p-0 md:p-5">
      <div className="container max-w-[1440px] m-auto">
        <div className="flex justify-around items-center flex-wrap overflow-hidden">
          <div className="flex flex-col">
            <h1 className="text-[55px] text-[#1b1b1b] font-semibold">
              Health and Safety
            </h1>
            <h4 className="text-[18px] mb-[20px] w-[500px] font-medium md:w-auto">
              Some states and countries implement mandatory early childhood
              education such rules, many preschool.
            </h4>
            <p className="text-[18px] mb-[40px] font-medium md:w-auto">
              Being brave isn’t always a grand gesture sometimes it just means
              having a <br /> go attempting that difficult question, offering an
              answer in a lesson when <br /> you’re simply really trying new.
            </p>
            <div
              className="w-[611px] h-[124px] md:h-auto   flex justify-between p-[20px]  rounded-2xl border items-center  border-[#e6e6e6] md:w-auto md:flex-wrap"
              style={{
                backgroundImage:
                  "linear-gradient(100.88deg, #EBFFFE 0.6%, #FFF6EB 100%)",
              }}
            >
              <div className="flex items-center gap-3 border-r border-[#e6e6e6] pr-[60px]  md:border-none mb-[20px]">
                <div className="w-[82px] bg-[#FF9B24] h-[82px] flex justify-center items-center rounded-full">
                  <BiMedal className="text-[#fff] text-[42px] " />
                </div>
                <h3>Nightly cleaning</h3>
              </div>
              <div className="flex items-center gap-3 md:border-t border-[#e6e6e6] pt-[20px]">
                <div className="w-[82px] h-[82px] bg-[#00BBAE] rounded-full flex justify-center items-center">
                  <GiWhiteBook className="text-[#fff] text-[42px] " />
                </div>
                <h3>Hand Washing</h3>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img
              src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/promotion/3.jpg"
              alt=""
              className="w-[550px] h-[472px] xl:w-[475px] xl:h-[405px] lg:w-[400px] lg:h-[339px] md:w-[360px] md:h-[303px] rounded-[55%]"
              style={{
                clipPath: " polygon(6% 0, 100% 16%, 82% 100%, 0 100%, 0% 38%)",
              }}
            />
            <img
              src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shape/tripple-line.png"
              alt=""
              className="w-[161px] h-[67px] animate-img xl:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
