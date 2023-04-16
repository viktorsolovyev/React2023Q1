import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchSlice";
import charactersReducer from "./reducers/CharactersSlice";
import cardsReducer from "./reducers/CardsSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    characters: charactersReducer,
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
