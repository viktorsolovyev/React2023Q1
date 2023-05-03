import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CardList from "../../components/components/CardList/CardList";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("CardList", () => {
  const characters = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
  ];
  it("Renders 2 cards", () => {
    render(
      <BrowserRouter>
        <CardList
          characters={characters}
          setCurrentId={vi.fn()}
          setModalActive={vi.fn()}
        />
      </BrowserRouter>
    );
    const countCards = screen.getAllByRole("listitem").length;
    expect(countCards).toEqual(2);
  });
});
