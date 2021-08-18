import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../Services/users";
import Layout from "../../Components/Layout/Layout";

export default function SignOut () {
  const [signedOut, setSignedOut] = useState(false);
  const history =useHistory()
  useEffect(() => {
    const signOutUser = async () => {
      const signOutBool = await logout();
      setSignedOut(signOutBool);
    };
    signOutUser();
    history.pushState("/login")
  }, []);

  return (
    <Layout>
    </Layout>
    )
  }