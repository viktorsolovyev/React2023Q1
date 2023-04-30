import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./styles/normalize.css";
import "./styles/global.css";
import { Provider } from "react-redux";
import { setupStore, RootState } from "./store/store";

declare global {
  interface Window {
    __PRELOADED_STATE__: RootState | undefined;
  }
}

const store = setupStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

const router = createBrowserRouter(routes);

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
