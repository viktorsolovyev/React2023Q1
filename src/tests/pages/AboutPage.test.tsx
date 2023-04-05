import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "../../pages/AboutPage";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("AboutPage", () => {
  it("Renders AboutPage", () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/This is about page!/i)).toHaveTextContent(
      "This is about page!"
    );
  });
});
