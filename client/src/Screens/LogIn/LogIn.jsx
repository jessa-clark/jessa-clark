import { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../Services/users";
import Layout from "../../Components/Layout/Layout";
import "./LogIn.css";

export default function LogIn(props) {
  const history = useHistory();
  const { setUser } = props;
  // const [userExists, setUserExists] = useState(null)
  const [returnUser, setReturnUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReturnUser({ ...returnUser, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(returnUser);
    setUser(user);
    history.push("/admin");
  };

  return (
    <Layout>
      <div className="sign-in-screen-container">
        <section className="sign-in-screen-text">
          <h2>Welcome back, Jessa!</h2>
        </section>
        <section className="sign-in-screen-form">
          <form onSubmit={handleLogin}>
            <div className="user-password">
              <label className="user-name" htmlFor="username">
                Username:
              </label>
              <input
                className="user-input"
                type="username"
                name="username"
                id="username"
                value={returnUser.username}
                onChange={handleChange}
              />
              <label className="password" htmlFor="password">
                Password:
              </label>
              <input
                className="password-input"
                type="password"
                name="password"
                id="password"
                value={returnUser.password}
                onChange={handleChange}
              />
            </div>
          </form>
              <button className="sign-in-button" type="submit" onClick={handleLogin}>
                <h3>Log In</h3>
              </button>
        </section>
      </div>
    </Layout>
  );
}