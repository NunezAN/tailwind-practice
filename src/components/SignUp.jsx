import React from "react";

const SignUp = () => {
  return (
    <div className="bg-red-400 w-full md:max-w-7xl flex flex-col justify-around p-5 md:mx-auto md:flex-row">
      <div className="space-y-8 text-center md:w-[50%] md:m-auto md:pr-4">
        <h1 className="text-4xl text-white font-bold md:text-5xl">
          Learn to code by watching others
        </h1>
        <p className="text-white text-md md:text-xl">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </p>
      </div>
      <div className="space-y-10 md:w-[50%] md:m-auto md:pl-4">
        <div className="bg-purple-700 text-center rounded-md px-[80px] py-4 shadow-xl">
          <span className="text-white">
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </span>
        </div>
        <form className="flex flex-col p-4 bg-white rounded-xl space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="border rounded p-2 placeholder:font-bold placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border rounded p-2 placeholder:font-bold placeholder:text-gray-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border rounded p-2 placeholder:font-bold placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="Password"
            className="border rounded p-2 placeholder:font-bold placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="bg-green-500 shadow-md shadow-green-600 text-white uppercase font-bold py-2 px-18"
          >
            Claim your free trial{" "}
          </button>
          <span className="text-gray-400 px-5 text-center text-sm">
            By clicking the button, you are agreeing to our{" "}
            <span className="font-bold text-orange-500">Terms and Services</span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
