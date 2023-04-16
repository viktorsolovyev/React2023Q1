import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFormCard } from "types/types";
import { RootState } from "../store";

type CardsState = {
  cards: TFormCard[];
};

const initialState: CardsState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    changeCards(state, action: PayloadAction<TFormCard[]>) {
      state.cards = action.payload;
    },
  },
});

export default cardsSlice.reducer;
export const getСards = (state: RootState) => state.cards.cards;
export const { changeCards } = cardsSlice.actions;
