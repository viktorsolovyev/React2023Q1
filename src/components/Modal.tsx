import React, { FC } from "react";
import styled from "styled-components";
import CardItem from "./components/CardItem";
import { rickAndMortyApi } from "../services/rickandmorty/rickandmorty.service";

type ModalProps = {
  id: number;
  modalActive: boolean;
  setModalActive: (value: boolean) => void;
};

const Modal: FC<ModalProps> = ({ id, modalActive, setModalActive }) => {
  const { data, error } = rickAndMortyApi.useGetCharactersByIdQuery(id);

  const closeModal = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    event.preventDefault();
    setModalActive(false);
  };

  return (
    <>
      {data && !error && (
        <>
          {modalActive ? (
            <StyledModalActive onClick={closeModal}>
              <StyledModalContent onClick={(e) => e.stopPropagation()}>
                <StyledCloseButton onClick={closeModal} />
                {data && <CardItem character={data} fullInfo={true} />}
              </StyledModalContent>
            </StyledModalActive>
          ) : (
            <StyledModal onClick={closeModal}>
              <StyledModalContent onClick={(e) => e.stopPropagation()}>
                {data && !error && (
                  <CardItem character={data} fullInfo={true} />
                )}
              </StyledModalContent>
            </StyledModal>
          )}
        </>
      )}
      {modalActive && error && <>No data</>}
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
