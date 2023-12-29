import React from "react";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import TopPicks from "./TopPicks";
import Simmer from "./Simmer";
import AccorCategory from "./AccorCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { menuTop, titleTop, catogory } = useRestaurantMenu();
  const [ind, setInd] = useState(0);

  return (
    <>
      {menuTop && titleTop ? (
        <div>
          <div className="text-center text-2xl font-bold py-4 shadow-lg">
            {titleTop}
          </div>
          <div className="flex flex-wrap mt-3">
            {menuTop.map((items) => {
              return <TopPicks items={items} />;
            })}
          </div>
          <div className="catagory">
            {catogory.map((items, index) => {
              return (
                <AccorCategory
                  items={items}
                  index={index}
                  Index={ind === index ? true : false}
                  setIndex={(index) => {
                    setInd(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Simmer />
      )}
    </>
  );
};

export default RestaurantMenu;
