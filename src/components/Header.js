import { LOGO_URL } from "../utils/constants.js";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js"
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";



const Header = () => {
  const checkOnline = useOnlineStatus();
  // let button = "LOGIN"
  const data = useContext(UserContext)
  // console.log(data)
  const [loginButton, setloginButton] = useState("LOGIN")

  const cart = useSelector((store) => store.cart.items)
  console.log(cart)
  
    return (
<div className="flex justify-between bg-pink-400 shadow-lg mb-5 sm:bg-yellow-300 sticky top-0 z-50">
<div>
          <img
            className="w-[100px]"
            src={LOGO_URL}

          />
        </div>
        <div className="font-bold">
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
            <li  className="text-red-800 flex  gap-3">
             <Link to='/cart'>Cart</Link>
            <span>({cart.length})</span>
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
            <li className="font-bold">
              {data.loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;