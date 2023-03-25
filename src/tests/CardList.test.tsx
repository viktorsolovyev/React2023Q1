import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CardList from "../components/components/CardList";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("CardList", () => {
  it("Renders 20 cards", () => {
    render(
      <BrowserRouter>
        <CardList />
      </BrowserRouter>
    );
    const countCards = screen.getAllByRole("listitem").length;
    expect(countCards).toEqual(20);
  });
});
