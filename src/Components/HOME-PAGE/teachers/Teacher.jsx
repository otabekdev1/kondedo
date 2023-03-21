import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "./teacher.css";
export default function Teacher() {
  return (
    <div className="p-[120px_0px] bg-white w-full">
      <div className='container'>
        <h1 className="text-[55px] text-[#2b2b2b]  text-center font-semibold ">
          Our Best Teachers
        </h1>
        <p className="mt-[20px]   mb-[30px] text-[15px] font-medium text-center text-[#424242]">
          With the help of teachers and the environment as the third teacher,
          students <br /> have opportunities to confidently take risks.
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
            1190: {
              slidesPerView: 2,
            },
            1130: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <div className="w-[300px]  teacher-card overflow-hidden">
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/teacher/5.jpg"
                className="w-[306px]  h-[408px] object-cover rounded-3xl"
                alt=""
              />
              <div className="bg-hover-box bg-black absolute top-[0%]  h-full w-[30px]  "></div>
              <div
                className="texts-box absolute w-[306px] bottom-0 p-[22px]  h-[113px] rounded-3xl "
                style={{
                  backgroundImage:
                    "linear-gradient(100.88deg, #EBFFFE 0.6%, #FFF6EB 100%)",
                }}
              >
                <h3 className="text-[23px] text-[#1b1b1b] text-center font-medium">
                  Emmy Jonas
                </h3>
                <p className="text-[16px] text-[#1b1b1b] text-center font-normal">
                  Teacher
                </p>
                <div className="icons gap-4 justify-center  flex bg-[#FF9B24] -ml-[15px] p-3 w-[290px] rounded-2xl absolute top-[70%]">
                  <FaFacebookF className="text-white text-[18px]  hover:text-[red] " />
                  <FaTwitter className="text-white text-[18px]  hover:text-[red] " />
                  <FaYoutube className="text-white text-[18px]  hover:text-[red] " />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px]  teacher-card">
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/teacher/3.jpg"
                className="w-[306px] h-[408px] object-cover rounded-3xl"
                alt=""
              />
              <div className="bg-hover-box bg-black absolute top-[0%]  h-full w-[30px]  "></div>
              <div
                className="texts-box absolute w-[306px] bottom-0 p-[22px]   rounded-3xl "
                style={{
                  backgroundImage:
                    "linear-gradient(100.88deg, #EBFFFE 0.6%, #FFF6EB 100%)",
                }}
              >
                <h3 className="text-[23px] text-[#1b1b1b] text-center font-medium">
                  Frances R.
                </h3>
                <p className="text-[16px] text-[#1b1b1b] text-center font-normal">
                  Teacher
                </p>
                <div className="icons gap-4 justify-center  flex bg-[#FF9B24] -ml-[15px] p-3 w-[290px] rounded-2xl absolute top-[70%]">
                  <FaFacebookF className="text-white text-[18px]  hover:text-[red] " />
                  <FaTwitter className="text-white text-[18px]  hover:text-[red] " />
                  <FaYoutube className="text-white text-[18px]  hover:text-[red] " />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[300px]  teacher-card">
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/teacher/7.jpg"
                className="w-[306px] h-[408px] object-cover rounded-3xl"
                alt=""
              />
              <div className="bg-hover-box bg-black absolute top-[0%]  h-full w-[30px]  "></div>
              <div
                className="texts-box absolute w-[306px] bottom-0  p-[22px]  h-[113px] rounded-3xl "
                style={{
                  backgroundImage:
                    "linear-gradient(100.88deg, #EBFFFE 0.6%, #FFF6EB 100%)",
                }}
              >
                <h3 className="text-[23px] text-[#1b1b1b] text-center font-medium">
                  Cecelia D.
                </h3>
                <p className="text-[16px] text-[#1b1b1b] text-center font-normal">
                  Teacher
                </p>
                <div className="icons gap-4 justify-center  flex bg-[#FF9B24] -ml-[15px] p-3 w-[290px] rounded-2xl absolute top-[70%]">
                  <FaFacebookF className="text-white text-[18px]  hover:text-[red] " />
                  <FaTwitter className="text-white text-[18px]  hover:text-[red] " />
                  <FaYoutube className="text-white text-[18px]  hover:text-[red] " />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" w-[300px]  teacher-card">
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/teacher/2.jpg"
                className="w-[306px] h-[408px] object-cover rounded-3xl"
                alt=""
              />
              <div className="bg-hover-box bg-black absolute top-[0%]  h-full w-[30px]  "></div>
              <div
                className="texts-box absolute w-[306px] bottom-0 p-[22px]  h-[113px] rounded-3xl "
                style={{
                  backgroundImage:
                    "linear-gradient(100.88deg, #EBFFFE 0.6%, #FFF6EB 100%)",
                }}
              >
                <h3 className="text-[23px] text-[#1b1b1b] text-center font-medium">
                  Olinda L.
                </h3>
                <p className="text-[16px] text-[#1b1b1b] text-center font-normal">
                  Teacher
                </p>
                <div className="icons gap-4 justify-center  flex bg-[#FF9B24] -ml-[15px] p-3 w-[290px] rounded-2xl absolute top-[70%]">
                  <FaFacebookF className="text-white text-[18px]  hover:text-[red] " />
                  <FaTwitter className="text-white text-[18px]  hover:text-[red] " />
                  <FaYoutube className="text-white text-[18px]  hover:text-[red] " />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
