import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
export default function TeacherDetailAbout() {
  const ptext = "text-[#424242] font-normal text-[18px]";

  return (
    <>
      <div className="container max-w-[1440px] m-auto">
        <div className="flex justify-around flex-wrap p-4">
          <img
            src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/teacher/8.jpg"
            alt=""
            className="w-[636px] xl:h-[500px] h-[464px] object-cover rounded-[35px] mb-[40px] xl:w-full"
          />
          <div className="flex flex-col bg-[#FFF6EB] p-[30px_32px_40px] w-[636px] h-[464px] rounded-[35px] xl:h-auto  xl:w-full">
            <h2 className="text-[#1b1b1b] text-[45px] font-semibold mb-2">
              Anna D.Brown
            </h2>
            <span className="text-[#00bbae] text-[18px] mb-[25px]">
              Teacher
            </span>
            <p className="text-[#424242] text-[18px] font-normal mb-[25px]">
              The foundation of the Montessori philosophy is based upon the idea
              that children should work at their own pace, according to their
              own strengths in surroundings that help to develop their
              intelligence, keed the good work, will help kindedo.
            </p>
            <p className="text-[#424242] text-[18px] font-normal mb-[25px]">
              Observers of Montessori children note that they are confident,
              caringperceptive, independent.
            </p>
            <div className="flex gap-4 items-center">
              <span>Follow Me:</span>
              <div className="flex gap-3">
                <FaFacebookF className="text-[#fff] bg-[#00bbae] duration-300 rounded-full p-2 text-[40px] hover:bg-[#ff9b24]" />
                <FaTwitter className="text-[#fff] bg-[#00bbae] duration-300 rounded-full p-2 text-[40px] hover:bg-[#ff9b24]" />
                <FaYoutube className="text-[#fff] bg-[#00bbae] duration-300 rounded-full p-2 text-[40px] hover:bg-[#ff9b24]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around flex-wrap p-4">
          <div className="w-[636px] h-[364px] bg-[#FFF6EB] p-[30px_32px_40px] rounded-[30px] mb-[40px] xl:w-full">
            <h3 className="text-[#1b1b1b] mb-[25px] text-[23px] font-semibold">
              My Skills :
            </h3>
            <div className="flex flex-col ">
              <div className="flex flex-col mb-[30px]">
                <div className="flex justify-between mb-[18px]">
                  <p className={ptext}>Preschool Education</p>
                  <p className={ptext}>97%</p>
                </div>
                <div className="w-full bg-[#FFECD6] rounded-xl h-2">
                  <div className="bg-[#FF9B24] w-[97%] h-2 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-col mb-[30px]">
                <div className="flex justify-between mb-[18px]">
                  <p className={ptext}>Physical Education</p>
                  <p className={ptext}>87%</p>
                </div>
                <div className="w-full bg-[#FFECD6] rounded-xl h-2">
                  <div className="bg-[#FF9B24] w-[87%] h-2 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-col mb-[30px]">
                <div className="flex justify-between mb-[18px]">
                  <p className={ptext}>Manner Education</p>
                  <p className={ptext}>87%</p>
                </div>
                <div className="w-full bg-[#FFECD6] rounded-xl h-2">
                  <div className="bg-[#FF9B24] w-[95%] h-2 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[636px] h-[364px] bg-[#FFF6EB] p-[30px_32px_40px] rounded-[30px] mb-[40px] xl:w-full xl:h-auto">
            <h3 className="text-[#1b1b1b] mb-[25px] text-[23px] font-semibold">
              My Skills :
            </h3>
            <div className="flex justify-between mb-7">
              <p className={ptext}>Email:</p>
              <p className={ptext}>annadbrown@kindedo.com</p>
            </div>
            <div className="flex justify-between mb-7">
              <p className={ptext}>Education:</p>
              <p className={ptext}>University of California, Los Angeles</p>
            </div>
            <div className="flex justify-between mb-7">
              <p className={ptext}>Teaching Since:</p>
              <p className={ptext}>2016</p>
            </div>
            <div className="flex justify-between mb-7">
              <p className={ptext}>At Clears Since:</p>
              <p className={ptext}>2018</p>
            </div>
            <div className="flex justify-between">
              <p className={ptext}>What I love Most:</p>
              <p className={ptext}>The Kids with Creative Mind</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
