import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

export default function Grades() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const hoverimg =
    "https://www.freepnglogos.com/uploads/shape-png/organic-shape-world-reference-14.png";
  return (
    <>
      <div className="relative">
        <div className="container max-w-[1440px] m-auto p-[20px]">
          <h1 className="text-[45px]  mb-[20px] mt-[120px] text-[#1b1b1b] font-semibold">
            More Programs
          </h1>
          <p className="text-[18px] mb-[50px] xl:mb-[90px] text-[#424242] font-normal md:w-auto">
            Kindedo opened its doors in 1984 with a unique vision to provide its
            students <br /> with a globally focused study of arts.
          </p>
        </div>
        <ReactSimplyCarousel
          itemsListProps={{
            style: {
              gap: "4rem",
              maxWidth: 1440,
            },
          }}
          activeSlideIndex={activeSlideIndex}
          containerProps={{
            style: {
              justifyContent: "space-around",
              gap: "1px",
              padding: "20px",
            },
          }}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={3}
          itemsToScroll={1}
          forwardBtnProps={{
            children: (
              <span className=" absolute top-[90px] left-[90%] duration-500  hover:text-white hover:bg-black bg-transparent w-12 h-12 flex justify-center items-center  border border-black rounded-full md:top-[150px] text-black text-[30px] sm:top-[180px] sm:left-[80%] md:hidden">{`>`}</span>
            ),
          }}
          backwardBtnProps={{
            children: (
              <span className=" absolute top-[90px] left-[85%] duration-500  hover:text-white hover:bg-black bg-transparent w-12 h-12 flex justify-center items-center  border border-black rounded-full md:left-[80%] md:top-[150px] text-black text-[30px] sm:top-[180px] sm:left-[70%] md:hidden">{`<`}</span>
            ),
          }}
          responsiveProps={[
            {
              itemsToShow: 3,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          <div className="">
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
          </div>
          <div className="">
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
          </div>
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
                Kindedo not only for all our dedicated 2023 reunion year groups
                program.
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
          <div>
            {" "}
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
          </div>
        </ReactSimplyCarousel>
      </div>
    </>
  );
}
