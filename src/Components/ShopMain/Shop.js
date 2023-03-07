import React from "react";
import ShopItem from "./ShopItem/ShopItem";
import DetailHeader from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import Email from "../Email/Email";
import Footer from "../footer/Footer";
export default function Shop() {
  return (
    <>
      <DetailHeader nameOfComp={"Shop"} />
      <ShopItem />
      <Email />
      <Footer />
    </>
  );
}
