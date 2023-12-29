import React from "react";
import { MenuApi } from "../utils/Constatnt";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useRestaurantMenu = () => {
  const resId = useParams();
  const [menuTop, setMenuTop] = useState([]);
  const [titleTop, setTitleTop] = useState();
  const [catogory, setCatogory] = useState([]);

  const fetchData = async () => {
    const data = await fetch(MenuApi + resId.resId);
    const JsonData = await data.json();
    setTitleTop(
      JsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.title
    );
    setMenuTop(
      JsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.carousel
    );

    const finalCatogory =
      (JsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
        (items) =>
          items?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setCatogory(finalCatogory);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { menuTop, titleTop, catogory };
};
