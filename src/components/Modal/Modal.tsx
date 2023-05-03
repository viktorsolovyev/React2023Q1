import React, { FC } from "react";
import CardItem from "../components/CardItem/CardItem";
import { rickAndMortyApi } from "../../services/rickandmorty/rickandmorty.service";
import classes from "./Modal.module.css";

type ModalProps = {
  id: number;
  modalActive: boolean;
  setModalActive: (value: boolean) => void;
};

const Modal: FC<ModalProps> = ({ id, modalActive, setModalActive }) => {
  const { data, error, isFetching } =
    rickAndMortyApi.useGetCharactersByIdQuery(id);

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
            <div className={classes.modalActive} onClick={closeModal}>
              <div
                className={classes.content}
                onClick={(e) => e.stopPropagation()}
              >
                {isFetching && <>Loading...</>}
                <button
                  data-testid="close-button"
                  className={classes.closeButton}
                  onClick={closeModal}
                />
                {data && <CardItem character={data} fullInfo={true} />}
              </div>
            </div>
          ) : (
            <div className={classes.modal} onClick={closeModal}>
              <div
                className={classes.content}
                onClick={(e) => e.stopPropagation()}
              >
                {data && !error && (
                  <CardItem character={data} fullInfo={true} />
                )}
              </div>
            </div>
          )}
        </>
      )}
      {modalActive && error && <>No data</>}
    </>
  );
};

export default Modal;
