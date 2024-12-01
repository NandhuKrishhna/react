import { LOGO_URL } from "../utils/constants.js";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = () => {
  const checkOnline = useOnlineStatus();
  // let button = "LOGIN"
  const [loginButton, setloginButton] = useState("LOGIN")
  
    return (
      <div className="flex justify-between bg-pink-400 shadow-lg mb-5 sm:bg-yellow-300">
        <div>
          <img
            className="w-[100px]"
            src={LOGO_URL}

          />
        </div>
        <div className="nav-items">
          <ul className="flex gap-4 p-5 m-4  ">
            <li>
              Online Status : {checkOnline===true?"✅":"❌"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
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