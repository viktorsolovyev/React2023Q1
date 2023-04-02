import React, { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #ffffff;
  height: 80px;
  justify-content: center;
`;

const Container = styled.div`
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
  justify-content: flex-end;
  .active {
    color: #ff4500;
  }
`;

type HeaderProps = {
  label: string;
};

const Header: FC<HeaderProps> = ({ label }) => {
  return (
    <StyledHeader>
      <Container>
        <h1>{label}</h1>
        <Container>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/forms">Forms</NavLink>
        </Container>
      </Container>
    </StyledHeader>
  );
};

export default Header;
