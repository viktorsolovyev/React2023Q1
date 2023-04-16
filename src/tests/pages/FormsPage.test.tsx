import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import FormsPage from "../../pages/FormsPage";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("FormsPage", () => {
  it("Renders FormsPage", () => {
    render(
      <BrowserRouter>
        <FormsPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/Female/i)).toHaveTextContent("Female");
  });
});
