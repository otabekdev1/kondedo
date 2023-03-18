import React, { useEffect } from "react";

const ScrollProgressBar = () => {
  useEffect(() => {
    const calcScrollValue = () => {
      const scrollProgres = document.getElementById("progress");
      // const progressValue = document.getElementById("progress-value");
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);

      pos > 100
        ? (scrollProgres.style.display = "grid")
        : (scrollProgres.style.display = "none");
      scrollProgres.style.background = `conic-gradient( #ff9b24 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
      scrollProgres.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    return () => {
      window.removeEventListener("scroll", calcScrollValue);
      window.removeEventListener("load", calcScrollValue);
    };
  }, []);

  return (
    <div id="progress" className="z-[10000]">
      <span id="progress-value">&#x1F815;</span>
    </div>
  );
};

export default ScrollProgressBar;
