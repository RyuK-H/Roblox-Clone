import React from "react";

import { GameInfoData } from "../constants/interfaces";
import GameCard from "./GameCard";
import "./GameList.scss";

interface GameListProps {
  GameList: GameInfoData[];
}

function GameList(props: GameListProps) {
  const calcThumbsUp = (game: GameInfoData) => {
    const totalEvaluation = game.totalDownVotes + game.totalUpVotes;

    return `${Math.floor((game.totalUpVotes / totalEvaluation) * 100)}%`;
  };

  function abbreviateNumber(value: number) {
    let newValue = value.toString();
    if (value >= 1000) {
      const suffixes = ["", "k", "m", "b", "t"];
      const suffixNum = Math.floor(("" + value).length / 3);
      let shortValue = 0;
      for (let precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value)
            .toPrecision(precision)
            .toString()
        );
        const dotLessShortValue = (shortValue + "").replace(
          /[^a-zA-Z 0-9]+/g,
          ""
        );
        if (dotLessShortValue.length <= 2) {
          break;
        }
      }
      if (shortValue % 1 != 0) shortValue = Number(shortValue.toFixed(1));
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
  }

  return (
    <ul className="hlist game-tile-list">
      {props.GameList.map((game: GameInfoData) => {
        return (
          <GameCard
            name={game.name}
            percent={calcThumbsUp(game)}
            players={abbreviateNumber(game.playerCount)}
          />
        );
      })}
    </ul>
  );
}

export default GameList;
