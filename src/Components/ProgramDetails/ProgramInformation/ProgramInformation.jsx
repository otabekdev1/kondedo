import React from "react";

const boxrightP = "text-[18px] mb-[10px] text-[#424242] font-normal";
// const boxrightH2 = "text-[23px] mb-[10px] text-[#1b1b1b] font-semibold";
const iconBox =
  "w-[20px] h-[20px] bg-[#ffedd7] flex justify-center items-center rounded-lg";
const boxicon = "text-[#FF9B24] text-[15px]";

const textofIcon =
  "text-[#1b1b1b] p-[0px_0px_0px_20px] text-[18px] font-normal";
export default function ProgramInformation() {
  return (
    <>
      <div className="container max-w-[1440px] m-auto">
        <div className="w-full h-[600px] xl:h-[1100px] md:h-[1200px] sm:h-[1300px] ml:h-[1400px]">
          <div className="container max-w-[1440px] m-auto ">
            <div className="flex flex-wrap items-center justify-between p-9  ">
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/program/details-2.jpg"
                alt=""
                className="w-[636px] h-[465px] rounded-3xl xl:m-[20px_auto_30px] object-cover"
              />
              <div className="w-[636px]   rounded-3xl mt-[40px] static  mb-[40px] h-[465px] bg-[#fff6eb] p-[30px_32px_50px] xl:m-[20px_auto_0px] xl:w-[696px] xl:h-auto">
                <h2 className="text-[45px] mb-[20px] text-[#1b1b1b] font-semibold">
                  Way to Learn
                </h2>
                <p className={boxrightP} style={{ marginBottom: "20px" }}>
                  The past thirteen years have been memorable for the free
                  kinder garten movement in the United States. Previous to that
                  time, the work was largely private, experimental.
                </p>
                <div className="flex flex-col">
                  <div className="flex items-center mb-[20px]">
                    <div className={iconBox}>
                      <span className={boxicon}>{`>`}</span>
                    </div>
                    <p className={textofIcon}>
                      Semester start and end dates, holidays
                    </p>
                  </div>
                  <div className="flex items-center mb-[20px]">
                    <div className={iconBox}>
                      <span className={boxicon}>{`>`}</span>
                    </div>
                    <p className={textofIcon}>Accreditation & Bear Facts</p>
                  </div>
                  <div className="flex items-center mb-[20px]">
                    <div className={iconBox}>
                      <span className={boxicon}>{`>`}</span>
                    </div>
                    <p className={textofIcon}>Graduate Division</p>
                  </div>
                  <div className="flex items-center mb-[20px]">
                    <div className={iconBox}>
                      <span className={boxicon}>{`>`}</span>
                    </div>
                    <p className={textofIcon}>Research at Our School</p>
                  </div>
                  <div className="flex items-center mb-[20px]">
                    <div className={iconBox}>
                      <span className={boxicon}>{`>`}</span>
                    </div>
                    <p className={textofIcon}>Textbooks: Cal Student Store</p>
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
