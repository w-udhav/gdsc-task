import React from "react";
import Gallery from "./Components/Gallery";
import NewGallery from "./Components/NewGallery";

export default function Hero() {
  return (
    <div className="min-h-[90vh] mt-5 w-full flex flex-col xl:flex-row h-full items-center">
      {/* left */}
      <div className="flex-1">
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="text-8xl font-semibold leading-[110px] font-var">
            We Take
            <br />
            Care Of
            <br />
            Your Brand
          </h1>

          <p className="text-lg text-gray-600 leading-[30px] capitalize">
            Use this section to describe your company and the <br />
            products you offer. You could share your company’s <br />
            story and details about why you are in business.
          </p>

          <div className="flex gap-2 w-[80%]">
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
      <div className="flex-1 flex xl:justify-end py-14">
        <NewGallery />
      </div>
    </div>
  );
}
