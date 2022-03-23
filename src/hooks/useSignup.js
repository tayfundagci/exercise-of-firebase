import { useState } from "react";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useAuthContext } from "../hooks/useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log("kullanıcı oluşturuldu", res.user);
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signup };
};
