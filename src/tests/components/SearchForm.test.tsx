import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/components/SearchForm";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("SearchForm", () => {
  it("Renders search input placeholder", () => {
    render(
      <BrowserRouter>
        <SearchForm
          search={"test"}
          setSearch={vi.fn()}
          getDataFromApi={vi.fn()}
        />
      </BrowserRouter>
    );
    screen.getByPlaceholderText("Find");
  });

  it("Renders search input value", () => {
    render(
      <BrowserRouter>
        <SearchForm
          search={"test"}
          setSearch={vi.fn()}
          getDataFromApi={vi.fn()}
        />
      </BrowserRouter>
    );
    screen.getByDisplayValue("test");
  });
});
