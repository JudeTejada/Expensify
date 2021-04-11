import React, { createContext, useState, useEffect, useContext } from "react";
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

const AuthContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });

    // Cleanup subscription on unmount

    return () => unsubscribe();
  }, []);

  const logout = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      firebase.auth().signOut();
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { logout, user } = useContext(AuthContext);
  return { logout, user };
};
