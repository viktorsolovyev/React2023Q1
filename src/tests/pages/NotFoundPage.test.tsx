import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFoundPage from "../../pages/NotFoundPage";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("NotFoundPage", () => {
  it("Renders NotFoundPage", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Page not found");
  });
});
