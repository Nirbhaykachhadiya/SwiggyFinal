import React from "react";

import HomeRestaurant from "./HomeRestaurant";
import { useHomeRestaurant } from "../utils/useHomeRestaurant";
import Simmer from "./Simmer";

const HomeBody = () => {
  const { head, restaurant } = useHomeRestaurant();

  return (
    <>
      {restaurant.length == 0 ? (
        <Simmer />
      ) : (
        <>
          <div className="font-bold text-2xl text-center pt-5 pb-5 shadow-xl">
            {head.toUpperCase().replaceAll("_", " ")}
          </div>
          <div className="flex flex-wrap">
            {restaurant.map((items) => {
              return (
                <>
                  <HomeRestaurant items={items} key={items.info.id} />
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default HomeBody;
