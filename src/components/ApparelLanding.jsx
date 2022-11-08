import React from "react";
import heroDesk from "../images/hero-desktop.jpg";
import heroMobile from "../images/hero-mobile.jpg";
import logo from "../images/logo.svg";

const ApparelLanding = () => {
  return (
    <div className="w-[360px] md:max-w-7xl md:w-full bg-[#FFF7F7] m-auto ">
      <div className="md:hidden h-[80px] flex items-center p-8">
        <img className="w-[100px]" src={logo} alt="" />
      </div>
      <div>
        <img className="md:hidden" src={heroMobile} alt="" />
      </div>
      <div className="md:flex md:flex-row-reverse md:w-full">
        <div className="md:w-[50%] md:flex md:justify-end">
          <img
            className="hidden md:block"
            src={heroDesk}
            alt=""
          />
        </div>
        <div className="md:w-[50%] md:p-8">
          <img
            src={logo}
            className="hidden md:block md:py-4 md:w-[100px] md:mx-auto"
            alt=""
          />

          <h1 className="text-5xl text-center uppercase p-4 tracking-widest font-light md:text-left">
            <span className="text-[#F29D9C] font-extralight">We're</span> coming
            soon
          </h1>
          <p className="p-6 text-center text-sm text-[#b7a6a6] md:text-left">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form className="flex justify-center p-6 relative md:justify-start">
            <input
              className="border-[1px] border-gray-300 bg-inherit w-[85%] rounded-3xl px-5 py-2 text-sm text-[#b7a6a6] outline-none  !focus:ring-0 !focus:border-none placeholder:text-[#b7a6a6]"
              placeholder="Email Address"
              type="text"
            />
            <button
              className="py-2 px-6 z-10 bg-[#F19A9A] rounded-3xl text-white font-bold absolute right-[34px] top-[24px] shadow-lg"
              type="submit"
            >{`>`}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApparelLanding;
