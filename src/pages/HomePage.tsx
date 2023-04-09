import SearchForm from "../components/components/SearchForm";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CardList from "../components/components/CardList";
import baseUrlAPI from "../config/config";
import { TRickAndMortyCharacter } from "types/types";

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

const HomePage: FC = () => {
  const [characters, SetCharacters] = useState<TRickAndMortyCharacter[]>();
  const [search, setSearch] = useState(
    localStorage.getItem("searchValue") || ""
  );
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(baseUrlAPI + "character");
      const data = await response.json();
      SetCharacters(data.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header label="Home" />
      <StyledHomePage>
        <SearchForm search={search} setSearch={setSearch} />
        {characters && <CardList characters={characters} />}
      </StyledHomePage>
    </>
  );
};

export default HomePage;
