import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/NewsHome/logo.svg";
import web3M from "../images/NewsHome/image-web-3-mobile.jpg";
import retro from "../images/NewsHome/image-retro-pcs.jpg";
import laptop from "../images/NewsHome/image-top-laptops.jpg";
import gaming from "../images/NewsHome/image-gaming-growth.jpg";

const NewsHome = () => {
  const [open, setOpen] = useState(false);

  function onChange() {
    document.body.classList.toggle("overflow-hidden");
    setOpen(!open);
  }
  return (
    <div className="bg-white w-full px-4 py-6 space-y-4 flex flex-col md:max-w-7xl mx-auto md:h-screen">
      <header className="flex justify-between items-center w-full md:h-[80px]">
        <img src={logo} alt="" className="w-10 md:w-16" />
        <ul className="hidden md:flex text-gray-600 text-xl space-x-5">
          <li>
            <a href="" className="cursor-pointer">
              Home
            </a>
          </li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
        <div className="md:hidden relative flex">
          <input
            type="checkbox"
            id="checkbox1"
            checked={open}
            onChange={() => onChange()}
            className="h-6 w-6 cursor-pointer opacity-0 z-50 peer"
          />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 peer-checked:opacity-0">
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 peer-checked:opacity-100 opacity-0 z-10">
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          </span>
          <div className="h-screen w-screen bg-gray-500 hidden opacity-90 backdrop-blur-xl absolute top-[-24px] right-[-16px] peer-checked:block z-0">
            <ul className="md:flex text-white text-5xl space-y-5 pt-20">
              <li>
                <a href="" className="cursor-pointer">
                  Home
                </a>
              </li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>
        </div>
      </header>
      <div className="space-y-4 md:flex md:justify-between md:space-y-0">
        <div className="space-y-4 w-full md:pr-8 md:space-y-8">
          <img
            src={web3M}
            alt=""
            className="h-fit w-full md:max-w-full md:max-h-[400px] md:object-fill"
          />
          <div className="space-y-4 md:flex md:space-x-8">
            <h1 className="text-4xl font-extrabold text-left w-[90%] md:text-6xl">
              The Bright Future of Web 3.0?
            </h1>
            <div className="md:space-y-8 md:flex md:flex-col md:justify-between">
              <p className="text-md text-gray-500 text-left md:text-2xl">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="bg-orange-600 text-white px-6 py-2 text-xl md:w-fit md:text-2xl uppercase">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black text-white p-4 space-y-4 md:space-y-8 md:flex md:flex-col md:justify-around">
          <h2 className="text-yellow-600 font-bold text-2xl md:text-5xl">
            New
          </h2>
          <section className="border-b pb-6 border-gray-500 md:pb-10">
            <h3 className="font-extrabold mb-2 md:text-3xl">
              Hydrogen VS Electric Cars
            </h3>
            <span className="text-gray-500 text-sm md:text-xl">
              Will hydrogen-fueled cars ever catch up to EVs?
            </span>
          </section>
          <section className="border-b pb-6 border-gray-500 md:pb-10">
            <h3 className="font-extrabold mb-2 md:text-3xl">
              The Downsides of AI Artistry
            </h3>
            <span className="text-gray-500 text-sm md:text-xl">
              What are the possible adverse effects of on-demand AI image
              generation?
            </span>
          </section>
          <section className="">
            <h3 className="font-extrabold mb-2 md:text-3xl">
              Is VC Funding Drying Up?
            </h3>
            <span className="text-gray-500 text-sm md:text-xl">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </span>
          </section>
        </div>
      </div>
      <div className="md:flex h-[180px] md:!mt-8">
        <div className="flex h-full">
          <div className="w-[25%] max-h-[180px] flex justify-center py-4">
            <img src={retro} classname="w-full h-full object-contain" alt="" />
          </div>
          <div className="flex flex-col justify-around p-4 w-[75%]">
            <h2 className="font-bold text-3xl text-gray-300">01</h2>
            <h3 className="font-bold text-xl">Reviving Retro PCs</h3>
            <p className="text-sm text-gray-500">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-[25%] max-h-[180px] flex justify-center py-4">
            <img src={laptop} alt="" classname="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col justify-around p-4 w-[75%]">
            <h2 className="font-bold text-3xl text-gray-300">02</h2>
            <h3 className="font-bold text-xl">Top 10 Laptops of 2022</h3>
            <p className="text-sm text-gray-500">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-[25%] max-h-[180px] flex justify-center py-4">
            <img src={gaming} alt="" classname="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col justify-around p-4 w-[75%]">
            <h2 className="font-bold text-3xl text-gray-300">03</h2>
            <h3 className="font-bold text-xl">The Growth of Gaming</h3>
            <p className="text-sm text-gray-500">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
