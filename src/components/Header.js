import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect} from "react";
const Header = () => {
  // let button = "LOGIN"
  const [loginButton, setloginButton] = useState("LOGIN")
    console.log("Header render");
  
    useEffect(()=>{
      console.log("userEffect is called");
    },[])
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
              loginButton==="LOGIN"? setloginButton("LOGOUT") : setloginButton("LOGIN")
              // console.log(loginButton);
            }}>{loginButton}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;