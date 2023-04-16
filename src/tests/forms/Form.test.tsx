import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Form from "../../components/forms/Form";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

const store = setupStore();
describe("Form", () => {
  it("Renders Email", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );
    const elements = screen.getAllByRole("heading", { level: 6 });
    expect(elements[0]).toBeVisible();
    expect(elements[0]).toHaveTextContent("Email");
  });

  it("Renders Birthday", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );
    const elements = screen.getAllByRole("heading", { level: 6 });
    expect(elements[1]).toBeVisible();
    expect(elements[1]).toHaveTextContent("Birthday");
  });

  it("Renders Country", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );
    const elements = screen.getAllByRole("heading", { level: 6 });
    expect(elements[2]).toBeVisible();
    expect(elements[2]).toHaveTextContent("Country");
  });

  it("Renders picture", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );
    const elements = screen.getAllByRole("heading", { level: 6 });
    expect(elements[3]).toBeVisible();
    expect(elements[3]).toHaveTextContent("picture");
  });
});
