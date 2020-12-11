import React, { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazyload";

import { GameInfoData } from "../constants/interfaces";
import GameCard from "./GameCard";
import "./GameList.scss";

interface GameListProps {
  GameList: GameInfoData[];
}

function GameList(props: GameListProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    if (slideRef && slideRef.current !== null) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }
  }, [currentSlide]);

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
    <div className="game-tile-list">
      <div className="slider-container" ref={slideRef}>
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
      <button className="button-slider" onClick={prevSlide}>
        Previous Slide
      </button>
      <button className="button-slider" onClick={nextSlide}>
        Next Slide
      </button>
    </div>
  );
}

export default GameList;
