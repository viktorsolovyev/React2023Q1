import React, { Component } from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  margin-top: 25px;
  display: flex;
  column-gap: 1.3vw;
  flex-wrap: wrap;
  row-gap: 25px;
`;

// type HeaderProps = {
//   label: string;
// };

class Header extends Component {
  render() {
    return (
      <StyledUl>
        {/* {totalProducts.map(product => 
      <ProductCart isRow={isRow} key={product.id} product={product}/>
    )} */}
      </StyledUl>
    );
  }
}

export default Header;
