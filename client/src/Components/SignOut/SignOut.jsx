import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../Services/users";

export default function SignOut () {
  const [signedOut, setSignedOut] = useState(false);

  useEffect(() => {
    const signOutUser = async () => {
      const signOutBool = await logout();
      setSignedOut(signOutBool);
    };
    signOutUser();
  }, []);
  return signedOut ? <Redirect to="/"/> : <h2>Signed out...</h2>
}