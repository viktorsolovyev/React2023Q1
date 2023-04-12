import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { TRickAndMortyCharacter } from "types/types";
import CardItem from "./components/CardItem";
import { fetchCharacterById } from "../services/rickandmorty/rickandmorty.service";

type ModalProps = {
  id: number;
  modalActive: boolean;
  setModalActive: (value: boolean) => void;
};

const defaultCharacter = {
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: { name: "", url: "" },
  location: { name: "", url: "" },
  image: "",
  episode: [],
  url: "",
  created: "",
};

const Modal: FC<ModalProps> = ({ id, modalActive, setModalActive }) => {
  const [character, SetCharacter] = useState<TRickAndMortyCharacter>();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchCharacterById(id);
      SetCharacter(data);
    }
    if (id > 0) {
      fetchData();
    } else {
      SetCharacter(defaultCharacter);
    }
  }, [id, modalActive]);

  const closeModal = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    event.preventDefault();
    // SetCharacter(defaultCharacter);
    setModalActive(false);
  };

  return (
    <>
      {character && character.id > 0 && (
        <>
          {modalActive ? (
            <StyledModalActive onClick={closeModal}>
              <StyledModalContent onClick={(e) => e.stopPropagation()}>
                <StyledCloseButton onClick={closeModal} />
                {character && (
                  <CardItem character={character} fullInfo={true} />
                )}
              </StyledModalContent>
            </StyledModalActive>
          ) : (
            <StyledModal onClick={closeModal}>
              <StyledModalContent onClick={(e) => e.stopPropagation()}>
                {character && (
                  <CardItem character={character} fullInfo={true} />
                )}
              </StyledModalContent>
            </StyledModal>
          )}
        </>
      )}
      {modalActive && character && character.id === 0 && <>No data</>}
    </>
  );
};

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
`;

const StyledModalActive = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
`;

const StyledModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #f7f6f0;
  position: relative;
`;

const StyledCloseButton = styled.button`
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: no-repeat url("../src/assets/icons/cancel-search.svg");
  position: absolute;
  left: 95%;
  top: 10px;
`;

export default Modal;
