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
import AllProjects from "./Screens/AllProjects/AllProjects";
import EditComment from "./Components/EditComment/EditComment";
import { getAllProjects } from "./Services/projects";


function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);

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
          <Admin user={user} setUser={setUser} projects={projects}/>
        </Route>
        <Route exact path="/projects">
          <AllProjects user={user} projects={projects}/>
        </Route>
        <Route exact path="/projects/edit/:id">
          <EditProject user={user} projects={projects}/>
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetails user={user} projects={projects} />
        </Route>
        <Route exact path="/projects/:project_id/comments/:id">
          <EditComment user={user} projects={projects}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;