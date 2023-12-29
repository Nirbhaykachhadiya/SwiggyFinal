import React, { useState } from "react";
import ItemCard from "./ItemCard";

const AccorCategory = ({ items, index, Index, setIndex }) => {
  const [toggle, setToggle] = useState(Index);

  return (
    <>
      <div className="flex w-6/12 justify-between ml-[250px] border shadow-lg bg-[#fofofo] mt-10">
        <div className="p-4 text-xl font-semibold">
          {items.card.card.title}
          {console.log(Index)}
        </div>
        <div className="flex items-center pr-5">
          <button
            onClick={() => {
              setToggle(!toggle);
              setIndex(index);
            }}
          >
            {toggle ? "🔼" : "🔽"}
          </button>
        </div>
      </div>
      {Index && toggle ? (
        <div>
          {items.card.card.itemCards.map((items) => {
            return <ItemCard items={items} />;
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AccorCategory;
