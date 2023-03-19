import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("Renders header with label Home", () => {
    render(
      <BrowserRouter>
        <Header label="Home" />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Home");
  });
});
