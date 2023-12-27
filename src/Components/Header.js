import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header flex justify-between bg-orange-100 h-[150px] shadow-lg">
      <div className="logo-vala flex w-4/12">
        <Link to="/">
          <div className="w-[200px] h-[200px]">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" />
          </div>
        </Link>
        <div className="ml-10 flex items-center">Location 📍</div>
      </div>
      <div className="list-vala flex items-center w-8/12 justify-end pr-20">
        <div className="pl-10">
          <input type="text" className="rounded-lg" />
          <button>🔎</button>{" "} 
        </div>
        <Link to="/instamart">
          <div className="pl-10">Instamart</div>
        </Link>
        <div className="pl-10">
          <button className="border bg-orange-500 text-white rounded-lg px-5 py-1">
            Login
          </button>
        </div>
        <Link to="/cart">
          <div className="pl-10">Cart 🛒</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
