import React from "react";
import Email from "../Email/Email";
import Footer from "../footer/Footer";
import ProgramDetail from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import TImeRoutine from "./TImeRoutine/TImeRoutine";

export default function TimeTable() {
  return (
    <>
      <ProgramDetail nameOfComp={`Time Table`} />
      <TImeRoutine />
      <Email />
      <Footer />
    </>
  );
}
