import React from "react";
import { Navigate } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import FormsPage from "./pages/FormsPage";

const routes = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "404",
        element: <NotFoundPage />,
      },
      {
        path: "forms",
        element: <FormsPage />,
      },
      {
        path: "*",
        element: <Navigate to="404" />,
      },
    ],
  },
];

export default routes;
