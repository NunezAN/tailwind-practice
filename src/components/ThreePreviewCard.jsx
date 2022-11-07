import React from "react";
import sedans from "../images/icon-sedans.svg";
import suvs from "../images/icon-suvs.svg";
import luxury from "../images/icon-luxury.svg";

const ThreePreviewCard = () => {
  return (
    <div className="max-w-[360px] m-auto rounded-2xl overflow-hidden md:flex md:max-w-[768px]">
      <div className="bg-orange-400 p-12 space-y-6 flex flex-col justify-between">
        <img className="max-w-[80px]" src={sedans} alt="" />
        <h1 className="text-white font-bold text-3xl uppercase">Sedans</h1>
        <p className="text-white text-md">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="text-orange-400 bg-white px-8 py-2 rounded-3xl">
          Learn More
        </button>
      </div>
      <div className="bg-[#016871] p-12 space-y-6 flex flex-col justify-between">
        <img className="max-w-[80px]" src={suvs} alt="" />
        <h1 className="text-white font-bold text-3xl uppercase">SUVs</h1>
        <p className="text-white text-md">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="text-orange-[#016871] bg-white px-8 py-2 rounded-3xl">
          Learn More
        </button>
      </div>
      <div className="bg-[#00403E] p-12 space-y-6 flex flex-col justify-between">
        <img className="max-w-[80px]" src={luxury} alt="" />
        <h1 className="text-white font-bold text-3xl uppercase">Luxury</h1>
        <p className="text-white text-md">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="text-orange-[#00403E] bg-white px-8 py-2 rounded-3xl">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ThreePreviewCard;
