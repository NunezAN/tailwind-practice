import React from "react";
import nftImg from "../images/image-equilibrium.jpg";
import avatar from "../images/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const NftPreview = () => {
  return (
    <div className="h-[600px] w-[400px] bg-[#172A41] p-4 m-auto space-y-2">
      <div className="h-[60%] cursor-pointer group rounded-lg hover:bg-cyan-400 transition-all duration-300 relative">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 z-10 transition-all duration-300">
          <FontAwesomeIcon icon={faEye} />
        </span>
        <img
          src={nftImg}
          alt=""
          className="object-cover h-full w-full rounded-lg group-hover:opacity-50 transition-all duration-300"
        />
      </div>
      <h1 className="text-white text-2xl font-bold hover:text-cyan-400 cursor-pointer w-fit">
        Equilibrium #3429
      </h1>
      <p className="text-gray-500 text-lg">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between w-full border-b-2 pb-2 border-gray-500 border-opacity-30">
        <span className="text-cyan-400 font-bold text-lg">0.041 ETH</span>
        <span className="text-gray-500 text-lg">3 days left</span>
      </div>
      <div className="flex items-center pt-2">
        <img
          className="h-10 mr-4 border-white border-2 rounded-full"
          src={avatar}
          alt=""
        />
        <span className="text-gray-500 text-lg mr-2">Creation of</span>
        <span className="text-white text-lg hover:text-cyan-400 cursor-pointer">
          Jules Wyvern
        </span>
      </div>
    </div>
  );
};

export default NftPreview;
