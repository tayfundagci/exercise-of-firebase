import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("çıkış yapıldı");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
