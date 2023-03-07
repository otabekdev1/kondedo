import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
export default function ClassAbout() {
  const SliderImg = "w-[606px] h-[505px] rounded-[50px] ";
  const textP = "text-[18px] mb-[20px] text-[#424242] font-normal";
  const boxrightP = "text-[18px] mb-[10px] text-[#424242] font-normal";
  const boxrightH2 = "text-[23px] mb-[10px] text-[#1b1b1b] font-semibold";
  const iconStyle =
    "w-[120px] h-[120px] items-center m-auto bg-slate-500 rounded-full flex justify-center text-white ";
  const cardStyle =
    "flex flex-col mb-[45px] md:w-full w-[290px] h-[290px] bg-[#fff6eb] p-[25px] rounded-2xl card-shadow";
  return (
    <div className="container max-w-[1440px] w-full m-auto">
      {" "}
      <div className="flex flex-wrap items-center   md:p-[30px]  w-full justify-evenly mb-[20px]">
        <div className="w-[50% ] overflow-hidden  xl:m-auto mt-[40px] mb-[40px] rounded-[50px] ">
          <img
            src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/class/6.jpg"
            alt=""
            className="w-[606px] h-[505px]"
          />
        </div>
        <div className=" xl:m-auto  rounded-3xl mt-[40px] mb-[40px] w-[606px] h-[505px] bg-[#fff6eb] p-[30px_32px_50px] xl:w-[936px] xl:h-[438px] lg:w-[606px] lg:h-[505px] md:h-auto md:p-[25px]">
          <h3 className="text-[45px] mb-[20px] md:text-[30px] text-[#1b1b1b] font-semibold">
            Settling
          </h3>
          <p className={textP}>
            The foundation of the Montessori philosophy is based upon the idea
            that children should work at their own pace, according to their own
            strengths in surroundings that help to develop their intelligence,
            as well as social and physical abilities.
          </p>
          <p className={textP}>
            Observers of Montessori children note that they are confident,
            caring, independent as well as enthusiastic and motivated learners
            what they learn years comes from perceptive.
          </p>
          <div className="flex justify-between flex-wrap">
            <div className="flex  gap-3 items-center border-r-2  lg:border-none border-[#ff9b24] pr-6">
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/author-1.png"
                alt=""
              />
              <div className="flex flex-col">
                <p className={boxrightP}>Settling Teacher</p>
                <h2 className={boxrightH2}>Alexia Honix</h2>
              </div>
            </div>
            <div className="flex flex-col  border-r-2  lg:border-none border-[#ff9b24] pr-6">
              <p className={boxrightP}>Categories</p>
              <h2 className={boxrightH2}>Kindergarten</h2>
            </div>
            <div className="flex flex-col  ">
              <p className={boxrightP}>Per/Month</p>
              <h2 className={boxrightH2}>$160.00</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-[10px] flex-wrap  md:p-5  ">
        <div className={cardStyle}>
          <div className={iconStyle}>
            <IoIosPeople className="w-[50px] h-[50px]" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h4 className={boxrightH2}>2-2.5 years</h4>
            <p className={boxrightP}>age</p>
          </div>
        </div>
        <div className={cardStyle}>
          <div className={iconStyle}>
            <AiOutlineCalendar className="w-[50px] h-[50px] " />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h4 className={boxrightH2}>5 days </h4>
            <p className={boxrightP}>weekly</p>
          </div>
        </div>
        <div className={cardStyle}>
          <div className={iconStyle}>
            <AiOutlineClockCircle className="w-[50px] h-[50px]" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h4 className={boxrightH2}>3 Hours</h4>
            <p className={boxrightP}>period</p>
          </div>
        </div>
        <div className={cardStyle}>
          <div className={iconStyle}>
            <GiTeacher className="w-[50px] h-[50px]" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h4 className={boxrightH2}>Class size</h4>
            <p className={boxrightP}> 24</p>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-wrap w-full justify-between items-center p-[20px]">
        <div className="w-[606px] h-[505px]  rounded-xl mt-[40px] mb-[40px]  bg-[#fff6eb] p-[30px_32px_50px] xl:h-auto xl:m-[0px_auto_60px] ">
          <h2 className="text-[45px] md:text-[30px] mb-[20px] text-[#1b1b1b] font-semibold">
            Way to Learn
          </h2>
          <p className={boxrightP} style={{ marginBottom: "20px" }}>
            As a result, the child should have a reasonable amount of freedom to
            do as they please, while at the same time being wholly immersed in
            an environment which stimulates their senses as well as exercising
            their creativity. Literally their classroom is their world,
            providing exposure to materials and experiences that foster greater
            intellectual growth. You will love it.
          </p>
          <p className={boxrightP} style={{ marginBottom: "20px" }}>
            Please take a moment to read this website, and I’m sure that you
            will come to agree that there would be better place.
          </p>
          <button className="btn-introduce-hover w-[151px] h-[50px] p-[0px_26px] bg-[#ff9b24] text-white rounded-full">
            Know More
          </button>
        </div>
        <div className="xl:m-[0px_auto]">
          <img
            src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/details-1.jpg"
            alt=""
            className="w-[606px] h-[505px] rounded-xl xl:w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
