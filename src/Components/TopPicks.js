import React from "react";
import { ImgTopUrl } from "../utils/Constatnt";
import { useState } from "react";
import PlusMinus from "./PlusMinus";

const TopPicks = ({ items }) => {
  const [indx, setIndx] = useState(false);

  return (
    <>
      <div className="main w-[300px] px-4 py-2">
        <div className="text-center text-xl font-semibold h-[85px]">
          {items.title}
        </div>
        <div>
          <img src={ImgTopUrl + items.creativeId} />
        </div>
        <div className="text-center text-l font-semibold">
          Price : {items.dish.info.price / 100} Rupees
        </div>
        <div className="flex justify-center">
          {!indx ? (
            <button
              onClick={() => setIndx(true)}
              className="border bg-black text-white rounded-lg px-4 py-1"
            >
              Add +
            </button>
          ) : (
            <PlusMinus />
          )}
        </div>
      </div>
    </>
  );
};

export default TopPicks;
