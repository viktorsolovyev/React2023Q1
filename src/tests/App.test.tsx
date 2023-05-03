import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("Renders App", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.findByText(""));
  });
});
