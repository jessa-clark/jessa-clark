import "./App.css";
// import Layout from "./Components/Layout";
import Login from "./Screens/Login/Login.jsx";
import Home from "./Screens/Home/Home";
import Main from "./Containers/Main";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { login, register, verify, logout } from "./Services/users";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const verifyData = async () => {
      const userData = await verify();
      setCurrentUser(userData);
    };
    verifyData();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await login(formData);
    setCurrentUser(userData);
    history.push("/admin");
  };

  const handleSignUp = async (formData) => {
    const userData = await register(formData);
    setCurrentUser(userData);
    history.push("/admin");
  };

  const handleLogout = async () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    logout();
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/sign-up">
          <Admin handleSignUp={handleSignUp} />
        </Route>
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
          <Route path="/">
            <Main currentUser={currentUser} />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
