import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurandCard from "./components/RestaurantCard.js";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useViewTransitionState,
} from "react-router-dom";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Error from "./components/ErrorComponent.js";
import RestaurantMenu from "./components/RestrurantMenu.js";
import UserContext from "./utils/UserContext.js";

const Grocery = lazy(() => import("./components/Grocery.js"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Tony Starc",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName ,setUserName }}>
      <div className="app">
      <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
