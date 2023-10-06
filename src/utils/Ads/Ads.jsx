import React from "react";
import "./Ads.css";

function Ads() {
  return (
    <div className="py-16 px-8 ads-div mb-16 mt-4 text-center">
      <h2 className="text-3xl font-bold text-white">
        Create an Amazing Newspaper
      </h2>
      <p className="text-base font-normal text-white mt-5">
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </p>
      <button className="text-xl font-semibold py-4 px-5 text-white bg-[#D72050] mt-6">
        Learn More
      </button>
    </div>
  );
}

export default Ads;
