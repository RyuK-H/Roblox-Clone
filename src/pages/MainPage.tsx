import React, { Component } from "react";

import GameList from "../components/GameList";

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

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <GameList GameList={category_1.games} />
        <GameList GameList={category_2.games} />
        <GameList GameList={category_3.games} />
        <GameList GameList={category_4.games} />
        <GameList GameList={category_5.games} />
        <GameList GameList={category_6.games} />
        <GameList GameList={category_7.games} />
        <GameList GameList={category_8.games} />
        <GameList GameList={category_9.games} />
        <GameList GameList={category_10.games} />
        <GameList GameList={category_11.games} />
        <GameList GameList={category_12.games} />
        <GameList GameList={category_13.games} />
        <GameList GameList={category_14.games} />
        <GameList GameList={category_15.games} />
        <GameList GameList={category_16.games} />
        <GameList GameList={category_17.games} />
        <GameList GameList={category_18.games} />
        <GameList GameList={category_19.games} />
      </div>
    );
  }
}
