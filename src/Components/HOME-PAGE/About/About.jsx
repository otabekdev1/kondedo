import React from "react";
import "./about.css";
import Collapse from "../../assets/Collapse";
export default function About() {

  const data = [
    {
      title: "What Is The Best Age To Start Kindergarten?",
      text: ` Some states and countries implement mandatory early
      childhood education. With such rules, many preschool and
      kindergarten learning centers are built.`,
    },
    {
      title: "Which Is The Best Preschool For Your Child ?",
      text: `  Right after you book your party, you’ll receive an email
      confirming the date, time, and details about what’s included
      in the package you’ve selected result`,
    },
    {
      title: "What Is The Toution Fee On First Year?",
      text: `There will also be some fantastic outdoor entertainment,
      desserts and drinks, plus tours of the School for those who
      want to continue the celebrations.`,
    },
  ];

  return (
    <>
      <div className="bg-white p-[120px_0px_60px] sm:p-[30px] md:p-[30px]">
        <div className='container'>
          <div className="flex justify-around items-center flex-wrap">
            <div className="md:w-full">
              <h2 className="text-[#1b1b1b] text-[55px] font-semibold mb-[25px] xl:text-[45px] lg:text-[40px] md:text-[45px] sm:text-[30px]">
                Know More <br /> About Kindedo
              </h2>
              <div className="flex flex-col mb-[20px]">
                {data.map((item, idx) => (
                  <Collapse key={idx} text={item.text} title={item.title} />
                ))}
              </div>
            </div>
            <div className="flex flex-col relative">
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/faq/1.jpg"
                className="rounded-[50%] w-[636px] h-[405px] object-cover xl:w-[546px] 
                xl:h-[399px]  lg:w-[456px] lg:h-[333px] md:w-[636px] md:h-[405px] "
                style={{
                  clipPath:
                    "polygon(51% 32%, 88% 20%, 100% 28%, 100% 70%, 100% 100%, 43% 100%, 0 100%, 0% 70%, 0% 35%, 18% 29%)",
                }}
                alt=""
              />
              <img
                src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shape/tripple-line.png"
                alt=""
                className="w-[161px] h-[67px] animate-img xl:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
