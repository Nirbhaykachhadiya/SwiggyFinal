import React from "react";
import { ImgUrl } from "../utils/Constatnt";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
import { useState } from "react";
import PlusMinus from "./PlusMinus";

const ItemCard = ({ items }) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(1);
  const [indx, setIndx] = useState(false);

  const handleAddItems = () => {
    dispatch(addItems(items));
    setIndx(true);
  };
  const plus = () => {
    setIndex(index + 1);
    dispatch(addItems(items));
  };
  const minus = () => {
    if (index === 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
      dispatch(removeItems(items));
    }
  };

  return (
    <div className="  w-6/12 ml-[250px] flex justify-between mb-5 ">
      <div className="pl-3 pt-2">
        <div className="font-semibold">{items.card.info.name}</div>
        <div className="pl-1">₹ {items.card.info.price / 100} </div>
      </div>
      <div className="">
        <img src={ImgUrl + items.card.info.imageId} className="h-[100px]" />
        {!indx ? (
          <button
            onClick={handleAddItems}
            className="absolute bg-black text-white border rounded-lg px-2"
          >
            Add +
          </button>
        ) : (
          <div>
            <button
              className="px-2 py-1 rounded-md bg-black text-white "
              onClick={minus}
            >
              -
            </button>
            <button className="px-2 py-1 bg-black text-white ">{index}</button>
            <button
              className="px-2 py-1 rounded-md bg-black text-white "
              onClick={plus}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
