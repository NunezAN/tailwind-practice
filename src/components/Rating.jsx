import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import thanksImg from "../images/thanks.svg";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function changeRating(num) {
    setRating(num);
  }
  function submit() {
    if (rating === 0) {
      alert("Please select a rating");
    } else {
      setSubmitted(true);
    }
  }
  return (
    <div className="p-4 bg-[#161E28] rounded-lg m-auto h-[350px] w-[400px] space-y-5">
      {!submitted ? (
        <>
          <div className="bg-[#263037] w-12 h-12 p-2 rounded-full flex justify-center content-center">
            <span className="text-orange-500 text-lg m-auto">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          </div>
          <h1 className="text-white font-bold text-2xl">How did we do?</h1>
          <p className="text-gray-500">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between">
            {Array(5)
              .fill(0)
              .map((elem, i) => (
                <button
                  key={i}
                  className="flex justify-center content-center h-12 w-12 bg-[#263037] hover:bg-gray-500 group focus:bg-orange-500 active:bg-orange-500 rounded-full "
                  onClick={() => changeRating(i + 1)}
                >
                  <span className=" text-gray-500  m-auto group-hover:text-white group-focus:text-white">
                    {i + 1}
                  </span>
                </button>
              ))}
          </div>
          <button
            className="bg-orange-500 hover:bg-white hover:text-orange-500 active:bg-gray-500  w-full rounded-xl p-1 text-white font font-bold uppercase"
            onClick={() => submit()}
          >
            Submit
          </button>
        </>
      ) : (
        <>
          <img className="mx-auto" src={thanksImg} alt="" />
          <div className="bg-[#263037] rounded-xl w-fit flex mx-auto">
            <span className="text-sm text-orange-500 py-1 px-4 m-auto">
              {" "}
              You selected {rating} out of 5
            </span>
          </div>
          <h1 className="text-white font-bold text-2xl text-center">
            Thank You!
          </h1>
          <p className="text-center text-md text-gray-500">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </>
      )}
    </div>
  );
};

export default Rating;
