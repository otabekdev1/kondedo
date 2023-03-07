import React from "react";
import "./ProgramLearning.css";
function ProgramLearning({ container }) {
  const FirstTh =
    "text-[18px]  before:w-[40px] before:h-[2px] before:bg-white   text-black  bg-[#FFF6EB] text-center   p-[20px_40px] h-[66px] w-[318px]";
  const secondTh =
    "bg-[#FFECD6]  text-[18px] text-black  text-center   p-[20px_40px] h-[66px] w-[318px]";
  const MainTitle =
    "text-[18px] text-white  bg-[#ff9b24] p-[20px_40px] h-[70px] w-[318px]";

  return (
    <>
      <div className="mt-[80px]">
        <div className="container max-w-[1440px] m-auto">
          <h1
            className="text-[55px] xl:text-[45px] lg:text-[40px] md:text-[45px] 
          sm:text-[30px] font-semibold text-[#1b1b1b] text-center mb-[20px]"
          >
            Full Day with Learning
          </h1>
          <p className="text-[18px] p-2 font-normal text-[#424242] text-center mb-[60px] ">
            With the help of teachers and the environment as the third teacher,
            students <br /> have opportunities to confidently take risks.
          </p>
          <div className="flex flex-wrap justify-between mb-[80px] lg:p-[20px]">
            <table className="xl:m-[0px_auto_60px]  ">
              <thead>
                <tr>
                  <th
                    style={{ borderTopLeftRadius: "50px" }}
                    className={MainTitle}
                  >
                    Hour
                  </th>
                  <th
                    className={MainTitle}
                    style={{ borderTopRightRadius: "50px" }}
                  >
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={FirstTh}>8:00am</td>
                  <td className={FirstTh}>Free Play</td>
                </tr>
                <tr>
                  <td className={secondTh}>8:30am</td>
                  <td className={secondTh}>Sand Pit</td>
                </tr>
                <tr>
                  <td className={FirstTh}>9:00am</td>
                  <td className={FirstTh}> Tattoo Corner</td>
                </tr>
                <tr>
                  <td className={secondTh}>9:30am</td>
                  <td className={secondTh}> Creativity Corner</td>
                </tr>
                <tr>
                  <td
                    style={{ borderBottomLeftRadius: "50px" }}
                    className={FirstTh}
                  >
                    10:00am
                  </td>
                  <td
                    style={{ borderBottomRightRadius: "50px" }}
                    className={FirstTh}
                  >
                    Food Time
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="xl:m-[0px_auto_60px]">
              <thead>
                <tr>
                  <th
                    style={{ borderTopLeftRadius: "50px" }}
                    className={MainTitle}
                  >
                    Hour
                  </th>
                  <th
                    className={MainTitle}
                    style={{ borderTopRightRadius: "50px" }}
                  >
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={FirstTh}>10:30am</td>
                  <td className={FirstTh}>Creativity Corner</td>
                </tr>
                <tr>
                  <td className={secondTh}>11:00am</td>
                  <td className={secondTh}> Food Time</td>
                </tr>
                <tr>
                  <td className={FirstTh}>11:30am</td>
                  <td className={FirstTh}> Free Play</td>
                </tr>
                <tr>
                  <td className={secondTh}>12:00am</td>
                  <td className={secondTh}> Tattoo Corner</td>
                </tr>
                <tr>
                  <td
                    style={{ borderBottomLeftRadius: "50px" }}
                    className={FirstTh}
                  >
                    12:30am
                  </td>
                  <td
                    style={{ borderBottomRightRadius: "50px" }}
                    className={FirstTh}
                  >
                    Sand Pit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramLearning;
