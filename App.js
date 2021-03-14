import React from "react";

import MainNavigator from "./src/navigator/Main";
import WithFont from "./src/HOC/withFont";

function App() {
  return <MainNavigator />;
}

export default WithFont(App);
