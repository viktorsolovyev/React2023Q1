import { describe, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Modal from "../components/Modal/Modal";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";

const store = setupStore();

describe("Modal", () => {
  it("Renders modal with character 1", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal id={1} modalActive={true} setModalActive={vi.fn()}></Modal>
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      const element = screen.getByText(/Rick Sanchez/i);
      expect(element).toBeVisible();
      expect(element).toHaveTextContent("Rick Sanchez");
    });
  });
});
