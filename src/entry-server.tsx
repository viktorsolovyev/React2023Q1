import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
// import App from "./App";
import HomePage from "../src/pages/HomePage";
import { setupStore } from "./store/store";
import { rickAndMortyApi } from "../src/services/rickandmorty/rickandmorty.service";

export const render = async (url: string, options: object) => {
  const store = setupStore();
  await store.dispatch(
    rickAndMortyApi.endpoints.getCharactersByName.initiate("")
  );
  await Promise.all(
    store.dispatch(rickAndMortyApi.util.getRunningQueriesThunk())
  );

  return [
    ReactDOMServer.renderToPipeableStream(
      <StaticRouter location={url}>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </StaticRouter>,
      options
    ),
    store,
  ];
};
