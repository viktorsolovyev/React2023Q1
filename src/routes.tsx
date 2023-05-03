import React from "react";
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
        path: "forms",
        element: <FormsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
