import React from "react";
import qr from "../images/image-qr-code.png";

const QrCode = () => {
  return (
    <div className="w-[400px] h-[600px] bg-white m-auto rounded-xl p-4 space-y-8">
      <div className="h-[60%]">
        <img
          src={qr}
          alt=""
          className="object-cover h-full w-full rounded-xl"
        />
      </div>
      <h1 className="text-center text-3xl font-bold">Improve your front-end skills by building projects</h1>
      <p className="text-center text-lg text-gray-500">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QrCode;
