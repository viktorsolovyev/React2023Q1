import fetch from "cross-fetch";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TRickAndMortyCharacter,
  TRickAndMortyCharacterResponse,
} from "types/types";

export const BASE_URL = "https://rickandmortyapi.com/api/";

export async function fetchCharacterById(id: number) {
  return (await fetch(`${BASE_URL}character/${id}`)).json();
}

export async function fetchCharactersByName(name: string) {
  return (await fetch(`${BASE_URL}character/?name=${name}`)).json();
}

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
