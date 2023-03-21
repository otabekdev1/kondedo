import React from "react";
import { BiUser, BiCommentDetail } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "./News.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function News({ container }) {
  return (
    <>
      <div className="p-[120px_120px_0px] xl:p-[20px]  md:p-[30px_30px_0px] sm:p-[8px] h-[750px]">
        <div className={container}>
          <h2 className="text-[#1b1b1b] text-[55px] xl:text-[60px] lg:text-[50px]  md:text-[45px] md:mb-[45px] sm:text-[40px] font-semibold ">
            Kindedo News
          </h2>
          <p className="text-[#1b1b1b] text-[18px] font-normal mb-[40px] w-[636px] h-[60px] lg:w-auto lg:mb-[60px]">
            It is our goal to provide age appropriate opportuniy for every child
            enrolled in Kindedo Kids Club enrichment classes.
          </p>
          <Swiper
            className="mySwiper relative p-[0px_0px_0px_50px] flex teacher-slide-home"
            pagination={true}
            modules={[Pagination]}
            loop={true}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,

                slidesPerView: 1,
              },
              1440: {
                slidesPerView: 3,
              },
              1410: {
                slidesPerView: 2,
              },
              1350: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 2,
              },
              1250: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative w-[416px] mb-[20px] border-[2px] rounded-lg border-[#E6E6E6] hover:shadow-xl duration-300  scs-ali ">
                <div className="overflow-hidden ">
                  <img
                    src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/2.jpg"
                    className="w-full h-[227px] rounded-[6px] hover:scale-150 duration-500"
                    alt=" "
                  />
                  <div className="absolute top-[54%] left-[5%] bg-[#ffb924] p-1 text-[16px] font-normal text-[#fff] rounded">
                    '22 Jan 2022'
                  </div>
                </div>
                <div className="p-[20px_25px_17px] border-[2px] border-[#E6E6E6]">
                  <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-2">
                      <BiUser className=" w-[14px] h-[18px] text-[#00BBAE]" />{" "}
                      by Alex
                    </div>
                    <div className="flex items-center gap-2 ">
                      <BiCommentDetail className="text-[#00BBAE]" /> '0'
                      Comments
                    </div>
                  </div>
                  <p className="p-1  text-[23px] text-[#1b1b1b] font-medium">
                    Tips to Understand Your Child Better -AGuide for Parents!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[416px] mb-[20px] border-[2px] rounded-lg border-[#E6E6E6] hover:shadow-xl duration-300  scs-ali ">
                <div className="overflow-hidden ">
                  <img
                    src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/4.jpg"
                    className="w-full h-[227px] rounded-[6px] hover:scale-150 duration-500"
                    alt=" "
                  />
                  <div className="absolute top-[54%] left-[5%] bg-[#ffb924] p-1 text-[16px] font-normal text-[#fff] rounded">
                    22 Nov 2022
                  </div>
                </div>
                <div className="p-[20px_25px_17px] border-[2px] border-[#E6E6E6]">
                  <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-2">
                      <BiUser className=" w-[14px] h-[18px] text-[#00BBAE]" />{" "}
                      by Alex
                    </div>
                    <div className="flex items-center gap-2 ">
                      <BiCommentDetail className="text-[#00BBAE]" /> '0' 04
                      Comments
                    </div>
                  </div>
                  <p className="p-1  text-[23px] text-[#1b1b1b] font-medium">
                    Why Toys for Preschoolers are Important - a small ready
                    setup
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[416px] mb-[20px] border-[2px] rounded-lg border-[#E6E6E6] hover:shadow-xl duration-300  scs-ali ">
                <div className="overflow-hidden ">
                  <img
                    src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/3.jpg"
                    className="w-full h-[227px] rounded-[6px] hover:scale-150 duration-500"
                    alt=" "
                  />
                  <div className="absolute top-[54%] left-[5%] bg-[#ffb924] p-1 text-[16px] font-normal text-[#fff] rounded">
                    22 Dec 2022
                  </div>
                </div>
                <div className="p-[20px_25px_17px] border-[2px] border-[#E6E6E6]">
                  <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-2">
                      <BiUser className=" w-[14px] h-[18px] text-[#00BBAE]" />{" "}
                      by Alex
                    </div>
                    <div className="flex items-center gap-2 ">
                      <BiCommentDetail className="text-[#00BBAE]" /> '0' 04
                      Comments
                    </div>
                  </div>
                  <p className="p-1  text-[23px] text-[#1b1b1b] font-medium">
                    Which Toys are Best for Preschool Kids in USA: A Quick Guide
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
