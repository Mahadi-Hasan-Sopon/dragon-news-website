import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

function AuthContextProvider(props) {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("User in auth state changed", currentUser);
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const handleErrors = (error) => {
    setErrors(error);
  };

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOutUser,
    errors,
    handleErrors,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {props.children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContextProvider;
