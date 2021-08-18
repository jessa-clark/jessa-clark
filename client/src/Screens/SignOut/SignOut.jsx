import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../Services/users";
import Layout from "../../Components/Layout/Layout";

export default function SignOut () {
  const [signedOut, setSignedOut] = useState(false);

  useEffect(() => {
    const signOutUser = async () => {
      const signOutBool = await logout();
      setSignedOut(signOutBool);
    };
    signOutUser();
  }, []);

  return (
    <Layout>
    {signedOut ? <Redirect to="/login"/> : <h2>Signed out...</h2>}
    </Layout>
    )
  }