import React from "react";
import { observer } from "mobx-react";

import { MainPage } from "./pages/MainPage";

function App() {
  return <MainPage />;
}

export default observer(App);
