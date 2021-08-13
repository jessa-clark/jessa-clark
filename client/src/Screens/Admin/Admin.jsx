import { useEffect, useState } from "react"
import { Link, Route, useParams } from "react-router-dom"
import CreateProject from "../../Components/CreateProject/CreateProject"
import EditProject from "../../Components/EditProject/EditProject"
import Layout from "../../Components/Layout/Layout"
import SignUp from "../../Components/SignUp/SignUp"
import { verify } from "../../Services/users"


function Admin(props) {
  let { id } = useParams();
  const [userBool, setUserBool] = useState(null)

  useEffect(() => {
    const checkUser = async () => {
      const userExists = await verify();
      setUserBool(userExists ? true : false);
  };
  checkUser();
}, [id, userBool]);

  return (
    <Layout>
    <div>
    <CreateProject />
    <SignUp setUser={props.setUser}/>
    </div>
    </Layout>
  )
}

export default Admin