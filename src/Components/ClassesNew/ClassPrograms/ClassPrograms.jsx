import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
export default function ClassPrograms() {
  const hoverimg =
    "https://www.freepnglogos.com/uploads/shape-png/organic-shape-world-reference-14.png";
  return (
    <>
      <div className="container max-w-[1440px] m-auto">
        <h1 className="text-[55px] font-semibold text-center mb-[30px]">
          More Programs
        </h1>
        <p className="text-[18px] font-normal text-center mb-10">
          Kindedo opened its doors in 1984 with a unique vision to provide its
          students with a globally focused study of arts.
        </p>
        <Swiper
          className="mySwiper "
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="w-[416px]  relative h-[539px] bg-[#ffebeb] p-6 rounded-3xl mb-[40px]">
              <div className="img-box overflow-hidden ">
                <img
                  className="w-[368px] h-[245px] rounded-xl main-img"
                  src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/home-program-5.jpg"
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
                Nursery
              </a>
              <p className="text-[#424242] m-[15px]  text-[18px]">
                With connection with local licensed child care providers and
                other local.
              </p>

              <div className="box w-[368px] h-[78px] bg-[#FF7C7C]  rounded-xl text-[#424242] p-[16px_20px] flex justify-around">
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
            <div className="w-[416px] scs-ali h-[539px] relative bg-[#ebfaff] p-6 rounded-3xl mb-[40px] ">
              <div className="img-box overflow-hidden">
                <img
                  className="w-[368px] h-[245px] rounded-xl main-img"
                  src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/home-program-4.jpg"
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
                Junior
              </a>
              <p className="text-[#424242] m-[15px]  text-[18px]">
                Kindedo not only for all our dedicated 2023 reunion year groups
                program.
              </p>

              <div className="box w-[368px] h-[78px] bg-[#00B9F1]  rounded-xl text-[#424242] p-[16px_20px] flex justify-around">
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
            <div className="">
              <div className="w-[416px] scs-ali h-[539px] relative bg-[#ebebff] p-6 rounded-3xl mb-[40px]">
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
                  Kindedo not only for all our dedicated 2023 reunion year
                  groups program.
                </p>

                <div className="box w-[368px] h-[78px] bg-[#7C81FF]  rounded-xl text-[#424242] p-[16px_20px] flex justify-around">
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[416px]  relative h-[539px] bg-[#ffebeb] p-6 rounded-3xl mb-[40px]">
              <div className="img-box overflow-hidden ">
                <img
                  className="w-[368px] h-[245px] rounded-xl main-img"
                  src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/home-program-5.jpg"
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
                Nursery
              </a>
              <p className="text-[#424242] m-[15px]  text-[18px]">
                With connection with local licensed child care providers and
                other local.
              </p>

              <div className="box w-[368px] h-[78px] bg-[#FF7C7C]  rounded-xl text-[#424242] p-[16px_20px] flex justify-around">
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
            <div className="w-[416px] scs-ali h-[539px] relative bg-[#ebfaff] p-6 rounded-3xl mb-[40px] ">
              <div className="img-box overflow-hidden">
                <img
                  className="w-[368px] h-[245px] rounded-xl main-img"
                  src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/home-program-4.jpg"
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
                Junior
              </a>
              <p className="text-[#424242] m-[15px]  text-[18px]">
                Kindedo not only for all our dedicated 2023 reunion year groups
                program.
              </p>

              <div className="box w-[368px] h-[78px] bg-[#00B9F1]  rounded-xl text-[#424242] p-[16px_20px] flex justify-around">
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
            <div className="">
              <div className="w-[416px] scs-ali h-[539px] relative bg-[#ebebff] p-6 rounded-3xl mb-[40px]">
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
                  Kindedo not only for all our dedicated 2023 reunion year
                  groups program.
                </p>

                <div className="box w-[368px] h-[78px] bg-[#7C81FF]  rounded-xl text-[#424242] p-[16px_20px] flex justify-around">
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
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
