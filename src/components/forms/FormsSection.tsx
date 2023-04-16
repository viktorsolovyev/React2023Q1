import React, { FC, useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import CardList from "../forms/CardList";
import { TFormCard } from "types/types";

const FormsSection: FC = () => {
  const [cards, setCards] = useState<TFormCard[]>([]);
  function addCardToCardList(card: TFormCard) {
    setCards([...cards, card]);
  }

  return (
    <StyledFormsBlock>
      <Form addCardFunc={(card: TFormCard) => addCardToCardList(card)} />
      <CardList cards={cards} />
    </StyledFormsBlock>
  );
};

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
