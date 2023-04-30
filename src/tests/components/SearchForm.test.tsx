import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/components/SearchForm";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

const store = setupStore({ search: { search: "test" } });

describe("SearchForm", () => {
  it("Renders search input placeholder", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchForm />
        </BrowserRouter>
      </Provider>
    );
    screen.getByPlaceholderText("Find");
  });

  it("Renders search input value", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchForm />
        </BrowserRouter>
      </Provider>
    );
    screen.getByDisplayValue("test");
  });
});
