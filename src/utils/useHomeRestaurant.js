import React from "react";
import { useState, useEffect } from "react";
import { HomeRestUrl } from "../utils/Constatnt";

export const useHomeRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [head, setHead] = useState();

  const fetchData = async () => {
    const data = await fetch(HomeRestUrl);
    const finaljsonData = await data.json();
    setHead(finaljsonData?.data?.cards[1]?.card?.card?.id);
    setRestaurant(
      finaljsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { head, restaurant };
};
