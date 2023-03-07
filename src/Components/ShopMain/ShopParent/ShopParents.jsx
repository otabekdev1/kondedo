import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AiFillStar } from "react-icons/ai";
import { Pagination } from "swiper";
export default function ShopParents() {
  return (
    <>
      <div className="bg-[#00bbae] p-[120px] relative mb-[50px] overflow-hidden">
        <div className="container max-w-[1440px] m-auto ">
          <h1 className="text-[45px] mb-[30px] font-semibold text-center text-white">
            Parents Says
          </h1>
          <p className="text-[18px] mb-[60px] font-medium text-center w-auto text-white">
            With the help of teachers and the environment as the third teacher,
            students <br /> have opportunities to confidently take risks.
          </p>
          <Swiper
            className="mySwiper md:w-full"
            breakpoints={{
              768: {
                slidesPerView: 1,
                width: 768,
              },
              500: {
                slidesPerView: 1,
                width: 550,
              },
            }}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide className="Claseses-cards-none ">
              <div className="w-[628px] h-[309px] bg-[#fff6eb] p-[30px] rounded-3xl">
                <div className="flex text-[#ff9b24] text-[22px] mb-[30px]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="mb-[45px] text-[18px] text-[#424242]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/testimonials/1.png"
                      className="h-[68px] w-[68px] rounded-full"
                      alt=""
                    />
                    <h3>Robert M. Allen</h3>
                  </div>
                  <RiDoubleQuotesR fontSize={4.5 + "rem"} color="#ff9b24" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Claseses-cards-none">
              {" "}
              <div className="w-[628px] h-[309px] bg-[#ebfffe] p-[30px] rounded-3xl">
                <div className="flex text-[#ff9b24] text-[22px] mb-[30px]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="mb-[45px] text-[18px] text-[#424242]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/testimonials/2.png"
                      className="h-[68px] w-[68px] rounded-full"
                      alt=""
                    />
                    <h3>Robert M. Allen</h3>
                  </div>
                  <RiDoubleQuotesR fontSize={4.5 + "rem"} color="#ff9b24" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Claseses-cards-none">
              <div className="w-[628px] h-[309px] bg-[#fff6eb] p-[30px] rounded-3xl">
                <div className="flex text-[#ff9b24] text-[22px] mb-[30px]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="mb-[45px] text-[18px] text-[#424242]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/testimonials/1.png"
                      className="h-[68px] w-[68px] rounded-full"
                      alt=""
                    />
                    <h3>Robert M. Allen</h3>
                  </div>
                  <RiDoubleQuotesR fontSize={4.5 + "rem"} color="#ff9b24" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <img
          src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shape/wave-section-break.png"
          className="absolute -bottom-1 left-0 right-0 "
          alt=""
        />
      </div>
    </>
  );
}
