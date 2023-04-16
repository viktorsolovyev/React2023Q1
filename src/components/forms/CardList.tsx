import React, { FC } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { TFormCard } from "types/types";
import { useAppSelector } from "../../hooks/redux";
import { getСards } from "../../store/reducers/CardsSlice";

const StyledUl = styled.ul`
  margin-top: 20px;
  display: flex;
  column-gap: 1.3vw;
  flex-wrap: wrap;
  row-gap: 25px;
  justify-content: center;
`;

const CardList: FC = () => {
  const cards = useAppSelector(getСards);
  return (
    <StyledUl>
      {cards.map((card: TFormCard, index: number) => (
        <CardItem key={index} card={card} />
      ))}
    </StyledUl>
  );
};
// }

export default CardList;
