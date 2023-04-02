import React, { Component } from "react";
import styled from "styled-components";
import Form from "./Form";
import CardList from "../forms/CardList";
import { TFormCard } from "types/types";

type Props = {
  [key: string]: never;
};

type State = {
  cards: TFormCard[];
};

class FormsSection extends Component<Props, State> {
  state: State = {
    cards: [],
  };
  constructor(props: Props) {
    super(props);
    this.addCardToCardList = this.addCardToCardList.bind(this);
  }

  addCardToCardList(card: TFormCard) {
    this.setState((prevState: State) => ({
      cards: [...prevState.cards, card],
    }));
  }

  render() {
    return (
      <StyledFormsBlock>
        <Form addCardFunc={(card: TFormCard) => this.addCardToCardList(card)} />
        <CardList cards={this.state.cards} />
      </StyledFormsBlock>
    );
  }
}

const StyledFormsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1680px;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  max-width: 1700px;
  margin-top: 10px;
  font-size: 2rem;
`;

export default FormsSection;
