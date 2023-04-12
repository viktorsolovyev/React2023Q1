const BASE_URL = "https://rickandmortyapi.com/api/";

export async function fetchCharacterById(id: number) {
  return (await fetch(`${BASE_URL}character/${id}`)).json();
}

export async function fetchCharactersByName(name: string) {
  return (await await fetch(`${BASE_URL}character/?name=${name}`)).json();
}

// export async function createTodo({ token, todo }) {
//   return (
//     await fetch(BASE_URL, {
//       method: "POST",
//       body: JSON.stringify(todo),
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     })
//   ).json();
// }
