import fetch from "cross-fetch";

export const BASE_URL = "https://rickandmortyapi.com/api/";

export async function fetchCharacterById(id: number) {
  return (await fetch(`${BASE_URL}character/${id}`)).json();
}

export async function fetchCharactersByName(name: string) {
  return (await fetch(`${BASE_URL}character/?name=${name}`)).json();
}
