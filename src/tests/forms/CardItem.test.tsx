import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CardItem from "../../components/forms/CardItem";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TFormCard } from "types/types";

describe("CardItem", () => {
  const card: TFormCard = {
    email: "email@gmail.com",
    birthday: new Date(),
    coutry: "Italy",
    consent: true,
    gender: "Male",
    picture: {
      imageType: "image/jpeg",
      imageData:
        "https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85",
    },
  };
  it("Renders email in the card", () => {
    render(
      <BrowserRouter>
        <CardItem key={1} card={card} />
      </BrowserRouter>
    );
    const elements = screen.getAllByRole("heading", { level: 3 });
    expect(elements[0]).toBeVisible();
    expect(elements[0]).toHaveTextContent("email@gmail.com");
  });

  it("Renders gender in the card", () => {
    render(
      <BrowserRouter>
        <CardItem key={1} card={card} />
      </BrowserRouter>
    );
    const elements = screen.getAllByRole("heading", { level: 3 });
    expect(elements[3]).toBeVisible();
    expect(elements[3]).toHaveTextContent("Male");
  });

  it("Renders image card", () => {
    render(
      <BrowserRouter>
        <CardItem key={1} card={card} />
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
