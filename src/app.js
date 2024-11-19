import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurandCard from "./components/RestaurantCard.js";
import { createBrowserRouter,RouterProvider , Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Error from "./components/ErrorComponent.js";
import RestaurantMenu from "./components/restrurantMenu.js";

const AppLayout = () => {
  return (
    <div className="app">
      {Header()}
      <Outlet/>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path:"/",
    element : <AppLayout/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu/>
      }
    ],
    errorElement : <Error/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);


