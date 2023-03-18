import React, { useState } from "react";
import "./NewsCAtegory.css";
import { BsSearch } from "react-icons/bs";
import NewsCard from "./NewsCArd/NewsCard";
export default function NewsCategory() {
  const categoryH2 = "text-[23px]  font-semibold mb-[20px] text-[#1b1b1b]";
  const Data = [
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/6.jpg",
      Time: "22 Jan 2022",
      comments: 0,
      text: "Tips to Understand Your Child Better - A Guide!",
      category: "Daycore",
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/4.jpg",
      Time: "22 Nov 2022",
      comments: "04",
      text: "Why Toys for Preschoolers are Important ready setup",
      category: "Preschool",
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/9.jpg",
      Time: "22 Dec 2022",
      comments: "04",
      text: "Which Toys are Best for Preschool Kids in USA",
      category: "Daycore",
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/1.jpg",
      Time: "22 Nov 2022",
      comments: "04",
      text: "How to be Learn Map Glove Easy Way for Garten",
      category: "Preschool",
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/3.jpg",
      Time: "22 Dec 2022",
      comments: "02",
      text: "8 Ways To Build Love for Reading In Your Child",
      category: "Preschool",
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/7.jpg",
      Time: "22 Jan 2022",
      comments: "0",
      text: "How to Prepare Your Child for Preschool: 8 Steps",
      category: "Children",
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/2.jpg",
      Time: "22 Jan 2022",
      comments: "0",
      text: "How to Prepare Your Child for Preschool: 8 Steps",
      category: "Children",
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/8.jpg",
      Time: "22 Jan 2022",
      comments: "02",
      text: "How does Preschool Help in Children Deavelopment",
      category: "Children",
    },
    {
      img: "https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/5.jpg",
      Time: "22 Jan 2022",
      comments: "04",
      text: "How to Start Your Own Kindedo Preschool in USA",
      category: "Children",
    },
  ];
  const [products, setProducts] = useState(Data);

  const FilterCategory = (item) => {
    const result = Data.filter((Category) => {
      return Category.category === item;
    });
    setProducts(result);
  };

  return (
    <div className="container max-w-[1440px] m-auto">
      <div className="flex justify-center items-center gap-9 flex-wrap">
        <div className="flex flex-col lg:w-full p-[40px]">
          <h2 className={categoryH2}>Search by Keyword</h2>
          <label className="w-[421px] lg:w-full  h-[58px] flex rounded-xl shadow-sm  border border-[#e6e6e6]">
            <input
              className=" w-full p-[15px] outline-none placeholder:text-[#1b1b1b] placeholder:font-normal placeholder:text-[20px] text-[#1b1b1b] placeholder-opacity-100"
              type="search"
              placeholder="Type here..."
            />
            <div className="w-[78px] rounded-2xl h-[58px] bg-[#FF9B24] justify-center flex items-center hover:bg-[#00BBAE] duration-300">
              <BsSearch className="text-[white] text-[25px]" />
            </div>
          </label>
        </div>
        <div className="flex flex-col p-[40px] mb-[50px]">
          <h2 className={categoryH2}>By Category</h2>
          <div className="flex border-[#e6e6e6] border rounded-lg h-[58px] items-center  md:border-none  flex-wrap justify-center md:gap-4 ">
            <h3
              onClick={() => setProducts(Data)}
              className="text-[#1b1b1b] font-normal text-[16px] p-[0px_26px] border-r-2 cursor-pointer  border-[#e6e6e6] pr-[10px] hover:text-[#00BBAE] duration-300 md:border   md:h-[58px] flex justify-center items-center anima-focus"
            >
              All
            </h3>
            <h3
              onClick={() => FilterCategory("Daycore")}
              className="text-[#1b1b1b] font-normal text-[16px] p-[0px_26px] border-r-2 cursor-pointer  border-[#e6e6e6] pr-[10px] hover:text-[#00BBAE] duration-300 md:border md:h-[58px] flex justify-center items-center"
            >
              Daycare(02)
            </h3>
            <h3
              onClick={() => FilterCategory("Preschool")}
              className="text-[#1b1b1b] font-normal text-[16px] p-[0px_26px]  border-r-2  cursor-pointer border-[#e6e6e6] pr-[10px] hover:text-[#00BBAE] duration-300 md:border md:h-[58px] flex justify-center items-center"
            >
              Preschool(03)
            </h3>
            <h3
              onClick={() => FilterCategory("Children")}
              className="text-[#1b1b1b] font-normal text-[16px] p-[0px_26px]    border-[#e6e6e6] cursor-pointer pr-[10px] hover:text-[#00BBAE] duration-300 md:border md:h-[58px] flex justify-center items-center"
            >
              Children(04)
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around p-[30px]">
        {products.map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center gap-5   -mb-[30px] lg:mb-[80px]">
        <div className="w-12 h-12 bg-[#00bbae] text-white flex justify-center items-center rounded-xl">
          1
        </div>
        <div className="bg-[#e6e6e6] w-12 h-12 text-black flex justify-center items-center rounded-xl duration-300 hover:bg-[#00bbae]">
          2
        </div>
        <div className="bg-[#e6e6e6] w-12 h-12 text-black flex justify-center items-center rounded-xl duration-300 hover:bg-[#00bbae]">{`>`}</div>
      </div>
    </div>
  );
}
