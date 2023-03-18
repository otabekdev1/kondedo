import React from "react";
import AboutofAbout from "./AboutOfAbout/AboutofAbout";
import DetailHeader from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import AboutCards from "./AboutCards/AboutCards";
import AboutofContent from "./AboutofContent/AboutofContent";
import ShopParents from "../ShopMain/ShopParent/ShopParents";
import Teacher from "../HOME-PAGE/teachers/Teacher";
import AboutNumber from "./AboutNumber/AboutNumber";
import Email from "../Email/Email";
import Footer from "../footer/Footer";
export default function AboutPg() {
  return (
    <>
      <DetailHeader nameOfComp={"About"} />
      <AboutofAbout />
      <AboutCards />
      <AboutofContent />
      <ShopParents />
      <Teacher />
      <AboutNumber />
      <Email />
      <Footer />
    </>
  );
}
