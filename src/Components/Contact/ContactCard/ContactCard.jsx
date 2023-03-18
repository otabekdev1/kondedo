import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "./ContactCard.css";
export default function ContactCard() {
  return (
    <div className="container max-w-[1440px] m-auto">
      <div className="flex justify-around items-center flex-wrap p-[23px]">
        <div className="w-[415px] h-[250px] bg-[#FFF6EB] rounded-[24px] p-[25px_20px] flex items-center justify-center flex-col contact-card md:w-full mb-[44px]">
          <div className="w-[120px] h-[120px] bg-[#00BBAE] rounded-full flex items-center justify-center mb-[30px]">
            <AiOutlinePhone color="#fff" fontSize={55} />
          </div>
          <p className="text-[#1b1b1b] text-[18px] font-medium">907-200-3462</p>
        </div>
        <div className="w-[415px] h-[250px] bg-[#FFF6EB] rounded-[24px] p-[25px_20px] flex items-center justify-center flex-col contact-card md:w-full mb-[44px]">
          <div className="w-[120px] h-[120px] bg-[#FF9B24] rounded-full flex items-center justify-center mb-[30px]">
            <GoLocation color="#fff" fontSize={55} />
          </div>
          <p className="text-[#1b1b1b] text-[18px] font-medium">
            14/A, Kilix Home Tower
          </p>
        </div>
        <div className="w-[415px] h-[250px] bg-[#FFF6EB] rounded-[24px] p-[25px_20px] flex items-center justify-center flex-col contact-card md:w-full mb-[44px]">
          <div className="w-[120px] h-[120px] bg-[#FF577B] rounded-full flex items-center justify-center mb-[30px]">
            <GoLocation color="#fff" fontSize={55} />
          </div>
          <p className="text-[#1b1b1b] text-[18px] font-medium">
            support@kindedo.com
          </p>
        </div>
      </div>
    </div>
  );
}
