import React from "react";
import "./ClassTIme.css";
export default function ClassTimeWeekly() {
  const tableh1 = "text-[#212529]  text-[23px] p-[8px] font-semibold ";
  const TableOFeaddh1doo =
    "bg-[#FFECD6] flex justify-center w-[214px] h-[120px] items-center xl:w-[193px] xl:h-[103px] lg:w-[162px] lg:h-[120px]";
  const TableOFeaddh1odd = `bg-[#FFF6EB] flex justify-center w-[214px] h-[120px] items-center xl:w-[193px] xl:h-[103px] lg:w-[162px] lg:h-[120px]`;
  const LowYellow =
    "w-[214px] h-[120px]  border border-white lg:w-[162px] lg:h-[120px] bg-[#FFF6EB] xl:w-[193px] xl:h-[103px] ";
  const fullyellow =
    "w-[214px] border border-white  h-[120px] bg-[#FFECD6] xl:w-[193px] xl:h-[103px] lg:w-[162px] lg:h-[120px]";
  const greenbox =
    "w-[214px] h-[120px] flex justify-center items-center flex-col bg-[#00BBAE] p-2 xl:w-[193px] xl:h-[103px] text-[18px] lg:w-[162px] lg:h-[120px] text-white font-semibold";
  const greenboxp = "text-[16px] font-medium mb-[10px]";
  return (
    <>
      <div className="container max-w-[1440px] m-auto">
        <h1 className="text-[55px] font-semibold text-center mb-[20px] text-[#1b1b1b]">
          Class Time Table Weekly
        </h1>
        <p className="text-[#424242] text-[18px] text-center mb-[50px]">
          Our multi-level kindergarten programs cater to the age group of 2-5{" "}
          <br />
          years with a curriculum focussing children.
        </p>
        <div className="flex justify-center m-[40px] scroll-y-ob">
          <div className="flex flex-col">
            <div
              className={TableOFeaddh1doo}
              style={{ borderRadius: "30px 0px 0px 0px " }}
            >
              <h1 className={tableh1}>Sunday</h1>
            </div>
            <div className={LowYellow}></div>
            <div className={greenbox}>
              <p className={greenboxp}>8:00am - 8:30am</p>
              <h3 className="">Play Class </h3>
            </div>
            <div className={LowYellow}></div>
            <div
              style={{ borderRadius: "0px 0px 0px 30px" }}
              className={fullyellow}
            ></div>
          </div>
          <div className="flex flex-col">
            <div className={TableOFeaddh1odd}>
              <h1 className={tableh1}>Monday </h1>
            </div>{" "}
            <div className={greenbox}>
              <p className={greenboxp}>8:00am - 8:30am</p>
              <h3 className="">Play Class </h3>
            </div>
            <div className={LowYellow}></div>
            <div className={fullyellow}></div>
            <div className={LowYellow}></div>
          </div>
          <div className="flex flex-col">
            <div className={TableOFeaddh1doo}>
              <h1 className={tableh1}>Tuesday</h1>
            </div>
            <div className={LowYellow}></div>
            <div className={greenbox}>
              <p className={greenboxp}>8:00am - 8:30am</p>
              <h3 className="">Play Class </h3>
            </div>
            <div className={LowYellow}></div>
            <div className={fullyellow}></div>
          </div>
          <div className="flex flex-col">
            <div className={TableOFeaddh1odd}>
              <h1 className={tableh1}>Wednessday</h1>
            </div>
            <div className={fullyellow}></div>
            <div className={fullyellow}></div>
            <div className={fullyellow}></div>{" "}
            <div className={greenbox}>
              <p className={greenboxp}>8:00am - 8:30am</p>
              <h3 className="">Play Class </h3>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <div className={TableOFeaddh1doo}>
              <h1 className={tableh1}>Thursday</h1>
            </div>
            <div className={LowYellow}></div>
            <div className={LowYellow}></div>
            <div className={greenbox}>
              <p className={greenboxp}>8:00am - 8:30am</p>
              <h3 className="">Play Class </h3>
            </div>
            <div className={fullyellow}></div>
          </div>{" "}
          <div className="flex flex-col">
            <div
              className={TableOFeaddh1odd}
              style={{ borderRadius: "0px 30px 0px 0px" }}
            >
              <h1 className={tableh1}>Thursday</h1>
            </div>
            <div className={fullyellow}></div>
            <div className={fullyellow}></div>
            <div className={greenbox}>
              <p className={greenboxp}>8:00am - 8:30am</p>
              <h3 className="">Play Class </h3>
            </div>
            <div
              className={LowYellow}
              style={{ borderRadius: "0px 0px 30px 0px" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
