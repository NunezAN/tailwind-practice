import React, { useState } from "react";
import womanMobile from "../images/illustration-woman-online-mobile.svg";
import shadowMobile from "../images/bg-pattern-mobile.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const handleOnChange = (num) => {
    if (num == 1) {
      setIsChecked1(!isChecked1);
    } else if (num == 2) {
      setIsChecked2(!isChecked2);
    } else if (num == 3) {
      setIsChecked3(!isChecked3);
    } else if (num == 4) {
      setIsChecked4(!isChecked4);
    } else if (num == 5) {
      setIsChecked5(!isChecked5);
    }
  };
  return (
    <div className="px-6 py-12 w-[420px] m-auto relative bg-white rounded-3xl ">
      <img
        className="absolute top-[-135px] left-1/2 transform -translate-x-1/2 z-20 w-[300px]"
        src={womanMobile}
        alt=""
      />
      <img
        src={shadowMobile}
        alt=""
        className="absolute w-[300px] top-[0px] left-1/2 transform -translate-x-1/2"
      />
      <h1 className="font-bold text-center text-5xl mt-[120px]">FAQ</h1>
      <div className="space-y-8">
        <div className="flex flex-col mt-8 border-b-2 w-full">
          <div className="flex justify-between">
            <span className="text-lg text-gray-700 w-[85%]">
              How many team members can I invite?
            </span>
            <div className="relative">
              <input
                className="cursor-pointer opacity-0 w-8 h-8 z-50 peer/1 "
                type="checkbox"
                id="checkbox1"
                checked={isChecked1}
                onChange={() => handleOnChange(1)}
              ></input>
              <label
                for="checkbox1"
                className="absolute opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-orange-500 peer-checked/1:rotate-180 cursor-pointer"
              >
                <FontAwesomeIcon icon={faChevronDown} className="" />
              </label>
            </div>
          </div>
          {isChecked1 && (
            <span className="text-gray-500 w-[85%]">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </span>
          )}
        </div>
        <div className="flex flex-col mt-8 border-b-2 w-full">
          <div className="flex justify-between">
            <span className="text-lg text-gray-700 w-[85%]">
              What is the maximum file upload size?
            </span>
            <div className="relative">
              <input
                className="cursor-pointer opacity-0 w-8 h-8 z-50 peer/2 "
                type="checkbox"
                id="checkbox2"
                checked={isChecked2}
                onChange={() => handleOnChange(2)}
              ></input>
              <label
                for="checkbox2"
                className="absolute opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-orange-500 peer-checked/2:rotate-180 cursor-pointer"
              >
                <FontAwesomeIcon icon={faChevronDown} className="" />
              </label>
            </div>
          </div>
          {isChecked2 && (
            <span className="text-gray-500 w-[85%]">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </span>
          )}
        </div>
        <div className="flex flex-col mt-8 border-b-2 w-full">
          <div className="flex justify-between">
            <span className="text-lg text-gray-700 w-[85%]">
              How do I reset my password?
            </span>
            <div className="relative">
              <input
                className="cursor-pointer opacity-0 w-8 h-8 z-50 peer/1 "
                type="checkbox"
                id="checkbox3"
                checked={isChecked3}
                onChange={() => handleOnChange(3)}
              ></input>
              <label
                for="checkbox3"
                className="absolute opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-orange-500 peer-checked/1:rotate-180 cursor-pointer"
              >
                <FontAwesomeIcon icon={faChevronDown} className="" />
              </label>
            </div>
          </div>
          {isChecked3 && (
            <span className="text-gray-500 w-[85%]">
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </span>
          )}
        </div>
        <div className="flex flex-col mt-8 border-b-2 w-full">
          <div className="flex justify-between">
            <span className="text-lg text-gray-700 w-[85%]">
              Can I cancel my subscription?
            </span>
            <div className="relative">
              <input
                className="cursor-pointer opacity-0 w-8 h-8 z-50 peer/1 "
                type="checkbox"
                id="checkbox4"
                checked={isChecked4}
                onChange={() => handleOnChange(4)}
              ></input>
              <label
                for="checkbox4"
                className="absolute opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-orange-500 peer-checked/1:rotate-180 cursor-pointer"
              >
                <FontAwesomeIcon icon={faChevronDown} className="" />
              </label>
            </div>
          </div>
          {isChecked4 && (
            <span className="text-gray-500 w-[85%]">
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </span>
          )}
        </div>
        <div className="flex flex-col mt-8 border-b-2 w-full">
          <div className="flex justify-between">
            <span className="text-lg text-gray-700 w-[85%]">
              Do you provide additional support?
            </span>
            <div className="relative">
              <input
                className="cursor-pointer opacity-0 w-8 h-8 z-50 peer/5"
                type="checkbox"
                id="checkbox5"
                checked={isChecked5}
                onChange={() => handleOnChange(5)}
              ></input>
              <label
                for="checkbox5"
                className="absolute opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-orange-500 peer-checked/5:rotate-180 cursor-pointer"
              >
                <FontAwesomeIcon icon={faChevronDown} className="" />
              </label>
            </div>
          </div>
          {isChecked5 && (
            <span className="text-gray-500 w-[85%]">
              Do you provide additional support? Chat and email support is
              available 24/7. Phone lines are open during normal business hours.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
