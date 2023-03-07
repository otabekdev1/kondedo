import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
export default function SliderComponent({ img, text }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <>
      <div className="">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              position: "absolute",
              right: "40%",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span className="">{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              position: "absolute",
              left: "40%",
              zIndex: 999,
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          <div style={{ width: 300, height: 300, background: "#ff80ed" }}>
            slide 1
          </div>
          <div style={{ width: 300, height: 300, background: "#065535" }}>
            slide 2
          </div>
          <div style={{ width: 300, height: 300, background: "#000000" }}>
            slide 3
          </div>
        </ReactSimplyCarousel>
      </div>
    </>
  );
}
