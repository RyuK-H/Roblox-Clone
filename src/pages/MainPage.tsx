import React, { Component } from "react";

import GameList from "../components/GameList";

const category_1 = require("../TempData/category_1.json");

export default class MainPage extends Component {
  componentDidMount() {
    console.warn(category_1);
  }

  render() {
    return <GameList GameList={category_1.games} />;
  }
}
