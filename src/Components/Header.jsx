import React, { useState } from "react";

// Assets
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="foody-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => setLogin(!login)}>{login ? "Logout" : "Login"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
