import React from "react";
import NewSession from "../HOME-PAGE/NewSeession/NewSession";
import DetailHeader from "./ProgramDetailHeader/DetailHeader";
import ProgramInformation from "./ProgramInformation/ProgramInformation";
import ProgramIntroduce from "./ProgramIntroduce/ProgramIntroduce";
import ProgramLearning from "./ProgramLearning/ProgramLearning";
import Grades from "./TypeofGrades/Grades";
import Email from "../Email/Email";
import Footer from "../footer/Footer";
export default function ProgramDetail() {
  const container = "container max-w-[1440px] m-auto";
  return (
    <>
      <DetailHeader container={container} nameOfComp="Programs Details" />
      <ProgramIntroduce container={container} />
      <ProgramLearning />
      <ProgramInformation />
      <NewSession container={container} />
      <Grades />
      <Email />
      <Footer />
    </>
  );
}
