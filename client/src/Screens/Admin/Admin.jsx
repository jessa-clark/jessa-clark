import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import CreateProject from "../CreateProject/CreateProject";
import Layout from "../../Components/Layout/Layout";
import SignUp from "../../Components/SignUp/SignUp";
import { verify } from "../../Services/users";
import "./Admin.css";

function Admin(props) {
  let { id } = useParams();
  const [userBool, setUserBool] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const userExists = await verify(id);
      setUserBool(userExists ? true : false);
    };
    checkUser();
  }, [id, userBool]);

  return !userBool && userBool !== null ? (
    <Redirect to="/" />
  ) : (
    <Layout>
      <div className="admin-container">
        <div className="body-container">
          <div className="admin-text">
            <h2>Admin Page</h2>
          </div>
          <div className="create-project">
            <CreateProject user={props.user} setUser={props.setUser} />
          </div>
        </div>
          <section className="sign-up">
            <div className="register-title"><h2>Register</h2></div>
            <div className="sign-up-component">
            <SignUp setUser={props.setUser} user={props.user} />
            </div>
          </section>
      </div>
    </Layout>
  );
}

export default Admin;
