import SearchForm from "../components/components/SearchForm";
import React, { FC, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CardList from "../components/components/CardList";
import Modal from "../components/Modal";
import { rickAndMortyApi } from "../services/rickandmorty/rickandmorty.service";
import { useAppSelector } from "../hooks/redux";
import { getSearch } from "../store/reducers/SearchSlice";

const HomePage: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);

  const search = useAppSelector(getSearch);
  const { data, error, isLoading } =
    rickAndMortyApi.useGetCharactersByNameQuery(search);
  return (
    <>
      <Header label="Home" />
      <StyledHomePage>
        <SearchForm />
        {isLoading && <StyledLoading>Loading...</StyledLoading>}
        {error && <StyledLoading>There is nothing here</StyledLoading>}
        {data && !error && (
          <CardList
            characters={data.results}
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
