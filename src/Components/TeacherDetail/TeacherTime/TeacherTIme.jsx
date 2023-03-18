import React from "react";

export default function TeacherTIme() {
  const LinkTime = "text-[16px] text-[#1b1b1b] font-medium LinkTime";
  const tableh1 = "text-[#212529]  text-[23px] p-[8px] font-semibold ";
  const TableOFeaddh1doo =
    "bg-[#FFECD6] flex justify-center w-[214px] h-[120px] items-center xl:w-[193px] xl:h-[103px] lg:w-[162px] lg:h-[120px]";
  const TableOFeaddh1odd = `bg-[#FFF6EB] flex justify-center w-[214px] h-[120px] items-center xl:w-[193px] xl:h-[103px] lg:w-[162px] lg:h-[120px]`;
  const LowYellow =
    " bg-[#FF9B24] w-[214px] h-[120px]  border border-white lg:w-[162px] lg:h-[120px]  xl:w-[193px] xl:h-[103px] flex justify-center itemes-center flex-col";
  const lowBlue =
    " bg-[#7c81ff] w-[214px] h-[120px]  border border-white lg:w-[162px] lg:h-[120px]  xl:w-[193px] xl:h-[103px] flex justify-center itemes-center flex-col";
  const lowgreen =
    " bg-[#00bbae] w-[214px] h-[120px]  border border-white lg:w-[162px] lg:h-[120px]  xl:w-[193px] xl:h-[103px] flex justify-center itemes-center flex-col";
  const lowred =
    " bg-[#FF577B] w-[214px] h-[120px]  border border-white lg:w-[162px] lg:h-[120px]  xl:w-[193px] xl:h-[103px] flex justify-center itemes-center flex-col";
  const fullblue =
    "bg-[#00B9F1] w-[214px] h-[120px]  border border-white lg:w-[162px] lg:h-[120px]  xl:w-[193px] xl:h-[103px] flex justify-center itemes-center flex-col";
  const paragraph = "text-white text-[16px] font-normal p-2 text-center";
  const heading = "text-white text-[18px] font-semibold p-2 text-center";
  const soLowRed =
    "bg-[#FF7C7C] w-[214px] h-[120px]  border border-white lg:w-[162px] lg:h-[120px]  xl:w-[193px] xl:h-[103px] flex justify-center itemes-center flex-col";
  return (
    <div className="container max-w-[1440px] m-auto h-[1100px] xl:h-auto">
      <h1 className="text-[55px] text-center text-[#1b1b1b] font-semibold">
        My Time Table
      </h1>
      <div className="w-[619px] m-auto md:w-auto">
        <p className="text-[18px]  text-center text-[#424242] font-normal mb-4  ">
          Our multi-level kindergarten programs cater to the age group of 2-5
          years with a curriculum focussing children.
        </p>
        <ul className="flex justify-center gap-4 mb-[50px] ">
          <li className="">
            <a href="#!" className={LinkTime}>
              All Class
            </a>
          </li>
          <li className="">
            <a href="#!" className={LinkTime}>
              Sports Classs
            </a>
          </li>
          <li className="">
            <a href="#!" className={LinkTime}>
              Dancing Class
            </a>
          </li>
          <li className="">
            <a href="#!" className={LinkTime}>
              Drawing Class
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center overflow-y-auto mb-[120px] scrool-thumb-none-btn pb-[30px]  w-full ">
        <div className="flex flex-col">
          <div
            className={TableOFeaddh1doo}
            style={{ borderRadius: "30px 0px 0px 0px" }}
          >
            <h3 className={tableh1}>Sunday</h3>
          </div>
          <div className={TableOFeaddh1odd}></div>
          <div className={lowBlue}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1odd}></div>
          <div className={lowred}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1odd}></div>
          <div
            className={lowgreen}
            style={{ borderRadius: "0px 0px 0px 30px" }}
          >
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className={TableOFeaddh1odd}>
            <h3 className={tableh1}>Sunday</h3>
          </div>
          <div className={lowgreen}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1odd}></div>
          <div className={LowYellow}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={lowgreen}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={lowBlue}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1odd}></div>
        </div>
        <div className="flex flex-col">
          <div className={TableOFeaddh1doo}>
            <h3 className={tableh1}>Tuesday </h3>
          </div>
          <div className={lowBlue}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={lowred}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={soLowRed}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1odd}></div>
          <div className={LowYellow}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={soLowRed}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className={TableOFeaddh1odd}>
            <h3 className={tableh1}>Wednessday </h3>
          </div>
          <div className={LowYellow}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1odd}></div>
          <div className={TableOFeaddh1doo}></div>
          <div className={lowgreen}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1odd}></div>
          <div className={fullblue}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
        </div>
        <div className="flex-col flex">
          <div className={TableOFeaddh1doo}>
            <h1 className={tableh1}>Thursday </h1>
          </div>
          <div className={fullblue}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1doo}></div>
          <div className={lowgreen}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={LowYellow}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={lowred}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1odd}></div>
        </div>
        <div className="flex-col flex">
          <div
            className={TableOFeaddh1odd}
            style={{ borderRadius: "0px 30px 0px 0px" }}
          >
            <h1 className={tableh1}>Friday</h1>
          </div>
          <div className={TableOFeaddh1doo}></div>
          <div className={lowBlue}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div className={TableOFeaddh1doo}></div>
          <div className={TableOFeaddh1odd}></div>
          <div className={fullblue}>
            <p className={paragraph}>8:00am - 8:30am</p>
            <h2 className={heading}>Play Class</h2>
          </div>
          <div
            className={TableOFeaddh1doo}
            style={{ borderRadius: "0px 0px 30px 0px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
