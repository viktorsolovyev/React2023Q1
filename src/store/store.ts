import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import searchReducer from "./reducers/SearchSlice";
import cardsReducer from "./reducers/CardsSlice";
import { rickAndMortyApi } from "../services/rickandmorty/rickandmorty.service";

const rootReducer = combineReducers({
  search: searchReducer,
  cards: cardsReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rickAndMortyApi.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
