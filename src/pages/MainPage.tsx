import React, { useEffect, useState } from "react";
import axios from "axios";

import GameList from "../components/GameList";
import { GameInfoData, Category } from "../constants/interfaces";

const category_1 = require("../TempData/category_1.json");
const category_2 = require("../TempData/category_2.json");
const category_3 = require("../TempData/category_3.json");
const category_4 = require("../TempData/category_4.json");
const category_5 = require("../TempData/category_5.json");
const category_6 = require("../TempData/category_6.json");
const category_7 = require("../TempData/category_7.json");
const category_8 = require("../TempData/category_8.json");
const category_9 = require("../TempData/category_9.json");
const category_10 = require("../TempData/category_10.json");
const category_11 = require("../TempData/category_11.json");
const category_12 = require("../TempData/category_12.json");
const category_13 = require("../TempData/category_13.json");
const category_14 = require("../TempData/category_14.json");
const category_15 = require("../TempData/category_15.json");
const category_16 = require("../TempData/category_16.json");
const category_17 = require("../TempData/category_17.json");
const category_18 = require("../TempData/category_18.json");
const category_19 = require("../TempData/category_19.json");

const categoriesJSON: Category[] = [
  { key: "1", games: category_1.games },
  { key: "2", games: category_2.games },
  { key: "3", games: category_3.games },
  { key: "4", games: category_4.games },
  { key: "5", games: category_5.games },
  { key: "6", games: category_6.games },
  { key: "7", games: category_7.games },
  { key: "8", games: category_8.games },
  { key: "9", games: category_9.games },
  { key: "10", games: category_10.games },
  { key: "11", games: category_11.games },
  { key: "12", games: category_12.games },
  { key: "13", games: category_13.games },
  { key: "14", games: category_14.games },
  { key: "15", games: category_15.games },
  { key: "16", games: category_16.games },
  { key: "17", games: category_17.games },
  { key: "18", games: category_18.games },
  { key: "19", games: category_19.games },
];

interface ThumbnailResponse {
  targetId: number;
  state: string;
  imageUrl: string;
}

export const MainPage = () => {
  let [categories, setCategories] = useState<Category[]>(categoriesJSON);

  useEffect(() => {
    for (let i = 0; i < categories.length; i++) {
      getThumbnailImage(i);
    }
  }, []);

  const getThumbnailImage = async (categoryNumber: number) => {
    let universIds = "";

    for (let n in categories[categoryNumber].games) {
      if (n === "0")
        universIds = categories[categoryNumber].games[n].universeId;
      else
        universIds =
          universIds + `,${categories[categoryNumber].games[n].universeId}`;
    }

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://thumbnails.roblox.com/v1/games/icons?universeIds=${universIds}&returnPolicy=PlaceHolder&size=150x150&format=jpeg`
      )
      .then((response) => {
        categories[categoryNumber].games = response.data.data.map(
          (element: ThumbnailResponse, index: number) => {
            const data: GameInfoData = {
              ...categories[categoryNumber].games[index],
              imageUrl: element.imageUrl,
            };

            return data;
          }
        );

        setCategories([...categories]);
      });
  };

  return (
    <>
      {categories.map((category) => {
        return <GameList key={category.key} GameList={category.games} />;
      })}
    </>
  );
};
