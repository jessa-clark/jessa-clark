import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="dev-container">
        <Link to="/login">
        <p className="dev-name">Jessa Clark</p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
