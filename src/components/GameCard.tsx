import React from "react";
import Skeleton from "react-loading-skeleton";

import "./GameCard.scss";

interface GameCardProps {
  name: string;
  percent: string;
  players: string;
  thumbnail: string;
}

function GameCard(props: GameCardProps) {
  return (
    <div className="list-item game-card">
      <div className="game-card-container">
        <div className="game-card-thumb-container">
          {props.thumbnail ? (
            <img className="game-card-thumb" src={props.thumbnail} />
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
        </div>
        <div className="game-card-name game-name-title">{props.name}</div>
        <div className="game-card-info">
          <span className="info-label icon-votes-gray" />
          <span className="info-label vote-percentage-label">
            {props.percent}
          </span>
          <span className="info-label icon-playing-counts-gray" />
          <span className="info-label playing-counts-label">
            {props.players}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
