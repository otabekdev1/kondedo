import React from "react";
import About from "./About/About";
import Header from "./Header/Header";
import Main from "./main/Main";
import NewSession from "./NewSeession/NewSession";
import OurPrograms from "./OurPrograms/OurPrograms";
import Section from "./Section/Section";
import Teacher from "./teachers/Teacher";
// import Parents from "../Parents/Parents";
import News from "./News/News";
import Footer from "../footer/Footer";
import Email from "../Email/Email";
export default function Home() {
  const container = "container max-w-[1440px] m-auto";
  return (
    <>
      <Header container={container} />
      <Section container={container} /> 
      <Main container={container} />
      <OurPrograms container={container} />
      <About container={container} />
      <NewSession container={container} />
      <Teacher container={container} />
      {/* <Parents />/ */}
      <News container={container} />
      <Email />
      <Footer container={container} />
    </>
  );
}
