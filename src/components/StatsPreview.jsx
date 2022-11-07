import React from "react";
import statImgMobile from "../images/image-header-mobile.jpg";
import statImgDesk from "../images/image-header-desktop.jpg";

const StatsPreview = () => {
  return (
    <div className="w-[400px] h-fit bg-[#1B1937] rounded-lg overflow-hidden m-auto md:flex md:flex-row-reverse md:min-w-[768px]">
      <picture className="relative md:w-[50%]">
        <source media="(min-width: 768px)" srcset={statImgDesk} />
        <div className="absolute top-0 w-full h-full bg-purple-900 z-10 opacity-60"></div>
        <img src={statImgMobile} alt="" />
      </picture>
      <div className="p-10 space-y-4 md:w-[50%]">
        <h1 className="text-4xl text-white font-bold text-center md:text-2xl">
          Get <span className="text-purple-700">insights</span> that help your
          business grow.
        </h1>
        <p className="text-lg text-center text-gray-400 md:text-sm">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="text-white ">
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between md:mt-10">
            <li className="flex flex-col text-center space-y-1">
              <span className="font-bold text-3xl md:text-xl">10k+</span>
              <span className="uppercase text-gray-00 text-sm">companies</span>
            </li>
            <li className="flex flex-col text-center space-y-1">
              <span className="font-bold text-3xl md:text-xl">314</span>
              <span className="uppercase text-gray-00 text-sm">templates</span>
            </li>
            <li className="flex flex-col text-center space-y-1">
              <span className="font-bold text-3xl md:text-xl">12m+</span>
              <span className="uppercase text-gray-00 text-sm">queries</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatsPreview;
