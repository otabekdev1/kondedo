import React from "react";
import { BiUser, BiCommentDetail } from "react-icons/bi";
import "./News.css";

export default function News({ container }) {
  const data = [
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/2.jpg",
      time: " 22 Jan 2022",
      comment: 0,
      text: `Tips to Understand Your Child
      Better -
      A
      Guide for Parents!`,
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/4.jpg",
      time: " 22 Nov 2022",
      comment: "04",
      text: `Why Toys for Preschoolers are
      Important - a small ready setup`,
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/3.jpg",
      time: " 22 Dec 2022",
      comment: "02",
      text: `Which Toys are Best for Preschool
      Kids in USA: A Quick Guide
   `,
    },
  ];
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
          <div className="slider-item-our w-full ">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="relative w-[416px] mb-[20px] border-[2px] rounded-lg border-[#E6E6E6] hover:shadow-xl duration-300  scs-ali "
              >
                <div className="overflow-hidden ">
                  <img
                    src={item.img}
                    className="w-full h-[227px] rounded-[6px] hover:scale-150 duration-500"
                    alt=" "
                  />
                  <div className="absolute top-[54%] left-[5%] bg-[#ffb924] p-1 text-[16px] font-normal text-[#fff] rounded">
                    {item.time}
                  </div>
                </div>
                <div className="p-[20px_25px_17px] border-[2px] border-[#E6E6E6]">
                  <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-2">
                      <BiUser className=" w-[14px] h-[18px] text-[#00BBAE]" />{" "}
                      by Alex
                    </div>
                    <div className="flex items-center gap-2 ">
                      <BiCommentDetail className="text-[#00BBAE]" />{" "}
                      {item.comment} Comments
                    </div>
                  </div>
                  <p className="p-1  text-[23px] text-[#1b1b1b] font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
