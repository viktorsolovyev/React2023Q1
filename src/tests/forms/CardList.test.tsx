import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CardList from "../../components/forms/CardList";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TFormCard } from "types/types";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

const cards: TFormCard[] = [
  {
    email: "email@gmail.com",
    birthday: new Date().toString(),
    country: "Italy",
    consent: true,
    gender: "Male",
    picture: {
      imageType: "image/jpeg",
      imageData:
        "https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85",
    },
  },
  {
    email: "email@gmail.com",
    birthday: new Date().toString(),
    country: "Italy",
    consent: true,
    gender: "Male",
    picture: {
      imageType: "image/jpeg",
      imageData:
        "https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85",
    },
  },
];

const store = setupStore({ cards: { cards: cards } });

describe("CardList", () => {
  it("Renders 2 cars", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardList />
        </BrowserRouter>
      </Provider>
    );
    const countCards = screen.getAllByRole("listitem").length;
    expect(countCards).toEqual(2);
  });
});
