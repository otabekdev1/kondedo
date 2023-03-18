import React from "react";
import { BiUser, BiCommentDetail } from "react-icons/bi";
export default function NewsCard({ item }) {
  return (
    <>
      <div className=" relative w-[416px] rounded-3xl mb-[50px]   duration-300  lg:w-[500px] md:w-auto ">
        <div className="overflow-hidden ">
          <img
            src={item.img}
            className="w-full h-[227px] object-cover   rounded-[30px_30px_0px_0px] hover:scale-110 hover:rounded-[90px_90px_0px_0px] duration-500"
            alt=" "
          />
          <div className="absolute top-[54%] left-[5%] bg-[#ffb924] p-1 text-[16px] font-normal text-[#fff] rounded">
            {item.Time}
          </div>
        </div>
        <div className="p-[20px_25px_17px] border-[2px] rounded-[0px_0px_40px_40px] border-[#E6E6E6]">
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <BiUser className=" w-[14px] h-[18px] text-[#00BBAE]" /> by Alex
            </div>
            <div className="flex items-center gap-2 ">
              <BiCommentDetail className="text-[#00BBAE]" /> {item.comments}
              Comments
            </div>
          </div>
          <p className="p-1  text-[23px] text-[#1b1b1b] font-medium">
            {item.text}
          </p>
        </div>
      </div>
    </>
  );
}
