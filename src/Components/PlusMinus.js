import React from "react";
import { useState } from "react";

const PlusMinus = () => {
  const [index, setIndex] = useState(1);
  const minus = () => {
    if (index === 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };
  const plus = () => {
    setIndex(index + 1);
  };
  return (
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
  );
};

export default PlusMinus;
