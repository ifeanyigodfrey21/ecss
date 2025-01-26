import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const Authcontext = React.createContext();

export function useAuth() {
  return useContext(Authcontext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }
  const value = { user, userLoggedIn, loading };
  return (
    <Authcontext.Provider value={value}>
      {!loading && children}
    </Authcontext.Provider>
  );
}
