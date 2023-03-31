import React from "react";

export default function Hero() {
  return (
    <div className="min-h-[92vh] w-full border border-black flex h-full items-center">
      {/* left */}
      <div className="flex-1">
        <div className="w-[65%] flex flex-col gap-10">
          <h1 className="text-8xl font-semibold leading-[110px] font-var">
            We Take
            <br />
            Care Of
            <br />
            Your Brand
          </h1>

          <p className="text-lg w-[80%] text-gray-600">
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="px-4 bg-zinc-50 rounded-full text-xl flex-1 outline-none focus:bg-primary focus:bg-opacity-10 placeholder:text-lg transition-all"
            />
            <button className="flex-2 px-6 py-4 bg-primary text-white rounded-full hover:bg-blue-900 transition-all">
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex-1">
        <div className="grid grid-cols-3 border border-black h-full ">
          <img
            src={require("../../Assets/hero-section/h1.png")}
            alt="h1"
            className="col-span-2"
          />
          <img
            src={require("../../Assets/hero-section/h2.png")}
            alt="h2"
            className="col-span-1"
          />
          <div className="bg-primary rounded-full flex items-center justify-center col-span-1">
            <img
              src={require("../../Assets/hero-section/pencil.svg").default}
              alt="pencil"
            />
          </div>
          <img
            src={require("../../Assets/hero-section/h3.png")}
            alt="h3"
            className="col-span-2"
          />
          <img
            src={require("../../Assets/hero-section/h4.png")}
            alt="h4"
            className="col-span-1"
          />
          <div className="bg-side1 rounded-full flex items-center justify-center col-span-1">
            <img
              src={require("../../Assets/hero-section/code.svg").default}
              alt="coder"
            />
          </div>
          <div className="bg-side2 rounded-full flex items-center justify-center col-span-1">
            <img
              src={require("../../Assets/hero-section/crown.svg").default}
              alt="crown"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
