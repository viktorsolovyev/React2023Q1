import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { TRickAndMortyCharacter } from "types/types";
import baseUrlAPI from "../../config/config";

const StyledUl = styled.ul`
  margin-top: 20px;
  display: flex;
  column-gap: 1.3vw;
  flex-wrap: wrap;
  row-gap: 25px;
  justify-content: center;
`;

const CardList: FC = () => {
  const [characters, SetCharacters] = useState<TRickAndMortyCharacter[]>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(baseUrlAPI + "character");
      const data = await response.json();
      SetCharacters(data.results);
    }
    fetchData();
  }, []);

  return (
    <StyledUl>
      {characters &&
        characters.map((character) => (
          <CardItem key={character.id} character={character} />
        ))}
    </StyledUl>
  );
};

export default CardList;
