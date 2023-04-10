import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Modal from "../components/Modal";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Modal", () => {
  it("Renders modal with label Home", () => {
    render(
      <BrowserRouter>
        <Modal id={0} modalActive={true} setModalActive={vi.fn()}></Modal>
      </BrowserRouter>
    );
    expect(screen.getByText(/Loading/i)).toHaveTextContent("Loading");
  });
});
