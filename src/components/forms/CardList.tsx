import React, { Component } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { TFormCard } from "types/types";

const StyledUl = styled.ul`
  margin-top: 20px;
  display: flex;
  column-gap: 1.3vw;
  flex-wrap: wrap;
  row-gap: 25px;
  justify-content: center;
`;

type CardsListProps = {
  cards: TFormCard[];
};

class CardList extends Component<CardsListProps> {
  render() {
    return (
      <StyledUl>
        {this.props.cards.map((card, index) => (
          <CardItem key={index} card={card} />
        ))}
      </StyledUl>
    );
  }
}

export default CardList;
