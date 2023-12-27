import React from "react";
import { ImgUrl } from "../utils/Constatnt";

const HomeRestaurant = ({ items }) => {
  return (
    <div className="hover:cursor-pointer hover:bg-orange-100 w-3/12 pt-8 ">
      <div className="font-bold text-center text-xl">{items.info.name}</div>
      <div className="flex justify-center">
        {
          <img
            className="h-60 w-60 "
            src={ImgUrl + items.info.cloudinaryImageId}
          />
        }
      </div>
      <div className="text-center font-semibold">
        Area : {items.info.areaName}
      </div>
      <div className="text-center font-normal">
        Avg Rating : {items.info.avgRating} ✪
      </div>
    </div>
  );
};

export default HomeRestaurant;
