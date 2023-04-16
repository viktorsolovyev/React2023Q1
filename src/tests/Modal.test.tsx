import { describe, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Modal from "../components/Modal";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Modal", () => {
  it("Renders modal with label No data", () => {
    render(
      <BrowserRouter>
        <Modal id={0} modalActive={true} setModalActive={vi.fn()}></Modal>
      </BrowserRouter>
    );
    expect(screen.getByText(/No data/i)).toHaveTextContent("No data");
  });
  it("Renders modal with character 1", async () => {
    render(
      <BrowserRouter>
        <Modal id={1} modalActive={true} setModalActive={vi.fn()}></Modal>
      </BrowserRouter>
    );
    await waitFor(() => {
      const element = screen.getByText(/Rick Sanchez/i);
      expect(element).toBeVisible();
      expect(element).toHaveTextContent("Rick Sanchez");
    });
  });
});
