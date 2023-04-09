import React, { FC } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { TRickAndMortyCharacter } from "types/types";

const StyledUl = styled.ul`
  margin-top: 20px;
  display: flex;
  column-gap: 1.3vw;
  flex-wrap: wrap;
  row-gap: 25px;
  justify-content: center;
`;

type CardListProps = {
  characters: TRickAndMortyCharacter[];
};

const CardList: FC<CardListProps> = ({ characters }) => {
  return (
    <StyledUl>
      {characters.map((character) => (
        <CardItem key={character.id} character={character} />
      ))}
    </StyledUl>
  );
};

export default CardList;
