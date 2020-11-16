import React from "react";

import GameCard from "./GameCard";
import { GameInfoData } from "../constants/interfaces";
import "./GameList.scss";

interface GameListProps {
  GameList: GameInfoData[];
}

function GameList(props: GameListProps) {
  const calcThumbsUp = (game: GameInfoData) => {
    const totalEvaluation = game.totalDownVotes + game.totalUpVotes;

    return `${Math.floor((game.totalUpVotes / totalEvaluation) * 100)}%`;
  };

  const abbreviateNumber = (num: number) => {
    if (num === 0) {
      return "0";
    }

    let b = num.toPrecision(2).split("e"),
      k =
        b.length === 1
          ? 0
          : Math.floor(Math.min(Number(b[1].slice(1)), 14) / 3),
      c = k < 1 ? num : Number((num / Math.pow(10, k * 3)).toFixed(1)),
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = d + ["", "K", "M", "B", "T"][k]; // append power
    return e.toString();
  };

  return (
    <ul className="hlist game-tile-list">
      {props.GameList.map((game: GameInfoData) => {
        return (
          <GameCard
            key={game.imageToken}
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
