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

const style = "w-40";

const logoList = [
  {
    id: 1,
    logo: <Spotify className={style} />,
  },
  {
    id: 2,
    logo: <Google className={style} />,
  },
  {
    id: 3,
    logo: <Uber className={style} />,
  },
  {
    id: 4,
    logo: <Microsoft className={style} />,
  },
  {
    id: 5,
    logo: <Shopify className={style} />,
  },
  {
    id: 6,
    logo: <Evernote className={style} />,
  },
  {
    id: 7,
    logo: <Adobe className={style} />,
  },
  {
    id: 8,
    logo: <Paypal className={style} />,
  },
  {
    id: 9,
    logo: <Amazon className={style} />,
  },
  {
    id: 10,
    logo: <Asana className={style} />,
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
