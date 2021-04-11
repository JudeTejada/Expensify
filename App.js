import React from "react";

import MainNavigator from "./src/navigator/Main";
import WithFont from "./src/HOC/withFont";
import { AuthProvider } from "./src/context/AuthProvider";

const AppWithFont = WithFont(MainNavigator);

function App() {
  return (
    <AuthProvider>
      <AppWithFont />
    </AuthProvider>
  );
}

export default App;
