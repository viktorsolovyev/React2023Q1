import React, { FC } from "react";
import styled from "styled-components";
import { TFormCard } from "types/types";

type CardItemProps = {
  card: TFormCard;
};

const CardItem: FC<CardItemProps> = ({ card }) => {
  return (
    <StyledItem>
      <StyledHeader>
        <StyledImage alt="Profile picture" src={card.picture.imageData} />
      </StyledHeader>
      <StyledContent>
        <StyledH3>{card.email}</StyledH3>
        <StyledH3>
          {new Intl.DateTimeFormat().format(new Date(card.birthday))}
        </StyledH3>
        <StyledH3>{card.country}</StyledH3>
        <StyledH3>{card.gender}</StyledH3>
        <StyledH3>{card.consent}</StyledH3>
      </StyledContent>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  height: auto;
  max-width: 401px;
  padding: 20px;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.05);
`;

const StyledHeader = styled.div`
  width: 100%;
  max-width: 361px;
  height: 282px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 282px;
  border-radius: 40px;
`;

const StyledContent = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const StyledH3 = styled.h3`
  font-size: 22px;
  line-height: 26px;
  color: rgba(28, 28, 28, 0.4);
`;

export default CardItem;
