import "./App.css";
import Login from "./Screens/LogIn/LogIn"
import Home from "./Screens/Home/Home";
import Admin from './Screens/Admin/Admin'
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { verify } from "./Services/users";
import ProjectDetails from "./Screens/ProjectDetails/ProjectDetails";
import EditProject from "./Components/EditProject/EditProject";
import SignOut from "./Screens/SignOut/SignOut"
import CommentForm from "./Components/CommentForm/CommentForm";
import AllProjects from "./Screens/AllProjects/AllProjects";

function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      user ? setUser(user) : setUser(null)
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user}/>
        </Route>
        <Route exact path="/login">
          <Login user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/sign-out">
          <SignOut setUser={setUser}/>
        </Route>
        <Route exact path="/admin">
          <Admin user={user} setUser={setUser}/>
        </Route>
        <Route path="/projects">
          <AllProjects user={user}/>
        </Route>
        <Route exact path="/projects/edit/:id">
          <EditProject user={user} />
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetails user={user} />
        </Route>
        <Route exact path="/projects/:id/comments">
          <CommentForm user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
