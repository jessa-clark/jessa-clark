import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import "./SignUp.css";

export default function Register (props) {
  const history = useHistory();
  const { setUser } = props;

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) =>({ ...prevState, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const addUser = await register(newUser);
    setUser(addUser);
    history.push("/admin");
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
        <p>
          Already have an account?&nbsp;
          <Link to="/sign-in" className="sign-in-link">
            Sign in
          </Link>
        </p>
      </section>
    </Layout>
  );
};