import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import logo from "../Footer/logo.png"

function Footer() {
  return (
    <footer className="footer-container">
      <div className="logo">
        <Link to="/login">
        <img src={logo} alt="crystal ball logo"/>
        </Link>
      </div>
      <div className="dev-container">
        <p className="dev-name">©Jessa Clark 2021</p>
        <p className="dev-company">Majic Innovations, Inc.</p>
      </div>
    </footer>
  )
}

export default Footer
