import React, { useState } from "react";
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiFillEye,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./shopitem.css";
const paginationBox =
  "w-12 h-12 bg-[#e6e6e6] flex items-center text-[#1b1b1b] hover:text-[#fff] justify-center hover:bg-[#00bbae] rounded-[14px] duration-500";
const secpagination = "w-full p-1 hover:bg-[#e6e6e6] h-[40px]";
export default function ShopItem() {
  const [text, setText] = useState(false);
  const [textOpen, setTextOpen] = useState(false);
  const cssoftext =
    "w-[110px] h-[50px] p-2 pr-[15px] text-[16px] text-[#212529] hover:bg-[#e6e6e6] ";
  return (
    <>
      <div className="relative">
        <div className="container max-w-[1440px] m-auto">
          <div className="navOfMain flex justify-between items-center p-4 flex-wrap">
            <h3 className="text-[#424242] text-[18px] mb-[15px] font-semibold">
              20 ITEM ON LIST
            </h3>
            <div className="flex gap-4 relative  items-center">
              <div
                onClick={() => setText(!text)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <AiOutlineUnorderedList />
                <span className="hover:text-[#15BFB4] duration-300">
                  FILTER
                </span>
              </div>
              {text && (
                <div className="absolute top-[90%] bg-white text-black z-[20] flex flex-col w-[170px]  p-3 rounded-md">
                  <ul>
                    <li className="mb-[5px]">
                      <a href="#! " className={cssoftext}>
                        Featured
                      </a>
                    </li>
                    <li className="mb-[5px]">
                      <a className={cssoftext} href="#!">
                        Price:Low to high
                      </a>
                    </li>
                    <li className="mb-[5px]">
                      <a className={cssoftext} href="#!">
                        Price:high to low
                      </a>
                    </li>
                    <li className="mb-[5px]">
                      <a href="#!" className={cssoftext}>
                        new
                      </a>
                    </li>
                    <li className="mb-[5px]">
                      <a href="#!" className={cssoftext}>
                        Avg. Rating
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div className="">{`|`}</div>
              <div
                className="flex items-center gap-3 cursor-pointer p-3 "
                onClick={() => setTextOpen(!textOpen)}
              >
                <span className="hover:text-[#15BFB4] duration-300">
                  SHOP BY AGE
                </span>
                <IoIosArrowDown />
              </div>
              {textOpen && (
                <ul className="w-[140px] right-0  top-[50px] z-30 absolute p-[5px_2px_7px_4px] bg-white shadow-lg">
                  <li>
                    <a href="#!" className={secpagination}>
                      0-3 Years
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={secpagination}>
                      4-6 Years
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={secpagination}>
                      6-9 Years
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-between mb-[20px] p-[20px] ">
            <div className="card-main sm:w-full w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white sm:h-auto m-auto border-[gray] relative duration-500 ease-out mb-[20px] lg:h-[540px]">
              <div className="card-main-head ">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/1.1.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/1.2.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/1.3.png"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <span className="absolute w-[60px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#00bbae] rounded-full text-white text-[18px] font-medium">
                  <span>Sale</span>
                </span>
                <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                  <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                  <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                  <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                </div>
              </div>
              <div className="card-main-body p-6 border-t border-[gray] ">
                <h4 className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold">
                  Plush Toy Giraffe
                </h4>
                <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6 className="text-center text-[#424242] text-[18px] font-semibold">
                  $23.00
                </h6>
              </div>
            </div>
            <div className="card-main sm:w-full sm:h-auto  w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white  border-[gray] relative duration-500 ease-out mb-[20px] m-auto lg:h-[540px]">
              <div className="card-main-head ">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/2.1.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/2.2.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/2.3.png"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <span className="absolute w-[60px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#00bbae] rounded-full text-white text-[18px] font-medium">
                  <span>Sale</span>
                </span>
                <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                  <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                  <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                  <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                </div>
              </div>
              <div className="card-main-body p-6 border-t border-[gray] ">
                <h4 className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold">
                  Wooden Alphabet
                </h4>
                <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6 className="text-center flex gap-3 items-center justify-center text-[#424242] text-[18px] font-semibold">
                  <span>$23.00</span>{" "}
                  <span className="line-through text-gray decoration-[gray]">
                    $20.00
                  </span>
                </h6>
              </div>
            </div>
            <div className="card-main sm:w-full sm:h-auto  w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white  border-[gray] relative duration-500 ease-out mb-[20px] m-auto lg:h-[540px]">
              <div className="card-main-head ">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/3.1.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/3.2.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/3.3.png"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <span className="absolute w-[80px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#e6e6e6] rounded-full text-black text-[18px] font-medium">
                  <span>Sold Out</span>
                </span>
                <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                  <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                  <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                  <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                </div>
              </div>
              <div className="card-main-body p-6 border-t border-[gray] ">
                <h4 className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold">
                  Baby Shoes
                </h4>
                <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6 className="text-center text-[#424242] text-[18px] font-semibold">
                  $33.00
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mb-[20px] p-[20px] ">
            <div className="card-main sm:w-full w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white sm:h-auto m-auto border-[gray] relative duration-500 ease-out mb-[20px] lg:h-[540px]">
              <div className="card-main-head ">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/4.1.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/4.2.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/4.3.png"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <span className="absolute w-[60px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#ff577b] rounded-full text-white text-[18px] font-medium">
                  <span>Hot</span>
                </span>
                <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                  <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                  <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                  <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                </div>
              </div>
              <div className="card-main-body p-6 border-t border-[gray] ">
                <h4 className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold">
                  Baby bouncer
                </h4>
                <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6 className="text-center text-[#424242] text-[18px] font-semibold">
                  $25.00
                </h6>
              </div>
            </div>
            <div className="card-main sm:w-full sm:h-auto  w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white  border-[gray] relative duration-500 ease-out mb-[20px] m-auto lg:h-[540px]">
              <div className="card-main-head ">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/5.1.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/5.2.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/5.3.png"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <span className="absolute w-[60px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#00bbae] rounded-full text-white text-[18px] font-medium">
                  <span>Sale</span>
                </span>
                <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                  <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                  <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                  <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                </div>
              </div>
              <div className="card-main-body p-6 border-t border-[gray] ">
                <h4 className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold">
                  Plastic building
                </h4>
                <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6 className="text-center flex gap-3 items-center justify-center text-[#424242] text-[18px] font-semibold">
                  <span>$43.00</span>{" "}
                  <span className="line-through text-gray decoration-[gray]">
                    $20.00
                  </span>
                </h6>
              </div>
            </div>
            <div className="card-main sm:w-full sm:h-auto  w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white  border-[gray] relative duration-500 ease-out mb-[20px] m-auto lg:h-[540px]">
              <div className="card-main-head ">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/6.1.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/6.2.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/6.3.png"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <span className="absolute w-[80px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#e6e6e6] rounded-full text-black text-[18px] font-medium">
                  <span>Sold Out</span>
                </span>
                <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                  <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                  <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                  <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                </div>
              </div>
              <div className="card-main-body p-6 border-t border-[gray] ">
                <h4 className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold">
                  Giraffe Toy
                </h4>
                <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6 className="text-center text-[#424242] text-[18px] font-semibold">
                  $99.00
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mb-[20px] p-[20px] ">
            <div className="card-main sm:w-full w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white sm:h-auto m-auto border-[gray] relative duration-500 ease-out mb-[20px] lg:h-[540px]">
              <div className="card-main-head ">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/7.1.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/7.2.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/7.3.png"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <span className="absolute w-[60px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#ff577b] rounded-full text-white text-[18px] font-medium">
                  <span>Hot</span>
                </span>
                <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                  <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                  <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                  <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                </div>
              </div>
              <div className="card-main-body p-6 border-t border-[gray] ">
                <h4 className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold">
                  Plastic building
                </h4>
                <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6 className="text-center text-[#424242] text-[18px] font-semibold">
                  $25.00
                </h6>
              </div>
            </div>
            <div className="card-main sm:w-full sm:h-auto  w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white  border-[gray] relative duration-500 ease-out mb-[20px] m-auto lg:h-[540px]">
              <div className="card-main-head ">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/8.1.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/8.2.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/8.3.png"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <span className="absolute w-[60px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#00bbae] rounded-full text-white text-[18px] font-medium">
                  <span>Sale</span>
                </span>
                <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                  <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                  <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                  <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                </div>
              </div>
              <div className="card-main-body p-6 border-t border-[gray] ">
                <h4 className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold">
                  Naughty Furry
                </h4>
                <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6 className="text-center flex gap-3 items-center justify-center text-[#424242] text-[18px] font-semibold">
                  <span>$43.00</span>{" "}
                  <span className="line-through text-gray decoration-[gray]">
                    $20.00
                  </span>
                </h6>
              </div>
            </div>
            <div className="card-main sm:w-full sm:h-auto  w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white  border-[gray] relative duration-500 ease-out mb-[20px] m-auto lg:h-[540px]">
              <div className="card-main-head ">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/9.1.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/9.2.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="card-main-img-slider">
                    <img
                      src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shop/9.2.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <span className="absolute w-[80px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#e6e6e6] rounded-full text-black text-[18px] font-medium">
                  <span>Sold Out</span>
                </span>
                <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                  <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                  <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                  <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                </div>
              </div>
              <div className="card-main-body p-6 border-t border-[gray] ">
                <h4 className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold">
                  Toy basket
                </h4>
                <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6 className="text-center text-[#424242] text-[18px] font-semibold">
                  $99.00
                </h6>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center ">
            <div className="w-12 h-12 text-[#fff]  bg-[#00bbae] flex items-center justify-center rounded-[14px] xl:mb-[50px]">
              01
            </div>
            <div className={paginationBox}>02</div>
            <div className={paginationBox}>03</div>
            <div className={paginationBox}>04</div>
            <div className={paginationBox}>{">"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
