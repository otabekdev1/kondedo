import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesR } from "react-icons/ri";



export default function Parents() {
  return (
    <>
      <div
        className=""
        style={{
          background:
            "linear-gradient(90.87deg, #00BBAE 0.69%, rgba(0, 187, 174, 0) 200.75%)",
        }}
      >
        <div className="container max-w-[1440px] m-auto">
          <div className="w-full h-[505px] flex justify-around   ">
            <div className="bg-[url(https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/bg/testimonail-bg.png)] bg-cover w-[50%]   xl:w-full xl:h-[505px] flex justify-center items-center">
              <BsPlayCircle className=" w-24 h-24 text-white" />
            </div>
            <div className=" w-[740px] h-[505px] p-[40px_80px]  ">
              <h3 className="text-[55px] mb-[20px]mt-[40px]  font-semibold text-white">
                Parent Says
              </h3>
              <div className="slider-item-our ">
                <div className="scs-ali">
                  <div className="w-[566px]  h-[269px]">
                    <div className="flex mb-[30px]">
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                    </div>
                    <p className="text-[22px] text-[white] m-[0px_0px_15px]">
                      Happy Christmas to the whole Kindedo from everyone at
                      Monkton. A big thank you to Kindedo pupil Will who lent
                      his Kindedo to this card.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/testimonials/1.png"
                          alt=""
                        />
                        <h3 className="text-white font-semibold text-[16px]">
                          Norma J. Johnston
                        </h3>
                      </div>
                      <RiDoubleQuotesR className="w-16 h-16 text-[#fff]" />
                    </div>
                  </div>
                </div>

                <div className="scs-ali">
                  <div className="w-[566px]  h-[269px]">
                    <div className="flex mb-[30px]">
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                    </div>
                    <p className="text-[22px] text-[white] m-[0px_0px_15px]">
                      Your child will laugh, play and explore at Summer at MLS.
                      From soccer, water play, art, music, theater and science,
                      Shabbat celebrations, cooking.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/testimonials/1.png"
                          alt=""
                        />
                        <h3 className="text-white font-semibold text-[16px]">
                          Mateo D. Daniel
                        </h3>
                      </div>
                      <RiDoubleQuotesR className="w-16 h-16 text-[#fff]" />
                    </div>
                  </div>
                </div>

                <div className="scs-ali">
                  <div className="w-[566px]  h-[269px]">
                    <div className="flex mb-[30px]">
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                      <AiFillStar className="w-[20px] h-[18px] text-[#ff9b24]" />
                    </div>
                    <p className="text-[22px] text-[white] m-[0px_0px_15px]">
                      The unique Mentone Grammar Community is our point of
                      difference compared to many in the industry. The School
                      often talks about the concept.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/testimonials/1.png"
                          alt=""
                        />
                        <h3 className="text-white font-semibold text-[16px]">
                          Michael M. Mason
                        </h3>
                      </div>
                      <RiDoubleQuotesR className="w-16 h-16 text-[#fff]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
