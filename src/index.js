import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Strategies from "./Components/pages/strategies";
import Positions from "./Components/pages/positions";
import Performance from "./Components/pages/performance";
import Logout from "./Components/pages/logout";
import Account from "./Components/pages/account";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/strategies",
    element: <Strategies />,
  },
  {
    path: "/positions",
    element: <Positions />,
  },
  {
    path: "/performance",
    element: <Performance />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/home",
    element: <Home />
  }
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);


