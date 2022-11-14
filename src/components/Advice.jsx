import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Advice = () => {
  const [searched, setSearched] = useState(false);
  const [slip, setSlip] = useState({});

  async function getAdvice() {
    const fetchedAdvice = await axios.get("https://api.adviceslip.com/advice");
    setSlip(fetchedAdvice.data.slip);
    setSearched(true);
  }
  return (
    <div className="bg-slate-600 w-full m-auto text-center rounded-md space-y-4 md:w-[600px] relative p-6">
      <h1 className="text-sm font-semibold text-cyan-500 uppercase">
        {searched ? `Advice #${slip.id}` : "Advice #"}
      </h1>
      <p className="text-white text-lg md:text-2xl font-bold !mb-4">
        {searched ? `"${slip.advice}"` : "Click on dice to roll advice"}
      </p>
      <button
        className="text-black bg-cyan-500 p-2 h-[42px] w-[42px] rounded-full text-xl text-center absolute -bottom-5 left-1/2 transform -translate-x-1/2 hover:bg-white"
        onClick={() => getAdvice()}
      >
        <FontAwesomeIcon icon={faCube} />
      </button>
    </div>
  );
};

export default Advice;
