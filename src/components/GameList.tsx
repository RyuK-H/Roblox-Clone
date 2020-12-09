import React from "react";
import LazyLoad from "react-lazyload";

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
    <div className="hlist game-tile-list">
      {props.GameList.map((game: GameInfoData) => {
        return (
          <LazyLoad key={game.imageToken} height={200} offset={100}>
            <GameCard
              name={game.name}
              percent={calcThumbsUp(game)}
              players={abbreviateNumber(game.playerCount)}
              thumbnail={game.imageUrl}
            />
          </LazyLoad>
        );
      })}
    </div>
  );
}

export default GameList;
