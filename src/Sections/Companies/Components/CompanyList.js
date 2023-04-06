import React from "react";
import Spotify, { Paypal } from "../../../Components/Icons";
import {
  Google,
  Uber,
  Microsoft,
  Shopify,
  Evernote,
  Adobe,
  Amazon,
  Asana,
} from "../../../Components/Icons";

const logoList = [
  {
    id: 1,
    logo: <Spotify />,
  },
  {
    id: 2,
    logo: <Google />,
  },
  {
    id: 3,
    logo: <Uber />,
  },
  {
    id: 4,
    logo: <Microsoft />,
  },
  {
    id: 5,
    logo: <Shopify />,
  },
  {
    id: 6,
    logo: <Evernote />,
  },
  {
    id: 7,
    logo: <Adobe />,
  },
  {
    id: 8,
    logo: <Paypal />,
  },
  {
    id: 9,
    logo: <Amazon />,
  },
  {
    id: 10,
    logo: <Asana />,
  },
];

export default function CompanyList() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-20 pt-20">
      {logoList.map((item) => {
        return <div key={item.id}>{item.logo}</div>;
      })}
    </div>
  );
}
