import React from "react";
import { AiOutlineCoffee, AiFillLock, AiFillCar } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import "./AboutCard.css";
export default function AboutCards() {
  const cardh3 =
    "text-[23px] z-[99] relative text-center text-[#fff] mb-[20px] font-semibold titleofAbout";
  const cardp =
    "text-[18px] z-[99] absolute mb-[15px] text-[#fff] font-normal titleofAbout text-center ";
  const cards =
    "card-about-hover p-[42px] border border-[#e6e6e6] w-[323px] h-[358px] md:rounded-3xl  ";
  return (
    <div className="bg-[#00BBAE] relative mb-10">
      <div className="container max-w-[1440px] m-auto ">
        <h3 className="text-[54px] text-[white] xl:text-[60px] lg:text-[50px]  md:text-[45px] md:mb-[45px] sm:text-[40px] btn-hover font-extrabold mb-[20px] text-center pt-[90px]">
          Our Core Value
        </h3>
        <p className="text-[23px] md:text-[18px] text-center pt-[20px] pb-[60px]  font-semibold text-[white] ">
          View classes by age, program, or subject. <br /> Check out upcoming
          camps and special events too!
        </p>
        <div className="flex justify-center items-center flex-wrap md:justify-around md:gap-5 pb-[100px]">
          <div className={cards}>
            <div className="box-of-icon w-[120px] h-[120px] flex justify-center items-center rounded-full bg-[white] m-[0px_auto_30px] z-[99] relative">
              <IoBookSharp className="w-[50px] h-[50px] text-[#FF9B24] icon-hover-about" />
            </div>
            <h3 className={cardh3}>Learning & Fun</h3>
            <p className={cardp}>When it comes to success in the classroom.</p>
          </div>
          <div className={cards}>
            <div className="box-of-icon w-[120px] h-[120px] flex justify-center items-center rounded-full bg-[white] m-[0px_auto_30px ] z-[99] relative left-[60px] mb-[35px] ">
              <AiOutlineCoffee className="w-[50px] h-[50px] text-[#FF9B24] icon-hover-about" />
            </div>
            <h3 className={cardh3}>Healthy Meals</h3>
            <p className={cardp}>
              Safety matters just as much as the academics.
            </p>
          </div>
          <div className={cards}>
            <div className="box-of-icon w-[120px] h-[120px] flex justify-center items-center rounded-full bg-[white] m-[0px_auto_30px] z-[99] relative">
              <AiFillLock className="w-[50px] h-[50px] text-[#FF9B24] icon-hover-about" />
            </div>
            <h3 className={cardh3}>Children Safety</h3>
            <p className={cardp}>
              Consistent with Friend ship’s focus on kindedo.
            </p>
          </div>
          <div className={cards}>
            <div className="box-of-icon w-[120px] h-[120px] flex justify-center items-center rounded-full bg-[white] m-[0px_auto_30px] z-[99] relative">
              <AiFillCar className="w-[50px] h-[50px] text-[#FF9B24] icon-hover-about" />
            </div>
            <h3 className={cardh3}>Free Shipping</h3>
            <p className={cardp}>
              Guided by teachers who are veste student success.
            </p>
          </div>
        </div>
        <img
          src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shape/wave-section-break.png"
          className="absolute -bottom-[1px] left-0  right-0 bg-center"
          alt=""
        />
      </div>
    </div>
  );
}
