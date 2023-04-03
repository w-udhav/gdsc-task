import React from "react";

export default function Gallery() {
  return (
    <div className="grid grid-cols-sample h-full">
      <div className="col-span-2">
        <img
          src={require("../../../Assets/hero-section/h1.png")}
          alt="h1"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="col-span-1 relative">
        <img
          src={require("../../../Assets/hero-section/h2.png")}
          alt="h2"
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute -top-12 -left-28 -rotate-[20deg] bg-black rounded-full w-[170px] h-28 p-2 flex items-center justify-center col-span-1 arrow1">
          <img
            src={require("../../../Assets/hero-section/love.png")}
            alt="pencil"
            className="rotate-[19deg] w-20"
          />
        </div>
      </div>
      <div className="bg-primary rounded-full flex items-center justify-center col-span-1">
        <img
          src={require("../../../Assets/hero-section/pencil.svg").default}
          alt="pencil"
        />
      </div>
      <div className="col-span-2">
        <img
          src={require("../../../Assets/hero-section/h3.png")}
          alt="h3"
          className="w-full max-h-full object-cover"
        />
      </div>
      <div className="col-span-1 relative">
        <img
          src={require("../../../Assets/hero-section/h4.png")}
          alt="h4"
          className="w-full max-h-full"
        />
        <div className="absolute -top-14 -right-32 rotate-[20deg] bg-black rounded-full w-[180px] h-28 p-2 flex items-center justify-center col-span-1 arrow2">
          <img
            src={require("../../../Assets/hero-section/hand.png")}
            alt="hamd emoji"
            className="-rotate-[19deg] w-20"
          />
        </div>
      </div>
      <div className="flex col-span-2 w-full">
        <div className="bg-side1 rounded-full w-full flex items-center justify-center">
          <img
            src={require("../../../Assets/hero-section/code.svg").default}
            alt="coder"
            className=""
          />
        </div>
        <div className="bg-side2 rounded-full w-full flex items-center justify-center">
          <img
            src={require("../../../Assets/hero-section/crown.svg").default}
            alt="crown"
          />
        </div>
      </div>
    </div>
  );
}
