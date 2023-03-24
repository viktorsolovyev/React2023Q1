import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CardItem from "../components/components/CardItem";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("CardItem", () => {
  const product = {
    id: 1,
    image:
      "https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85",
    title: "5-Piece Ultimate Tool Set",
    brand: "GIR",
    price: 64,
    description:
      "The Mediterranean Set is inspired by coastal hues, earthy tones, and fresh, bright flavors best enjoyed together.",
  };

  it("Renders brand card", () => {
    render(
      <BrowserRouter>
        <CardItem key={1} product={product} />
      </BrowserRouter>
    );
    const brandElement = screen.getByRole("heading", { level: 3 });
    expect(brandElement).toBeVisible();
    expect(brandElement).toHaveTextContent("GIR");
  });

  it("Renders title card", () => {
    render(
      <BrowserRouter>
        <CardItem key={1} product={product} />
      </BrowserRouter>
    );
    const brandElement = screen.getByRole("heading", { level: 2 });
    expect(brandElement).toBeVisible();
    expect(brandElement).toHaveTextContent("5-Piece Ultimate Tool Set");
  });

  it("Renders image card", () => {
    render(
      <BrowserRouter>
        <CardItem key={1} product={product} />
      </BrowserRouter>
    );
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeVisible();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85"
    );
  });
});
