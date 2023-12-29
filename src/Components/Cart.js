import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImgUrl } from "../utils/Constatnt";
import { addItems, clearCart } from "../utils/cartSlice";
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();

  const handleAddItems = (items) => {
    dispatch(addItems(items));
  };

  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  return (
    <>
      <div>
        <div className="flex justify-center m-5">
          <button
            className="bg-orange-400 rounded-lg px-4"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
        {cart.map((items) => {
          return <ItemCard items={items} />;
        })}
      </div>
    </>
  );
};

export default Cart;

/*
        {cart.map((items) => {
          return (
            <div className="  w-6/12 ml-[250px] flex justify-between mb-5 ">
              <div className="pl-3 pt-2">
                <div className="font-semibold">{items.card.info.name}</div>
                <div className="pl-1">₹ {items.card.info.price / 100} </div>
              </div>
              <div className="">
                <img
                  src={ImgUrl + items.card.info.imageId}
                  className="h-[100px]"
                />

                <button
                  onClick={() => handleAddItems(items)}
                  className="absolute bg-blue-400 text-white border rounded-lg px-2"
                >
                  Add +
                </button>
              </div>
            </div>
          );
        })}*/
