import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
const Header = () => {
  // let button = "LOGIN"
  const [loginButton, setloginButton] = useState("LOGIN")
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}

          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="login-logout-btn" onClick={()=>{
              setloginButton("LOGOUT")
              console.log(loginButton);
            }}>{loginButton}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;