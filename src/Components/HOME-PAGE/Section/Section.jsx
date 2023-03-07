import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import { NavLink, Link } from "react-router-dom";
import { GiDrum } from "react-icons/gi";
import { MdOutlineSportsBasketball } from "react-icons/md";
import "./Section.css";
export default function Section({ container }) {
  return (
    <>
      <section className="bg-white">
        <div className={container}>
          <h4 className="text-[55px] text-center font-semibold pt-[40px]  xl:text-[45px]  lg:text-[40px] md:text-[45px] sm:text-[30px] ">
            Our Offerings
          </h4>
          <p className="text-[18px] text-center font-normal mt-[55px] pb-[40px] xl:mt-[30px]">
            Our multi-level kindergarten programs cater to the age group of 2-5
            years <br /> with a curriculum focussing children.
          </p>
        </div>
        <div className="  slider-item-our   p-[0px_0px_60px_40px]">
          <div className="w-[416px]  h-[429px] p-[40px]  border-dashed  border-[2px] border-[#E9CFCF] scs-ali  card">
            {" "}
            <img
              src="	https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/bg/bg-shape.jpg"
              alt=""
              className="img-hover"
            />
            <div className="bg-[#FFF8EB] w-[120px] h-[120px] flex justify-center items-center  rounded-full m-auto icon-card-box">
              <MdOutlineSportsBasketball
                fontSize={"64px"}
                className="icon-card  text-[#FF9B24]"
                color=""
              />
            </div>
            <div className="flex  justify-center items-center">
              <a
                href="#!"
                className="text-[32px] mt-[20px] text-[#1b1b1b] font-semibold text-center title-card "
              >
                Sports Class
              </a>
            </div>
            <p className="text-[18px] text-[#424242] mt-[20px] font-normal text-center text-card">
              Each day at Mother’s Pride is a cele bration! We celebrate all.
            </p>
            <div className="flex justify-center mt-9">
              <Link to="/ClassDetails">
                <button className=" btn-nonoeasd  w-[173px] h-[50px] rounded-3xl border-[#FF9B24] border">
                  ClassDetails
                </button>
              </Link>
            </div>
          </div>

          <div className="w-[416px]  h-[429px] p-[40px]  border-dashed  border-[2px] border-[#E9CFCF] scs-ali  card ">
            <img
              src="	https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/bg/bg-shape.jpg"
              alt=""
              className="img-hover"
            />
            <div className="bg-[#FFF8EB] w-[120px] h-[120px] flex justify-center items-center  rounded-full m-auto icon-card-box">
              <GiDrum fontSize={"64px"} className="text-[#FF9B24] icon-card" />
            </div>
            <h2 className="text-[32px] mt-[20px] text-[#1b1b1b] font-semibold text-center title-card">
              Music Class
            </h2>
            <p className="text-[18px] text-[#424242] mt-[20px] font-normal text-center text-card">
              Indoor and out door activities that cater to all domains
              development.
            </p>
            <div className="flex justify-center mt-9">
              <button className=" btn-nonoeasd    w-[173px] h-[50px] rounded-3xl border-[#FF9B24] border">
                <NavLink to="ClassDetails">View Details</NavLink>
              </button>
            </div>
          </div>

          <div className="w-[416px]  h-[429px] p-[40px]  border-dashed  border-[2px] border-[#E9CFCF] scs-ali card">
            {" "}
            <img
              src="	https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/bg/bg-shape.jpg"
              alt=""
              className="img-hover"
            />
            <div className="bg-[#FFF8EB] w-[120px] h-[120px] flex justify-center items-center  rounded-full m-auto icon-card-box">
              <VscSymbolColor
                fontSize={"64px"}
                className="text-[#FF9B24] icon-card"
              />
            </div>
            <h2 className="text-[32px] mt-[20px] text-[#1b1b1b] font-semibold text-center title-card">
              Drowing Class
            </h2>
            <p className="text-[18px] text-[#424242] mt-[20px] font-normal text-center text-card">
              Our special rhyme books also them to phonetic sound of the words.
            </p>
            <div className="flex justify-center mt-9">
              <button className="btn-nonoeasd    w-[173px] h-[50px] rounded-3xl border-[#FF9B24] border">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
