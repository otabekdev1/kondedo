import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export default function Collapse({ text, title }) {
  const [open, setOPen] = useState(false);

  return (
    <div className="md:p-4">
      <div className="border rounded-xl md:w-auto  border-[#b8b4b4] w-[548px] mb-[20px]  ease-in-out ">
        <div
          onClick={() => setOPen(!open)}
          className={`flex h-[72px] rounded-xl  duration-300  items-center justify-around text-[16px] font-semibold    ${
            !open ? " text-[#1b1b1b]" : "bg-[#FF9B24] text-white   "
          }`}
        >
          <h2 className="md:text-[16px]">{title}</h2>
          <div
            className={`w-[28px] h-[28px] border-2  rounded-full flex  justify-center  items-center p-0 m-0 bg-white text-[25px] text-[black]  ${
              !open ? "border-black" : "border-white"
            }`}
          >
            {!open ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </div>
        </div>
        {open && (
          <div className="toggle">
            <h4
              style={{ transition: "9s" }}
              className="p-4 text-[18px] font-normal animation-time-callapse  "
            >
              {text}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}
