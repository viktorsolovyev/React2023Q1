import React, { FC } from "react";
import styled from "styled-components";
import { TRickAndMortyCharacter } from "types/types";

type CardItemProps = {
  character: TRickAndMortyCharacter;
  fullInfo: boolean;
};

const CardItem: FC<CardItemProps> = ({ character, fullInfo }) => {
  return (
    <StyledItem>
      <StyledHeader>
        <StyledImage alt={character.name} src={character.image} />
      </StyledHeader>
      <StyledContent>
        <StyledInfo>
          <span>Name:</span> {character.name}
        </StyledInfo>
        {fullInfo && (
          <>
            <StyledInfo>
              <span>Gender:</span> {character.gender}
            </StyledInfo>
            <StyledInfo>
              <span>Species:</span> {character.species}
            </StyledInfo>
            <StyledInfo>
              <span>Status:</span> {character.status}
            </StyledInfo>
            <StyledInfo>
              <span>Origin:</span> {character.origin.name}
            </StyledInfo>
          </>
        )}
      </StyledContent>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  height: auto;
  min-width: 371px;
  max-width: 371px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.05);
  list-style-type: none;
`;

const StyledHeader = styled.div`
  width: 100%;
  max-width: 361px;
  height: 282px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 282px;
  border-radius: 20px;
`;

const StyledContent = styled.div`
  width: 100%;
  margin-top: 15px;
  span {
    font-weight: bold;
  }
`;

const StyledInfo = styled.h3`
  font-size: 22px;
  line-height: 26px;
  color: rgba(28, 28, 28, 0.4);
`;

export default CardItem;
