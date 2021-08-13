import "./App.css";
import Login from "./Screens/LogIn/LogIn"
import Home from "./Screens/Home/Home";
import Admin from './Screens/Admin/Admin'
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { verify } from "./Services/users";
import ProjectDetails from "./Screens/ProjectDetails/ProjectDetails";

function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      setUser(user ? user : null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user}/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/projects">
          <ProjectDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
