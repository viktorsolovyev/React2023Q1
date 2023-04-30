import React, { FC } from "react";
import CardItem from "../CardItem/CardItem";
import { TRickAndMortyCharacter } from "types/types";
import classes from "./CardList.module.css";

type CardListProps = {
  characters: TRickAndMortyCharacter[];
  setCurrentId: (value: number) => void;
  setModalActive: (value: boolean) => void;
};

const CardList: FC<CardListProps> = ({
  characters,
  setCurrentId,
  setModalActive,
}) => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: number) {
    event.preventDefault();
    setCurrentId(id);
    setModalActive(true);
  }
  return (
    <ul className={classes.cardList}>
      {characters.map((character) => (
        <a
          href=""
          key={character.id}
          onClick={(e) => handleClick(e, character.id)}
        >
          <CardItem character={character} fullInfo={false} />
        </a>
      ))}
    </ul>
  );
};

export default CardList;
