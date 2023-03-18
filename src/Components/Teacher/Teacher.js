import React from "react";
import Email from "../Email/Email";
import Footer from "../footer/Footer";
import DetailHeader from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import Teachercard from "./TeacherCards/Teachercard";

export default function Teacher() {
  return (
    <>
      <DetailHeader nameOfComp={"Teacher"} />
      <Teachercard />
      <Email />
      <Footer />
    </>
  );
}
