import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CardItem from "../../components/components/CardItem/CardItem";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("CardItem", () => {
  const character = {
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
  };

  it("Renders name card", () => {
    render(
      <BrowserRouter>
        <CardItem character={character} fullInfo={true} />
      </BrowserRouter>
    );
    const elements = screen.getAllByRole("heading", { level: 3 });
    expect(elements[0]).toBeVisible();
    expect(elements[0]).toHaveTextContent("Rick Sanchez");
  });

  it("Renders gender card", () => {
    render(
      <BrowserRouter>
        <CardItem character={character} fullInfo={true} />
      </BrowserRouter>
    );
    const elements = screen.getAllByRole("heading", { level: 3 });
    expect(elements[1]).toBeVisible();
    expect(elements[1]).toHaveTextContent("Male");
  });

  it("Renders image card", () => {
    render(
      <BrowserRouter>
        <CardItem character={character} fullInfo={true} />
      </BrowserRouter>
    );
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeVisible();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );
  });
});
