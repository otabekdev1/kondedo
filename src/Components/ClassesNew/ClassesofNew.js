import React from "react";
import DetailHeader from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import ShopParents from "../ShopMain/ShopParent/ShopParents";
import ClassesAbout from "./ClassesAbout/ClassesAbout";
import ClassOfCards from "./ClassOfCards/ClassOfCards.jsx";
import Email from "../Email/Email";
import Footer from "../footer/Footer";
export default function ClassesofNew() {
  return (
    <>
      <DetailHeader nameOfComp={"Classes"} />
      <ClassOfCards />
      <ShopParents />
      <ClassesAbout />
      <Email />
      <Footer />
    </>
  );
}
