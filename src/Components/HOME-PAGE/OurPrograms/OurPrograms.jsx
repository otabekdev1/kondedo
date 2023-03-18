import React from "react";

import "./OurProgram.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function OurPrograms({ container }) {
  const hoverimg =
    "https://www.freepnglogos.com/uploads/shape-png/organic-shape-world-reference-14.png";
  return (
    <section
      className="ourprograms "
      style={{
        background:
          " linear-gradient(90.87deg, #ffecd6 0.69%, #09b9ad 530.75%)",
      }}
    >
      <div className={container}>
        <h1 className="text-[#1b1b1b] text-[55px] text-center font-semibold pt-[80px] pb-[15px] xl:text-[45px] lg:text-[40px] md:text-[45px] sm:text-[30px]">
          Our Programs
        </h1>
        <p className="text-[#424242] text-[18px] text-center font-normal w-[855] mb-[40px] h-[60px]">
          Kindedo opened its doors in 1984 with a unique vision to provide its
          students <br /> with a globally focused study of arts.
        </p>
        <Swiper
          className="mySwiper"
          pagination={true}
          modules={[Pagination]}
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
          }}
        >
          <SwiperSlide>
            <div className="w-[416px]  h-[539px] relative bg-[white] p-6 rounded-3xl mb-[40px]">
              <div className="img-box overflow-hidden">
                <img
                  className="w-[368px] h-[245px] rounded-xl main-img"
                  src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/home-program-1.jpg "
                  alt=""
                />
                <img
                  src={hoverimg}
                  className="hoverimg-slider w-[120px]"
                  alt=""
                />
              </div>
              <a
                href="#!"
                className="text-[#1b1b1b] text-[32px] font-semibold m-[15px] duration-300 hover:text-[#00bbae]"
              >
                Settling
              </a>
              <p className="text-[#424242] m-[15px]  text-[18px]">
                To round out our weekend of celebra tions, we are holding our
                reunion.
              </p>

              <div className="box w-[368px] h-[78px] bg-[#00bbae]  rounded-xl text-[#424242] p-[16px_20px] flex justify-around">
                <div className="flex-col flex border-dashed border-r-2 text-[white] items-center pr-8">
                  <h4 className="text-[18px] font-semibold">4-5 Yrs</h4>
                  <h5 className="text-[18px]  font-medium text-center  ">
                    age
                  </h5>
                </div>
                <div className="flex-col flex border-dashed border-r-2 items-center pr-8     text-[white] ">
                  <h4 className="text-[18px] font-semibold">4-5 Yrs</h4>
                  <h5 className="text-[18px]  font-medium text-center  ">
                    age
                  </h5>
                </div>
                <div className="flex-col flex  text-[white]">
                  <h4 className="text-[18px] font-semibold">4-5 Yrs</h4>
                  <h5 className="text-[18px]  font-medium text-center  ">
                    age
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[416px] x relative h-[539px] bg-[white] p-6 rounded-3xl mb-[40px]">
              <div className="img-box overflow-hidden">
                <img
                  className="w-[368px] h-[245px] rounded-xl main-img"
                  src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/home-program-2.jpg"
                  alt=""
                />
                <img
                  src={hoverimg}
                  className="hoverimg-slider w-[120px] hoverimg-slider"
                  alt=""
                />
              </div>
              <a
                href="#!"
                className="text-[#1b1b1b] text-[32px] font-semibold m-[15px] duration-300 hover:text-[#ff9b24]"
              >
                Play Group
              </a>
              <p className="text-[#424242] m-[15px]  text-[18px]">
                We will be magically transform the School’s Sports Centre into a
                full game area.
              </p>

              <div className="box w-[368px] h-[78px] bg-[#ff9b24]  rounded-xl text-[#424242] p-[16px_20px] flex justify-around">
                <div className="flex-col flex border-dashed border-r-2 text-[white] items-center pr-8">
                  <h4 className="text-[18px] font-semibold">4-5 Yrs</h4>
                  <h5 className="text-[18px]  font-medium text-center  ">
                    age
                  </h5>
                </div>
                <div className="flex-col flex border-dashed border-r-2 items-center pr-8     text-[white] ">
                  <h4 className="text-[18px] font-semibold">4-5 Yrs</h4>
                  <h5 className="text-[18px]  font-medium text-center  ">
                    age
                  </h5>
                </div>
                <div className="flex-col flex  text-[white]">
                  <h4 className="text-[18px] font-semibold">4-5 Yrs</h4>
                  <h5 className="text-[18px]  font-medium text-center  ">
                    age
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[416px]  h-[539px] relative bg-[white] p-6 rounded-3xl mb-[40px]">
              <div className="img-box overflow-hidden">
                <img
                  className="w-[368px] h-[245px] rounded-xl main-img"
                  src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/home-program-3.jpg "
                  alt=""
                />
                <img
                  src={hoverimg}
                  className="hoverimg-slider w-[120px] hoverimg-slider"
                  alt=""
                />
              </div>
              <a
                href="#!"
                className="text-[#1b1b1b] text-[32px] font-semibold m-[15px] duration-300 hover:text-[#ff5778]"
              >
                Pre-Nursery
              </a>
              <p className="text-[#424242] m-[15px]  text-[18px]">
                Kindedo not only for all our dedicated 2023 reunion year groups
                program.
              </p>

              <div className="box w-[368px] h-[78px] bg-[#ff5778]  rounded-xl text-[#424242] p-[16px_20px] flex justify-around">
                <div className="flex-col flex border-dashed border-r-2 text-[white] items-center pr-8">
                  <h4 className="text-[18px] font-semibold">4-5 Yrs</h4>
                  <h5 className="text-[18px]  font-medium text-center  ">
                    age
                  </h5>
                </div>
                <div className="flex-col flex border-dashed border-r-2 items-center pr-8     text-[white] ">
                  <h4 className="text-[18px] font-semibold">4-5 Yrs</h4>
                  <h5 className="text-[18px]  font-medium text-center  ">
                    age
                  </h5>
                </div>
                <div className="flex-col flex  text-[white]">
                  <h4 className="text-[18px] font-semibold">4-5 Yrs</h4>
                  <h5 className="text-[18px]  font-medium text-center  ">
                    age
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
