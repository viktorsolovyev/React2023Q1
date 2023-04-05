import React, { FC } from "react";
import styled from "styled-components";
import { TProduct } from "types/types";

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

const StyledBrand = styled.h3`
  font-size: 22px;
  line-height: 26px;
  color: rgba(28, 28, 28, 0.4);
`;

const StyledTitle = styled.h2`
  font-size: 22px;
  line-height: 26px;
  color: rgba(28, 28, 28, 0.4);
`;

const StyledDescription = styled.p`
  margin-top: 15px;
  font-size: 16px;
  line-height: 19px;
  color: rgba(28, 28, 28, 0.6);
`;

const StyledPrice = styled.div`
  margin-top: 15px;
  font-size: 28px;
  line-height: 33px;
`;

type CardItemProps = {
  product: TProduct;
};

const CardItem: FC<CardItemProps> = ({ product }) => {
  return (
    <StyledItem>
      <StyledHeader>
        <StyledImage alt={product.brand} src={product.image} />
      </StyledHeader>
      <StyledContent>
        <StyledBrand>{product.brand}</StyledBrand>
        <StyledTitle>{product.title}</StyledTitle>
        <StyledDescription>
          {product.description.slice(0, 100).trim()}...
        </StyledDescription>
        <StyledPrice>{product.price}$</StyledPrice>
      </StyledContent>
    </StyledItem>
  );
};

export default CardItem;
