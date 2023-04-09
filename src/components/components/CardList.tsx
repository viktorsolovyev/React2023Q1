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
  setCurrentId: (value: number) => void;
  setModalActive: (value: boolean) => void;
};

const CardList: FC<CardListProps> = ({
  characters,
  setCurrentId,
  setModalActive,
}) => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: number) {
    event.preventDefault();
    setCurrentId(id);
    setModalActive(true);
  }
  return (
    <StyledUl>
      {characters.map((character) => (
        <a
          href=""
          key={character.id}
          onClick={(e) => handleClick(e, character.id)}
        >
          <CardItem character={character} fullInfo={false} />
        </a>
      ))}
    </StyledUl>
  );
};

export default CardList;
