import { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { register } from "../../Services/users";
import Layout from "../../Components/Layout/Layout";
import "./SignUp.css";

export default function Register(props) {
  const history = useHistory();
  const { setUser } = props;

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const addUser = async () => {
      const addedUser = await register(newUser);
      setUser(addedUser);
      history.push("/");
    };
    addUser();
  };

  return (
    <Layout>
      <section className="sign-up-screen-form">
        <h3>Register</h3>
        <form onSubmit={handleRegister}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={newUser.username}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={newUser.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={newUser.password}
            onChange={handleChange}
          />
          <button type="submit">
            <h3>Submit</h3>
          </button>
        </form>
      </section>
    </Layout>
  );
}
