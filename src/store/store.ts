import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchSlice";
import cardsReducer from "./reducers/CardsSlice";
import { rickAndMortyApi } from "../services/rickandmorty/rickandmorty.service";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cards: cardsReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
