import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1680px;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  max-width: 1700px;
  margin-top: 10px;
  font-size: 2rem;
`;
const StyledNavLink = styled.div`
  font-size: 1.5rem;
  text-decoration: underline;
`;

const NotFoundPage = () => {
  return (
    <>
      <StyledNotFoundPage>
        <h1>Page not found</h1>
        <StyledNavLink>
          <NavLink to="/">Home</NavLink>
        </StyledNavLink>
      </StyledNotFoundPage>
    </>
  );
};

export default NotFoundPage;
