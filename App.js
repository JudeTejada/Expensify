import React from "react";
import Theme from "./src/theme";

import MainNavigator from "./src/navigator/Main";

export default function App() {
  return (
    <Theme>
      <MainNavigator />
    </Theme>
  );
}
