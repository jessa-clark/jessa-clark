import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Login.css"

export default function LogIn(props) {
  const [returnUser, setReturnUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = returnUser;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReturnUser((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }


  return (
    <div>Log In</div>
  )
}

export default LogIn
<div>Log In</div>