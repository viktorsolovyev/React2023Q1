import "whatwg-fetch";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TRickAndMortyCharacter,
  TRickAndMortyCharacterResponse,
} from "types/types";

export const BASE_URL = "https://rickandmortyapi.com/api/";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query<TRickAndMortyCharacterResponse, string>({
      query: (name) => `character/?name=${name}`,
    }),
    getCharactersById: builder.query<TRickAndMortyCharacter, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});
