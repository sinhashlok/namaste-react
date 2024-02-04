import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Assets
import { LOGO_URL } from "../utils/constants";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState(false);
  const online = useOnlineStaus();
  const { loggedIn } = useContext(UserContext);
  // Subscribe to the cart state using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between my-4 mx-8 text-lg font-semibold">
      <div className="logo-container">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img className="w-32 max-md:w-12" src={LOGO_URL} alt="foody-logo" />
        </Link>
      </div>
      <div className="flex items-center max-md:hidden">
        <ul className="flex items-center">
          <li className="mx-6">Online Status: {online ? "✅" : "❌"}</li>
          <li className="mx-6 text-slate-400 hover:text-black transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-6 text-slate-400 hover:text-black transition-all">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-6 text-slate-400 hover:text-black transition-all">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-6 text-slate-400 hover:text-black transition-all">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-6 text-2xl cursor-pointer flex items-center">
            <Link to="/cart">
              🛒{" "}
              <span className="mx-1 text-[16px] text-slate-700">
                ({cartItems.length} items)
              </span>
            </Link>
          </li>
          <li className="mx-6 text-slate-300 hover:text-black transition-all">
            <button
              className="bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-600 transition-all"
              onClick={() => setLogin(!login)}
            >
              {login ? "Logout" : "Login"}
            </button>
          </li>

          <li className="mx-6 text-black">{loggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
