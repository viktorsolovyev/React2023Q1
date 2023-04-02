import React, { Component } from "react";
import styled from "styled-components";
import { TFormCard } from "types/types";

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

type CardItemProps = {
  card: TFormCard;
};

class CardItem extends Component<CardItemProps> {
  render() {
    return (
      <StyledItem>
        <StyledHeader>
          <StyledImage
            alt="Profile picture"
            src={this.props.card.picture.imageData}
          />
        </StyledHeader>
        <StyledContent>
          <StyledH3>{this.props.card.email}</StyledH3>
          <StyledH3>
            {new Intl.DateTimeFormat().format(this.props.card.birthday)}
          </StyledH3>
          <StyledH3>{this.props.card.coutry}</StyledH3>
          <StyledH3>{this.props.card.gender}</StyledH3>
          <StyledH3>{this.props.card.consent}</StyledH3>
        </StyledContent>
      </StyledItem>
    );
  }
}

export default CardItem;
