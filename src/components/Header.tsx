import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  font-size: 1.5rem;
  justify-content: center;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <StyledHeader>
          {/* <a href="/">Home</a>
          <a href="/about">About</a> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </StyledHeader>
      </Container>
    );
  }
}

export default Header;
