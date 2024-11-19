import { LOGO_URL } from "../utils/constants.js";
import { useState} from "react";
import { Link } from "react-router-dom";
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <button className="login-logout-btn" onClick={()=>{
              loginButton==="LOGIN"? setloginButton("LOGOUT") : setloginButton("LOGIN")
              // console.log(loginButton);
            }}>{loginButton}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;