import { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../Services/users";
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
      setNewUser(addedUser);
      history.push("/");
    };
    addUser();
  };

  return (
    <div className="register-container">
    
        <section className="sign-up-screen-form">
        <form onSubmit={handleRegister}>
          <div className="user-email-password">
          <label className="username" htmlFor="username">Username:</label>
          <input
            className="username-input"
            type="text"
            name="username"
            id="username"
            value={newUser.username}
            onChange={handleChange}
          />
          <label className="email" htmlFor="email">Email:</label>
          <input
          className="email-input"
            type="email"
            name="email"
            id="email"
            value={newUser.email}
            onChange={handleChange}
          />
          <label className="register-password" htmlFor="password">Password:</label>
          <input
          className="password-input"
            type="password"
            name="password"
            id="password"
            value={newUser.password}
            onChange={handleChange}
          />
          </div>
        </form>
          <button className="register-button" type="submit" onClick={handleRegister}>
            <h3>Submit</h3>
          </button>
      </section>
    </div>
  );
}
