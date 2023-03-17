import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.header`
  background-color: #fff;
  height: 80px;
  justify-content: center;
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1680px;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  max-width: 1700px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <StyledHeader></StyledHeader>
      </Container>
    );
  }
}

export default Header;
