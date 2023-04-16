import SearchForm from "../components/components/SearchForm";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CardList from "../components/components/CardList";
import { TRickAndMortyCharacter } from "types/types";
import Modal from "../components/Modal";
import { fetchCharactersByName } from "../services/rickandmorty/rickandmorty.service";

const HomePage: FC = () => {
  const [characters, SetCharacters] = useState<TRickAndMortyCharacter[]>();
  const [isPending, SetIsPending] = useState<boolean>(true);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const [search, setSearch] = useState(
    localStorage.getItem("searchValue") || ""
  );
  useEffect(() => {
    async function fetchData() {
      const data = await fetchCharactersByName(
        localStorage.getItem("searchValue") || ""
      );
      SetCharacters(data.results);
      SetIsPending(false);
    }
    fetchData();
  }, []);

  async function getDataFromApi() {
    SetIsPending(true);
    const data = await fetchCharactersByName(search);
    if (data.error) {
      SetCharacters([]);
    } else {
      SetCharacters(data.results);
    }
    SetIsPending(false);
  }
  return (
    <>
      <Header label="Home" />
      <StyledHomePage>
        <SearchForm
          search={search}
          setSearch={setSearch}
          getDataFromApi={getDataFromApi}
        />
        {isPending && <StyledLoading>Loading...</StyledLoading>}
        {characters && (
          <CardList
            characters={characters}
            setCurrentId={setCurrentId}
            setModalActive={setModalActive}
          />
        )}
      </StyledHomePage>
      <Modal
        id={currentId}
        modalActive={modalActive}
        setModalActive={setModalActive}
      ></Modal>
    </>
  );
};

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

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

export default HomePage;
