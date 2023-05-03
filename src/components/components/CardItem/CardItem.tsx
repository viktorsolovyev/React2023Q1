import React, { FC } from "react";
import { TRickAndMortyCharacter } from "types/types";
import classes from "./CardItem.module.css";

type CardItemProps = {
  character: TRickAndMortyCharacter;
  fullInfo: boolean;
};

const CardItem: FC<CardItemProps> = ({ character, fullInfo }) => {
  return (
    <li className={classes.item}>
      <div className={classes.header}>
        <img
          className={classes.image}
          alt={character.name}
          src={character.image}
        />
      </div>
      <div className={classes.content}>
        <h3 className={classes.info}>
          <span>Name:</span> {character.name}
        </h3>
        {fullInfo && (
          <>
            <h3 className={classes.info}>
              <span>Gender:</span> {character.gender}
            </h3>
            <h3 className={classes.info}>
              <span>Species:</span> {character.species}
            </h3>
            <h3 className={classes.info}>
              <span>Status:</span> {character.status}
            </h3>
            <h3 className={classes.info}>
              <span>Origin:</span> {character.origin.name}
            </h3>
          </>
        )}
      </div>
    </li>
  );
};

export default CardItem;
