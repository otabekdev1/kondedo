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
  return (
    <>
      <Header />
      <Section />
      <Main />
      <OurPrograms />
      <About />
      <NewSession />
      <Teacher />
      {/* <Parents />/ */}
      <News />
      <Email />
      <Footer />
    </>
  );
}
