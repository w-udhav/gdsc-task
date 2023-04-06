import React from "react";
import CompanyList from "./Components/CompanyList";

export default function Companies() {
  return (
    <div className="bg-sectionGray">
      <div className="px-24 py-24">
        {/* Top Portion */}
        <div className="flex gap-20 items-center">
          <h1 className="font-semibold leading-[55px] font-var text-5xl text-zinc-900">
            Companies
            <br />
            We Work With
          </h1>
          <p className="flex-1 text-lg leading-[30px] capitalize">
            Use this section to describe your company and the <br />
            products you offer. You could share your company’s <br />
            story and details about why you are in business.
          </p>
        </div>

        {/* Bottom Portion */}
        <div>
          <CompanyList />
        </div>
      </div>
    </div>
  );
}
