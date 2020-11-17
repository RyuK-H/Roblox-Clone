import React from "react";
import { observer } from "mobx-react";

import "./GameCard.scss";

interface GameCardProps {
  name: string;
  percent: string;
  players: string;
  thumbnail: string;
}

function GameCard(props: GameCardProps) {
  return (
    <li className="list-item game-card">
      <div className="game-card-container">
        <div className="game-card-thumb-container">
          <img
            className="game-card-thumb"
            src={
              props.thumbnail
                ? props.thumbnail
                : "https://t6.rbxcdn.com/9ef7925958575537763f47f8ce8ec3d6"
            }
          />
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
    </li>
  );
}

export default observer(GameCard);
