import React, { Component } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import products from "../data/products";

const StyledUl = styled.ul`
  margin-top: 20px;
  display: flex;
  column-gap: 1.3vw;
  flex-wrap: wrap;
  row-gap: 25px;
  justify-content: center;
`;

class CardList extends Component {
  render() {
    return (
      <StyledUl>
        {products.map((product) => (
          <CardItem key={product.id} product={product} />
        ))}
      </StyledUl>
    );
  }
}

export default CardList;
