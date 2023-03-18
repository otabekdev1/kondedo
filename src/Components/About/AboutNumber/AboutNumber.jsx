import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaBookReader, FaMedal } from "react-icons/fa";
export default function AboutNumber() {
  return (
    <div className="container max-w-[1440px] m-auto">
      <div className="flex justify-around flex-wrap">
        <div className="rounded-3xl flex items-center gap-4 w-[355px] h-[192px] border border-[#e6e6e6] p-[50px_20px] mb-[50px] md:w-full md:justify-around">
          <div className="icon-box-number w-[80px] h-[80px] bg-[#FF9B24] rounded-full flex justify-center items-center">
            <AiOutlineStar className="w-[50px] h-[50px] text-[white]" />
          </div>
          <div className="fonr font-semibold text-[64px]">14+</div>
          <p className="text-[#424242] text-[18px] font-normal">
            years of <br /> experience
          </p>
        </div>
        <div className="rounded-3xl flex items-center gap-4 w-[355px] h-[192px] border border-[#e6e6e6] p-[50px_20px] mb-[50px] md:w-full md:justify-around">
          <div className="icon-box-number w-[80px] h-[80px] bg-[#FF9B24] rounded-full flex justify-center items-center">
            <FaBookReader className="w-[50px] h-[50px] text-[white]" />
          </div>
          <div className="fonr font-semibold text-[64px]">7K+</div>
          <p className="text-[#424242] text-[18px] font-normal">
            Students
            <br /> each year
          </p>
        </div>
        <div className="rounded-3xl flex items-center gap-4 w-[355px] h-[192px] border border-[#e6e6e6] p-[50px_20px] mb-[80px] md:w-full md:justify-around">
          <div className="icon-box-number w-[80px] h-[80px] bg-[#FF9B24] rounded-full flex justify-center items-center">
            <FaMedal className="w-[50px] h-[50px] text-[white]" />
          </div>
          <div className="fonr font-semibold text-[64px]">15+</div>
          <p className="text-[#424242] text-[18px] font-normal">
            Award
            <br /> Wining
          </p>
        </div>
      </div>
    </div>
  );
}
