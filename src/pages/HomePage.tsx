import SearchForm from "../components/SearchForm";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const StyledHomePage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1680px;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  max-width: 1700px;
  margin-top: 10px;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <>
      <Header label="Home" />
      <StyledHomePage>
        <SearchForm></SearchForm>
      </StyledHomePage>
    </>
  );
};

export default HomePage;
