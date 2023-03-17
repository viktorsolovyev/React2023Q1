import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/global.css";
import AboutPage from "./pages/AboutPage";

// import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
// *,
// *::before,
// *::after {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   min-height: 100vh;
//   background: radial-gradient(yellow, orange);
//   display: grid;
//   place-content: center;
//   text-align: center;
// }
// `;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "dashboard",
      //   element: <Home />,
      // },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
