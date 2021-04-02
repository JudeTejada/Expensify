import React from "react";

import MainNavigator from "./src/navigator/Main";
import WithFont from "./src/HOC/withFont";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKFt4CVDNLdjxdwI8HlZDjcX-fUTCbs5s",
  authDomain: "expensify-e1cd4.firebaseapp.com",
  projectId: "expensify-e1cd4",
  storageBucket: "expensify-e1cd4.appspot.com",
  messagingSenderId: "454215507316",
  appId: "1:454215507316:web:5d737ddefaf6bffd98a021",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return <MainNavigator />;
}

export default WithFont(App);
