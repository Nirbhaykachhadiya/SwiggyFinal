import React from "react";
import { ImgUrl } from "../utils/Constatnt";
import { Link } from "react-router-dom";

const HomeRestaurant = ({ items }) => {
  return (
    <Link to={"/restaurant/" + items.info.id}>
      <div className="hover:cursor-pointer hover:bg-orange-100 px-4 py-3  w-[300px] pt-8 ">
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
    </Link>
  );
};

export default HomeRestaurant;
