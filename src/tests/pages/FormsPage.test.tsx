import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import FormsPage from "../../pages/FormsPage";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

const store = setupStore();

describe("FormsPage", () => {
  it("Renders FormsPage", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormsPage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Female/i)).toHaveTextContent("Female");
  });
});
