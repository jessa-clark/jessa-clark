import { useEffect, useState } from "react";
// import { Redirct } from "react-router-dom";
import { logout } from "../../Services/users";

export default function SignOut () {
  const [signedOut, setSignedOut] = useState(false);

  useEffect(() => {
    const signOutUser = async () => {
      const signOutBool = logout();
      setSignedOut(signOutBool);
    };
    signOutUser();
  }, []);
  return signedOut

  // const handleLogout = async () => {
  //   setCurrentUser(null);
  //   localStorage.removeItem("authToken");
  //   logout();
  // };
  // return handleLogout;
}