import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Form from "../../components/forms/Form";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Form", () => {
  const addCardFunc = vi.fn();

  it("Renders Email", () => {
    render(
      <BrowserRouter>
        <Form addCardFunc={addCardFunc} />
      </BrowserRouter>
    );
    const elements = screen.getAllByRole("heading", { level: 6 });
    expect(elements[0]).toBeVisible();
    expect(elements[0]).toHaveTextContent("Email");
  });

  it("Renders Birthday", () => {
    render(
      <BrowserRouter>
        <Form addCardFunc={addCardFunc} />
      </BrowserRouter>
    );
    const elements = screen.getAllByRole("heading", { level: 6 });
    expect(elements[1]).toBeVisible();
    expect(elements[1]).toHaveTextContent("Birthday");
  });
});
