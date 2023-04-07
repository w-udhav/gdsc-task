import React from "react";

const details = [
  {
    id: 1,
    head: "245%",
    para: (
      <p>
        More revenues for
        <br />
        the brand
      </p>
    ),
  },
  {
    id: 2,
    head: "130K+",
    para: (
      <p>
        Audiences reached
        <br />
        across platform
      </p>
    ),
  },
  {
    id: 3,
    head: "50+",
    para: <p>Brands work with us</p>,
  },
  {
    id: 4,
    head: "24+",
    para: (
      <p>
        Use This Section To
        <br />
        Describe Your
      </p>
    ),
  },
];

export default function Commitments() {
  return (
    <div className="py-24 flex">
      <div className="flex-1 grid grid-cols-2 grid-flow-row gap-10">
        {details.map((item) => {
          return (
            <div className="flex flex-col space-y-2">
              <h1 className="font-semibold font-var text-6xl"> {item.head} </h1>
              <div className="text-gray-500">{item.para}</div>
            </div>
          );
        })}
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-semibold"> Our Commitments </h1>
          <p className="text-justify text-gray-500 text-xl">
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business. Use this section to describe your company and
            the products you offer. You could share your company’s story and
            details about why you are in business.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-primary text-lg font-semibold underline underline-offset-2">
            Learn More
          </p>
          <img
            src={require("../../Assets/msc/arrow_right.svg").default}
            alt="right_arrow"
          />
        </div>
      </div>
    </div>
  );
}
