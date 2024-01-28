import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [logoutIsOpen, SetLogoutIsOpen] = useState(false);

  const handleClose = () => {
    SetLogoutIsOpen(false);
  };

  useEffect(() => {
    const loadStoredAuth = () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user");

      if (sessionToken && sessionUser) {
        setUser(JSON.parse(sessionUser)); // Parse o JSON para obter o objeto de usuário
      }
    };
    loadStoredAuth();
  }, []);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    SetLogoutIsOpen(false);

    return <Navigate to="/" />;
  }

  return (
    <AuthGoogleContext.Provider
      value={{
        signInGoogle,
        signed: !!user,
        user,
        logoutIsOpen,
        SetLogoutIsOpen,
        handleClose,
        signOut,
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
