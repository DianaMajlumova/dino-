import React from "react";
import {createBrowserRouter} from "react-router-dom";
import AddPage from "../Pages/AddPage/AddPage";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/product/:id",
        element:<Product/>
      },
      {
        path: "/add",
        element:<AddPage/>
      },
  ]);

  export{router}