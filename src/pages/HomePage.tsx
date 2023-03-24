import SearchForm from "../components/components/SearchForm";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CardList from "../components/CardList";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1680px;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  max-width: 1700px;
  margin-top: 25px;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <>
      <Header label="Home" />
      <StyledHomePage>
        <SearchForm />
        <CardList />
      </StyledHomePage>
    </>
  );
};

export default HomePage;
