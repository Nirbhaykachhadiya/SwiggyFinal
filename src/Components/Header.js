import { useContext } from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import { useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((store) => store.cart.items);
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const [signOne, setSignOne] = useState(true);
  const [signTwo, setSignTwo] = useState(true);

  const setWet = (id) => {
    if (id === "one") {
      setSignTwo(false);
    }
    if (id === "two") {
      setSignTwo(true);
      setSignOne(false);
    }
    if (id == "three") {
      setSignOne(true);
    }
  };

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
          <div className="pl-10 underline">Instamart</div>
        </Link>
        {/*for log in logout functionalaity */}
        <div className="pl-10">
          {signOne && signTwo ? (
            <button
              onClick={() => setWet("one")}
              className="border bg-orange-500 text-white rounded-lg px-5 py-1"
            >
              Login
            </button>
          ) : (
            ""
          )}
          {signOne && !signTwo ? <GoogleLoginButton setWet={setWet} /> : ""}

          {!signOne && signTwo ? (
            <>
              <button
                onClick={() => setWet("three")}
                className="border bg-orange-500 text-white rounded-lg px-5 py-1"
              >
                LogOut
              </button>
              <div className="pt-2 text-xl font-semibold underline ">
                welcome {loggedInUser}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <Link to="/cart">
          <div className="pl-10"> Cart 🛒({cart.length})</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
