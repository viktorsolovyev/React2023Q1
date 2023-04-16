import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRickAndMortyCharacter } from "types/types";
import { RootState } from "../store";

type CharactersState = {
  characters: TRickAndMortyCharacter[];
};

const initialState: CharactersState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    changeСharacters(state, action: PayloadAction<TRickAndMortyCharacter[]>) {
      state.characters = action.payload;
    },
  },
});

export default charactersSlice.reducer;
export const getСharacters = (state: RootState) => state.characters.characters;
export const { changeСharacters } = charactersSlice.actions;
