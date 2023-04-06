import React from "react";
import "./style.css";

export default function NewGallery() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-[60%]">
          <img src={require("../../../Assets/hero-section/h1.png")} alt="h1" />
        </div>

        <div className="w-[40%]">
          <img src={require("../../../Assets/hero-section/h2.png")} alt="h2" />
        </div>
      </div>

      <div className="flex">
        <div className="bg-primary w-[40%] rounded-full flex items-center justify-center ">
          <img
            src={require("../../../Assets/hero-section/pencil.svg").default}
            alt="pencil"
          />
        </div>

        <div className="w-[60%]">
          <img src={require("../../../Assets/hero-section/h3.png")} alt="h3" />
        </div>
      </div>

      <div className="flex">
        <div className="relative w-[40%]">
          <img
            src={require("../../../Assets/hero-section/h4.png")}
            alt="h4"
            className="w-full"
          />
          <div className="absolute -top-14 -right-32 rotate-[20deg] bg-black rounded-full w-[180px] h-28 p-2 flex items-center justify-center col-span-1 arrow2">
            <img
              src={require("../../../Assets/hero-section/hand.png")}
              alt="hamd emoji"
              className="-rotate-[19deg] w-20"
            />
          </div>
        </div>
        <div className="bg-side1 rounded-full w-[30%] flex items-center justify-center">
          <img
            src={require("../../../Assets/hero-section/code.svg").default}
            alt="coder"
          />
        </div>

        <div className="bg-side2 rounded-full w-[30%] flex items-center justify-center">
          <img
            src={require("../../../Assets/hero-section/crown.svg").default}
            alt="crown"
          />
        </div>
      </div>
    </div>
  );
}
