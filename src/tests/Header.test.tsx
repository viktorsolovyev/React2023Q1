import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("Renders header with label Home", () => {
    render(
      <BrowserRouter>
        <Header label="Home" />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Home");
  });

  it("Link to Home page", () => {
    render(
      <BrowserRouter>
        <Header label="Home" />
      </BrowserRouter>
    );

    const linkToHomePage = screen.getByRole("link", { name: "Home" });
    expect(linkToHomePage).toBeVisible();
    expect(linkToHomePage).toHaveAttribute("href", "/");
  });

  it("Link to About page", () => {
    render(
      <BrowserRouter>
        <Header label="Home" />
      </BrowserRouter>
    );

    const linkToAboutPage = screen.getByRole("link", { name: "About" });
    expect(linkToAboutPage).toBeVisible();
    expect(linkToAboutPage).toHaveAttribute("href", "/about");
  });
});
