import React from "react";
import ClassAbout from "./ClassDetailAbout/ClassAbout";
import DetailHeader from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import ClassTimeWeekly from "./ClassTimeWeekly/ClassTimeWeekly";
import Grades from "../ProgramDetails/TypeofGrades/Grades";
import ClassPrograms from "../ClassesNew/ClassPrograms/ClassPrograms";
import ProgramInformation from "../ProgramDetails/ProgramInformation/ProgramInformation";
import NewSession from "../HOME-PAGE/NewSeession/NewSession";
import Email from "../Email/Email";
import Footer from "../footer/Footer";
export default function ClassDetail() {
  return (
    <>
      <DetailHeader nameOfComp={"Class Details"} />
      <ClassAbout />
      <ClassTimeWeekly />
      <ProgramInformation />
      <NewSession />
      <ClassPrograms />
      <Email />
      <Footer />
    </>
  );
}
