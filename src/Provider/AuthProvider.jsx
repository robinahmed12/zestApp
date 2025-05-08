import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    () => {
      return unSubscribe;
    };
  }, []);

  const signOutUser = () => {
    return signOut(auth);
  };

  const updaterUser = (updateData) => {
    setUser({ ...auth.currentUser, ...updateData });
    return updateProfile(auth.currentUser, updateData);
  };

  const passwordReset = (email) => {

    return sendPasswordResetEmail(auth , email)
  }

  const userData = {
    updaterUser,
    user,
    setUser,
    createUser,
    loginUser,
    singInWithGoogle,
    signOutUser,
    loading,
    passwordReset
  };

  return (
    <>
      <AuthContext value={userData}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
