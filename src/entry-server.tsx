import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import type { Response } from "express";
// import App from "./App";
import HomePage from "../src/pages/HomePage";
import { setupStore, RootState } from "./store/store";
import { rickAndMortyApi } from "../src/services/rickandmorty/rickandmorty.service";

export const render = async (url: string, res: Response) => {
  const store = setupStore();
  await store.dispatch(
    rickAndMortyApi.endpoints.getCharactersByName.initiate("")
  );
  await Promise.all(
    store.dispatch(rickAndMortyApi.util.getRunningQueriesThunk())
  );
  const initialState = store.getState();
  console.log(initialState.rickAndMortyApi.queries);

  const stream = ReactDOMServer.renderToPipeableStream(
    <Document
      html={
        <Provider store={store}>
          <StaticRouter location={url}>
            <HomePage />
          </StaticRouter>
        </Provider>
      }
      preloadedState={initialState}
    />,
    {
      onShellReady: () => {
        stream.pipe(res);
      },
      onAllReady: () => {
        store.dispatch(rickAndMortyApi.util.resetApiState());
        res.end();
      },
    }
  );
};

type DocumentProps = {
  html: React.ReactElement;
  preloadedState: RootState;
};

const Document: React.FC<DocumentProps> = ({ html, preloadedState }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="root">{html}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(
              preloadedState
            ).replace(/</g, "\\u003c")}`,
          }}
        ></script>
        <script type="module" src="/src/entry-client.tsx"></script>
      </body>
    </html>
  );
};

// export const render = async (url: string, options: object) => {
//   const store = setupStore();

//   store.dispatch(rickAndMortyApi.endpoints.getCharactersByName.initiate(""));
//   await Promise.all(
//     store.dispatch(rickAndMortyApi.util.getRunningQueriesThunk())
//   );

//   return [
//     ReactDOMServer.renderToPipeableStream(
//       <StaticRouter location={url}>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </StaticRouter>,
//       options
//     ),
//     store,
//   ];
// };
