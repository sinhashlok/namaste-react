import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import UserContext from "./utils/UserContext";
import appStore from "./utils/store/appStore";

// Components
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Cart from "./Components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState("Default User");

  useEffect(() => {
    setUserName("Shlok Sinha");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedIn: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
