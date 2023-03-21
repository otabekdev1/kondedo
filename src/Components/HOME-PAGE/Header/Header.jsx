import React from "react";
// import Navbar from "../../navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";
// import Wave from "react-wavify";
export default function Header() {
  // const [sidebar, setSidebar] = useState(false);
  // const toogle = () => {
  //   setSidebar((preveState) => !preveState);
  // };
  return (
    <>
      <div className="navbar text-center flex flex-col ">
        <NavLink to="/ProgramDetail">ProgramDetail</NavLink>
        <NavLink to="/Shop">Shop</NavLink>
        <NavLink to="/ClassesofNew">ClassesofNew</NavLink>
        <NavLink to="/ClassDetails">ClassDetails</NavLink>
        <NavLink to="/TimeTable">TimeTable</NavLink>
        <NavLink to="/TeacherDetail">TeacherDetail</NavLink>
        <NavLink to="/Teacher">Teacher</NavLink>
        <NavLink to="/Programs">Programs</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/News">News</NavLink>
      </div>
      <header
        className="pb-[80px]"
        style={{
          background:
            " linear-gradient(90.87deg, #ffecd6 0.69%, #09b9ad 530.75%)",
        }}
      >
        {/* <Navbar /> */}{" "}
        <div className='container'>
          <div className="flex  justify-around items-center mt-40 mb-44 flex-wrap">
            <div className="flex flex-col">
              <p className="text-[23px] md:text-[18px]  text-[#00BBAE] font-semibold  ">
                Kindergarten Program
              </p>
              <h2 className="text-[80px] text-[black] xl:text-[60px] lg:text-[50px]  md:text-[45px] md:mb-[45px] sm:text-[40px] btn-hover font-extrabold mb-[20px] ">
                Best Children’s <br /> Education
              </h2>
              <button className="text-[16px] text-[white] bg-[#ffb924] w-[260px] rounded-3xl p-[0px_40px] h-[60px] font-medium lg:mb-[30px] btn-header-hover">
                Admission open 22-23
              </button>
            </div>
            <img
              src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/hero/hero-3.jpg"
              alt=""
              className="w-[550px] h-[472px] xl:w-[475px] xl:h-[405px] lg:w-[400px] lg:h-[339px] md:w-[360px] md:h-[303px]"
              style={{
                clipPath: " polygon(6% 0, 100% 16%, 82% 100%, 0 100%, 0% 38%)",
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
