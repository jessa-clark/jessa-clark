import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../Services/users';
import Layout from '../../Components/Layout/Layout'
import "./LogIn.css"

export default function LogIn(props) {
  const history = useHistory();
  const { setUser } = props;
  // const [userExists, setUserExists] = useState(null)
  const [returnUser, setReturnUser] = useState({
    username: '',
    password: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReturnUser({ ...returnUser, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(returnUser);
    setUser(user);
    history.push("/admin")
  };

  // useEffect(() => {
  //   const checkSigned = async () => {
  //     const valid = await verify();
  //     setUserExists(valid ? true : false);
  //   };
  //   checkSigned();
  // }, []);


  return (
    <Layout> 
      <section className="sign-in-screen-text">
        <h2>Welcome back, Jessa!</h2>
      </section>
      <section className="sign-in-screen-form">
        <h3>Sign In</h3>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            name="username"
            id="username"
            value={returnUser.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={returnUser.password}
            onChange={handleChange}
          />
          <button type="submit">
            <h3>Log In</h3>
          </button>  
        </form>
      </section>
    </Layout>
  )
}
