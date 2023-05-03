import React from "react";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

const store = setupStore();

describe("HomePage", () => {
  it("HomePage", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    );
    const elements = screen.getAllByText(/Home/i);
    expect(elements[1]).toBeVisible();
    expect(elements[1]).toHaveTextContent("Home");
  });
});
