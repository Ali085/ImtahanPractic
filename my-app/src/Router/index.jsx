import React from "react";
import {createBrowserRouter} from "react-router-dom";
import AddPage from "../Pages/AddPage";
import Details from "../Pages/Details";
import Main from "../Pages/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
        path: "/details/:id",
        element: <Details/>,
      },
      {
        path: "/addpage",
        element: <AddPage/>,
      },
  ]);

  export default router