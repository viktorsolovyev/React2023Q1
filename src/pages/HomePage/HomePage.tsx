import SearchForm from "../../components/components/SearchForm/SearchForm";
import React, { FC, useState } from "react";
import Header from "../../components/Header/Header";
import CardList from "../../components/components/CardList/CardList";
import Modal from "../../components/Modal/Modal";
import { rickAndMortyApi } from "../../services/rickandmorty/rickandmorty.service";
import { useAppSelector } from "../../hooks/redux";
import { getSearch } from "../../store/reducers/SearchSlice";
import classes from "./HomePage.module.css";

const HomePage: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(1);

  const search = useAppSelector(getSearch);
  const { data, error, isFetching } =
    rickAndMortyApi.useGetCharactersByNameQuery(search);
  return (
    <>
      <Header label="Home" />
      <div className={classes.homePage}>
        <SearchForm />
        {isFetching && (
          <div className={classes.homePageLoading}>Loading...</div>
        )}
        {error && (
          <div className={classes.homePageLoading}>There is nothing here</div>
        )}
        {data && !error && (
          <CardList
            characters={data.results}
            setCurrentId={setCurrentId}
            setModalActive={setModalActive}
          />
        )}
      </div>
      {modalActive && (
        <Modal
          id={currentId}
          modalActive={modalActive}
          setModalActive={setModalActive}
        ></Modal>
      )}
    </>
  );
};

export default HomePage;
