import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";
export default function AboutofAbout() {
  return (
    <>
      <main className="bg-white">
        <div className="max-w-[1440px] container m-auto">
          <div
            className="flex lg:flex-wrap items-center justify-between  w-full pb-[100px]
        xl:p-[30px] lg:p-[40px_80px_100px_80px] sm:p-[20px]"
          >
            <div className="flex flex-col relative">
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/promotion/2.png"
                className="rounded-[50%] w-[686px] h-[405px] object-cover xl:w-[546px] 
              xl:h-[399px]  lg:w-[456px] lg:h-[333px] md:w-[636px] md:h-[405px] "
                style={{
                  clipPath:
                    "polygon(51% 32%, 88% 20%, 100% 28%, 100% 70%, 100% 100%, 43% 100%, 0 100%, 0% 70%, 0% 35%, 18% 29%)",
                }}
                alt=""
              />
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shape/tripple-line.png"
                alt=""
                className="w-[161px] h-[67px] animate-img xl:hidden"
              />
            </div>
            <div className="flex-col  flex text-[#fff]">
              <h3 className="text-[55px] text-[#1b1b1b] font-semibold mb-[20px] xl:text-[45px] lg:text-[40px] md:text-[45px] sm:text-[30px] ">
                Best for Your Kids
              </h3>
              <p className="text-[18px] text-[#424242] font-normal mb-[55px] w-[691px] h-[90px] xl:w-auto  ">
                Being brave isn’t always a grand gesture sometimes it just means
                having a go attempting that difficult question, offering an
                answer in a lesson when you’re simply really trying new.
              </p>
              <div className="flex justify-around bg-[#00bbae] p-[16px_40px] w-[613px] h-[90px] rounded-3xl mb-[25px] xl:h-[109px] xl:w-[431px] lg:w-full">
                <div className="flex items-center xl:flex-col   border-white ">
                  <span className="text-[45px] xl:mt-[-15px]  font-semibold xl:text-[35px]">
                    14+
                  </span>
                  <p className="text-[16px] font-medium">
                    Years of <br /> experience
                  </p>
                </div>
                <div className="w-[3px] h-[80px] bg-white"></div>
                <div className="flex xl:flex-col lg:flex-col items-center   ">
                  <span className="text-[45px] xl:mt-[-15px] font-semibold xl:text-[35px]">
                    7K+
                  </span>
                  <p className="text-[16px] font-medium ">
                    Students <br /> each year
                  </p>
                </div>
                <div className="w-[3px] h-[80px] bg-white"></div>
                <div className="flex items-center gap-2  xl:flex-col">
                  <span className="text-[45px] xl:mt-[-15px]  font-semibold xl:text-[35px]">
                    15+
                  </span>
                  <p className="text-[16px] font-medium">
                    award <br /> wining
                  </p>
                </div>
              </div>
              <div className="flex gap-3  mb-[25px]">
                <div className="bg-[#ccf1ef] rounded-full w-[20px] h-[20px] flex justify-center items-center">
                  <IoIosArrowForward className="text-[#58a39f]  " />
                </div>
                <h3 className="text-[#424242] text-[18px] font-medium">
                  We believe every child is intelligent so we care.
                </h3>
              </div>
              <div className="flex gap-3  mb-[25px]">
                <div className="bg-[#ccf1ef] rounded-full w-[20px] h-[20px] flex justify-center items-center">
                  <IoIosArrowForward className="text-[#58a39f]  " />
                </div>
                <h3 className="text-[#424242] text-[18px] font-medium">
                  Teachers make a difference of your child.
                </h3>
              </div>

              <div className="flex gap-10">
                <button className="p-[0px_48px] bg-[#FF9B24] h-[50px] rounded-3xl text-[18px] text-white   font-medium btn-navbar">
                  view More
                </button>
                <div className="flex  relative items-center  gap-4 justify-center ">
                  <div className="w-[60px] h-[60px] bg-[#fff4e7] flex justify-center items-center rounded-full  ">
                    <BsPlayCircle
                      className="w-[40px] h-[40px] "
                      color=" #bf9460"
                    />
                  </div>
                  <div className="circle-animate"></div>
                  <a
                    href="#!"
                    className="text-[18px] hover:text-[#00bbae] duration-300 text-[#424242]"
                  >
                    Promotional Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
