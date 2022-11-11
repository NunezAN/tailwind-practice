import React, { useState } from "react";
import cardFront from "../images/CardDetailsForm/bg-card-front.png";
import cardBack from "../images/CardDetailsForm/bg-card-back.png";

const CardDetailsForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardMm, setCardMm] = useState("");
  const [cardYy, setCardYy] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [submitted, setSumbitted] = useState(false);
  function submitForm(event) {
    event.preventDefault();
    console.log(
      "submitted",
      cardName,
      cardNum,
      cardNum,
      cardMm,
      cardYy,
      cardCvc
    );
    setSumbitted(true);
  }
  return (
    <>
      {submitted ? (
        <div></div>
      ) : (
        <div className=" mx-auto w-screen max-w-xl">
          <div className="bg-black w-full h-[240px] relative">
            <div className="absolute w-[300px] top-4 right-[6%]">
              <img src={cardBack} alt="" />
              <span className="text-white absolute top-[70px] right-10 text-sm">
                {cardCvc.length === 0 ? "000" : cardCvc}
              </span>
            </div>
            <div className="absolute w-[300px] -bottom-8 left-[6%]">
              <img src={cardFront} alt="" />
            </div>
          </div>

          <form
            onSubmit={submitForm}
            className="flex flex-col space-y-4 p-4 mt-20"
          >
            <label className="text-md uppercase font-semibold">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Jane Appleseed"
              className="border px-2 py-1 rounded-md"
              value={cardName}
              required
              pattern="[a-zA-Z]+"
              onChange={(e) => setCardName(e.target.value)}
            />
            <label className="text-md uppercase font-semibold">
              Card Number
            </label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              className="border px-2 py-1 rounded-md"
              value={cardNum}
              required
              pattern="\d{16}"
              onChange={(e) => setCardNum(e.target.value.slice(0, 16))}
            />
            <div className="flex justify-between w-full space-x-2">
              <div className="flex flex-col w-[40%]">
                <label>Exp. Date (MM/YY)</label>
                <div className="flex justify-between w-full space-x-2">
                  <input
                    type="number"
                    placeholder="MM"
                    className="border px-2 py-1 rounded-md w-full"
                    value={cardMm}
                    min="1"
                    max="12"
                    required
                    onChange={(e) => setCardMm(e.target.value.slice(0, 2))}
                  />
                  <input
                    type="number"
                    placeholder="YY"
                    required
                    className="border px-2 py-1 rounded-md w-full"
                    value={cardYy}
                    onChange={(e) => setCardYy(e.target.value.slice(0, 2))}
                  />
                </div>
              </div>
              <div className="flex flex-col w-[60%]">
                <label>CVC</label>
                <input
                  type="number"
                  placeholder={"e.g. 123"}
                  className="border px-2 py-1 rounded-md w-full"
                  required
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value.slice(0, 3))}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-white text-2xl rounded-md py-2 text-center"
            >
              Confirm
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CardDetailsForm;
